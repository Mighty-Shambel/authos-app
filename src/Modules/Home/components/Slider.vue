<template>
    <Splide :options="options" aria-label="My Favorite Images">
      <SplideSlide>
        <div class="flex">
          <img  class="object-fit " src="https://www.nolafamily.com/wp-content/uploads/2022/02/switchingdoctors-01.jpg" alt="Sample 1">
        </div>
        <div class="md:hidden">
      <button class=" bg-primary text-white text-sm w-20 m-3 px-4 py-1 rounded md">Sign in</button>
      </div>
    </SplideSlide>
      <SplideSlide  > 
        <img class="sm:h-[60vh]" src="https://img.freepik.com/free-vector/doctor-holding-syringe-standing-front-school-children-nurse-telling-about-benefit-vaccination-flat-vector-illustration-health-care-concept-banner-website-design-landing-web-page_74855-21805.jpg?w=2000" alt="Sample 2">
        <div class="md:hidden">
        <button class="bg-primary text-white text-sm w-20 m-3  py-1 rounded md">See more</button>
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