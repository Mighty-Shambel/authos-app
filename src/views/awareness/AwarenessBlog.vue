<template>
      <div>
      <!-- search bar -->
      <div class="px-16 mt-10">
            <div class="">
                              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                       viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path fill-rule="evenodd"
                                            info="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clip-rule="evenodd"></path>
                                  </svg>
                              </div>
                              <input type="text" id="simple-search"
                                     class="bg-gray-50 w-96 sm:w-36 lg:w-96  border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-primary focus:border-primary block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                     placeholder="Search" required>
                          </div>
      </div>
      <div class="flex">
        <div class="grid grid-cols-3 ml-12">
            <div 
            v-for="awareness in data" 
            :key="awareness.id"
            class="border m-5 border-slate rounded-t-lg w-72 "
            @click="router.push(`/awareness/${awareness.id}`)"
            >
                  <img  class="rounded-t-lg" :src="awareness.image">
              <p class="font-semibold mt-2">{{ awareness.title }}</p>
              {{ awareness.desc }}
            </div>
            
           </div>
           <div class="ml-24 ">
            <h1 class="font-semibold text-xl mb-5 pt-4">Latest Post</h1>
            <div class="grid grid-cols-1">
                <div 
                v-for="awareness in data" 
                :key="awareness.id"
                @click="router.push(`/awareness/${awareness.id}`)"
                class=" flex mb-3 border border-slate rounded-full "
                >
                <img  class=" h-12 w-12 rounded-full" :src="awareness.image">
                  <p class=" mt-2 p-2 ">{{ awareness.title }}</p>
                </div>
                
               </div>
        </div>
          
      </div>
      
</div>
    </template>
    
    <script setup>
    import { useRouter } from 'vue-router';
    import Data from '../../data.json'
    import {ref} from 'vue'

    const router=useRouter()
    
    const data =ref(Data)
    </script>