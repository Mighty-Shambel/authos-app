<template>
  <div class="hidden lg:block ">
     
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
       <img src="/assets/girl.jpg" class="h-10 w-10 rounded-full">
       <div class="mx-2">
        <h1>Mighty Shambel</h1>
        <h6 class="text-sm mb-2">Health Professional</h6>
        <button  class="bg-primary rounded-sm text-white w-24">Follow</button>
       </div>
     </div>
     <div class="flex px-4 mb-2">
       <img src="/assets/girl.jpg" class="h-10 w-10 rounded-full">
       <div class="mx-2">
        <h1>Meklit Seife</h1>
        <h6 class="text-sm mb-2">Parent</h6>
        <button class="bg-primary rounded-sm text-white w-24">Follow</button>
       </div>
     </div>
     <div class="flex px-4 mb-2">
       <img src="/assets/girl.jpg" class="h-10 w-10 rounded-full">
       <div class="mx-2">
        <h1>Brightside Org</h1>
        <h6 class="text-sm mb-2">Organization</h6>
        <button class="bg-primary rounded-sm text-white w-24">Follow</button>
       </div>
     </div>
     <div class="flex px-4 mb-2">
       <img src="/assets/girl.jpg" class="h-10 w-10 rounded-full">
       <div class="mx-2">
        <h1>Lidya Dagnaw</h1>
        <h6 class="text-sm mb-2">Parent</h6>
        <button class="bg-primary rounded-sm text-white w-24">Follow</button>
       </div>
     </div>
     <div class=" flex justify-center text-primary text-sm mt-5">View More</div>
    </div>
<!-- Content -->
  <div class="flex-1 py-5 ">
    <!-- create post -->
    <div class="flex shadow-md ml-20 mr-64 mb-5 py-5"> 
      <img src="/assets/girl.jpg" class="h-10 w-10 rounded-full mx-5">
      <h1 @click="postModal=!postModal"  class="border border-2 bg-slate-100  w-96 px-4 py-2 rounded-full">create a post</h1>
    </div>
    <div class=" ml-20 mr-64 bg-white grid grid-cols-1 shadow-md py-5">
     <div class="flex px-5">
      <img src="/assets/girl.jpg" class="h-10 w-10 rounded-full">
      <h1 class="my-2 mx-2">Mighty Shambel</h1>
     </div>
     <h1 class="px-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed tempora veritatis aut,<br> tenetur eum nesciunt exercitationem aliquid necessitatibus dolore</h1>
    <img src="/assets/doctors.jpg" class="py-1 w-full h-96">
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
    
    <!-- The create post modal -->
    <div class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
    v-if="postModal">
      <div class="relative mx-auto w-auto max-w-2xl mx-20 my-20">
        <div class="grid grid-cols-1 bg-white w-full pb-10 rounded-md px-24">
          <div class="pt-5 font-semibold mx-16">Create a new post </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" mx-20 w-24 h-24 mt-32">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          <div class="flex justify-center py-5"><button  @click="postModal=false" class="px-7 py-1 rounded-md bg-primary text-white">Select from computer</button></div>
         </div>
      </div>
    </div>
    <Div v-if="postModal" class="absolute inset-0 z-40 opacity-25 bg-black"></Div>
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
</div>
 <!-- Mobile view for feed -->
 <div class="lg:hidden lg:block">
  <div>
    <div class="flex justify-between pl-5  bottom-0 z-50 bg-white shadow-md py-2  px-5">
      <!-- Navbar -->
      <div>
      <router-link :to="{name:'Profile'}"><img src="/assets/girl.jpg" class="rounded-full h-8 w-8"></router-link>
      </div>
      <div class="text-primary text-2xl">autos</div>
      <div>
       <router-link :to="{name:'ChatList'}"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#199CC5" class="w-8  h-8 mx-4">
        <path fill-rule="evenodd" d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 001.28.53l4.184-4.183a.39.39 0 01.266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0012 2.25zM8.25 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zm2.625 1.125a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clip-rule="evenodd" />
      </svg></router-link>
      </div>
      </div>
      <!-- create post -->
      <div class="flex  justify-center mt-10 mx-20 shadow-md mb-5 py-3"> 
        <img src="/assets/girl.jpg" class="h-10 w-10 rounded-full mx-5">
        <h1 @click="postModal=!postModal"  class="border border-2 bg-slate-100  w-96 px-4 py-2 rounded-full">create a post</h1>
      </div>
    <div class=" bg-white mx-5 px-5 h-full">
  <div class="bg-white grid grid-cols-1 shadow-md py-5">
    <div class="flex px-5">
     <img src="/assets/girl.jpg" class="h-10 w-10 rounded-full">
     <h1 class="my-2 mx-2">Mighty Shambel</h1>
    </div>
    <h1 class="px-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed tempora veritatis aut,<br> tenetur eum nesciunt exercitationem aliquid necessitatibus dolore</h1>
   <img src="/assets/doctors.jpg" class="py-1 w-full h-96">
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
</div>
</template>

<script>
import axios from 'axios';
    export default {
      data(){
    return{
      postModal:false,
      posts:'',
    }
      },
      methods:{
       
      },
     
      created(){
     try{
      console.log('mightyyyyyyyyyyyyyyyyyyyyyyyyyyy')
    axios
        .get(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => {
          // this.posts=  response.data.postRead
          // console.log(this.mydata)
          console.log( response.data)
        })
        .catch((error) => {
          console.log("eroor", error);
        });s
     }catch(e){

     }

}
    }
 
</script>

<style>

</style>