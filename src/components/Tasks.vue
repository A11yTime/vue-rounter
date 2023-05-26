<template>
  <div tabindex="0" :key="task.id" v-for="task in tasks">
   <Task @toggle-reminder="$emit('toggle-reminder', task.id)" :task="task" @delete-task="del(task.id)"/>
  </div>

</template>
<script>
import Task from './Task'
export default{
    name: 'Tasks',
    props: {
        tasks: Array,
    },
    components: {
      Task
    },
    methods: {
      del(id) {
        this.$emit('delete-task', id)
      }
    },
    emits: ['delete-task', 'toggle-reminder'],
}
</script>