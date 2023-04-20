<template>
    <div>
        <!-- Navigation bar code -->
      <navbar></navbar>
      <main>
        <!-- Page content goes here -->
     <router-view></router-view>
      </main>
    </div>
  </template>
  
  <script>
import Navbar from '../components/Home/Navbar.vue';
  export default {
  components: {Navbar },
    name: 'AwarenessLayout'
  };
  </script>