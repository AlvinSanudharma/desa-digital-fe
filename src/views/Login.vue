<script setup>
import Input from "@/components/ui/Input.vue";
import { ref } from "vue";
import IconProfileSecondaryGreen from "@/assets/images/icons/user-secondary-green.svg";
import IconProfileBlack from "@/assets/images/icons/user-black.svg";
import IconKeySecondaryGreen from "@/assets/images/icons/key-secondary-green.svg";
import IconKeyBlack from "@/assets/images/icons/key-black.svg";

const form = ref({
  email: null,
  password: null,
});
</script>

<template>
  <form
    action="kk-dashboard.html"
    class="flex items-center flex-1 pl-[calc(((100%-1280px)/2)+75px)]"
  >
    <div
      class="flex flex-col h-fit w-[486px] shrink-0 rounded-3xl p-[32px] gap-[32px] bg-white"
    >
      <header class="flex flex-col gap-[32px] items-center">
        <img
          src="@/assets/images/logos/logo-text.svg"
          alt="icon"
          class="shrink-0 h-[38px] w-[197px]"
        />
        <div class="flex flex-col gap-2">
          <h1 class="font-semibold text-[24px] leading-[30px] text-center">
            Halo🙌🏻 , Selamat Datang!
          </h1>
          <p class="font-medium leading-5 text-desa-secondary text-center">
            Silahkan masuk untuk melanjutkan
          </p>
        </div>
      </header>
      <section id="Select" class="grid grid-cols-2 gap-6">
        <div
          class="group relative flex items-center justify-between p-5 rounded-2xl bg-white ring-[1px] ring-desa-background hover:bg-desa-foreshadow has-[:checked]:bg-desa-foreshadow has-[:checked]:ring-desa-dark-green transition-all duration-300"
        >
          <input
            id="Kepala-Desa"
            required
            type="radio"
            name="role"
            class="peer absolute left-0 right-0 top-0 bottom-0 z-50 opacity-0"
          />
          <p
            class="font-medium leading-5 text-desa-secondary group-hover:text-desa-dark-green group-has-[:checked]:text-desa-dark-green transition-all duration-300"
          >
            Kepala Desa
          </p>
          <div class="relative">
            <img
              src="@/assets/images/icons/crown-secondary-green.svg"
              alt="icon"
              class="shrink-0 h-[24px] w-[24px] group-hover:opacity-0 group-has-[:checked]:opacity-0 absolute transition-all duration-300"
            />
            <img
              src="@/assets/images/icons/crown-dark-green.svg"
              alt="icon"
              class="shrink-0 h-[24px] w-[24px] group-hover:opacity-100 group-has-[:checked]:opacity-100 opacity-0 transition-all duration-300"
            />
          </div>
        </div>
        <div
          class="group relative flex items-center justify-between p-5 rounded-2xl bg-white ring-[1px] ring-desa-background hover:bg-desa-foreshadow has-[:checked]:bg-desa-foreshadow has-[:checked]:ring-desa-dark-green transition-all duration-300"
        >
          <input
            id="Kepala-Rumah"
            required
            type="radio"
            name="role"
            class="peer absolute left-0 right-0 top-0 bottom-0 z-50 opacity-0"
          />
          <p
            class="font-medium leading-5 text-desa-secondary group-hover:text-desa-dark-green group-has-[:checked]:text-desa-dark-green transition-all duration-300"
          >
            Kepala Rumah
          </p>
          <div class="relative">
            <img
              src="@/assets/images/icons/profile-circle-secondary-green.svg"
              alt="icon"
              class="shrink-0 h-[24px] w-[24px] group-hover:opacity-0 group-has-[:checked]:opacity-0 absolute transition-all duration-300"
            />
            <img
              src="@/assets/images/icons/profile-circle-dark-green.svg"
              alt="icon"
              class="shrink-0 h-[24px] w-[24px] group-hover:opacity-100 group-has-[:checked]:opacity-100 opacity-0 transition-all duration-300"
            />
          </div>
        </div>
      </section>
      <section id="Inputs" class="flex flex-col gap-[32px]">
        <div id="Email-Address" class="flex flex-col gap-4">
          <h2 class="font-medium leading-5 text-desa-secondary">
            Email Address
          </h2>
          <!-- <div class="relative">
            <input
              placeholder="Masukan Email Kamu"
              type="email"
              class="peer w-full h-[56px] rounded-2xl pl-[48px] pr-4 border-[1.5px] border-desa-background font-medium leading-5 focus:ring-[1.5px] focus:ring-desa-dark-green focus:outline-none placeholder:leading-5 placeholder:text-desa-secondary placeholder:font-medium transition-all duration-300"
            />
            <img
              src="assets/images/icons/user-secondary-green.svg"
              alt="icon"
              class="absolute shrink-0 size-6 top-1/2 left-4 -translate-y-1/2 opacity-0 peer-placeholder-shown:opacity-100 transition-all duration-300"
            />
            <img
              src="assets/images/icons/user-black.svg"
              alt="icon"
              class="absolute shrink-0 size-6 top-1/2 left-4 -translate-y-1/2 opacity-100 peer-placeholder-shown:opacity-0 transition-all duration-300"
            />
          </div> -->
          <Input
            v-model="form.email"
            :icon="IconProfileSecondaryGreen"
            :filled-icon="IconProfileBlack"
            placeholder="Masukan Email Kamu"
            type="email"
          />
        </div>
        <div id="Password" class="flex flex-col gap-4">
          <h2 class="font-medium leading-5 text-desa-secondary">Password</h2>
          <!-- <div class="relative">
            <input
              placeholder="Ketik Password Kamu"
              type="password"
              class="peer w-full h-[56px] rounded-2xl pl-[48px] pr-4 border-[1.5px] border-desa-background font-medium leading-5 focus:ring-[1.5px] focus:ring-desa-dark-green focus:outline-none placeholder:leading-5 placeholder:text-desa-secondary placeholder:font-medium transition-all duration-300 tracking-[0.25rem] placeholder-shown:tracking-normal"
            />
            <img
              src="@/assets/images/icons/key-secondary-green.svg"
              alt="icon"
              class="absolute shrink-0 size-6 top-1/2 left-4 -translate-y-1/2 opacity-0 peer-placeholder-shown:opacity-100 transition-all duration-300"
            />
            <img
              src="@/assets/images/icons/key-black.svg"
              alt="icon"
              class="absolute shrink-0 size-6 top-1/2 left-4 -translate-y-1/2 opacity-100 peer-placeholder-shown:opacity-0 transition-all duration-300"
            />
          </div> -->
          <Input
            v-model="form.password"
            :icon="IconKeySecondaryGreen"
            :filled-icon="IconKeyBlack"
            placeholder="Ketik Password Kamu"
            type="password"
          />
        </div>
      </section>
      <button
        type="submit"
        class="py-[18px] flex justify-center items-center bg-desa-dark-green rounded-2xl font-medium leading-5 text-white"
      >
        Masuk
      </button>
    </div>
  </form>
  <section id="Banner" class="relative flex w-full max-w-[634px]">
    <div
      class="fixed top-0 h-screen w-full max-w-[634px] overflow-hidden pr-3 py-3"
    >
      <div
        class="h-full w-[622px] rounded-3xl gradient-vertical pt-[59px] pb-[60px]"
      >
        <img
          src="@/assets/images/backgrounds/bg-signin.png"
          class="h-full w-[542px] object-contain mx-auto"
          alt="banner"
        />
      </div>
    </div>
  </section>
</template>
