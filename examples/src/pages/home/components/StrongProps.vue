<script setup lang="ts">
defineProps({
  highlightIndex: {
    type: Number,
  },
});
</script>

<template>
  <strong>
    <small>[{{ highlightIndex }}]:</small>
    <slot />
  </strong>
</template>
