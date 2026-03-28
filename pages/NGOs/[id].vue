<template>
  <div>
    <BreadCrumb />

    <div class="flex h-16 w-full items-center border-b pb-6 justify-between px-4">
      <h3 class="font-bold text-4xl">Blue Orange Foundation</h3>

      <div class=" ">
        <Button :hasBorder="false" :hasIcon="false" text="Update Info" class="text-base !font-normal !px-6" />
      </div>
    </div>

    <div class="mt-4 grid grid-cols-4 gap-4 p-4 items-center">
      <!--  -->
      <div class="flex items-start col-span-1 box-shadow rounded-xl py-4 px-5">
        <span class="p-4 bg-[#5DDAB4] rounded-2xl">
          <IconSideBar :isActive="true" title="vendors" />
        </span>

        <div class="ml-4">
          <p class="text-primary-gray mb-2">Recieved</p>
          <h4 class="text-xl font-medium mb-3.5">$32,842,000</h4>

          <span class="text-[#24B29F]"> 2.5% </span>
        </div>
      </div>
      <!--  -->
      <div class="flex items-start col-span-1 box-shadow rounded-xl py-4 px-5">
        <span class="p-4 bg-[#FF7976] rounded-2xl">
          <IconSideBar :isActive="true" title="vendors" />
        </span>

        <div class="ml-4">
          <p class="text-primary-gray mb-2">Disbursed</p>
          <h4 class="text-xl font-medium mb-3.5">$24,842,000</h4>

          <span class="text-[#24B29F]"> 2.5% </span>
        </div>
      </div>
      <!--  -->
      <div class="flex items-start col-span-1 box-shadow rounded-xl py-4 px-5">
        <span class="p-4 bg-[#9694FF] rounded-2xl">
          <IconSideBar :isActive="true" title="beneficiaries" />
        </span>

        <div class="ml-4">
          <p class="text-primary-gray mb-2">Beneficiaries</p>
          <h4 class="text-xl font-medium mb-3.5">$32,842,000</h4>

          <span class="text-[#24B29F]"> 2.5% </span>
        </div>
      </div>
      <!--  -->
      <div class="flex items-start col-span-1 box-shadow rounded-xl py-4 px-5">
        <span class="p-4 bg-[#57CAEB] rounded-2xl">
          <IconSideBar :isActive="true" title="vendors" />
        </span>

        <div class="ml-4">
          <p class="text-primary-gray mb-2">vendors</p>
          <h4 class="text-xl font-medium mb-3.5">$32,842,000</h4>

          <span class="text-[#24B29F]"> 2.5% </span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-x-4 mt-6">
      <div class="col-span-2 flex flex-col space-y-4">
        <div class="flex space-x-4">
          <ChartsNgosBeneficiaryMaritalStatus class="flex-1" />
          <ChartsNgosBeneficiaryByLocation class="flex-1" />
        </div>

        <div class="flex space-x-4">
          <ChartsNgosBeneficiaryBalances class="flex-1" />
          <ChartsNgosVendorTransactionPerBeneficiary class="flex-1" />
        </div>
      </div>

      <!--  -->
      <div class="col-span-1 flex-col space-y-4 box-shadow rounded-xl py-4 px-5">
        <h3 class="text-xl flex items-center font-bold pb-5 pt-4 border-b space-x-2">
          <IconSideBar title="vendors" />
          <span> Blue Orange Foundation </span>
        </h3>

        <section class="py-5 px-6 border-[.1px] rounded-xl border-primary-green">
          <h5 class="pb-2 border-b mb-2 w-full font-semibold text-sm">About</h5>

          <p class="text-sm font-normal leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
            molestie nisl commodo nulla. Diam eget massa magna diam adipiscing
            porttitor nullam volutpat egestas. Enim in sapien auctor a amet.
            Scelerisque vitae porta dictum egestas gravida elementum arcu.
          </p>
        </section>

        <section class="py-5 text-sm px-6 border-[.1px] rounded-xl border-primary-green">
          <h5 class="pb-2 border-b w-full font-semibold mb-3.5">Contact</h5>

          <div class="flex-col space-y-3.5 text-sm font-medium">
            <!--  -->
            <div class="flex justify-between items-center pb-2 border-b">
              <span> Phone </span>
              <span> +234 813 220 5304 </span>
            </div>
            <!--  -->
            <div class="flex justify-between items-center pb-2 border-b">
              <span> Email </span>
              <span> example@gmail.com </span>
            </div>
            <!--  -->
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
          <!--  -->
          <div class="flex justify-between items-center pb-2 border-b">
            <span> Created: </span>
            <span class="font-normal"> 12 Dec, 2020 </span>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '~/composables/useToast'

const loading: Ref<boolean> = ref(false);
const route = useRoute()  
const toast = useToast()

const fetchNGO = async () => {
  loading.value = true;
  const { getBeneficiaryTotal } = useApi();

  const { data, error } = await useAsyncData(() => getBeneficiaryTotal(route.params.id))
  if (data) {
    // organizations.value = reponse.data }
  }

  else if (error)
    toast.error('Something went wrong')

  loading.value = false


}

onBeforeMount(() => {
  // console.log('test' ,route.params)
  fetchNGO()
})
</script>


<style lang="scss" scoped> .box-shadow {
   box-shadow: 0px 3.17px 19.8125px rgba(174, 174, 192, 0.15);
 }
</style>
