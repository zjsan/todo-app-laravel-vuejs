import { defineStore } from 'pinia'
import axios from 'axios'

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: []
  }),
  actions: {
    async fetchTasks() {
      const res = await axios.get('/api/tasks')
      this.tasks = res.data
    },
    async addTask(task) {
      const res = await axios.post('/api/tasks', task)
      this.tasks.push(res.data)
    }
  }
})
