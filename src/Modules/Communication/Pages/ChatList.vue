<template>
    <div class="flex-1">
       <div class=" top-0 z-50 flex justify-between bg-primary shadow-md px-4 py-2 ">
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
   
    <div class=" flex justify-center text-primary text-sm mt-5">View More</div>
   </div>
<!-- Content -->
   <div class="w-96 py-5 px-4 ">
    <div class="flex justify-center  mb-4">
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
                                      class="bg-gray-50 w-96 sm:w-36 lg:w-72  border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-primary focus:border-primary block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder="Search" required>
                           </div>
       </div>
       <router-link :to="{name:'Chat'}">
    <div class=" flex justify-between">
        <div class="flex px-4 mb-2">
      <img src="src/assets/girl.jpg" class="h-10 w-10 rounded-full">
      <div class="mx-2">
       <h1>Lidya Dagnaw</h1>
       <h6 class="text-sm mb-2">Ayoo whachu doing?</h6>
      </div>
    </div>
    <span  class="text-sm">
        02:27 pm
    </span>
    </div>
</router-link>
    <div class="flex justify-between">
        <div class="flex px-4 mb-2">
      <img src="src/assets/girl.jpg" class="h-10 w-10 rounded-full">
      <div class="mx-2">
       <h1>Meklit Seife</h1>
       <h6 class="text-sm mb-2">Playing and u?</h6>
      </div>
    </div>
    <span  class="text-sm">
        11:27 pm
    </span>
    </div>
    <div class="flex justify-between">
        <div class="flex px-4 mb-2">
      <img src="src/assets/girl.jpg" class="h-10 w-10 rounded-full">
      <div class="mx-2">
       <h1>Meklit Seife</h1>
       <h6 class="text-sm mb-2">Please give me my money back!!</h6>
      </div>
    </div>
    <span class="text-sm">
        12:30 pm
    </span>
    </div>
    <div class="flex justify-between">
        <div class="flex px-4 mb-2">
      <img src="src/assets/girl.jpg" class="h-10 w-10 rounded-full">
      <div class="mx-2">
       <h1>Meklit Seife</h1>
       <h6 class="text-sm mb-2">Bitches come and go</h6>
      </div>
    </div>
    <span  class="text-sm">
        11:27 pm
    </span>
    </div>
    
   </div>
   <!-- Right Sidebar -->
   <div class="flex-1  text-black">
    <div class="bg-slate-100 pb-72">
      <p class=" grid grid-cols-1 gap-4 place-items-center pt-72">Select a chat to start messaging</p> 
  </div>
  <div class=" flex justify-between sticky bottom-0 border border-blue p-4">

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M18.97 3.659a2.25 2.25 0 00-3.182 0l-10.94 10.94a3.75 3.75 0 105.304 5.303l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a5.25 5.25 0 11-7.424-7.424l10.939-10.94a3.75 3.75 0 115.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 015.91 15.66l7.81-7.81a.75.75 0 011.061 1.06l-7.81 7.81a.75.75 0 001.054 1.068L18.97 6.84a2.25 2.25 0 000-3.182z" clip-rule="evenodd" />
</svg>
<div class="flex">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
</svg>
</div>


  </div>
   </div>
   </div>
</template>

<script setup>

</script>

<style>

</style>