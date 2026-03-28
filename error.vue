<template>
  <section class="w-full h-[100vh] flex justify-center items-center flex-col">
    <SvgNotFound />

    <!-- Text here -->
    <div class="mt-2 text-center block w-[35%]">
      <h1 class="text-[1.5rem] font-bold text-[#222222]">
        Oops... page not found.
      </h1>

      <p class="m-auto pt-2 w-full text-[#646a86] font-medium opacity-70">
        The page you’re looking for might have been removed, temporarily
        unavailable or never existed. We’re sad you had to see this and hope you
        never see it again.
      </p>
    </div>

    <!-- Button Here -->
    <div class="mt-4">
      <Button
        text="Back to Dashboard"
        class="px-6"
        :hasIcon="false"
        :customStyles="`border-radius: 5px; height: 3.25rem;`"
        @click="handleError"
      />
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  error: Object,
});
const handleError = () => clearError({ redirect: "/ngos" });
</script>
