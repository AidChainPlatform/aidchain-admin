<template>
  <!-- <form @submit.prevent="enableGoogleTwoFa" class="mt-4 px-4"> -->
  <form class="mt-4 px-4">
    <p class="text-center -mt-4 font-poppins text-sm mb-8">
      Follow the guide below to set up Google authenticator <br />
      for additional layer of security.
    </p>

    <!-- Authentication Area -->
    <div class="grid grid-cols-2 mb-4">
      <!-- QR Code  -->
      <div class="flex flex-col justify-center items-center px-3">
        <div
          class="p-3 qrCode rounded-md h-[10rem] w-[10rem] border flex justify-center items-center"
        >
          <img
            src="~/assets/images/profile-picture.svg"
            class="h-full w-full bg-no-repeat bg-contain"
            alt="qrCode"
          />
        </div>

        <div
          class="mt-3 qrCode-guide rounded-sm border-2 border-opacity-20 border-[#e0e0e0] p-2 pr-0"
        >
          <p class="text-left text-xs primary-blue poppins">
            Use Google Authenticator app to scan this QR code,
            <strong>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en&gl=US"
                class="text-primary-green no-underline"
              >
                Download
              </a>
            </strong>
            the app here if you don’t already have it.
          </p>
        </div>
      </div>

      <!-- Authentication Code -->
      <div class="flex flex-col px-3">
        <div
          class="secret-code flex border rounded-md border-primary-gray text-xs border-dashed justify-between items-center mb-3"
        >
          <div
            class="flex pr-14 pl-3 bg-[#fafafa] py-2 flex-1 h-full w-full my-auto text-primary-gray text-sm truncate font-medium"
          >
            htevssjdsndsd aaewweweweweeweweweee
          </div>

          <div
            class="!h-full p-2 cursor-pointer bg-[#dfe1ea] rounded-tr-md rounded-br-md flex justify-center items-center text-truncate"
          >
            <IconCopy />
          </div>
        </div>

        <div>
          <p
            class="text-left mb-5 text-sm text-primary-gray poppins input-text"
          >
            If you have any problem with scanning the QR code, enter this code
            manually into the app
          </p>
        </div>

        <div>
          <span class="primary-blue mb-2 poppins block text-sm">
            Verification code from app:
          </span>

          <div class="w-3/5 ml-16">
            <PinCode @getInput="getInput" />
          </div>
        </div>

        <div class="mt-8 mb-4 w-full">
          <Button
            type="submit"
            :has-icon="false"
            text="Enable 2FA"
            custom-styles="height:40px;  width: 100%"
          />
          <!-- :loading="loading"
            :disabled="payload.otp.length !== 6" -->
        </div>
      </div>
    </div>
  </form>
</template>


<script setup lang="ts"> 
const getInput = (inputValue: any) => {
  // console.log(inputValue)
}
</script>
<style scoped>
.secret-code {
  letter-spacing: 2px;
}
</style>
