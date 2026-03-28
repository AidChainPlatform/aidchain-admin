<template>
  <div class="main-box charts m-4 rounded-lg bg-white">
    <!-- Grid for filter  -->
    <div class="flex w-full justify-between p-4">
      <h3 class="font-bold text-[1.125rem]">Beneficiary Complaints</h3>
     
      <div class="text-sm flex font-medium items-center justify-end">
        <span>Filter By</span>
      </div>
    </div>

    <!-- campaign types field -->
    <div class="m-4 grid w-[50%] grid-cols-3">
      <h2
        v-for="(type, index) in complaintTypes"
        :key="index"
        class="mx-1 cursor-pointer capitalize border-b-2 p-1 text-center"
        :class="
          type === selectedType
            ? 'border-primary-green font-bold text-primary-green'
            : 'border-white'
        "
        @click="selectedType = type"
      >
        {{ type }}
      </h2>
    </div>

    <h2 class="flex w-full items-center bg-[#F7F7F7] py-5 px-8 font-bold">
      Beneficiaries
    </h2>

    <div
      v-for="(complain, index) in complaints"
      :key="index"
      class="my-1 flex h-16 w-full items-center justify-between p-3 text-sm font-medium"
      :class="index % 2 !== 0 ? 'bg-[#FCFCFE]' : 'bg-white'"
    >
      <div class="flex items-center gap-x-2">
        <img
          src="~/assets/images/profile-picture.svg"
          alt="complain"
          class="block"
        />
        <h2>{{ complain.name }}</h2>
      </div>

      <div class="w-44">
        <Button
          text="View Complaint"
          customStyles="background:white; color: #17CE89; border: 1px solid #17CE89; padding-top: 8px; padding-bottom: 8px; border-radius: 4px"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
 
     const selected = ref ( "Gender")
     const complaintTypes = ref ( ["all", "resolved", "unresolved"])
    const selectedType = ref ( "all")
     const filters = ref( {
        Gender: ["Male", "Female"]
      })
     const options = ref ( "")
  const complaints= ref(  [
        {
          name: "James Clear",
        },
        {
          name: "Adams Smith",
        },
        {
          name: "Samson Realgreat",
        },
        {
          name: "Loveth Judith",
        },
        {
          name: "Abel Madonna",
        },
      ])   
 
</script>

<style lang="scss" scoped>
.main-box {
  width: calc(42vw + 32px);
}
</style>
