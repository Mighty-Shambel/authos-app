<template>
      <div class="grid-cols-1 md:grid-cols-1 lg:grid-cols-1 p-20  pt-10">
  <div class="py-3 px-3"> 
    <div class="flex pb-5  pt-5 mb-10 px-3"> 
        <p class="grid pt-2 mr-20">Image</p>
        <p class="grid pl-6 pt-2 mr-36">Name</p>
        <p class="grid pl-7 pt-2">User Type</p>
        <p class="grid pl-32 pt-2"> Email</p>
        <p class="grid pl-64 pt-2">View</p>
       
      </div>
      <div class="flex pb-5  pt-5 mb-5 shadow-md px-3"> 
        <img class="w-12 h-12 rounded-md mr-20" src="/assets/symptom.jpg" alt="the first">
        <p class="grid pl-5 pt-2 mr-20">Mighty Shambel</p>
        <p class="grid pl-5 pt-2">Health Professional </p>
        <p class="grid pl-16 pt-2">Shambelmighty51@gmail.com</p>
        <svg  @click="viewModal=!viewModal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-20">
    <path  stroke="blue" stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path stroke="blue"  stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
       
      </div>
      <div class="flex pb-5  pt-5 mb-5 shadow-md px-3"> 
        <img class="w-12 h-12 rounded-md mr-20" src="/assets/symptom.jpg" alt="the first">
        <p class="grid pl-5 pt-2 mr-20">Mighty Shambel</p>
        <p class="grid pl-5 pt-2">Health Professional</p>
        <p class="grid pl-16 pt-2">Shambelmighty51@gmail.com</p>
        <svg  @click="viewModal=!viewModal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-20">
    <path  stroke="blue" stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path stroke="blue"  stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
      
      </div>
       <div class="flex pb-5  pt-5 mb-5 shadow-md px-3"> 
        <img class="w-12 h-12 rounded-md mr-20" src="/assets/symptom.jpg" alt="the first">
        <p class="grid pl-5 pt-2 mr-20">Mighty Shambel</p>
        <p class="grid pl-5 pt-2">Health Professional </p>
        <p class="grid pl-16 pt-2">Shambelmighty51@gmail.com</p>
        <svg  @click="viewModal=!viewModal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-20">
    <path  stroke="blue" stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path stroke="blue"  stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
       
      </div>
    
    </div>
    
      </div>
  
  <!-- The view modal -->
  <div class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
  v-if="viewModal">
    <div class="relative mx-auto w-auto max-w-2xl mx-20">
      <div class="grid grid-cols-1 divide-y bg-white w-full pt-10 pb-10 rounded-md mr-28 pl-28 ">
        <span class="text-xl pt-5 font-semibold">View User</span>
        <div class="pt-5 font-semibold flex">First Name -<p class="font-normal pl-2">Mighty</p></div>
        <div class="pt-5 font-semibold flex">Last Name -<p class="font-normal pl-2">shambel</p></div>
        <div class="pt-5 font-semibold flex">Email -<p class="font-normal pl-2">shambelmighty51@gmail.com</p></div>
        <div class="pt-5 font-semibold flex">Workplace -<p class="font-normal pl-2">Nehemia</p></div>
        <div class="pt-5 font-semibold flex">Gender -<p class="font-normal pl-2">Female</p></div>
        <div class="flex justify-start py-5"><button  @click="viewModal=false" class="px-5 border border-2 border-black  py-2 rounded-md bg-tertiary text-white">Cancel</button> </div>
       </div>
    </div>
  </div>
  <Div v-if="viewModal" class="absolute inset-0 z-40 opacity-25 bg-black"></Div>
  </template>
  
  <script>
  export default {
    data(){
  return{
    toggleModal:false,
    viewModal:false,
  }
    }
  
  }
  </script>
  
  <style>
  
  </style>