<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goHome = () => {
  router.push({ name: "dashboard" });
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div class="max-w-md w-fit bg-white rounded-2xl shadow-lg p-8 text-center">
      <div class="text-6xl font-extrabold text-emerald-600">403</div>

      <h1 class="mt-4 text-2xl font-semibold text-gray-800">Access Denied</h1>

      <p class="mt-2 text-gray-500">
        You don’t have permission to access this page.
      </p>

      <div class="mt-4 flex justify-center gap-3">
        <button
          @click="goHome"
          class="px-6 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
        >
          Go Home
        </button>
      </div>
    </div>
  </div>
</template>
