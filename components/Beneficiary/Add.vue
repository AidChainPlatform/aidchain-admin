<template>
  <div>
    <form @submit.prevent="$emit('addBeneficiary', payload)" class="mt-4 px-3 pb-2"> 
    <!-- Name Section here  here -->
    <div class="grid grid-cols-2 gap-4 mb-4"> 
      <div class="col-span-1">
        <label for="first-name" class="font-medium block text-base mb-2"> First Name</label>
        <input
          type="text" 
          id="first-name"
          placeholder="John"
          v-model.trim="payload.first_name" 
          class="text-base p-4 rounded-md font-normal w-full outline-none ring-0 bg-[#FAFAFA]"
          required
        />
      </div>

      <div class="col-span-1">
        <label for="last-name" class="font-medium block text-base mb-2"> Last Name</label>
        <input
          type="text" 
          id="last-name"
          placeholder="John"
          v-model.trim="payload.last_name" 
          class="text-base p-4 rounded-md font-normal w-full outline-none ring-0 bg-[#FAFAFA]"
          required
        />
      </div>
 
      <!--  Email here -->
      <div class="col-span-1">
          <label for="email" class="font-medium block text-base mb-2"> Email</label>
        <input
          type="text" 
          id="email"
          placeholder="test@gmail.com"
          v-model.trim="payload.email" 
          class="text-base p-4 rounded-md font-normal w-full outline-none ring-0 bg-[#FAFAFA]"
          required
        /> 
    </div>

     <div class="col-span-1">
        <label for="phone-number" class="font-medium block text-base mb-2"> Phone Number </label>
        <input
          type="text" 
          id="phone-number"
          v-model.trim="payload.phone" 
          class="text-base p-4 rounded-md font-normal w-full outline-none ring-0 bg-[#FAFAFA]"
          required
        />
      </div>
    </div> 

    <div class="save-btn flex pb-3 mt-8">
      <Button
        type="submit"
        :has-icon="false"
        :text="isSubmitting ? 'Submitting...': 'Save' "
        custom-styles="height:50px; "
        class="px-8" 
      />
    </div>
  </form>
  </div>
</template>

<script setup lang="ts"> 
const payload = ref({
first_name: "",
last_name: "",
email: "", 
phone: "",
})

defineProps(['isSubmitting'])

// const addBeneficiary = () => { $emit('addBeneficiary') }
</script>
 