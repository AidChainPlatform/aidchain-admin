<template>
  <div class="relative">
    <div
      v-for="(auth, index) in authentications"
      :key="index"
      class="my-5 rounded-lg bg-white p-5 ring-1 ring-primary-green"
    >  
      <div class="flex w-full items-center justify-between mb-4">
        <div class="w-4/5">
          <h2 class="font-bold mb-2">{{ auth.name }}</h2>
          <p class="text-sm text-primary-gray">{{ auth.description }}</p>
        </div>
         
        <Toggle/>
      </div>
 
      <div 
        class="mt-4 flex w-full items-center justify-between rounded-3xl bg-primary-light px-4 pt-3 pb-2 text-sm text-primary-gray"
      >
        <p class="flex items-center space-x-2">
         <Checkbox/>
         <span>    Added {{ auth.date }} </span>
         
        </p>

        <p class="flex items-center text-sm font-medium text-primary-black">
          <span class="mr-2"> {{ auth.message }} :</span>
          <span class="mr-2   uppercase">{{ auth.securityKey }}</span>
            <IconEyes  title="open" />
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const  authentications = ref([
    {
      name: "Google Authenticator",
      id: "google-auth",
      description:"Use the Google Authenticator app to generate a one time security codes",
      date: "15 Dec, 2021",
      message: "Back up code",
      securityKey: "kakjdndjsnjns",
      click: "click-function", 
      showModal: false,
      showSecurityDetails: false,
      addedSecurity: false,
    },
    {
      name: "Text Message (SMS)",
      id: "text-message",
      description: "Use the Google Authenticator app to generate a one time security codes",
      date: "20 July, 2021",
      message: "Binded phone number",
      securityKey: "081354647373",
      click: "click-function", 
      showModal: false,
      showSecurityDetails: false,
      addedSecurity: true,
    },
  ],) 
</script>

<style></style>
