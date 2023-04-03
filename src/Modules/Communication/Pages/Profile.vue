<template>
  <div class="hidden lg:block">
   <div class="  top-0 z-50 flex justify-between bg-primary shadow-md px-4 py-2 ">
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
       <div class="flex justify-between pt-6  pr-2 ">
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
  <div class="flex py-10 bg-slate-100 h-full ">
    <div class="bg-white shadow-md py-20 mx-20 px-10 h-full">
  <img src="/src/assets/girl.jpg" class="h-40 w-40 mx-24 rounded-full">
  <div>
  <div class="flex justify-center mb-4">
    <div class="">
      <h1 class="text-xl mt-3">Mighty Shambel</h1>
      <h1 class="pb-3 px-12">Parent</h1>
      <button class=" bg-primary px-10 mb-2 text-white rounded-md py-1">Edit Profile</button>
    </div>
  </div>
  <div class="grid grid-cols-3 ">
      <h1 class="">10 posts</h1>
      <h1 class="">522 Followers</h1>
      <h1 class="pl-5"> 320 Following</h1>
    </div>
  </div>  
</div>
 <div>
 
  <!-- posts -->
  <div class="bg-white grid grid-cols-1 shadow-md py-5">
     <div class="flex px-5">
      <img src="/src/assets/girl.jpg" class="h-10 w-10 rounded-full">
      <h1 class="my-2 mx-2">Mighty Shambel</h1>
     </div>
     <h1 class="px-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed tempora veritatis aut,<br> tenetur eum nesciunt exercitationem aliquid necessitatibus dolore</h1>
    <img src="/src/assets/doctors.jpg" class="py-1 w-full h-96">
    <h1>Lidaya dagnaw and 4 others liked this picture</h1>
    <div class="grid grid-cols-3 mx-20 mt-3 ">
        <div class="flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6  mr-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
          </svg>
          like
        </div> 
       
        <div class="flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-4 mr-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
          </svg>
          Comment
        </div>

        <div class="flex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-4 mr-2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
       </svg>
       Share
       </div>
      </div>
  </div>
  <div class=" bg-white grid grid-cols-1 shadow-md py-5 my-5">
     <div class="flex px-5">
      <img src="/src/assets/girl.jpg" class="h-10 w-10 rounded-full">
      <h1 class="my-2 mx-2">Mighty Shambel</h1>
     </div>
     <h1 class="px-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed tempora veritatis aut,<br> tenetur eum nesciunt exercitationem aliquid necessitatibus dolore</h1>
    <img src="/src/assets/doctors.jpg" class="py-1 w-full h-96">
    <h1>Lidaya dagnaw and 4 others liked this picture</h1>
    <div class="grid grid-cols-3 mx-20 mt-3 ">
        <div class="flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6  mr-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
          </svg>
          like
        </div> 
       
        <div class="flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-4 mr-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
          </svg>
          Comment
        </div>

        <div class="flex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-4 mr-2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
       </svg>
       Share
       </div>
      </div>
  </div>
</div>
</div>
</div>
<!-- profile for mobile -->
<div class="lg:hidden lg:block">
<div class=" bg-white  py-20 mx-5 px-5 h-full">
  <div class="flex justify-center">
    <img src="/src/assets/girl.jpg" class="h-24 w-24 rounded-full">
  </div>
  
  <div>
  <div class="flex justify-center mb-4">
    <div class="">
      <h1 class="text-xl mt-3">Mighty Shambel</h1>
      <h1 class="pb-3 px-12">Parent</h1>
      <button class=" bg-primary px-10 mb-2 text-white rounded-md py-1">Edit Profile</button>
    </div>
  </div>
  <div class="grid grid-cols-3 md:grid-cols-3 gap-4  md:px-36 ">
      <h1 class="">10 posts</h1>
      <h1 class="">522 Followers</h1>
      <h1 class=""> 320 Following</h1>
    </div>
  </div>  
  <div class="bg-white grid grid-cols-1 shadow-md py-5">
    <div class="flex px-5">
     <img src="/src/assets/girl.jpg" class="h-10 w-10 rounded-full">
     <h1 class="my-2 mx-2">Mighty Shambel</h1>
    </div>
    <h1 class="px-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed tempora veritatis aut,<br> tenetur eum nesciunt exercitationem aliquid necessitatibus dolore</h1>
   <img src="/src/assets/doctors.jpg" class="py-1 w-full h-96">
   <h1>Lidaya dagnaw and 4 others liked this picture</h1>
   <div class="grid grid-cols-3  mt-3 ">
       <div class="flex">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6  mr-2">
         <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
         </svg>
         like
       </div> 
      
       <div class="flex">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6  mr-2">
         <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
         </svg>
         Comment
       </div>

       <div class="flex">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
       <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
      Share
      </div>
     </div>
 </div>
</div>
<div class="grid grid-cols-5 pl-5  bottom-0 z-50 bg-primary shadow-md py-2 ">

<!-- Icons -->
 <router-link :to="{name:'Feed'}"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
</router-link>

<div class="flex justify-between ">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
</div>

<router-link :to="{name:'Friends'}"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6 ">
<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg></router-link>

<router-link :to="{name:'Notification'}">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
</svg>
</router-link>
  <!-- profile -->
  <div>
    <router-link :to="{name:'Profile'}"><img src="/src/assets/girl.jpg" class="rounded-full h-6 w-6"></router-link>
      </div>
</div>
</div>
</template>

<script setup>

</script>

<style>

</style>