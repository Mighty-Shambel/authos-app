import { createStore } from 'vuex';

const store = createStore({
   state() {
      return {
        blogs: [], // Ensure that the initial state of blogs is an empty array
      };
    },
  mutations: {
    setBlogs(state, blogs) {
      state.blogs = blogs;
    },
    addBlog(state, blog) {
      state.blogs.push(blog);
    },
    updateBlog(state, updatedBlog) {
      const index = state.blogs.findIndex(blog => blog.id === updatedBlog.id);
      if (index !== -1) {
        state.blogs.splice(index, 1, updatedBlog);
      }
    },
    deleteBlog(state, blogId) {
      const index = state.blogs.findIndex(blog => blog.id === blogId);
      if (index !== -1) {
        state.blogs.splice(index, 1);
      }
    },
  },
  actions: {
    async fetchBlogs({ commit }) {
      try {
        const response = await fetch('http://192.168.8.159:3000/api/v1/recommendedDoctor/readAllRecommendedDoctors');
        if (!response.ok) {
          throw new Error('Failed to fetch blogs.');
        }
        const data = await response.json();
        commit('setBlogs', data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    },
    async createBlog({ commit }, newBlog) {
      try {
       const token = localStorage.getItem("token");
        const response = await fetch('http://192.168.8.159:3000/api/v1/recommendedDoctor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': ` ${token}`, 
          },
          body: JSON.stringify(newBlog),
        });
        if (!response.ok) {
          throw new Error('Failed to create blog.');
        }
        
        const data = await response.json();
        console.log('Created blog:', data); // Added logging statement
        commit('addBlog', data);
      } catch (error) {
        console.error('Error creating blog:', error);
      }
    },
    async updateBlog({ commit }, updatedBlog) {
      try {
        const response = await fetch(`http://192.168.8.159:3000/api/v1/recommendedDoctor/updateOneRecommendedDocto/${updatedBlog.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedBlog),
        });
        if (!response.ok) {
          throw new Error('Failed to update blog.');
        }
        const data = await response.json();
        commit('updateBlog', data);
      } catch (error) {
        console.error('Error updating blog:', error);
      }
    },
    async deleteBlog({ commit }, blogId) {
      try {
        const response = await fetch(`http://192.168.8.159:3000/api/v1/recommendedDoctor/removeOneDoctorRecommendation/${blogId}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to delete blog.');
        }
        commit('deleteBlog', blogId);
      } catch (error) {
        console.error('Error deleting blog:', error);
      }
    },
  },
  getters: {
    getBlogs(state) {
      return state.blogs;
    },
  },
});

export default store;
