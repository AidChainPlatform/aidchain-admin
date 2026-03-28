<template>
  <div class="flex justify-end items-center px-4 pt-2 pb-4">
    <span class="text"> Showing </span>
    <span
      class="text"
      :class="
        currentPageNum === totalNumOfPages && remainder === 1 ? 'd-none' : ''
      "
    >
      {{ Math.floor((currentPageNum - 1) * numOfItemsPerPage) + 1 }}
    </span>
    <span
      class="text"
      :class="
        currentPageNum === totalNumOfPages && remainder === 1 ? 'd-none' : ''
      "
    >  -  </span>

    <span class="text">
      <span v-if="currentPageNum === totalNumOfPages">
        <!--  -->
        <span v-if="remainder === 0">
          {{
            Math.floor((currentPageNum + 1) * numOfItemsPerPage) -
            numOfItemsPerPage
          }}
        </span>

        <!--  -->
        <span v-if="remainder > 0">
          {{ Math.floor((currentPageNum - 1) * numOfItemsPerPage) + remainder }}
        </span>
      </span>

      <span v-if="currentPageNum !== totalNumOfPages" class="inline-flex">
        {{
          Math.floor((currentPageNum + 1) * numOfItemsPerPage) -
          numOfItemsPerPage
        }}
      </span>
    </span>

    <span class="text"> of </span>

    <span class="text"> {{ totalNumOfItems }} </span>

    <!-- action buttons  -->
    <!-- previous button -->
    <span
      class="mx-2 p-0.5 cursor-pointer rounded-full"
      :class="btnToDisable === 'prev' && 'disabled'"
      title="Previous Page"
      @click="btnToDisable !== 'prev' ? clickHandler('prev') : null"
    >
      <IconArrow title="left"/>
    </span>

    <!-- next button -->
    <span
      class="mx-2 p-0.5 cursor-pointer rounded-full"
      :class="btnToDisable === 'next' && 'disabled'"
      title="Next Page"
      @click="btnToDisable !== 'next' ? clickHandler('next') : null"
    >
      <IconArrow title="right"/>
    </span>
  </div>
</template>

<script setup >
  const props = defineProps({  
    numOfItemsPerPage: {
      type: Number,
      required: true,
    },
    currentPageNum: {
      type: Number,
      required: true,
    },
    totalNumOfItems: {
      type: Number,
      required: true,
    },
  })

  const emit = defineEmits(['updatePage'])

  // computed
  const remainder = computed(() => {
    return props.totalNumOfItems % props.numOfItemsPerPage;
  })
  const totalNumOfPages = computed(() => {
    const numOfPages = Math.floor(
      (props.totalNumOfItems - remainder.value) / props.numOfItemsPerPage
    );
    if (remainder.value < 1) return numOfPages;
    if (remainder.value >= 1) return numOfPages + 1;
  })
  const btnToDisable = computed(() => {
    if (props.currentPageNum <= 1) return "prev";
    if (props.currentPageNum >= totalNumOfPages.value) return "next";
  })
 
  //  functions
   const clickHandler  =  (action) =>  {
      emit("updatePage", action);
    } 
</script>

<style scoped>
.text {
  @apply font-medium my-auto mx-0.5 text-[0.8rem] select-none; 
}
.icon {
  cursor: pointer;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  border-radius: 50%;
}
.disabled {
  @apply cursor-not-allowed opacity-50;
}
</style>
