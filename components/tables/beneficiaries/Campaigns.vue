<template>
  <div class="bg-white rounded-xl main">
    <div class="flex h-16 w-full items-center justify-between px-6">
      <h3 class="font-bold text-[1.125rem]">Campaigns</h3>

      <div class="text-sm flex font-medium items-center justify-end">
        <span>Filter By</span>
      </div>
    </div>

    <div>
      <table class="table-auto w-full">
        <thead class="w-full">
          <tr>
            <th
              class="bg-[#f7f7f7] text-base font-medium px-6 py-4"
              v-for="(header, index) in headers"
            >
              {{ header.title }}
            </th>
            <th></th>
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
            <nuxt-link :to="`beneficiaries/${ organization.id}`"> 
            {{ organization.name }}
            </nuxt-link>
            </td>

            <td>{{ organization.total }}</td>
            <td>{{ organization.spent }}</td>
            <td class="">{{ organization.created }}</td>
            <td> 
            <span class="text-xs px-2 py-[.35rem] rounded-2xl capitalize" :class="organization.status == 'active' ? 'text-[#337138] bg-[#D1F7C4]' : 'text-[#3D435E] bg-[#E7EBF3]'"> {{ organization.status }} </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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

const organizations = ref([
  { 
    name: "Janet Woodpecker", 
    total: "$40,888",
    spent: "$40,888",
    created: "12 Dec, 2020",
    status: "active",
  },
  { 
    name: "Janet Woodpecker", 
    total: "$40,888",
    spent: "$40,888",
    created: "12 Dec, 2020",
    status: "inactive",
  }, 
  { 
    name: "Janet Woodpecker", 
    total: "$40,888",
    spent: "$40,888",
    created: "12 Dec, 2020",
    status: "inactive",
  },
   
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
