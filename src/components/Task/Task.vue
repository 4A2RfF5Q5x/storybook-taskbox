<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div :class="[
    'list-item',
    { 'TASK_INBOX': task.state === 'TASK_INBOX' },
    { 'TASK_PINNED': task.state === 'TASK_PINNED' },
    { 'TASK_ARCHIVED': task.state === 'TASK_ARCHIVED' },
  ]">
    <label 
      :for="'checked' + task.id"
      :aria-label="'archivedTask-' + task.id"
      class="checkbox"
    >
      <input 
        type="checkbox" 
        :checked="isChecked"
        disabled
        :name="'checked' + task.id" 
        :id="'archivedTask-' + task.id"
      >
      <span class="checkbox-custom" @click="archiveTask"></span>
    </label>

    <label 
      :for="'title-' + task.id" 
      :aria-label="task.title"
      class="title"
    >
      <input 
        type="text" 
        readonly 
        :value="task.title" 
        :id="'title-' + task.id" 
        name="title"
        placeholder="Input title"
        style="text-overflow: ellipsis"
      >
    </label>

    <button
      v-if="!isChecked"
      class="pin-button"
      @click="pinTask"
      :id="'pinTask=' + task.id"
      :aria-label="'pinTask-' + task.id"
    >
      <span class="icon-star"></span>
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  task: {
    type: Object,
    required: true,
    default: () => ({
      id: '',
      state: '',
      title: '',
    }),
    validator: (task) => ['id', 'state', 'title'].every((key) => key in task)
  }
})

const emits = defineEmits([
  'archive-task',
  'pin-task',
])

const isChecked = computed(() => props.task.state === 'TASK_ARCHIVED')

const archiveTask = () => emits('archive-task', props.task.id);

const pinTask = () => emits('pin-task', props.task.id);
</script>
