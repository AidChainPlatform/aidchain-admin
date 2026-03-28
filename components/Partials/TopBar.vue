<template>
  <div class="w-full flex justify-between items-center px-8 py-[1.125rem]">
    <h3 class="text-[1.75rem] font-bold capitalize">{{ activePage }}</h3>

    <div class="h-9 w-9 rounded-full">
      <img
        src="~/assets/images/profile-picture.svg"
        alt="logo"
        class="h-full w-full"
      />
    </div>
  </div>
</template>

<script setup lang="ts">  
const route = useRoute()
const activePage = computed(() => {
  const routeArray = route.path.split("/")
  return routeArray[1]
}) 
</script>

<style lang="scss" scoped></style>
