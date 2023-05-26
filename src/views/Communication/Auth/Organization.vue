<template>
    <div class="hidden lg:block grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 bg-gradient-to-l from-primary p-5 pl-40 pr-40">
        <div class="grid grid-cols-1 md:gird-cols-1 lg:grid-cols-2 shadow-2xl">
      
         <socialmedia></socialmedia>
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 p-10 lg:pt-20 lg:pl-20 md:pt-5 bg-white  ">
        <div class="w-full max-w-md space-y-8">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="1.25 4 5.75 6">
      <path d="M 2 4 C 1 4 1 5 2 5 C 1 5 1 6 2 6 C 1 6 1 7 2 7 C 1 7 1 8 2 8 C 1 8 1 9 2 9 C 1 9 1 10 2 10 M 7 5" fill=""/>
    </svg> -->
    <div>
        <h2 class="mt-4 text-center text-2xl font-semibold tracking-tight text-gray-900">Organization</h2>
      </div>
      <form class="mt-8 space-y-2" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm ">
          <div>
            <label for="orgname" class="block text-sm font-medium leading-6 text-gray-900">Organization Name</label>
            <div class="mt-2">
              <input  v-model="formData.orgname" id="orgname" name="orgname" type="text" validationRules="required"  placeholder="Organization name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <label for="address" class="block text-sm font-medium leading-6 text-gray-900">Address</label>
            <div class="mt-2">
              <input  v-model="formData.address" id="address" name="address" type="text"  required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
  
          <div class="pb-2" >
          <label for="year" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Starting year</label>
          <input type="number" id="year" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="starting year" required>
        </div>
        <div class="pb-2" >
          <base-input 
          type="text"
          label="Bio"
          />
        </div>
        <div class="pb-2">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">License</label>
        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file">
        </div>
        <div class="pb-2">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Profile pic</label>
        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file">
        </div>
        <div class="pb-2">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Cover pic</label>
        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file">
        </div>
        </div>
  
        <div>
          <button type="submit" class=" group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-blue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
            Submit
          </button>
        </div>
      </form>
      </div>
      </div>
        </div>
      </div>
      <!-- Mobile view -->
      <div
    class="xl:hidden lg:block flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-10"
  >
    <div class="w-full max-w-md space-y-8 shadow-md p-5">
      <div>
        <h2 class="mt-4 text-center text-2xl font-semibold tracking-tight text-gray-900">Organization</h2>
      </div>
      <form class="mt-8 space-y-2">
        <div class="-space-y-px rounded-md shadow-sm ">
          <div>
            <label for="orgname" class="block text-sm font-medium leading-6 text-gray-900">Organization Name</label>
            <div class="mt-2">
              <input  v-model="formData.orgname" id="orgname" name="orgname" type="text" validationRules="required"  placeholder="Organization name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <label for="address" class="block text-sm font-medium leading-6 text-gray-900">Address</label>
            <div class="mt-2">
              <input  v-model="formData.address" id="address" name="address" type="text"  required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="pb-2" >
          <label for="year" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Starting year</label>
          <input type="number" id="year" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="starting year" required>
        </div>
        <div>
          <label for="bio" class="block text-sm font-medium leading-6 text-gray-900">Biography</label>
          <div class="mt-2">
            <textarea  v-model="formData.bio" id="bio" name="bio" type="text"  required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="pb-2">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">License</label>
        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file">
        </div>
        <div class="pb-2">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Profile pic</label>
        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file">
        </div>
        <div class="pb-2">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Cover pic</label>
        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file">
        </div>
        </div>
  
        <div>
          <button type="submit" class=" group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-blue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>  
    </template>
    
    <script setup>
    import Socialmedia from '../../../components/Communication/Socialmedia.vue';
    </script>
 