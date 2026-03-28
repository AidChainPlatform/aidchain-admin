<template>
  <div>
    <svg
      :height="height"
      :width="width"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 7V8H8V14H7V8H1V7H7V1H8V7H14Z" fill="white" stroke="white" />
    </svg>
  </div>
</template>
  
<script   setup lang="ts">
const props = defineProps({
  width: {
    type: Number,
    default: 15,
  },
  height: {
    type: Number,
    default: 15,
  },
},) 
</script>

<style lang="scss" scoped></style>
