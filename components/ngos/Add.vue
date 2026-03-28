<template>
  <div>
    <form class="mt-4 px-3 pb-2" @submit.prevent="addOrganization">
      <!-- Name Section here  here -->
      <div class="flex flex-col space-y-4">
        <div class="">
          <label
            for="organization-name"
            class="font-medium block text-base mb-2"
          >
            Name of organization
          </label>
          <input
            id="organization-name"
            v-model="organization.name"
            type="text"
            placeholder="Enter Organization"
            class="text-base p-4 rounded-md font-normal w-full outline-none ring-0 bg-[#FAFAFA]"
          />
        </div>

        <div class="">
          <label for="email" class="font-medium block text-base mb-2">
            Email
          </label>
          <input
            id="email"
            v-model="organization.email"
            type="email"
            placeholder="example@gmail.com"
            class="text-base p-4 rounded-md font-normal w-full outline-none ring-0 bg-[#FAFAFA]"
          />
        </div>

        <div class="">
          <label for="website" class="font-medium block text-base mb-2">
            website
          </label>
          <input
            id="website"
            v-model="organization.website"
            type="text"
            placeholder="https://www.example.com"
            class="text-base p-4 rounded-md font-normal w-full outline-none ring-0 bg-[#FAFAFA]"
          />
        </div>

        <div class="">
          <label for="location" class="font-medium block text-base mb-2">
            location</label
          >
          <input
            id="location"
            v-model="organization.location"
            type="text"
            placeholder=""
            class="text-base p-4 rounded-md font-normal w-full outline-none ring-0 bg-[#FAFAFA]"
          />
        </div>

        <div class="">
          <label for="phone-number" class="font-medium block text-base mb-2">
            Phone Number
          </label>
          <input
            id="phone-number"
            v-model="organization.phone_number"
            type="text"
            placeholder="(759) 012-3985"
            class="text-base p-4 rounded-md font-normal w-full outline-none ring-0 bg-[#FAFAFA]"
          />
        </div>
      </div>

      <div class="save-btn flex pb-3 mt-8">
        <Button
          type="submit"
          :has-icon="false"
          text="Create"
          custom-styles="height:50px; "
          class="px-8"
        />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useApi } from '~/composables/useApi'; // 1️⃣ Import useApi
import { useToast } from 'vue-toastification'; // 2️⃣ Import toast

const { addNGO } = useApi();  // 3️⃣ Get addNGO function
const toast = useToast();     // 4️⃣ Setup toast

// 5️⃣ Your organization model
const organization = ref({
  name: '',
  email: '',
  website: '',
  location: '',
  phone_number: '',
});

// 6️⃣ Final working function to submit the organization
const addOrganization = async () => {
  try {
    const payload = { ...organization.value };
    const response = await addNGO(payload); // 👈 Send data to backend

    toast.success('Organization created successfully! 🎉'); // Show success message

    // Optional: Reset form
    organization.value = {
      name: '',
      email: '',
      website: '',
      location: '',
      phone_number: '',
    };

    // Optional: Close modal or reload NGOs list if needed
  } catch (error) {
    toast.error('Failed to create organization. 🚨'); // Show error message
    console.error(error);
  }
};
</script>