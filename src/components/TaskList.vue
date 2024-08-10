<template>
  <PureTaskList 
    :tasks="tasks" 
    @archive-task="archiveTask"
    @pin-task="pinTask"
  />
</template>

<script setup>
import { computed } from "vue";
import { useTaskStore } from "@/store";
import PureTaskList from "./PureTaskList";

const store = useTaskStore();

const tasks = computed(() => store.getFilteredTasks);

const archiveTask = (task) => store.archiveTask(task);
const pinTask = (task) => store.pinTask(task);
</script>
