<template>
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
import RelatedContent from '../../../components/Blog/RelatedContent.vue';
</script>
