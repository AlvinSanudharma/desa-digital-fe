<script setup>
import { Skeleton } from "@brayamvalero/vue3-skeleton";
import "@brayamvalero/vue3-skeleton/dist/style.css";
</script>

<template>
  <div class="card flex items-center justify-between rounded-3xl p-6 bg-white">
    <div class="flex items-center gap-3 w-[260px]">
      <Skeleton :circle="true" width="4rem" height="4rem" />
      <div class="flex flex-col gap-[6px]">
        <p class="font-semibold text-lg leading-[22.5px] w-[184px] truncate">
          <Skeleton />
        </p>
        <p class="flex items-center gap-1">
          <img
            src="@/assets/images/icons/briefcase-secondary-green.svg"
            class="flex size-[18px] shrink-0"
            alt="icon"
          />
          <span class="font-medium text-sm text-desa-secondary">
            <Skeleton width="160px" />
          </span>
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-1 w-[180px] shrink-0">
      <p class="flex items-center gap-1">
        <img
          src="@/assets/images/icons/keyboard-secondary-green.svg"
          class="flex size-[18px] shrink-0"
          alt="icon"
        />
        <span class="font-medium text-sm text-desa-secondary">NIK</span>
      </p>
      <p class="font-semibold leading-5">
        <Skeleton />
      </p>
    </div>

    <Skeleton width="224px" height="44px" :border-radius="32" />

    <a
      href="kd-kepala-rumah-manage.html"
      class="flex items-center shrink-0 gap-[10px] rounded-2xl py-4 px-6 bg-desa-black"
    >
      <span class="font-medium text-white">Manage</span>
    </a>
  </div>
</template>
