<template>
  <div>
    <form @submit.prevent="submitForm" class="mt-4 px-2 pb-2"> 
    <!-- Name Section here  here -->
    <div class="flex flex-col space-y-4">  
     <div class="grid grid-cols-2 rounded-xl gap-x-2 gap-y-4 mb-6 p-4 bg-[#FCFCFE] border border-dotted">
     <div class="">
        <span class="font-normal block text-sm text-primary-gray mb-1.5"> CAMPAIGN NAME </span>
        <span class="font-medium block text-base"> War Against Covid </span>
      </div>

     <div class="">
        <span class="font-normal block text-sm text-primary-gray mb-1.5"> AMOUNT DONATED </span>
        <span class="font-medium block text-base"> USDT 5,000 </span>
      </div>
    
     <div class="">
        <span class="font-normal block text-sm text-primary-gray mb-1.5"> TOTAL BENEFICIARIES </span>
        <span class="font-medium block text-base"> 284 </span>
      </div>

     <div class="">
        <span class="font-normal block text-sm text-primary-gray mb-1.5"> DONATION DATE </span>
        <span class="font-medium block text-base"> Aug 03, 2022 </span>
      </div>
      </div>

       <div class="mb-8">
        <span class="font-medium block text-base mb-2"> Reasons </span>
        <p class="font-medium  p-3.5  text-sm mb-2 border-2 border-primary-gray rounded-lg bg-[#F5F6F8]"> 
        Lorem ipsum dolor sit amet consectetur. Massa malesuada vitae 
        fames amet morbi est pulvinar id. Eget proin commodo phasellus 
        feugiat proin lacus pretium in. Malesuada fermentum ante lectus 
        vulputate rhoncus porttitor. Ac orci et odio dignissim eu morbi
         venenatis.
         </p>
      </div>
    </div> 

    <div class=" pb-3 mt-8">
      <Button
        type="submit"
        :has-icon="false"
        text="Confirm withdrawal approval"
        custom-styles="height:50px; "
        class="px-8 block !w-full mb-5" 
      />

      <Button 
        :has-icon="false"
        text="Cancel"
        custom-styles="height:50px; "
        :hasBorder="true"
        class="px-8 !w-full" 
        @click="close"
      />
    </div>
  </form>
  </div>
</template>

<script setup lang="ts">  
const submitForm = () => {
  // console.log('test')
}
const emit = defineEmits(['close'])
const close = () => { emit("close") } 
</script>
 