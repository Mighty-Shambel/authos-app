<template>
    <div class="shadow md hover:border-2">
        <img :src="imageUrl" class=" rounded-lg right-0 w-full pb-3 ">
        <h1 class="text-xl font-semibold pb-2 pl-5">{{ title }}</h1>
        <p class="text-slate-500 pl-5 pb-3">{{ desc }}</p>
      </div>
  </template>
  
  <script>
  export default {
  
      props:{
          title:String,
          desc:String,
          imageUrl:String
      }
  }
  </script>
  
  <style>
  
  </style>