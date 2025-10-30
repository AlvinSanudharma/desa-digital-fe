<script setup>
import { defineProps } from "vue";

defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "button",
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    :type="type"
    :disabled="loading"
    class="py-[18px] flex justify-center items-center bg-desa-dark-green rounded-2xl font-medium leading-5 text-white"
  >
    <span v-if="!loading">{{ label }}</span>
    <span v-else>Loading...</span>
  </button>
</template>
