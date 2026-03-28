<template>
  <div class="bg-white rounded-xl main">
    <div class="flex h-16 w-full items-center justify-between px-6 mb-3">
      <h3 class="font-bold text-[1.125rem]">Beneficiary Complaints</h3>
    </div>

     <div class="flex items-center space-x-3 px-6">
      <span
        v-for="(tab, index) in tabs"
        :key="index"
        class="cursor-pointer px-2 pb-3 capitalize text-[1.125rem] text-center"
        :class="
          tab.title === activeTab
            ? 'border-primary-green font-bold  border-b-2 text-primary-green'
            : 'font-normal'
        "
        @click="activeTab = tab.title"
      >
        {{ tab.title }}
      </span>
    </div>

    <div v-if="organizations.length >= 1 ">
      <table class="table-auto w-full">
        <thead class="w-full">
          <tr>
            <th
              class="bg-[#f7f7f7] text-base font-medium px-6 py-4"
              v-for="(header, index) in headers"
            >
              {{ header.title }}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(organization, index) in organizations"
            :key="index"
            class="cursor-pointer"
            :class="index % 2 != 0 && 'bg-[#FCFCFE]'"
          >
            <td class="title"> 
            {{ organization.name }}
            </td>

            <td>{{ organization.email }}</td>
            <td>{{ organization.amount }}</td>
            <td class="">{{ organization.campaigns }}</td>
            <td> 
            <span class="text-xs px-2 py-[.35rem] rounded-2xl capitalize" :class="organization.status == 'active' ? 'text-[#337138] bg-[#D1F7C4]' : 'text-[#3D435E] bg-[#E7EBF3]'"> {{ organization.status }} </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else class="text-normal flex justify-center items-center w-full py-20"> No complaints </div>
  </div>
</template>

<script setup>
const headers = ref([
  { title: "Name" },
  { title: "Total" },
  { title: "Spent" },
  { title: "Created" },
  { title: "Status" }, 
]);
const organizations = ref([]);
const activeTab = ref("all");
const tabs = ref([
  { title: "all"},
  { title: "resolved"},
  { title: "unresolved"},
]);
</script>

<style lang="scss" scoped>
.main {
  box-shadow: 0px 3.17px 19.8125px rgba(174, 174, 192, 0.15);
}
table > tbody > tr> td  {
  @apply align-middle  text-center text-base px-6 py-4 ;
}
table > tbody > tr> td.title  {
  @apply   text-left   ;
}
</style>
