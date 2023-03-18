<template>
    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
   
    <div class="grid grid-cols-1 md:grid-cols-2 lg:flex"> 
      <div class="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-3 gap-10  rounded-lg  pt-10 p-10">
  <div class="shadow md hover:border-2"><img src="/src/assets/auth.webp" class="rounded-lg right-0 w-full pb-3 ">
    <h1 class="text-xl font-semibold pb-2 pl-5">What is Autism ?</h1>
    <p class="text-slate-500 pl-5 pb-3">Autism is also known as Autism Spectrum <br>Disorder (ASD). ‘Spectrum’
       refers to... </p>
       <p class="pl-5 pb-3 text-primary"><router-link :to="{name:'Definition'}">Read more</router-link></p>
  </div>
  <div class="shadow md hover:border-2"><img src="/src/assets/symptom.jpg" class="rounded-lg right-0 w-full pb-3 ">
    <h1 class="text-xl font-semibold pb-2 pl-5">Symptoms of Autism</h1>
    <p class="text-slate-500 pl-5 pb-3">There are some signs of Autstic people avoiding eye contact....</p>
       <p class="pl-5 pb-3 text-primary"><router-link :to="{name:'Symptom'}">Read more</router-link></p>
  </div>
  <div class="shadow md hover:border-2"><img src="/src/assets/causes.jpeg" class="rounded-lg right-0 w-full pb-3  ">
    <h1 class="text-xl font-semibold pb-2 pl-5">Cause of Autism</h1>
    <p class="text-slate-500 pl-5 pb-3">Autism spectrum disorder has no single known cause. Given the complexity ...</p>
       <p class="pl-5 pb-3 text-primary"><router-link :to="{name:'Causes'}">Read more</router-link></p>
  </div>
  
  <div class="shadow md hover:border-2"><img src="/src/assets/categories.jpg" class="rounded-lg right-0 w-full pb-3  ">
    <h1 class="text-xl font-semibold pb-2 pl-5">Categories of autism</h1>
    <p class="text-slate-500 pl-5 pb-3">There are different types of autism, such as autistic disorder... </p>
       <p class="pl-5 pb-3 text-primary"><router-link :to="{name:'Categories'}">Read more</router-link></p>
  </div>
  <div class="shadow md hover:border-2"><img src="/src/assets/food.jpeg" class="rounded-lg right-0 w-full pb-3  ">
    <h1 class="text-xl font-semibold pb-2 pl-5">Recomended Foods</h1>
    <p class="text-slate-500 pl-5 pb-3">A healthy diet for people with autism means eating whole foods such as...</p>
       <p class="pl-5 pb-3 text-primary"><router-link :to="{name:'Recomended'}">Read more</router-link></p>
  </div>
  <div class="shadow md hover:border-2"><img src="/src/assets/sugar.jpeg" class="rounded-lg right-0 w-full pb-3  ">
    <h1 class="text-xl font-semibold pb-2 pl-5"> Not Recomended Foods</h1>
    <p class="text-slate-500 pl-5 pb-3">A healthy diet for people with autism means eating whole foods such as...</p>
       <p class="pl-5 pb-3 text-primary"><router-link :to="{name:'NotRecomended'}">Read more</router-link></p>
  </div>
  <div class="shadow md hover:border-2"><img src="/src/assets/doctors.jpg" class="rounded-lg right-0 w-full pb-3  ">
    <h1 class="text-xl font-semibold pb-2 pl-5">Doctor Recomendations</h1>
    <p class="text-slate-500 pl-5 pb-3">There are some doctors currently working on autism in diffrent corner...</p>
       <p class="pl-5 pb-3 text-primary"><router-link :to="{name:'Doctors'}">Read more</router-link></p>
  </div>
  <div class="shadow md hover:border-2"><img src="/src/assets/organization.jpg" class="rounded-lg right-0 w-full pb-3   ">
    <h1 class="text-xl font-semibold pb-2 pl-5">Organization Recomendations</h1>
    <p class="text-slate-500 pl-5 pb-3 pr-5">Autism Centers are mainly located in certain areas of the country Which are...</p>
       <p class="pl-5 pb-3 text-primary"><router-link :to="{name:'Organization'}">Read more</router-link></p>
  </div>
  
    </div>
    <div class="p-5 pt-10">
      <h1 class="font-semibold pb-4 text-xl">Latest Posts</h1>
      <div class="flex shadow md rounded-full mb-4 w-72 hover:border-2 "><img src="/src/assets/auth.webp" class="h-14 w-14 rounded-full "><p class="pl-3 pt-3">What is Autism</p></div>
      <div class="flex shadow md rounded-full mb-4 w-72 hover:border-2"><img src="/src/assets/categories.jpg" class="h-14 w-14 rounded-full "><p class="pl-3 pt-3">Categories of Autism</p></div>
      <div class="flex shadow md rounded-full mb-4 w-72 hover:border-2"><img src="/src/assets/symptom.jpg" class="h-14 w-14 rounded-full "><p class="pl-3 pt-3">Symptoms of Autism</p></div>
      <div class="flex shadow md rounded-full mb-4 w-72 hover:border-2"><img src="/src/assets/food.jpeg" class="h-14 w-14 rounded-full "><p class="pl-3 pt-3">Food Recomendations</p></div>
  </div>
    </div>
  </div>
  </template>
  
  <script>
  export default {
     
    }
  
  
  </script>
  
  <style>
  
  </style>