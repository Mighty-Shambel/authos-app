<template>
  <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:flex "> 
    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-10 rounded-lg p-5 pt-5">
<div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-grid-cols-2 pt-12">
  <div>
    <img src="/src/assets/auth.webp" class="lg:pt-24">
  </div>
  <div class =" lg:pl-10">
    <h1 class="text-xl font-semibold pb-2 pt-10 ">What is Autism </h1>
  <p class="text-black">Autism is also known as Autism Spectrum <br>Disorder (ASD). ‘Spectrum’
     refers to Autism is also known as Autism Spectrum Disorder (ASD). ‘Spectrum’ refers to the wide range of characteristics, skills and abilities that different people with Autism have. No two people are affected by Autism in exactly the same way. Every person experiences Autism differently and has different support needs. Although the core characteristics of Autism can cause a range of challenges, it is important to recognise that they can also result in unique skills and capabilities.
     While Autism is a life-long condition, with appropriate and tailored support, children and Adults with Autism can make significant progress and live fulfilling lives. Consequently, it is imperative that people with Autism have access to specialist services that understand their needs and are experienced in developing their skills and strengths. </p>
  </div>
</div>
  </div>
  <div class="p-10 lg:pt-24 bg-slate-50">
    <h1 class="font-semibold pb-4 text-xl">Related Contents</h1>
   <related-content 
   title="What is Autism"
   image="/src/assets/auth.webp"
   desc="Autism is also known as Austistic spectrum disorder"
   />
   <related-content 
   title="Symptom of autism"
   image="/src/assets/symptom.jpg"
   desc="There are some signs of Autstic people avoiding eye contact...."
   />
   <related-content 
   title="Causes of autism"
   image="/src/assets/causes.jpeg"
   desc="There are some signs of Autstic people avoiding eye contact...."
   />
   <related-content 
   title="Categories of autism"
   image="/src/assets/categories.jpg"
   desc="There are different types of autism, such as autistic disorder"
   />
   <related-content 
   title="Food Recomendations"
   image="/src/assets/food.jpeg"
   desc="A healthy diet for people with autism means eating whole..."
   />
   <related-content 
   title="Not Recomended Food"
   image="/src/assets/sugar.jpeg"
   desc="Dietary supplements have been proven to be very..."
   />
   <related-content 
   title="Doctor Recomendations"
   image="/src/assets/doctors.jpg"
   desc="There are some doctors currently working on ..."
   />
   <related-content 
   title="Organization Recomendations"
   image="/src/assets/organization.jpg"
   desc="Autism Centers are mainly located in..."
   />
</div>
  </div>
</div>
</template>

<script setup>
import RelatedContent from '../../components/Blog/RelatedContent.vue';
</script>
