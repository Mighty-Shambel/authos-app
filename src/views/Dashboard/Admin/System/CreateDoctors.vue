<template>
  <div class="flex  items-center justify-center sm:px-6 lg:px-8">
    <div class="w-full px-20 pr-96 ">
      <div>
        <h2 class=" flex justify-start mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Create </h2>
      </div>
      <form @submit.prevent="createBlog" class="mt-8 space-y-6">
        <div class="-space-y-px rounded-md shadow-sm">
            <div class="pb-2" >
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full Name</label>
            <input v-model="newBlog.name" type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="full name"  required>
          </div>
          
          <div class="pb-2" >
            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contact</label>
            <input v-model="newBlog.contact" type="number" id="contact" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+251-9957-44599" required>
          </div>
          
          <div class="pb-2" >
            <label for="experience" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">experience in Years</label>
            <input v-model="newBlog.experience" type="text" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="experienceerince" required>
          </div>
          
          <div class="pb-2" >
            <label for="work_place" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">work_place</label>
            <input v-model="newBlog.work_place" type="text" id="work_place" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="work_place" required >
          </div>
          
          <label>Gender</label>
      <div class="flex items-center">
        <input
          id="female"
          type="radio"
          value="Female"
          v-model="newBlog.gender"
          name="gender"
          class="
            mt-2
            w-4
            h-4
            text-blue-600
            bg-gray-100
            border-gray-300
            focus:ring-blue-500
            dark:focus:ring-blue-600 dark:ring-offset-gray-800
            focus:ring-2
            dark:bg-gray-700 dark:border-gray-600
          "
        />
        <label
          for="female"
          class="
            mt-2
            ml-2
            text-sm
            font-medium
            text-gray-900
            dark:text-gray-300
            mr-5
          "
        >Female</label>
        
        <input
          id="male"
          type="radio"
          value="Male"
          v-model="newBlog.gender"
          name="gender"
          class="
            mt-2
            w-4
            h-4
            text-blue-600
            bg-gray-100
            border-gray-300
            focus:ring-blue-500
            dark:focus:ring-blue-600 dark:ring-offset-gray-800
            focus:ring-2
            dark:bg-gray-700 dark:border-gray-600
          "
        />
        <label
          for="male"
          class="
            mt-2
            ml-2
            text-sm
            font-medium
            text-gray-900
            dark:text-gray-300
          "
        >Male</label>
      </div>
        </div>

        <div class="flex justify-start">
          <button @click="createBlog" type="submit" class=" w-40 group relative flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white bg-tertiary ">
            Submit
          </button>
        </div>
      </form>
      
    </div>
  </div>
</template>

<!-- 
<script>
import axios from "axios";
import { required,minLength} from '@vuelidate/validators';
import { computed, reactive } from 'vue';
import useValidate from "@vuelidate/core";
experienceort default {
  setup() {
    const state = reactive({
      name: '',
      gender: '',
      contact: '',
      experience: '',
      address: '',
      work_place: '',
    });

    const rules = computed(() => {
      return {
        name: { required },
        gender: { required },
        contact: { required, minLength: minLength(10) },
        experience: { required },
        address: { required },
        work_place: { required },
      };
    });

    const v$ = useValidate(rules, state);

    return { state, v$ };
  },

  methods: {
    createDocRec() {
      console.log("form data", {
        name: this.state.name,
        gender: this.state.gender,
        contact: this.state.contact,
        experience: this.state.experience,
        address: this.state.address,
        work_place: this.state.work_place
      });
      this.v$.$validate();
      // Call your API endpoint or perform further actions
      // using the form data
    },
    async createDocRec() {
      console.log("form data", {
        name: this.state.name,
        gender: this.state.gender,
        contact: this.state.contact,
        experience: this.state.experience,
        address: this.state.address,
        work_place: this.state.work_place
      });
      this.v$.$validate()
            if (!this.v$.$error) {        
      await axios
        .post(`https://jsonplaceholder.typicode.com/posts`, {
        name: this.state.name,
        gender: this.state.gender,
        contact: this.state.contact,
        experience: this.state.experience,
        address: this.state.address,
        work_place: this.state.work_place
      })
        .then((response) => {
          console.log(response.data.payload.token);
          localStorage.setItem("token", response.data.payload.token)
          console.log(response.data)
          this.$router.push('/systemupdate');
        })
        .catch((error) => {
          console.log("eroor", error);
          // console.log("errrrrrrrrrrrrrrrrrrrr", error.response.data.message);
        });
      // console.warn(result)
            } else {
                alert("Failed to submit")
            }
    },
  }}

</script> -->
<!-- Blogs.vue -->
<!-- <template>
  <div>
    <h1>Blogs</h1>

    <form @submit="createBg">
      <input type="text" v-model="newBlog.title" placeholder="Title" required />
      <input type="text" v-model="newBlog.author" placeholder="Author" required />
      <button type="submit">Add Book</button>
    </form>

    <ul>
      <li v-for="(blog, index) in Blogs" :key="index">
        <span>{{ blog.title }} by {{ blog.author }}</span>
        <button @click="editBook(blog)">Edit</button>
        <button @click="deleteBlog(blog.id)">Delete</button>
      </li>
    </ul>
  </div>
</template> -->


<script>
export default {
  data() {
  return {
    newBlog: {
      name: '',
      contact: '',
      experience: '',
      work_place: '',
      gender: ''
    }
  };
},
  created() {
    this.$store.dispatch('fetchBlogs');
  },
  computed: {
    blogs() {
      return this.$store.state.blogs;
    }
  },
  methods: {
    createBlog() {
      this.$store.dispatch('createBlog', this.newBlog)
        .then(() => {
          this.newBlog = { name: '', contact: '', experience: '', work_place: '', gender: '' };
        })
        .catch(error => {
          console.error('Error creating blog:', error);
        });
    },
    deleteBlog(blogId) {
      this.$store.dispatch('deleteBlog', blogId)
        .catch(error => {
          console.error('Error deleting blog:', error);
        });
    }
  }
};
</script>
