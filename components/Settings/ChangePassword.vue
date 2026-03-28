<template>
  <div class="w-3/5">
    <form>
      <h2 class="my-4 font-bold">Change Password</h2>
      <p class="w-[90%] text-sm text-primary-input mb-2">
        Choose a new password, something easy to remember
      </p>

      <div
        v-for="(password, index) in passwordSetting"
        :key="index"
        class="relative mt-4"
      >
        <!-- Label Goes here -->
        <label
          :for="password.id"
          class="pb-2 text-sm font-normal text-primary-black"
        >
          {{ password.title }}
        </label>
        <!-- Inputs  -->
        <input
          :id="password.id"
          :type="password.type"
          :placeholder="password.placeholder"
          class="h-[48px] w-full rounded-md border-none bg-primary-light px-10 text-sm text-[#212934] outline-none focus:border focus:bg-[#E1E7EC]"
        />

        <!-- Icons  -->
        <div class="icon-left absolute bottom-[19px] left-[14px]">
          <IconLock />
        </div>
        <div
          class="absolute right-[14px] bottom-4 cursor-pointer"
          @click="
            password.type === 'password'
              ? (password.type = 'text')
              : (password.type = 'password')
          "
        >
            <IconEyes :title="password.type  === 'password' ? 'open' : 'close'" />
        </div>
      </div>

      <!-- Button -->
      <div class="mt-8 flex w-[120px] items-center justify-center">
        <Button text="Save" :hasIcon="false" />
      </div>
    </form>
  </div>
</template>

<script setup> 
const loading  = ref(false)
const   passwordSetting = ref ([
        {
          id: "old-password",
          title: "Old Password",
          type: "password",
          placeholder: "Enter old password",
          focus: false,
        },
        {
          id: "new-password",
          title: "New Password",
          type: "password",
          placeholder: "Enter new password",
          focus: false,
        },
        {
          id: "confirm-password",
          title: "Confirm New Password",
          type: "password",
          placeholder: "Re-enter new  password",
          focus: false,
        },
      ],)
 
</script>

<style lang="scss" scoped></style>
