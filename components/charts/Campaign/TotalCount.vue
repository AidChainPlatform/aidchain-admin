<template>
  <div class="box-shadow  flex flex-col w-full justify-around rounded-lg bg-white p-4">
    <h2 class="font-bold text-sm">
      Total Count
    </h2>

    <div class="mb-1">
      <div
        class="flex h-8 w-fit items-center justify-around space-x-4 rounded-2xl bg-button-light-gray text-primary-gray mb-1 px-2">
        <IconPeople :width="16" :height="16" />
        <p class="text-sm"> Beneficiaries </p>
      </div>

      <h2 class="ml-2 mt-2 font-medium">
        {{ currentCampaign?.beneficiaries_count }}
      </h2>

      <div
        class="flex h-8 w-fit items-center justify-around space-x-4 rounded-2xl bg-button-light-gray text-primary-gray mb-1 px-2">
        <IconVendors :width="16" :height="16" />
        <p class="text-sm"> Vendors </p>
      </div>

      <h2 class="ml-2 mt-2 font-medium">
        {{ currentCampaign?.vendor_count }}
      </h2>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['currentCampaign'])
</script>

<style lang="scss" scoped>
.box-shadow {
  box-shadow: 0px 3.17px 19.8125px rgba(174, 174, 192, 0.15);
}
</style>


