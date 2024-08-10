<template>
  <div class="list-items">
    <template v-if="loading">
      <div
        v-for="n in 6"
        :key="n"
        class="loading-item"
      >
        <span class="glow-checkbox"></span>
        <span class="glow-text">
          <span>Loading</span> <span>cool</span> <span>state</span>
        </span>
      </div>
    </template>

    <template v-else-if="isEmpty">
      <div class="wrapper-message">
        <span class="icon-check"></span>
        <p class="title-message">You have no tasks</p>
        <p class="subtitle-message">Sit back and relax</p>
      </div>
    </template>

    <template v-else>
      <Task
        v-for="task in tasksInOrder"
        :key="task.id"
        :task
        @archive-task="onArchiveTask"
        @pin-task="onPinTask"
      />
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import Task from '@/components/Task/Task.vue';

const props = defineProps({
  tasks: {
    type: Array,
    required: true,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: false,
  }
})

const emits = defineEmits([
  'archive-task',
  'pin-task',
])

const isEmpty = computed(() => props.tasks.length === 0);

const tasksInOrder = computed(() => {
  return [
    ...props.tasks.filter(task => task.state === 'TASK_PINNED'),
    ...props.tasks.filter(task => task.state !== 'TASK_PINNED'),
  ]
})

const onArchiveTask = (taskId) => emits('archive-task', taskId);

const onPinTask = (taskId) => emits('pin-task', taskId);
</script>