<template>
  <div class="bg-white rounded-xl main">
    <div class="flex h-16 w-full items-center justify-between px-6">
      <h3 class="font-bold text-[1.125rem]">Vendor Transactions</h3>

      <div class="text-sm flex font-medium items-center justify-end">
        <span>Filter By</span>
      </div>
    </div>

    <Loading v-if="loading" />

    <div v-else>
      <table class="table-auto w-full mx-auto">
        <thead class="w-full">
          <tr>
            <th class="bg-[#f7f7f7] text-base font-medium px-6 py-4" v-for="(header, index) in headers"
              :class="index == 0 && 'text-left'">
              {{ header.title }}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(transaction, index) in transactions" :key="transaction.uuid" class="cursor-pointer"
            :class="index % 2 != 0 && 'bg-[#FCFCFE]'">
            <td>{{ transaction.reference }}</td>
            <td>{{ formatMoney(transaction.amount) }}</td>
            <td>{{ transaction.beneficiary.first_name }} {{ transaction.beneficiary.last_name }}</td>
            <td>{{ formatDate(transaction.createdAt) }}</td>

            <td class="text-right">
              <IconEllipsis />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatDate, formatMoney } from "~/controllers/utils"
import { useToast } from '~/composables/useToast'

const headers = ref([
  { title: "Reference ID" },
  { title: "Amount" },
  { title: "Beneficiary" },
  { title: "Date" },
  { title: "Actions" },
]);

const transactions: Ref<any[]> = ref([]);
const { getVendorTransactions } = useApi();
const loading: Ref<boolean> = ref(false);
const route = useRoute()
const toast = useToast()

const fetchAllTransactions = async () => {
  loading.value = true;

  const { data, error } = await useAsyncData(() => getVendorTransactions(route.params.id as (string | number)))

  if (data) {
    loading.value = false;

  }

  else if (error)
    toast.error('Something went wrong')

  transactions.value = data.value?.data.splice(0, 8)

}

onBeforeMount(() => {
  fetchAllTransactions()
})


</script>

<style lang="scss" scoped>
.main {
  box-shadow: 0px 3.17px 19.8125px rgba(174, 174, 192, 0.15);
}

table>tbody>tr>td {
  @apply align-middle text-center mx-auto text-base p-6;
}

table>tbody>tr>td:first-child {
  @apply text-left mx-auto;
}
</style>
