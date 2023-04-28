<template>
  <Slider/>
  <About/>
  <Contactus/>
</template>

<script setup>


import Slider from '../../components/home/Slider.vue'
import About from './About.vue';
import Contactus from './Contactus.vue';




components: { Slider,About,Contactus }
</script>

<style>

</style>