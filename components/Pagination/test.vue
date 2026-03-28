<template>
  <div> <Pagination :numOfItemsPerPage="numOfItemsPerPage" :currentPageNum="currentPageNum" :totalNumOfItems="totalNumOfItems" @updatePage="updatePage" /> </div>
   
</template>

<script setup lang="ts">
  const numOfItemsPerPage = ref(20)
  const currentPageNum = ref(1)
  const totalNumOfItems = ref(500) 

  const updatePage = (action) => { 
    // console.log(action) 
    if (action == "next") return currentPageNum.value += 1 
    if (action == "prev") return currentPageNum.value -= 1 
  }
</script>
