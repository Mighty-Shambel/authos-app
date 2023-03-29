<template>
    <div class="flex-1">
       <div class=" flex justify-between bg-primary shadow-md px-4 py-2">
         <!-- profile -->
         <div>
                <router-link :to="{name:'Profile'}"><img src="/src/assets/girl.jpg" class="rounded-full h-10 w-10"></router-link>
            <p class="text-sm text-white">Mighty</p>
            </div>
           <!-- search bar -->
           <div class="ml-48 pl-4 py-2">
             <div class="relative ">
                               <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                   <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                       <path fill-rule="evenodd"
                                             d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                             clip-rule="evenodd"></path>
                                   </svg>
                               </div>
                               <input type="text" id="simple-search"
                                      class="bg-gray-50 w-96 sm:w-36 lg:w-96  border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-primary focus:border-primary block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder="Search" required>
                           </div>
       </div>
       <!-- Icons -->
       <div class="flex justify-between pt-6  pr-2">
        <router-link :to="{name:'Feed'}"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-8 h-8 mx-4">
 <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clip-rule="evenodd" />
</svg></router-link>

<router-link :to="{name:'Friends'}"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-8  h-8 mx-4">
 <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg></router-link>

<router-link :to="{name:'Notification'}">
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-8  h-8 mx-4">
 <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
</svg>
</router-link>
<router-link :to="{name:'ChatList'}">
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-8  h-8 mx-4">
 <path fill-rule="evenodd" d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 001.28.53l4.184-4.183a.39.39 0 01.266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0012 2.25zM8.25 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zm2.625 1.125a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clip-rule="evenodd" />
</svg>
</router-link>

       </div>
       </div>
      

   </div>
 <div class="relative flex min-h-screen">
   <!-- left sidebar -->
   <div class="bg-slate-100 text-black w-64">
    <div class="flex justify-between py-5 px-4">
     <h1 class="grid grid-cols-1 divide-y">Suggestions</h1>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
 <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
</svg>
   </div>
    <div class="flex px-4 mb-2">
      <img src="src/assets/girl.jpg" class="h-10 w-10 rounded-full">
      <div class="mx-2">
       <h1>Mighty Shambel</h1>
       <h6 class="text-sm mb-2">Health Professional</h6>
       <button class="bg-primary rounded-sm text-white w-24">Follow</button>
      </div>
    </div>
    <div class="flex px-4 mb-2">
      <img src="src/assets/girl.jpg" class="h-10 w-10 rounded-full">
      <div class="mx-2">
       <h1>Meklit Seife</h1>
       <h6 class="text-sm mb-2">Parent</h6>
       <button class="bg-primary rounded-sm text-white w-24">Follow</button>
      </div>
    </div>
    <div class="flex px-4 mb-2">
      <img src="src/assets/girl.jpg" class="h-10 w-10 rounded-full">
      <div class="mx-2">
       <h1>Brightside Org</h1>
       <h6 class="text-sm mb-2">Organization</h6>
       <button class="bg-primary rounded-sm text-white w-24">Follow</button>
      </div>
    </div>
    <div class="flex px-4 mb-2">
      <img src="src/assets/girl.jpg" class="h-10 w-10 rounded-full">
      <div class="mx-2">
       <h1>Lidya Dagnaw</h1>
       <h6 class="text-sm mb-2">Parent</h6>
       <button class="bg-primary rounded-sm text-white w-24">Follow</button>
      </div>
    </div>
    <div class=" flex justify-center text-primary text-sm mt-5">View More</div>
   </div>
<!-- Content -->
   <div class="flex-1 py-10 px-10">
<h1 class="text-2xl">Notifications</h1>
<div class="flex mt-5">
   <img src="/src/assets/girl.jpg" class="h-10 w-10 rounded-full mr-5">
   <p class="mr-48"> Hayat wassihun liked your pic </p>
   <img src="/src/assets/doctors.jpg" class="h-10 w-10 rounded-lg">
</div>
<div class="flex mt-5">
   <img src="/src/assets/girl.jpg" class="h-10 w-10 rounded-full mr-5">
   <p class="mr-48"> Hayat wassihun liked your pic </p>
   <img src="/src/assets/doctors.jpg" class="h-10 w-10 rounded-lg">
</div>
<div class="flex mt-5">
   <img src="/src/assets/girl.jpg" class="h-10 w-10 rounded-full mr-5">
   <p class="mr-48"> Hayat wassihun liked your pic </p>
   <img src="/src/assets/doctors.jpg" class="h-10 w-10 rounded-lg">
</div>
   </div>
   <!-- Right Sidebar -->
   <div class="bg-slate-100 text-black w-64">
     <div class="bg-slate-100 text-black w-64">
    <div class="flex justify-between py-5 px-4">
     <h1 class="grid grid-cols-1 divide-y">Upcoming Events</h1>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
 <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
</svg>
   </div>
    <div class="flex px-4 mb-2">
      <span class="border-2 border-indigo-600 px-2 mx-2">21<br>
        Jan</span>
      <div class="mx-2">
       <h1>Joy Autism </h1>
       <h6 class="text-sm mb-2">45 intersted</h6>
       
      </div>
    </div>
    <div class="flex px-4 mb-2">
     <span class="border-2 border-indigo-600 px-2 mx-2">15<br>
        Jun</span>
      <div class="mx-2">
       <h1>Nehemia Center</h1>
       <h6 class="text-sm mb-2">30 intersted</h6>
      </div>
    </div>
    <div class="flex px-4 mb-2">
     <span class="border-2 border-indigo-600 px-2 mx-2">01<br>
         Oct</span>
      <div class="mx-2">
       <h1>Brightside Org</h1>
       <h6 class="text-sm mb-2">123 interseted</h6>
      </div>
    </div>
   
    <div class=" flex justify-center text-primary text-sm mt-5">View More</div>
   </div>

   </div>
 </div>
</template>

<script setup>

</script>

<style>

</style>