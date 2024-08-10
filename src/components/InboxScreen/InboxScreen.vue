<template>
  <PureInboxScreen :error="isError" />
</template>

<script setup>
import { computed } from 'vue';

import { useTaskStore } from '@/store';

import PureInboxScreen from '@/components/PureInboxScreen/PureInboxScreen.vue';

const store = useTaskStore();

const isError = computed(() => store.status==='error');
</script>