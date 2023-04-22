<template>
  <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:flex "> 
    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-10 rounded-lg p-5 pt-5">
<div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-grid-cols-2 pt-12">
  <div>
    <img src="/src/assets/categories.jpg" class="lg:pt-24">
  </div>
  <div class=" lg:pl-10">
    <h1 class="text-xl font-semibold pb-2 pt-10 ">Categories of Autism </h1>
    <p class="text-black">
    1.Asperger’s Syndrome:Although the term Asperger’s syndrome was quite common before 2013, the term is actually no longer used by medical professionals. It has since been reclassified as level 1 autism spectrum disorder by the DSM-5 diagnostic manual. Still, Asperger’s syndrome may be used informally — in fact, autism communities use it more often than level 1 spectrum disorder.<br>
    2.Rett Syndrome:Rett syndrome is a rare neurodevelopmental disorder that is noticed in infancy. The disorder mostly affects girls, although it can still be diagnosed in boys. Rett syndrome presents challenges that affect almost every aspect of a child's life. The good thing is your child can still enjoy and live a fulfilling life with the proper care. You can have family time together and provide support to allow the child to do what they enjoy.<br>
    3.Childhood Disintegrative Disorder (CDD):Childhood disintegrative disorder (CDD), also known as Heller's syndrome or disintegrative psychosis, is a neurodevelopmental disorder defined by delayed onset of developmental problems in language, motor skills, or social function. A child experiences normal development in these areas only to hit a snag after age three and up to age 10. The developmental loss can be very heartbreaking for parents who had no idea their child had autism challenges all along.
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
