<template>
  <div class="bg-white rounded-xl main">
    <div class="flex h-16 w-full items-center justify-between px-6">
      <h3 class="font-bold text-[1.125rem]">Vendors</h3>

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
              :class="index === 0 && 'text-left'">
              {{ header.title }}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(vendor, index) in vendors" :key="vendor.email" class="cursor-pointer"
            :class="index % 2 != 0 && 'bg-[#FCFCFE]'" @click.stop="$router.push(`/vendors/${vendor.id}`)">
            <td>{{ vendor.first_name }} {{ vendor.last_name }}</td>
            <td>{{ vendor.email }}</td>
            <td>{{ formatMoney(vendor.total_amount_sold) }}</td>
            <td class="">{{ vendor.total_ngos }} / {{ vendor.total_campaign }} </td>
            <td>
              <span class="text-xs px-2 py-[.35rem] rounded-2xl capitalize"
                :class="vendor?.status === 'activated' ? 'text-[#337138] bg-[#D1F7C4]' : 'text-[#3D435E] bg-[#E7EBF3]'"> {{
                  vendor.status || 'pending' }} </span>
            </td>


            <td
              @click.stop="$emit('handleChangeStatus', { userId: vendor.id, status: vendor?.status === 'activated' ? 'suspended' : 'activated' })">
              <Button :hasBorder="true" :hasIcon="false" :text="vendor.status === 'activated' ? 'Deactivate' : 'Activate'"
                :isGray="vendor?.status === 'activated'" class="text-[.875rem] !py-2 !px-3" />
            </td>

          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { formatMoney } from "~/controllers/utils"

defineProps({
  vendors: {
    type: Array<any>,
    default: []
  },
  headers: {
    type: Array<any>,
    default: []
  },
  loading: Boolean
})
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
