<template>
  <div
    class="hidden lg:block grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 bg-gradient-to-l from-primary p-24 pl-40 pr-40"
  >
    <div class="grid grid-cols-1 md:gird-cols-1 lg:grid-cols-2 shadow-2xl">
      <socialmedia></socialmedia>
      <div
        class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 p-10 lg:pt-20 lg:pl-20 md:pt-10 bg-white">
        <div class="w-full max-w-md space-y-8">
          <div>
            <h2
              class="text-center text-2xl font-semibold tracking-tight text-gray-900">
              Create Account
            </h2>
          </div>
          <form @submit.prevent="submitForm" class="mt-8 space-y-6" >
            <div class="-space-y-px rounded-md shadow-sm">
              <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div class="mt-2">
                  <input v-model="formData.email" placeholder="email" id="email" name="email" type="email" autocomplete="email" required="" class=" p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div class="mt-2">
                  <input  v-model="formData.password" placeholder="password" id="password" name="password" type="password" autocomplete="password" required="" class=" p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="pb-2 mb-2">
               <base-input 
               type="password"
               label="Confirm Password"
               />
              </div>
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white pb-3"
                >User Type</label
              >
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected class="mb-3">User Type</option>
                <option value="PA">Parent</option>
                <option value="HP">Health Professional</option>
                <option value="OR">Organization</option>
              </select>
            </div>

            <div>
              <button
              type="button"
              @click="submitForm"
                class="mb-3 group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-blue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign up
              </button>
              <span class="text-slate-400"
                >Already have an account?
                <router-link
                  :to="{ name: 'Signin' }"
                  class="text-primary text-semibold"
                  >Log in</router-link
                >
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- mobile view -->
  <div
    class="xl:hidden lg:block flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-40"
  >
    <div class="w-full max-w-md space-y-8 shadow-md p-5">
      <div>
        <h2
          class="mt-6 text-center text-2xl font-semibold tracking-tight text-gray-900"
        >
          Create Account
        </h2>
      </div>
      <form class="mt-8 space-y-6" >
        <div class="-space-y-px rounded-md shadow-sm">
          <div class="pb-2">
            <div>
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div class="mt-2">
                <input  v-model="formData.email" id="email" name="email" type="email" autocomplete="email" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div class="mt-2">
                <input v-model="formData.password" id="password" name="password" type="password" autocomplete="password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <label for="confirmpassword" class="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
              <div class="mt-2">
                <input v-model="formData.confirmpassword" id="confirmpassword" name="confirmpassword" type="password" autocomplete="password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
          <label
            for="usertype"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white pb-3"
            >User Type</label
          >
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected class="mb-3">User Type</option>
            <option value="PA">Parent</option>
            <option value="HP">Health Professional</option>
            <option value="OR">Organization</option>
          </select>
        </div>

        <div>
          <button
            type="button"
            @click="submitForm"
            class="mb-3 group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-blue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Sign up
          </button>
          <span class="text-slate-400"
            >Already have an account?
            <router-link
              :to="{ name: 'Signin' }"
              class="text-primary text-semibold"
              >Log in</router-link
            >
          </span>
        </div>
        </div>
      </form>
    </div>
  </div>
</template>
<!--     
<script setup>
import BaseInput from "../../../components/BaseInput.vue";
import Socialmedia from "../../../components/Communication/Socialmedia.vue";
import axios from 'axios';

// Make a GET request
axios.get('/api/users')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

// Make a POST request
const data = {
  username: 'john_doe',
  email: 'john_doe@example.com'
};

axios.post('/api/users', data)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
</script> -->
<script>
import axios from "axios";
import Socialmedia from '../../../components/Communication/Socialmedia.vue';

export default {
  components:{Socialmedia},
  data() {
    return {
      formData:{
        email: "",
        password: "",
        user_type: "Parent",
      }
    };
  },
  methods: {
   async submitForm() {
      console.log("form data", this.formData);
      await axios
        .post(`http://192.168.8.187:3000/api/v1/auth/signup`, this.formData)
        .then((response) => {
          console.log(response.data.payload.token);
          localStorage.setItem("token", response.data.payload.token)
          console.log(response.data)
          // this.$router.push('/systemupdate');
        })
        .catch((error) => {
          console.log("eroor", error);
          // console.log("errrrrrrrrrrrrrrrrrrrr", error.response.data.message);
        });
      // console.warn(result)
    },
  },

};
</script>

<style>
</style>