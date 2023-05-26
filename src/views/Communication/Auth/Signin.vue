<template>
<div class="hidden lg:block grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 bg-gradient-to-l from-primary  p-24 pl-40 pr-40">
    <div class="grid grid-cols-1 md:gird-cols-1 lg:grid-cols-2 shadow-2xl">
  
     <socialmedia></socialmedia>
    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 p-10 lg:pt-44 lg:pl-20 md:pt-10 bg-white  ">
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2  class="text-center text-2xl font-semibold tracking-tight text-gray-900">Log in</h2>
      </div>
      <form class="mt-8 space-y-5" @submit.prevent="login">
        <div class=" rounded-md shadow-sm mb-3">
          <!-- Using Basinput component for the forms -->
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
        </div>

        <div class="flex items-center justify-between"> 
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
          </div>

          <div class="text-sm">
            <p  class="font-medium text-black hover:text-indigo-500"><router-link :to="{name:'ForgotPassword'}"> forgot your password?</router-link> </p>
          </div>
        </div>

        <div>
          <button type="button"
          @click="login"
          class=" mb-5 group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-blue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            
            Log in
          </button>
          <span class="text-slate-400">Don't have account? <router-link :to="{name:'CreateAccount'}" class="text-primary text-semibold"> Sign up</router-link> </span>
        </div>
      </form>
    </div>
  </div>
  </div>
  </div>
  <!-- Mobile View -->
  <div class="xl:hidden lg:block flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-40">
    <div class="w-full max-w-md space-y-8 shadow-md p-5">
      <div>
        <h2   type="submit" class="text-center text-2xl font-semibold tracking-tight text-gray-900">Log in</h2>
      </div>
      <!-- Forms for mobile using baseinput -->
      <form @submit.prevent="login" class="mt-8 space-y-5" >
        <input type="hidden" name="remember" value="true" />
        <div class=" rounded-md shadow-sm mb-3">
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
        </div>

        <div class="flex items-center justify-between"> 
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
          </div>

          <div class="text-sm">
            <p  class="font-medium text-black hover:text-indigo-500"><router-link :to="{name:'ForgotPassword'}"> forgot your password?</router-link> </p>
          </div>
        </div>

        <div>
          <button type="button"
          @click="login" class=" mb-5 group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-blue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Log in
          </button>
          <span class="text-slate-400">Don't have account? <router-link :to="{name:'CreateAccount'}" class="text-primary text-semibold"> Sign up</router-link> </span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Socialmedia from '../../../components/Communication/Socialmedia.vue';
export default {
  components: {
    Socialmedia
  },
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
   async login() {
      console.log("form data", this.formData);
      await axios
        .post(`http://192.168.8.187:3000/api/v1/auth/signin`, this.formData)
        .then((response) => {
          console.log(response.data.payload.token);
          localStorage.setItem("token", response.data.payload.token)
          console.log(response.data)
          this.$router.push('/feed');
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