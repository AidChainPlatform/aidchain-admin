<template>
  <div class="mt-8 w-[60%] main rounded bg-white p-8 shadow">
    <div
      class="flex w-full items-center justify-center space-x-2 mb-5 rounded-xl bg-primary-light"
    >
      <Button
        v-for="(settingsOption, index) in tabOptions"
        :key="settingsOption"
        :text="settingsOption.title"
        class="font-medium"
        :customStyles="
          selectedTabId == settingsOption.id
            ? 'background-color:#7C8DB5; color:#F5F6F8'
            : 'background-color:#F5F6F8; color:#646A86'
        "
        @click="selectedTabId = settingsOption.id"
      />
    </div>

    <div v-if="selectedTabId == 'password'">
      <SettingsChangePassword />
    </div>

    <div v-if="selectedTabId == '2fa'">
      <SettingsTwoFAuthentication />
    </div>
  </div>
</template>

<script setup lang="ts"> 
const selectedTabId = ref('password')
const tabOptions = ref([
  { title: "Password", id: "password" },
  { title: "2-Factor Authentication", id: "2fa" }
])
</script>



<style lang="scss" scoped>
.main {
  box-shadow: 0px 3.17px 19.8125px rgba(174, 174, 192, 0.15);
}
</style>
