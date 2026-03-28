<template>
  <div>
     
   {{ filtersList }}
   <br>
    <input v-model="inputVal" />
   <br>
    <button @click="addValueToFilterList(inputVal)">Add +</button>
    </div>   
</template>

<script setup lang="ts"> 
import { useFiltersStore } from '~/store/filters'
import { storeToRefs } from 'pinia'

const inputVal = ref('')

const filtersStore = useFiltersStore()
const { addValueToFilterList } = filtersStore
const { filtersList } = storeToRefs(filtersStore) 
</script>
  