<template>
  <div class="bg-white rounded-xl main">
    <div class="flex h-16 w-full items-center justify-between px-6">
      <h3 class="font-bold text-[1.125rem]">Donor Transactions</h3>

      <div class="text-sm flex font-medium items-center justify-end">
        <span>Filter By</span>
      </div>
    </div>

    <Loading v-if="loading" />

    <div v-else>
      <table class="table-auto w-full">
        <thead class="w-full">
          <tr>
            <th class="bg-[#f7f7f7] text-base font-medium px-6 py-4" v-for="(header, index) in headers"
              :class="index == 0 && 'text-left'">
              {{ header.title }}
            </th>
          </tr>
        </thead>

        <tbody v-if="transactions.length > 0">
          <tr v-for="(transaction, index) in transactions" :key="transaction.reference" class="cursor-pointer"
            :class="index % 2 != 0 && 'bg-[#FCFCFE]'">
            <td>{{ transaction.reference }}</td>
            <td>{{ formatMoney(transaction.amount) }}</td>
            <td class="">{{ transaction.status }}</td>
            <td class="">{{ formatDate(transaction.createdAt) }}</td>
            <td>
              <span class="text-xs px-2 py-[.35rem] rounded-2xl "
                :class="transaction.transaction_type == 'approval' ? ' text-[#337138] bg-[#D1F7C4]' : ' text-[#FF4B55] bg-[#FFCDC7]'">
                {{ transaction.transaction_type }} </span>
            </td>

            <td>
              <Button :hasBorder="true" :hasIcon="false" text="Approve" class="text-[.875rem] !py-2 !px-3" />
            </td>

          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { formatDate, formatMoney } from "~/controllers/utils"
import { useToast } from '~/composables/useToast'
import { UpdateStatus } from '~/composables/useApi';

const headers = ref([
  { title: "Reference ID" },
  { title: "Amount" },
  { title: "Status" },
  { title: "Date" },
  { title: "Type" },
  // { title: "Campaign" },
  { title: "Actions" },
]);

const transactions: Ref<any[]> = ref([
]);

const swal = Swal.mixin({
  customClass: {
    confirmButton: 'bg-primary-green rounded-xl px-3.5 py-3 font-medium ml-2 text-white',
    // cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

const toast = useToast()
const route = useRoute()
const loading: Ref<boolean> = ref(false);

const { getDonorTransactions, approveRejectRequest } = useApi();


const fetchTransactions = async () => {
  loading.value = true;
  const { data, error } = await useAsyncData('all-donor-trans', () => getDonorTransactions(route.params.id))

  if (data)
    transactions.value = data.value.data.splice(0, 8)

  else if (error)
    toast.error('Error Fetching')

  loading.value = false;

}

onBeforeMount(() => {
  fetchTransactions()
})

const handleChangeStatus = (data: UpdateStatus) => {
  swal.fire({
    title: 'Proceed ?',
    // text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, proceed!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      // swal.fire(
      //   'Deleted!',
      //   'Your file has been deleted.',
      //   'success'
      // )

      handleUpdateStatus(data)
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      // swal.fire(
      //   'Cancelled',
      //   'Your imaginary file is safe :)',
      //   'error'
      // )
    }
  })
}

const handleUpdateStatus = async (data: UpdateStatus) => {
  const { data: res, error } = await useAsyncData(() => approveRejectRequest(route.params.id, data))

  if (data) {
    toast.success('success')
    fetchTransactions()
  }

  else if (error)
    toast.error('Error Fetching')

  loading.value = false;
}

</script>

<style lang="scss" scoped>
.main {
  box-shadow: 0px 3.17px 19.8125px rgba(174, 174, 192, 0.15);
}

table>tbody>tr>td {
  @apply align-middle text-center mx-auto text-base px-6 py-4;
}

table>tbody>tr>td:first-child {
  @apply text-left;
}
</style>
