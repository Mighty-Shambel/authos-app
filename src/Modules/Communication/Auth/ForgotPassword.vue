<template>
    <div class="hidden lg:block grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 bg-gradient-to-l from-primary  p-24 pl-40 pr-40">
        <div class="grid grid-cols-1 md:gird-cols-1 lg:grid-cols-2 shadow-2xl">
      
         <socialmedia></socialmedia>
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 p-10 lg:pt-44 lg:pl-20 md:pt-10 bg-white  ">
        <div class="w-full max-w-md space-y-8">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="1.25 4 5.75 6">
      <path d="M 2 4 C 1 4 1 5 2 5 C 1 5 1 6 2 6 C 1 6 1 7 2 7 C 1 7 1 8 2 8 C 1 8 1 9 2 9 C 1 9 1 10 2 10 M 7 5" fill=""/>
    </svg> -->
          <div class="mt-20">
            <h2 class="mt-6 text-center text-2xl font-semibold tracking-tight text-gray-900">Forgot password</h2>
          </div>
          <form class="mt-8 space-y-5" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div class=" rounded-md shadow-sm mb-20">
              <div class="pb-2" >
               <base-input 
               type="email"
               label="Email"
               />
              </div>
            </div>
            <div>
              <button type="submit" class="mb-20 group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-blue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Submit
              </button>
              <!-- <span class="text-slate-400">Don't have account? <router-link :to="{name:'createaccount'}" class="text-primary text-semibold"> Sign up</router-link> </span> -->
            </div>
          </form>
        </div>
      </div>
      </div>
      </div>
      <!-- Mobile view -->
      <div class="xl:hidden lg:block flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-40">
        <div class="w-full max-w-md space-y-8 shadow-md p-5">
          <div>
            <h2 class="mt-6 text-center text-2xl font-semibold tracking-tight text-gray-900">Forgot password</h2>
          </div>
          <form class="mt-8 space-y-5" action="#" method="POST">
            <div class=" rounded-md shadow-sm mb-3">
              <div class="pb-2" >
                <base-input
                label="Email"
                type="email"
                />
              </div>
            </div>
            <div class="flex items-center justify-between"> 
              <!-- <div class="text-sm">
                <p  class="font-medium text-black hover:text-indigo-500"><router-link :to="{name:'forgotpassword'}"> forgot your password?</router-link> </p>
              </div> -->
            </div>
    
            <div>
              <button type="submit" class=" mb-5 group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-blue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Log in
              </button>
              <!-- <span class="text-slate-400">Don't have account? <router-link :to="{name:'createaccount'}" class="text-primary text-semibold"> Sign up</router-link> </span> -->
            </div>
          </form>
        </div>
      </div>
    </template>

    <script setup>
     import BaseInput from '../../../components/BaseInput.vue';
     import Socialmedia from '../../../components/Socialmedia.vue';
    </script>
   