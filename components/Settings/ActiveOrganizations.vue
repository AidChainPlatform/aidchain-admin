<template>
  <div class="bg-white rounded-xl main">
    <div class="flex h-16 w-full items-center justify-between px-6">
      <h3 class="font-bold text-[1.125rem]">Organizations</h3>

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
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(organization, index) in organizations"
            :key="index"
            class="cursor-pointer"
            :class="index % 2 != 0 && 'bg-[#FCFCFE]'"
          >
            <td>
            <nuxt-link :to="`ngos/${ organization.id}`"> 
            {{ organization.name }}
            </nuxt-link>
            </td>
            <td>{{ organization.email }}</td>
            <td>{{ organization.disbursed }}</td>
            <td class="">{{ organization.beneficiaries }}</td>
            <td> 
            <span class="text-xs px-2 py-[.35rem] rounded-2xl capitalize" :class="organization.status == 'active' ? 'text-[#337138] bg-[#D1F7C4]' : 'text-[#3D435E] bg-[#E7EBF3]'"> {{ organization.status }} </span>
            </td>

           

            <td> 
                <Button
                  :hasBorder="true"
                  :hasIcon="false" 
                  :text="organization.status == 'active' ? 'Deactivate' : 'Activate'"
                  :isGray="organization.status == 'active'"
                  :disabled="organization.status == 'active'"
                  class="text-[.875rem] !py-2 !px-3"
                /> 
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
  { title: "Email address" },
  { title: "Disbursed" },
  { title: "Beneficiaries" },
  { title: "Status" },
  { title: "Actions" },
]);

const organizations = ref([
  {
    id: "rf",
    name: "daniel",
    email: "test@gmail.com",
    disbursed: "40,888",
    beneficiaries: "5,077",
    status: "active",
  },
  {
    id: "d2",
    name: "dansweiel",
    email: "test@gmail.com",
    disbursed: "40,888",
    beneficiaries: "5,077",
    status: "inactive",
  },
  {
    id: "3rt",
    name: "daniel",
    email: "test@gmail.com",
    disbursed: "40,888",
    beneficiaries: "5,077",
    status: "active",
  },
  {
    id: "e4",
    name: "dansweiel",
    email: "test@gmail.com",
    disbursed: "40,888",
    beneficiaries: "5,077",
    status: "inactive",
  },
  {
    id: "5r",
    name: "daniel",
    email: "test@gmail.com",
    disbursed: "40,888",
    beneficiaries: "5,077",
    status: "active",
  },
  {
    id: "6r",
    name: "dansweiel",
    email: "test@gmail.com",
    disbursed: "40,888",
    beneficiaries: "5,077",
    status: "inactive",
  },
  {
    id: "7hmj",
    name: "daniel",
    email: "test@gmail.com",
    disbursed: "40,888",
    beneficiaries: "5,077",
    status: "inactive",
  }, 
]);
</script>

<style lang="scss" scoped>
.main {
  box-shadow: 0px 3.17px 19.8125px rgba(174, 174, 192, 0.15);
}
table >tbody > tr> td  {
  @apply align-middle   text-base px-6 py-4 ;
}
</style>
