<script setup>
defineProps({
  meta: {
    type: Object,
    required: true,
  },
  serverOptions: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <nav id="Pagination">
    <ul class="flex items-center gap-3">
      <li class="group">
        <a
          @click="serverOptions.page = meta.current_page - 1"
          :class="{ 'cursor-not-allowed': meta.current_page === 1 }"
          disabled
          class="flex size-11 shrink-0 items-center justify-center rounded-full bg-desa-foreshadow disabled:!bg-desa-foreshadow group-hover:bg-desa-dark-green transition-setup"
        >
          <img
            src="@/assets/images/icons/arrow-left-dark-green.svg"
            class="flex size-6 shrink-0 group-hover:hidden"
            alt="icon"
          />
          <img
            src="@/assets/images/icons/arrow-left-foreshadow.svg"
            class="hidden size-6 shrink-0 group-hover:flex"
            alt="icon"
          />
        </a>
      </li>
      <li class="group active">
        <a
          class="flex size-11 shrink-0 items-center justify-center rounded-full bg-desa-foreshadow group-hover:bg-desa-dark-green group-[.active]:bg-desa-dark-green transition-setup"
        >
          <span
            class="text-desa-dark-green font-semibold group-[.active]:text-desa-foreshadow group-hover:text-desa-foreshadow transition-setup"
          >
            1
          </span>
        </a>
      </li>
      <li class="group">
        <a
          class="flex size-11 shrink-0 items-center justify-center rounded-full bg-desa-foreshadow group-hover:bg-desa-dark-green group-[.active]:bg-desa-dark-green transition-setup"
        >
          <span
            class="text-desa-dark-green font-semibold group-[.active]:text-desa-foreshadow group-hover:text-desa-foreshadow transition-setup"
          >
            2
          </span>
        </a>
      </li>
      <li class="group">
        <a
          class="flex size-11 shrink-0 items-center justify-center rounded-full bg-desa-foreshadow group-hover:bg-desa-dark-green group-[.active]:bg-desa-dark-green transition-setup"
        >
          <span
            class="text-desa-dark-green font-semibold group-[.active]:text-desa-foreshadow group-hover:text-desa-foreshadow transition-setup"
          >
            3
          </span>
        </a>
      </li>
      <li class="group">
        <a
          class="flex size-11 shrink-0 items-center justify-center rounded-full bg-desa-foreshadow group-hover:bg-desa-dark-green group-[.active]:bg-desa-dark-green transition-setup"
        >
          <span
            class="text-desa-dark-green font-semibold group-[.active]:text-desa-foreshadow group-hover:text-desa-foreshadow transition-setup"
          >
            4
          </span>
        </a>
      </li>
      <li class="group">
        <a
          class="flex size-11 shrink-0 items-center justify-center rounded-full bg-desa-foreshadow group-hover:bg-desa-dark-green group-[.active]:bg-desa-dark-green transition-setup"
        >
          <span
            class="text-desa-dark-green font-semibold group-[.active]:text-desa-foreshadow group-hover:text-desa-foreshadow transition-setup"
          >
            5
          </span>
        </a>
      </li>
      <li class="group">
        <button
          type="button"
          class="group/arrow flex size-11 shrink-0 items-center justify-center rounded-full bg-desa-foreshadow disabled:!bg-desa-foreshadow group-hover:bg-desa-dark-green transition-setup"
        >
          <img
            src="@/assets/images/icons/arrow-left-dark-green.svg"
            class="flex size-6 shrink-0 rotate-180 group-hover:hidden group-disabled/arrow:!hidden"
            alt="icon"
          />
          <img
            src="@/assets/images/icons/arrow-left-foreshadow.svg"
            class="hidden size-6 shrink-0 rotate-180 group-hover:flex group-disabled/arrow:!hidden"
            alt="icon"
          />
          <img
            src="@/assets/images/icons/disabled-arrow-pagination.svg"
            class="hidden size-6 shrink-0 rotate-180 group-disabled/arrow:!flex"
            alt="icon"
          />
        </button>
      </li>
    </ul>
  </nav>
</template>
