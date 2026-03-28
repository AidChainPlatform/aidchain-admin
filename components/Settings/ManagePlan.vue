<template>
  <div>
    <div v-if="modalId == `edit_plan`">
      <Modal
        title="Edit plan"
        id="edit_plan"
        size="lg"
        @close="modalId = ''"
      >
        <SettingsNewPlan action="edit" />
      </Modal>
    </div>
 
    <div class="mt-6 py-4 grid grid-cols-8 gap-x-8 w-full">
      <div class="col-span-5 grid grid-cols-2 gap-6">
        <CardPlan
          v-for="plan in plans"
          :key="plan.id"
          :plan="plan"
          @editPlan="editPlan"
        />
      </div>

      <div class="col-span-3 ">  
        <form @submit.prevent="sendData" class=" flex flex-col space-y-4 h-auto  card-shadow p-6 rounded-xl  ">
        <span class=" block text-[#2A2E33] mb-4 py-1 font-medium">Fees</span>
 
  <div class=" ">
          <label
            for="max_fee"
            class="font-medium block text-base mb-2"
          >
    Max transaction fee
          </label>
          <input
            type="number"
            id="max_fee"
            placeholder="$0.00"
            v-model="transfer.max_fee"
            class="text-base p-4 rounded-md font-normal w-full outline-none ring-0  bg-[#F5F6F8] "
          />
        </div>

  <div class=" ">
          <label
            for="charges_rate"
            class="font-medium block text-base mb-2"
          >
Transaction charge rate
          </label>
          <input
            type="number"
            id="charges_rate"
            placeholder="$0.00"
            v-model="transfer.charges_rate"
            class="text-base p-4 rounded-md  bg-[#F5F6F8] font-normal w-full outline-none ring-0"
          />
        </div>

  <div class="save-btn flex pb-3 mt-8">
      <Button
        type="submit"
        :has-icon="false"
        text="Save"
        custom-styles="height:50px; "
        class="px-8" 
      />
    </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"> 
const modalId = ref('') 
const plans = ref([
  {
    id: "1",
    title: "Tier 2",
    pricing: 4000
  },
  {
    id: "2",
    title: "Tier 2",
    pricing: 500
  },
  {
    id: "3",
    title: "Tier 2",
    pricing: 453
  },
])
const transfer = ref({
max_fee: 0,
charges_rate: 0
})


// funtions
const editPlan = (plan: any) => {
  // console.log(plan)
  modalId.value = "edit_plan"  
} 
const sendData = () => {
  // console.log(transfer.value)
}

</script>

<style scoped> 
.card-shadow {
  box-shadow: 0px 3.17px 19.8125px rgba(174, 174, 192, 0.15);
} 
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
 </style>
 
