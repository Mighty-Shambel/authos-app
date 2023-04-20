<template>
    <div>
        <!-- Navigation bar code -->
      <navbar></navbar>
      <main>
        <!-- Page content goes here -->
     <router-view></router-view>
      </main>
        <!-- Footer code -->
      <my-footer/>
    </div>
  </template>
  
  <script>
import MyFooter from '../components/Home/MyFooter.vue';
import Navbar from '../components/Home/Navbar.vue';
  export default {
  components: { MyFooter,Navbar },
    name: 'HomeLayout'
  };
  </script>