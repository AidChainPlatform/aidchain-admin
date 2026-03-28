<template>
  <div>
    <form @submit.prevent="$emit('addVendor', payload)" class="mt-4 px-3 pb-2">
      <!-- Name Section here  here -->
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div class="col-span-1">
          <label for="first-name" class="font-medium block text-base mb-2"> First Name</label>
          <input type="text" id="first-name" placeholder="John" v-model.trim="payload.first_name"
            class="text-base p-4 rounded-md font-normal w-full outline-none ring-0 bg-[#FAFAFA]" required />
        </div>

        <div class="col-span-1">
          <label for="last-name" class="font-medium block text-base mb-2"> Last Name</label>
          <input type="text" id="last-name" placeholder="John" v-model.trim="payload.last_name"
            class="text-base p-4 rounded-md font-normal w-full outline-none ring-0 bg-[#FAFAFA]" required />
        </div>

        <!--  Email here -->
        <div class="col-span-1">
          <label for="email" class="font-medium block text-base mb-2"> Email</label>
          <input type="text" id="email" placeholder="test@gmail.com" v-model.trim="payload.email"
            class="text-base p-4 rounded-md font-normal w-full outline-none ring-0 bg-[#FAFAFA]" required />
        </div>
      </div>

      <!-- Store Section here  here -->
      <div class="grid grid-cols-2 gap-4 mt-8 mb-4">
        <div class="col-span-1">
        <label for="store-name" class="font-medium block text-base mb-2"> Store Name </label>
        <input
          type="text" 
          id="store-name"
          v-model.trim="payload.store_name" 
          class="text-base p-4 rounded-md font-normal w-full outline-none ring-0 bg-[#FAFAFA]"
          required
        />
      </div>

        <div class="col-span-1">
          <label for="store-location" class="font-medium block text-base mb-2"> Store Location </label>
          <input type="text" id="store-location" v-model.trim="payload.location"
            class="text-base p-4 rounded-md font-normal w-full outline-none ring-0 bg-[#FAFAFA]" required />
        </div>


        <div class="col-span-1">
          <label for="store-address" class="font-medium block text-base mb-2"> Address </label>
          <input type="text" id="store-address" v-model.trim="payload.address"
            class="text-base p-4 rounded-md font-normal w-full outline-none ring-0 bg-[#FAFAFA]" required />
        </div>

        <div class="col-span-1">
          <label for="phone-number" class="font-medium block text-base mb-2"> Phone Number </label>
          <input type="text" id="phone-number" v-model.trim="payload.phone"
            class="text-base p-4 rounded-md font-normal w-full outline-none ring-0 bg-[#FAFAFA]" required />
        </div>
      </div>

      <div class="save-btn flex pb-3 mt-8">
        <Button type="submit" :has-icon="false" custom-styles="height:50px; "
          :text="isSubmitting ? 'Submitting...' : 'Save'" class="px-8" />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const payload = ref({
  first_name: "Billa",
  last_name: "Yusuf",
  email: "bilalyusuff@yahoo.com",
  location: "Gwarinpa",
  store_name: "The Store Name",
  address: "2 gwarinpa sotre",
  phone: "09087654342",
})

// const addVendor = () => {
//   console.log(payload.value)
// }

defineProps(['isSubmitting'])

</script>
 