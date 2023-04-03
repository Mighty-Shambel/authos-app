<template>
    <Splide :options="options" aria-label="My Favorite Images"  class="my-10" >
      <SplideSlide>
        <div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <div >
          <p class="text:text-sm lg:mt-48 md:mt-20 px-5 lg:px-20 ">The Sign in page will lead you to the social media platform made for the parents,health professionals and Organizations to share thier experiences.Which helps the parents to be more active and participate in different training's discussions and learn from other parents experience</p>
          <router-link :to="{name:'Signin'}"><button class="ml-5 lg:ml-20  mt-5 bg-primary text-white text-sm w-20 m-3  py-1 rounded md">Sign in</button></router-link>
        </div>
          <img  class=" hidden md:block object-fit " src="https://www.nolafamily.com/wp-content/uploads/2022/02/switchingdoctors-01.jpg" alt="Sample 1">
       
      </div>
    </SplideSlide>
      <SplideSlide > 
        <div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <div class="">
          <p class="text:text-sm sm:mt-28 lg:mt-48 px-5 lg:px-20">These pages will lead you to different informations such as the definitions of autism,categories of autism,causes of autism,symptoms of autism,food recommendations,doctor recomendations and organization recomendations to create a clear understanding on autism.</p>
          <router-link :to="{name:'AwarenessBlog'}"><button class="ml-5 lg:ml-20 mt-5 md:ml-0 bg-primary text-white text-sm w-20 m-3  py-1 rounded md">See more</button></router-link>
        </div>
          <img class="hidden md:block mx-w-auto" src="https://img.freepik.com/free-vector/doctor-holding-syringe-standing-front-school-children-nurse-telling-about-benefit-vaccination-flat-vector-illustration-health-care-concept-banner-website-design-landing-web-page_74855-21805.jpg?w=2000" alt="Sample 2">
      </div>
      </SplideSlide>
    </Splide>
    
   
  </template>
  
  
  <script>
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import { defineComponent } from 'vue';
  
  // Default theme



// or other themes
import '@splidejs/vue-splide/css/skyblue';
import '@splidejs/vue-splide/css/sea-green';


// or only core styles
import '@splidejs/vue-splide/css/core';
  export default defineComponent( {
    components: {
      Splide,
      SplideSlide,
    },
  
  
    setup() {
      const options = {
        rewind: true,
        gap   : '1rem',
      };
  
  
      return { options };
    },
  } );
  </script>