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
          <div class="pb-2" >
            <BaseInput v-model="formData.email" label="Email" name="email" inputType="email" validationRules="required|email" placeholder="email" />
          </div>
          <div class="pb-2" >
           <BaseInput v-model="formData.password" label="Password" name="password" inputType="password" validationRules="required|min:8" placeholder="password" />
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
          <button @click="login" type="submit" class=" mb-5 group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-blue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
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
          <div class="pb-2" >
            <BaseInput v-model="formData.email" label="Email" name="email" inputType="email" validationRules="required|email" placeholder="email" />
          </div>
          <div class="pb-2" >
            <BaseInput v-model="formData.password" label="Password" name="password" inputType="password" validationRules="required|min:8" placeholder="password" />
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
          <button  type="submit" class=" mb-5 group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-blue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
            Log in
          </button>
          <span class="text-slate-400">Don't have account? <router-link :to="{name:'CreateAccount'}" class="text-primary text-semibold"> Sign up</router-link> </span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import BaseInput from '../../../components/BaseInput.vue';
import Socialmedia from '../../../components/Communication/Socialmedia.vue';
export default {
  components: {
    BaseInput,
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
    login() {
        console.log('Form data', this.formData);
    },
  },
};
</script>