<template>
  <button
    :type="type"
    class="flex items-center px-3"
    :class="{ hasBorder: hasBorder, isGray: isGray }"
    :style="customStyles"
    :disabled="disabled"
    @click="clickBtn"
  >
      <IconSpinner v-if="loading"  class="animate-spin"/>

    <!-- button icons -->
    <span v-if="hasIcon">
      <IconExport v-if="iconName == 'export'" class="pr-1" />
      <IconAdd v-if="iconName == 'add'" />
      <IconSettings v-if="iconName == 'settings'" />
    </span>

    <span :class="{ 'ml-2': hasIcon }" :style="{ fontSize: fontSize }">
      {{ loading ? "" : text }}
    </span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "button",
  },
  hasIcon: {
    type: Boolean,
    default: true,
  },
  fill: {
    type: String,
    default: "white",
  },
  hasBorder: {
    type: Boolean,
    default: false,
  },
  customStyles: {
    type: String,
    default: "",
  },
  hasEye: {
    type: Boolean,
    default: false,
  },
  csv: {
    type: Boolean,
    default: false,
  },
  greenCsv: {
    type: Boolean,
    default: false,
  },
  isGreen: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  isGray: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  fontSize: {
    type: String,
    default: "0.875rem",
  },
  iconName: {
    type: String,
    default: "",
  },
});

// emits
const emit = defineEmits(["click"]);
const clickBtn = () => {
  emit("click");
};
</script>

<style lang="scss" scoped>
button {
  @apply flex w-[inherit] items-center justify-center rounded-lg  bg-primary-green  py-3 text-base font-semibold text-white;
  box-shadow: 0px 2px 4px rgba(23, 206, 137, 0.07);
  font-family: "Poppins", sans-serif;

  &.hasBorder {
    @apply border border-primary-green bg-inherit font-medium text-primary-green;
  }

  &:disabled {
    @apply cursor-not-allowed opacity-50;
  }

  &.isGray {
    @apply border border-solid border-[#7c8db5] text-[#7c8db5];
  }

  &.isGray.hasBorder {
    @apply border border-solid border-[#7c8db5] text-[#7c8db5];
  }

  span {
    @apply block text-sm;
  }
}
</style>
