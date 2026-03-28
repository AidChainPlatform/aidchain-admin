<template>
  <div>
    <div v-if="modalId == `new_plan`">
      <Modal title="Add new plan" id="new_plan" size="lg" @close="modalId = ''">
        <SettingsNewPlan action="new" />
      </Modal>
    </div>

    <!--  -->
    <div class="flex justify-between items-center p-4">
      <div class="flex space-x-4 items-center">
        <span v-for="(option, index) in settingsOptions" :key="index"
          class="mx-1 cursor-pointer capitalize border-b-2 p-1 text-[1.125rem] text-center" :class="option.id === selectedOptionId
            ? 'border-primary-green font-bold text-primary-green px-4'
            : 'border-white font-medium text-primary-gray'
            " @click="toggleTab(option.id)">
          {{ option.title }}
        </span>
      </div>

      <!-- Manage Plan -->
      <div v-if="selectedOptionId !== 'password_and_2fa'">
        <Button v-if="plansAndBillingPage == 'index'" text="Manage Plans" :hasIcon="true" iconName="settings"
          class="!py-3.5 !px-5" @click="plansAndBillingPage = 'manage_plan'" />

        <!-- New Plan -->
        <Button v-else text="New Plan" :hasIcon="true" iconName="add" class="!py-3.5 !px-5"
          @click="modalId = 'new_plan'" />
      </div>
    </div>

    <!--  -->
    <div v-if="selectedOptionId == 'password_and_2fa'">
      <SettingsPasswordAndTwoFAuth />
    </div>

    <div v-else>
      <div v-if="plansAndBillingPage == 'index'">
        <!-- Privacy holder -->
        <div class="mt-3 mb-2">
          <PartialsPrivacyHolder :hasCreateButton="false" :hasExportButton="false" />
        </div>

        <SettingsPlansAndBillings />
      </div>

      <div v-else>
        <SettingsManagePlan />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const modalId = ref('')
const selectedOptionId = ref("password_and_2fa")
const settingsOptions = ref([
  { title: "Password & 2FA", id: "password_and_2fa" },
  { title: "Plans & Billing", id: "plans_and_billings" }
])
const plansAndBillingPage = ref("index")

const toggleTab = (tabId: string) => {
  selectedOptionId.value = tabId

  if (tabId == 'plans_and_billings')
    return plansAndBillingPage.value = 'index'
} 
</script>
 
<style scoped >
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

