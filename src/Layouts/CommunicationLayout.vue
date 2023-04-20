<template>
    <div>
        <!-- Navigation bar code -->
   <communication></communication>
      <main>
        <!-- Page content goes here -->
     <router-view></router-view>
      </main>
     
    </div>
  </template>
  
  <script>
import Communication from '../components/Communication/Communication.vue';
  export default {
  components: { Communication},
    name: 'HomeLayout'
  };
  </script>