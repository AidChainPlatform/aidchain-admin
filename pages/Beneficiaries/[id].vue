<template>
  <div>
    <BreadCrumb/>
    
    <div
      class="flex h-16 w-full items-center border-b pb-6 justify-between px-6 pb-"
    >
      <h3 class="font-bold text-4xl">Hakeem Mensah</h3>

      <div class="">
        <Button
          :hasBorder="false"
          :hasIcon="false"
          text="Update Info"
          class="text-base !font-normal !px-6"
        />
      </div>
    </div>

    <div class="grid grid-cols-4 gap-x-6 mt-6">
      <div class="col-span-3 space-y-8">
        <div class="grid grid-cols-3 gap-4 items-center">
          <!--  -->
          <div
            class="flex items-start col-span-1 box-shadow rounded-xl py-4 px-5"
          >
            <span class="p-4 bg-[#5DDAB4] rounded-2xl">
              <IconSideBar :isActive="true" title="vendors" />
            </span>

            <div class="ml-4">
              <p class="text-primary-gray mb-2">Total Recieved</p>
              <h4 class="text-xl font-medium mb-3.5">$32,842,000</h4>

              <span class="text-[#24B29F]"> 2.5% </span>
            </div>
          </div>
          <!--  -->
          <div
            class="flex items-start col-span-1 box-shadow rounded-xl py-4 px-5"
          >
            <span class="p-4 bg-[#FF7976] rounded-2xl">
              <IconSideBar :isActive="true" title="vendors" />
            </span>

            <div class="ml-4">
              <p class="text-primary-gray mb-2">Total Spent</p>
              <h4 class="text-xl font-medium mb-3.5">$24,842,000</h4>

              <span class="text-[#24B29F]"> 2.5% </span>
            </div>
          </div>
          <!--  -->
          <div
            class="flex items-start col-span-1 box-shadow rounded-xl py-4 px-5"
          >
            <span class="p-4 bg-[#9694FF] rounded-2xl">
              <IconSideBar :isActive="true" title="beneficiaries" />
            </span>

            <div class="ml-4">
              <p class="text-primary-gray mb-2">Total Remaining</p>
              <h4 class="text-xl font-medium mb-3.5">$32,842,000</h4>

              <span class="text-[#FF725E]"> -1.5% </span>
            </div>
          </div>
        </div>

        <TablesBeneficiariesCampaigns />
        <TablesBeneficiariesComplaints />
      </div>

      <!--  -->
      <div class="col-span-1">
        <div class="flex-col space-y-4 box-shadow h-auto rounded-xl py-6 px-5">
          <h3 class="text-xl flex items-center font-bold pt-2">
            Personal Details
          </h3>

          <section
            class="py-8 px-6 border-[.1px] rounded-xl border-primary-green"
          >
            <div class="h-[7.5rem] w-[7.5rem] rounded-full mx-auto">
              <img
                src="~/assets/images/profile-picture.svg"
                alt="logo"
                class="h-full w-full"
              />
            </div>

            <div class="text-sm font-normal mt-4 mb-6">
              <h5 class="text-lg text-center font-bold mb-1">Hakeem Mensah</h5>
              <p class="text-base text-center text-primary-gray font-regular">
                ID: 00005
              </p>
            </div>

            <div class="space-y-4 px-2">
              <div class="spce-y-1 flex-col">
                <span class="font-medium block"> Phone number: </span>
                <span class="font-normal"> +2348132205304 </span>
              </div>
              <div class="spce-y-1 flex-col">
                <span class="font-medium block"> Email address: </span>
                <span class="font-normal"> Karlkeller@gmail.com </span>
              </div>
              <div class="spce-y-1 flex-col">
                <span class="font-medium block"> Created: </span>
                <span class="font-normal"> Saturday,12 Dec, 2020 </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"> </script>
 
<style lang="scss" scoped>
.box-shadow {
  box-shadow: 0px 3.17px 19.8125px rgba(174, 174, 192, 0.15);
}
</style>
