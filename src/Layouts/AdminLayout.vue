<template>
    <div>
        <!-- Admin Sidebar  code -->
     <TheSidebar/>
    </div>
  </template>
  
  <script>
import TheSidebar from '../components/TheSidebar.vue';
  export default {
  components: {TheSidebar },
    name: 'AdminLayout'
  };
  </script>