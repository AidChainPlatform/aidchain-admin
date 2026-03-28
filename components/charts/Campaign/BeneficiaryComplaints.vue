<template>
  <div class="box-shadow   m-4 rounded-lg bg-white">
    <!-- Grid for filter  -->
    <div class="flex w-full justify-between p-4">
      <h1 class="font-bold">Beneficiary Complaints</h1>

      <div class="text-sm">
        <span>Filter By</span>
        <span>
          <select
            v-model="selected"
            name="filter"
            class="w-32 border-none text-sm font-normal outline-none"
            @change="Options = filters[selected][0]"
          >
            <option
              v-for="(option, filterBy) in filters"
              id="filter"
              :key="filterBy"
              :value="filterBy"
              selected="Gender"
              class=""
            >
              {{ filterBy }}
            </option>
          </select>
          <select
            v-model="Options"
            name="filter-options"
            class="w-32 border-none text-sm font-normal outline-none"
          >
            <option
              v-for="(option, index) in filters[selected]"
              id="options"
              :key="index"
              :value="option"
              :selected="index === 0"
              class=""
            >
              {{ option }}
            </option>
          </select>
        </span>
      </div>
    </div>

    <!-- campaign types field -->
    <div class="m-4 grid w-[50%] grid-cols-3">
      <h2
        v-for="(type, index) in complaintTypes"
        :key="index"
        class="mx-1 cursor-pointer border-b-2 p-1 text-center"
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

    <h2 class="flex h-16 w-full items-center bg-[#F7F7F7] p-3 font-bold">
      Beneficiaries
    </h2>
    <div
      v-for="(item, index) in complaints.Beneficiaries"
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
        <h2> {{ item.first_name }} {{ item.last_name }}</h2>
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

<script setup lang="ts">
const selected=ref( "Gender")
const complaintTypes= (["All", "Resolved", "Unresolved"])
const selectedType= ref("All")
const filters= ref( {
  Gender: ["Male", "Female"],
  Age: ["20+", "30-60", "60-100"],
})
const  Options=ref( "")

defineProps(['complaints'])


// onBeforeMount(() => {filters.value[selected.value][0]}) 
</script>

<style lang="scss" scoped>
.box-shadow {
  box-shadow: 0px 3.17px 19.8125px rgba(174, 174, 192, 0.15);
}
</style>


