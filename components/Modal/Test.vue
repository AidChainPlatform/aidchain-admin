<template>
  <div>
    <div  v-if="modalId == 'text'"> 
      <Modal  @close="closeModal" size="md" title="text erer" id="text">
        text
      </Modal>
    </div> 

    <div  v-if="modalId == 'test'">
      <Modal  @close="closeModal" size="xl" title="jhdjhdajadkaj" id="ererrr">
        text
      </Modal>
    </div>  

      <Button @click="openModal('text')" text="open text Modal"/>   <br>
      <Button @click="openModal('test')" text=" open test Modal"/>
  </div>
</template>

<script setup lang="ts"> 
const modalId = ref('')
const closeModal = (id) => {  
  modalId.value = ""
}
const openModal = (id) => {  
  modalId.value = id
}
</script>
