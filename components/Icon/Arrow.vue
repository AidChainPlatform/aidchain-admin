<template>
  <span>
    <span v-if="title == 'right'"> 
      <svg
      :width="width"
      :height="height"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="12.9116" cy="12" rx="11.9897" ry="12" />
    <path
      d="M9.91406 16.2866L13.6608 12.003L9.91406 7.71943L10.6634 6.006L15.9089 12.003L10.6634 18L9.91406 16.2866Z"
      fill="#7C8DB5"
    />
  </svg>
    </span>

    <span v-if="title == 'left'">
      <svg
      :width="width"
      :height="height"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="12.9321" cy="12" rx="11.9897" ry="12" />
    <path
      d="M15.9294 16.2866L12.1827 12.003L15.9294 7.71943L15.1801 6.006L9.93459 12.003L15.1801 18L15.9294 16.2866Z"
      fill="#7C8DB5"
    />
  </svg>
    </span> 
  </span>
</template>

<script   setup >
const props = defineProps({
   title: {
      type: String,
    },
    width: {
      type: Number,
      default: 25,
    },
    height: {
      type: Number,
      default: 24,
    }, 
}) 
</script>
