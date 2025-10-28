<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const route = useRoute();
const isActive = computed(() => route.path === props.item.path);
const isChildActive = computed(() => {
  if (props.item.children) {
    return props.item.children.some((child) => route.path === child.path);
  }
  return false;
});
</script>
<template></template>
