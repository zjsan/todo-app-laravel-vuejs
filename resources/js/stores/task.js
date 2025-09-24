import { defineStore } from 'pinia'
import axios from 'axios'

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchTasks() {
      this.loading = true; 
      try {
        const res = await axios.get('/api/tasks')
        this.tasks = res.data
        
      } catch (error) {
        this.error = error;
        console.error('Error fetching posts:', error);
        
      } 
      finally{
        this.loading = false;
      }
      
    },
    async addTask(newTask) {
      try {
        const res = await axios.post('/api/tasks', newTask)
        this.tasks.push(res.data)
      } catch (error) {
        this.error = error;
        console.error('Error creating post:', error);
      }
      
    },
    async updateTask(updateTask){

      try {
        const res = await axios.post(`/api/tasks/${task.id}`, updateTask)
        const index = this.tasks.findIndex(p => p.id === task.id);
            if (index !== -1) {
                this.tasks[index] = res.data;
            }
      } catch (error) {
        this.error = error;
        console.error('Error updating post:', error);
      }
      
    },
    async deletPost(id){
      try{
        await axios.delete(`/api/tasks/${id}`);
        this.tasks = this.tasks.filter(p => p.id !== id);
      }catch (error){
        this.error = error;
        console.error('Error deleting post:', error)
      }
    }

  }
})
