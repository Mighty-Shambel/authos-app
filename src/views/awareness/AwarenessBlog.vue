<template>
  <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
    <div class="flex pl-10 ">
  <div class=" flex flex-row justify-between pt-10">
                          <div class="relative">
                              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                       fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path fill-rule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clip-rule="evenodd"></path>
                                  </svg>
                              </div>
                              <input type="text" id="simple-search"
                                     class="bg-gray-50 w-96 md:w-24 lg:w-96  border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-primary focus:border-primary block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                     placeholder="Search" required>
                          </div>
                      </div>
</div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:flex"> 
    <div class="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-3 gap-10  rounded-lg  pt-10 p-10">
<Blog
      imageUrl="/src/assets/auth.webp"
      title="What is Autism"
      desc="Autism is also known as Autism Spectrum Disorder (ASD). ‘Spectrum’"
/>
<Blog
      imageUrl="/src/assets/symptom.jpg"
      title="Symptoms of Autism"
      desc="There are some signs of Autstic people avoiding eye contact...."
/>
<Blog
      imageUrl="/src/assets/causes.jpeg"
      title="Cause of Autism"
      desc="Autism spectrum disorder has no single known cause. Given the complexity ..."
/>
<Blog
      imageUrl="/src/assets/categories.jpg"
      title="Categories of autism"
      desc="There are different types of autism, such as autistic disorder... "
/>
<Blog
      imageUrl="/src/assets/food.jpeg"
      title="Recomended Foods"
      desc="A healthy diet for people with autism means eating whole foods such as..."
/>
<Blog
      imageUrl="/src/assets/sugar.jpeg"
      title="Not Recomended Foods"
      desc="A healthy diet for people with autism means eating whole foods such as..."
/>
<Blog
      imageUrl="/src/assets/doctors.jpg"
      title="Doctor Recomendations"
      desc="There are some doctors currently working on autism in diffrent corner..."
/>
<Blog
      imageUrl="/src/assets/organization.jpg"
      title="Organization Recomendations"
      desc="Autism Centers are mainly located in certain areas of the country Which are..."
/>
  </div>
  <div class="p-5 pt-10">
    <h1 class="font-semibold pb-4 text-xl">Latest Posts</h1>
   <LatestPost
   title="what is autism"
   image="/src/assets/auth.webp"
   />
   <LatestPost
   title="Categories of autism"
   image="/src/assets/categories.jpg"
   />
   <LatestPost
   title="Symptoms of autism"
   image="/src/assets/symptom.jpg"
   />
   <LatestPost
   title="Food Recomendations"
   image="/src/assets/food.jpeg"
   />
</div>
  </div>
</div>
</template>

<script>
import Blog  from '../../components/Blog/Blog.vue'
import LatestPost from '../../components/Blog/LatestPost.vue'
export default {
components: {Blog, LatestPost },
  }


</script>

<style>

</style>