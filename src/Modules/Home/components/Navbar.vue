<template>
  <div class="py-3.5 px-6 shadow md:flex justify-between items-center ">
 <div class="flex items-center">
<span class=" flex text-xl mr-1">
<!-- <img class="h-10 w-10" src="/assets/logo.jpg" > -->
<p>Autos</p>
</span>
<span class="md:hidden absolute right-5 top-3.5" >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</svg>

</span>
</div>
 
 <ul class="md:flex md:items-center md:px-0 px-3 md:pb-0 pb-10 md:static absolute md:w-auto w-full top-14 duration-700 ease-in" :class="[open?'left-0':'left-[-100%]']" >
    <li class="md:mx-4 md:my-0 my-6 ">
        <router-link :to="{name:'LandingPage'}" class="hover:text-primary">Home</router-link>
    </li>
    <li class="md:mx-4 md:my-0 my-6">
        <router-link :to="{name:'About'}" class="hover:text-primary">About</router-link>
    </li>
    <li class="md:mx-4 md:my-0 my-6">
        <router-link :to="{name:'Contactus'}" class="hover:text-primary">Contact us</router-link>
    </li>
    <li class="md:mx-4 md:my-0 my-6">
        <router-link :to="{name:'Signin'}" class="text-primary">Sign In</router-link>
    </li>
 </ul>
  </div>
</template>

<script setup >
let open=false
</script>

<style>

</style>
