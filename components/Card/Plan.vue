<template>
  <div class="flex flex-col space-y-3 p-6 card-shadow rounded-lg">
    <h3 class="w-4/5 text-[#2A2E33] font-bold">{{ plan.title }}</h3>

    <p class="flex w-4/5 space-x-1 items-baseline">
      <span class="uppercase font-normal text-sm text-primary-gray"> usd </span>

      <span class="font-medium text-[#2A2E33]">
        {{ plan.pricing }}
      </span>

      <span class="font-normal text-sm text-primary-gray"> / yr </span>
    </p>

    <Button
      :hasBorder="true"
      text="Edit Plan"
      @click="editPlan"
      class="!py-3.5 !mt-5 !font-bold"
    />
  </div>
</template>
 
<script setup lang="ts"> 
const props = defineProps({
  plan: {
    type: Object,
    default: { id: "", title: "", pricing: 0 }
  }
})

// emits
const emit = defineEmits(['editPlan'])
const editPlan = () => {
  emit('editPlan', props.plan)
}
</script>

<style lang="scss" scoped>
.card-shadow {
  box-shadow: 0px 3.17px 19.8125px rgba(174, 174, 192, 0.15);
}
</style>
