<template>
  <div>
    <BreadCrumb />

    <div class="flex h-16 w-full items-center border-b pb-6 justify-between px-4">
      <h3 class="font-bold text-4xl">{{ currentCampaign?.title || '' }}</h3>
    </div>

    <div class="grid grid-cols-3 gap-x-4 mt-6">
      <div class="col-span-2 flex flex-col space-y-4">
        <div class="flex space-x-4">
          <ChartsCampaignTotalCount class="flex-1" :currentCampaign="currentCampaign" />
          <!-- <ChartsCampaignBeneficiaryAgeGroup class="flex-1" /> -->
          <!-- <ChartsCampaignBeneficiaryAgeGroup class="flex-1"/>    -->
        </div>

        <div class="flex space-x-4">
          <ChartsCampaignBeneficiaryMaritalStatus class="flex-1" :currentCampaign="currentCampaign" />
          <ChartsCampaignBeneficiaryByLocation class="flex-1" />
          <!-- <ChartsCampaignBeneficiaryAgeGroup class="flex-1"/>    -->
        </div>

        <div class="flex space-x-4">
          <ChartsCampaignBeneficiaryBalances class="flex-1" />
          <ChartsCampaignVendorTransactionPerBeneficiary class="flex-1" />
          <!-- <ChartsCampaignBeneficiaryAgeGroup class="flex-1"/>    -->
        </div>

        <div class="flex">
          <ChartsCampaignBeneficiaryComplaints class="flex-1" :complaints="complaints" />
        </div>
      </div>

      <!--  -->
      <div class="col-span-1 space-y-4">
        <div class="flex-col box-shadow rounded-xl space-y-4 py-4 px-5">
          <h3 class="text-xl flex items-center font-bold pb-5 pt-4 border-b space-x-2">
            <IconSideBar title="vendors" />
            <span> DanbabaWorld </span>
          </h3>

          <section class="py-5 px-6 border-[.1px] rounded-xl border-primary-green">
            <h5 class="pb-2 border-b mb-2 w-full font-semibold text-sm">
              About
            </h5>

            <p class="text-sm font-normal leading-6">
              This write up is about the current campaing.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              molestie nisl commodo nulla. Diam eget massa magna diam adipiscing
              porttitor nullam volutpat egestas. Enim in sapien auctor a amet.
              Scelerisque vitae porta dictum egestas gravida elementum arcu.
            </p>
          </section>

          <section class="py-5 text-sm px-6 border-[.1px] rounded-xl border-primary-green">
            <h5 class="pb-2 border-b w-full font-semibold mb-3.5">Contact</h5>

            <div class="flex-col space-y-3.5 text-sm font-medium">
              <div class="flex justify-between items-center pb-2 border-b">
                <span> Phone </span>
                <span> +234 813 220 5304 </span>
              </div>
              <div class="flex justify-between items-center pb-2 border-b">
                <span> Email </span>
                <span> example@gmail.com </span>
              </div>
              <div class="flex justify-between items-center pb-2 border-b">
                <span> Website </span>
                <span class="text-[#2F80ED]"> https://blueorange.org </span>
              </div>
            </div>
          </section>

          <section class="py-5 px-6 space-y-3.5 text-sm font-medium border-[.1px] rounded-xl border-primary-green">
            <div class="flex justify-between items-center pb-2 border-b">
              <span> Location: </span>
              <span class="font-normal"> Ikeja, Lagos, Nigeria </span>
            </div>
            <div class="flex justify-between items-center pb-2 border-b">
              <span> Created: </span>
              <span class="font-normal"> 12 Dec, 2020 </span>
            </div>
          </section>
        </div>

        <TablesCampaignsSummary :currentCampaign="currentCampaign" />
        <TablesCampaignsVendorsList :allCampaignVendors="allCampaignVendors" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '~/composables/useToast'

// interface Campaign {
//   OrganisationId: number | string
// }

const currentCampaign = ref({})
const allCampaignVendors = ref([])
const currentVendor = ref({})
const route = useRoute()
const complaints = ref({})

// const loading: Ref<boolean> = ref(false);
const { getCampaign, getAllVendors, getCampaignComplaints, getCampaignVendors, getSingleNGO } = useApi();
const toast = useToast()


onBeforeMount(() => {
  fetchCampaign()
})

const fetchCampaign = async () => {  // loading.value = true;
  const { data, error } = await useAsyncData(() => getCampaign(route.params.id))

  if (data) {
    currentCampaign.value = data.value.data
    const { data: allVendors } = await useAsyncData(() => getCampaignVendors(data.value.data.OrganisationId, data.value.data.id))
    const { data: campaignComplaints } = await useAsyncData(() => getCampaignComplaints(data.value.data.OrganisationId, data.value.data.id))
    // const { data: curNgo } = await useAsyncData(() => getSingleNGO(data.value.data.OrganisationId))

    if (allVendors) {
      allCampaignVendors.value = allVendors.value.data
      // console.table('ALLVENDORS', allVendors.value.data)
    }

    // if (curNgo) {
    //   // allCampaignVendors.value = allVendors.value.data
    //   // console.table('ALLVENDORS', curNgo.value.data)
    //   console.table('ALLngo', curNgo.value.data)
    // }

    if (campaignComplaints) {
      complaints.value = campaignComplaints.value.data
      // console.table('ALLngo', campaignComplaints.value.data)

    }
  }

  else if (error)
    toast.error('Error Fetching')

  // if (allVendors) currentCampaign.value.find((cur)=> {

  // })
  // loading.value = false;
}

</script>

 
 
<style lang="scss" scoped>
.box-shadow {
  box-shadow: 0px 3.17px 19.8125px rgba(174, 174, 192, 0.15);
}
</style>
