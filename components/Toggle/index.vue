<template>
  <div>
    <span
      class="toggle-wrapper"
      :class="disabled && 'disabled'"
      role="checkbox"
      tabindex="0"
      @keydown.space.prevent="toggle"
      @click="toggle"
      :aria-checked="value.toString()"
    >
      <span class="toggle-background" :class="value ? 'gold-mid' : 'gray-lighter'" />
      <span class="toggle-indicator" :style="value ? 'transform: translateX(14px);' : 'transform: translateX(-2px);'" />
    </span>
  </div>
</template>

<script setup>
const props = defineProps({  
  value: {
    type: Boolean,
    required: true,
  },
  disabled: {
    type: Boolean,
  }
})
const emit = defineEmits(['toggle']) 
const toggle = () => {
  if (props.disabled) return;  
  emit('toggle', !props.value)
}
 </script>

<style scoped>
.gold-mid {
  background-color: #17ce89;
}

.gray-lighter {
  background-color: #7c8db5;
}

.toggle-wrapper {
  display: inline-block;
  position: relative;
  cursor: pointer;
  width: 34px;
  height: 18px;
  border-radius: 9999px;
}
.toggle-wrapper:focus {
  outline: 0;
}
.toggle-wrapper.disabled {
  cursor: not-allowed;
}
.toggle-wrapper.disabled:focus {
  cursor: not-allowed;
}

.toggle-background {
  display: inline-block;
  border-radius: 9999px;
  height: 100%;
  width: 100%;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.4s ease;
}

.toggle-indicator {
  position: absolute;
  height: 14px;
  width: 14px;
  left: 4px;
  bottom: 2px;
  background-color: #ffffff;
  border-radius: 9999px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease;
}
.disabled {
  cursor: not-allowed !important;
}
</style>
