<template>
  <navbar></navbar>
<div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:flex "> 
    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-10 rounded-lg p-5 pt-5">
<div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-grid-cols-2 pt-12">
  <div>
    <img src="/src/assets/food.jpeg" class="lg:pt-24">
  </div>
  <div class =" lg:pl-10">
    <h1 class="text-xl font-semibold pb-2 pt-10 ">Food Recomendations </h1>
    <p class="text-black ">
    1.While there is no “best autism diet,” there are certainly foods that can help improve your child’s autism symptoms and overall health. The best food for children with autism are fatty fish, eggs, grass-fed beef, sustainably raised animal proteins, shellfish, beans, nuts, and seeds. <br><br>
    2.Research has found that fatty fish such as salmon and free-range eggs share the healthy omega 3 acid. Foods that contain omega 3s help fight inflammation in the body. Low consumption of omega 3 fatty acids has been linked to autism, dyslexia, ADHD, depression, anxiety, and dyspraxia. It is recommended to have free-range eggs and/or fatty fish 3 times per week. Grass fed beef also contains healthy omega 3s, vitamin A, and vitamin E. Grass fed beef also contains fewer additives like hormones and antibiotics, which are found in free-range chicken and other animal protein.<br><br>
    3.Eating animal protein is also beneficial for kids with autism because it is an excellent source of vitamin B12. Vitamin B12 plays an important role in the nervous system and has been found to be beneficial to kids on the autism spectrum.
  </p>
  </div>
</div>
  </div>
  <div class="p-10 lg:pt-24 bg-slate-50">
    <h1 class="font-semibold pb-4 text-xl">Related Contents</h1>
    <div class="grid grid-cols-2  mb-5 shadow md w-96 md:w-48 lg:w-96 bg-white rounded md">
      <div>
        <img src="/src/assets/auth.webp" class="rounded-md">
      </div>
    <div class="pt-2 pr-5">
      <h1 class=" pl-5"><router-link :to="{name:'Definition'}">What is autism</router-link></h1>
    <p class="text-slate-500 pl-5 ">Autism is also known as Autism Spectrum Disorder (ASD) </p>
    </div>
    </div>
    <div class="grid grid-cols-2  mb-5 shadow md w-96 md:w-48 lg:w-96  bg-white rounded md">
      <div>
        <img src="/src/assets/symptom.jpg" class="rounded-md">
      </div>
    <div class="pt-2 pr-2">
      <h1 class="pl-5"><router-link :to="{name:'Symptom'}">Symptom of autism</router-link></h1>
    <p class="text-slate-500 pl-5">There are some signs of Autstic people avoiding eye contact....</p>
    </div>
    </div>
    <div class="grid grid-cols-2  mb-5 shadow md w-96 md:w-48 lg:w-96 bg-white rounded md">
      <div>
        <img src="/src/assets/causes.jpeg" class=" rounded-md">
      </div>
    <div class="pt-2 pr-2">
      <h1 class="pl-5"><router-link :to="{name:'Causes'}">Causes of autism</router-link></h1>
    <p class="text-slate-500 pl-5">There are some signs of Autstic people avoiding eye contact....</p>
    </div>
    </div>
    <div class="grid grid-cols-2  mb-5 shadow md w-96 md:w-48 lg:w-96  bg-white rounded md">
      <div>
        <img src="/src/assets/categories.jpg" class="rounded-md">
      </div>
    <div class="pt-2 pr-2">
      <h1 class=" pl-5"><router-link :to="{name:'Categories'}">Categories of autism</router-link> </h1>
    <p class="text-slate-500 pl-5">There are different types of autism, such as autistic disorder</p>
    </div>
    </div>
   
    <div class="grid grid-cols-2  mb-5 shadow md w-96 md:w-48 lg:w-96  bg-white rounded md">
      <div>
        <img src="/src/assets/food.jpeg" class="rounded-md">
      </div>
    <div class="pt-2 pr-2">
      <h1 class="  pl-5"><router-link :to="{name:'Recomended'}">Food Recomendations</router-link></h1>
    <p class="text-slate-500 pl-5">A healthy diet for people with autism means eating whole...</p>
    </div>
    </div>
    <div class="grid grid-cols-2  mb-5 shadow md w-96 md:w-48 lg:w-96  bg-white rounded md">
      <div>
        <img src="/src/assets/sugar.jpeg" class="rounded-md">
      </div>
    <div class="pt-2 pr-2">
      <h1 class="  pl-5"><router-link :to="{name:'NotRecomended'}">Not Recomended Food</router-link></h1>
    <p class="text-slate-500 pl-5">Dietary supplements have been proven to be very...</p>
    </div>
    </div>
    <div class="grid grid-cols-2  mb-5 shadow md w-96 md:w-48 lg:w-96  bg-white rounded md">
      <div>
        <img src="/src/assets/doctors.jpg" class="rounded-md">
      </div>
    <div class="pt-2 pr-2">
      <h1 class="  pl-5"><router-link :to="{name:'Doctors'}">Doctor Recomendations</router-link></h1>
    <p class="text-slate-500 pl-5">There are some doctors currently working on ...</p>
    </div>
    </div>
    <div class="grid grid-cols-2  mb-5 shadow md w-96 md:w-48 lg:w-96  bg-white rounded md">
      <div>
        <img src="/src/assets/organization.jpg" class="rounded-md">
      </div>
    <div class="pt-2 pr-2">
      <h1 class="  pl-5"><router-link :to="{name:'OrganizationRec'}">Organization Recomendations</router-link></h1>
    <p class="text-slate-500 pl-5">Autism Centers are mainly located in...</p>
    </div>
    </div>
</div>
  </div>
</div>
</template>

<script setup>
import Navbar from '../../../components/Navbar.vue';
Navbar
</script>

<style>

</style>