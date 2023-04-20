<template>
 <div class="bottom-0 z-30">
      <div class=" bg-slate-100 text-black">
         <div class="pl-16 pt-1 pb-1 mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               <div class="lg:pl-4">
                  <strong class="font-semibold">Autos</strong><br>
             <p >is a platform specifically built for <br>autism community 
               to create awareness <br>and make communication easier.<br>
               <strong>Phone:</strong>+251-995-744-599<br>
               <strong>Email:</strong>autosapp@gmail.com<br></p>
              </div>
              <div class="lg:px-48">
               <ul>
                  <li class="pb-1"><router-link :to="{name:'AwarenessBlog'}" class="hover:text-primary">Awareness</router-link></li>
                  <li class="pb-1"><router-link :to="{name:'About'}" class="hover:text-primary">About</router-link></li>
                  <li class="pb-1"><router-link :to="{name:'Contactus'}" class="hover:text-primary">Contact us</router-link></li>
                  <li class="pb-1"><router-link :to="{name:'Signin'}" class="hover:text-primary">Sign in</router-link></li>
               </ul>
              </div>
              <div class="lg:px-44">
               <ul>
                  <li class="pb-1"><router-link :to="{name:'Privacypolicy'}" class="hover:text-primary">Privacy Policy</router-link></li>
                  <li class="pb-1"><router-link :to="{name:'Termsofuse'}" class="hover:text-primary">Terms of use</router-link></li>
               </ul>
              </div>
            </div>
         </div>
         
      </div>
      <div class="grid justify-items-center bg-primary w-full text-white py-3">
         Copyright © 2023, All Rights Reserved.
            </div>
        </div> 
</template>

<script setup>

</script>

<style>

</style>