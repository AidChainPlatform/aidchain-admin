<template>
  <div class="mt-4 px-4">
    <p class="text-center -mt-4 font-poppins text-sm mb-8">
      Follow the guide below to set up Google authenticator <br />
      for additional layer of security.
    </p>

    <div>
      <label for="phone" class=""> Enter Phone Number </label>

      <!-- Input box -->
      <form
        @submit.prevent="sendCode"
        class="relative flex w-full justify-between space-x-3"
      >
        <div class="bg-[#F5F6F8] w-full rounded-md flex-1">
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Phone Number"
            class="rounded-md w-full border-none py-4 pl-12 bg-transparent text-sm text-[#646A86] outline-none focus:border focus:bg-[#E1E7EC]"
          />

          <span
            class="absolute left-0 top-0 pl-4 pr-2 flex justify-center items-center h-full"
          >
            <IconPhone />
          </span>
        </div>

        <div>
          <Button text="Send code" :hasBorder="true" />
        </div>
      </form>
    </div>

    <div class="mt-8 w-full">
      <span class="block mb-2">Verification code from SMS:</span>

      <div class="w-3/5 ml-6">
        <PinCode @getInput="getInput" />
      </div>
    </div>

    <div class="mt-8 mb-4 w-full">
      <Button text="Enable 2FA" @click="addAuthentication" />
    </div>
  </div>
</template>


<script setup lang="ts">  
const addAuthentication = (id: string) => {
  // console.log('test')
}
const sendCode = () => {
  // console.log('sendCode')
}
const getInput = (inputValue: any) => {
  // console.log(inputValue)
}
</script>
 

 
<style lang="scss" scoped></style>
