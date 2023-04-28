<template>
  <div v-if="data" class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:flex "> 
    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-10 rounded-lg p-5 pt-5">
<div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-grid-cols-2 pt-12">
  <div>
    <img :src="data.image" class="lg:pt-24">
  </div>
  <div class=" lg:pl-10">
    <h1 class="text-xl font-semibold pb-2 pt-10 ">{{data.title}}</h1>
    <p class="text-black">
   {{data.detail}}
     </p>
  </div>
</div>
  </div>
  <div class="p-10 lg:pt-24 bg-slate-50">
    <h1 class="font-semibold pb-4 text-xl">Related Contents</h1>
    <div
    v-for="awareness in data" 
    :key="awareness.id"
     class="grid grid-cols-2  mb-5 shadow md w-96 md:w-48 lg:w-96 bg-white rounded md">
      <div>
        <img :src="awareness.image" class="rounded-md">
      </div>
    <div class="pt-2 pr-5">
      <h1 class=" pl-5">{{awareness.title }}</h1>
    <p class="text-slate-500 pl-5 ">{{ awareness.desc }}</p>
    </div>
    </div>
   
</div>
  </div>
</div>
<div v-else class="grid grid-cols-1 place-items-center py-72">
  <p  class="text-2xl ">Page Not Found</p>
</div>
</template>

<script setup>
import {useRoute} from 'vue-router'
import {ref,onBeforeMount} from 'vue'
import Data from '../data.json'
const route=useRoute()
const data = ref(Data)
const {id}=route.params
onBeforeMount(()=>{
   data.value=Data.find(c=>c.id === parseInt(id))
})
</script>
