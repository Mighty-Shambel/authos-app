<template>

<div class="shadow md flex min-h-full items-center justify-center py-10 sm:px-6 lg:px-8">
  <div class="w-full max-w-md space-y-8 ">
    <div>
      <img class="mx-auto h-12 w-auto" src="/src/assets/logo.jpg" alt="Your Company">
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Ads Submission Form</h2>
    </div>
    <form class="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true">
      <div class="-space-y-px rounded-md shadow-sm">
        <div class="pb-2">
          <base-input 
          type="text"
          label="Company Name"
          />
        </div>
        <div class="pb-2">
          <base-input 
          type="email"
          label="Email"
          />
        </div>
        <div class="pb-2">
         <base-input 
         type="number"
         label="Phone"
         />
        </div>
        <div >
          <label for="desc">Description</label>
          <textarea id="desc" name="desc" type="text" autocomplete="phone" required class="mt-1 relative block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Description"></textarea>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" class=" px-1 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
          <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
        </div>

        <div class="text-sm">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
        </div>
      </div>

      <div>
        <button type="submit" class="group relative flex w-full justify-center rounded-md bg-primary py-2 px-3 text-sm font-semibold text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
           
          </span>
          Sign in
        </button>
      </div>
    </form>
   
  </div>
</div>
</template>

<script setup>
import BaseInput from '../../components/BaseInput.vue';
import Navbar from '../../components/Home/Navbar.vue';
Navbar
</script>
