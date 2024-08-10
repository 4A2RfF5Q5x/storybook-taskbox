import { fn } from "@storybook/test";
import Task from "./Task.vue";

export const ActionsData = {
  onPickTask: fn(),
  onArchiveTask: fn(),
};

export default {
  component: Task,
  title: 'Task',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData
  }
};

export const Default = {
  args: {
    task: {
      id: '1',
      state: 'TASK_INBOX',
      title: 'Test Task',
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED',
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED',
    },
  },
};



