<template>
  <div class="bg-white rounded-xl main">
    <div class="flex h-16 w-full items-center justify-between px-6">
      <h3 class="font-bold text-[1.125rem]">Campaigns</h3>

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

        <tbody>
          <tr v-for="(campaign, index) in campaigns" :key="index" class="cursor-pointer"
            :class="index % 2 != 0 && 'bg-[#FCFCFE]'" @click.stop="$router.push(`/campaigns/${campaign.id}`)">
            <td>
              <nuxt-link :to="`campaigns/${campaign.id}`">
                {{ campaign.title }}
              </nuxt-link>
            </td>
            <td>{{ formatMoney(campaign.total_amount) }} </td>
            <td>{{ formatMoney(campaign.total_amount_spent) }}</td>
            <td class="">{{ formatDate(campaign.createdAt) }}</td>
            <td>
              <span class="text-xs px-2 py-[.35rem] rounded-2xl capitalize"
                :class="campaign.status == 'active' ? 'text-[#337138] bg-[#D1F7C4]' : 'text-[#3D435E] bg-[#E7EBF3]'"> {{
                  campaign.status }} </span>
            </td>

            <td>
              <Button :hasBorder="true" :hasIcon="false" :text="campaign.status == 'active' ? 'Deactivate' : 'Activate'"
                :isGray="campaign.status == 'active'" :disabled="campaign.status == 'active'"
                class="text-[.875rem] !py-2 !px-3" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { formatMoney, formatDate } from "~/controllers/utils"

const headers = ref([
  { title: "Name" },
  { title: "Total Amount" },
  { title: "Amount spent" },
  { title: "Date created" },
  { title: "Status" },
  { title: "Actions" },
]);

const campaigns: Ref<any[]> = ref([]);

const loading: Ref<boolean> = ref(false);

const { getAllCampaigns } = useApi()

const fetchCampigns = async () => {
  loading.value = true;
  const { data, error } = await useAsyncData('all-campaigns', () => getAllCampaigns())

  if (data)
    campaigns.value = data.value.data.splice(0, 8)

  else if (error)
    toast.error('Error Fetching')

  loading.value = false;
}

onBeforeMount(() => {
  fetchCampigns()
})
</script>

<style lang="scss" scoped>
.main {
  box-shadow: 0px 3.17px 19.8125px rgba(174, 174, 192, 0.15);
}

table>tbody>tr>td {
  @apply align-middle text-center text-base px-6 py-4;
}

table>tbody>tr>td:first-child {
  @apply text-left;
}
</style>
