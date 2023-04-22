<template>
    <div>
        <!-- Moderator Sidebar code -->
     <ModSidebar/>
    </div>
  </template>
  
  <script>
import ModSidebar from '../components/ModSidebar.vue';
  export default {
  components: {ModSidebar },
    name: 'ModeratorLayout'
  };
  </script>