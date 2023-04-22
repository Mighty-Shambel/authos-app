<template>
  <slider></slider>
  <about></about>
  <contactus></contactus>
</template>

<script setup>


import Slider from '../../../components/Home/Slider.vue';
import About from './About.vue';
import Contactus from './Contactus.vue';




components: { Slider,About,Contactus }
</script>

<style>

</style>