<template>
  <navbar></navbar>
  <slider></slider>
  <about></about>
  <contactus></contactus>
  <my-footer></my-footer>
</template>

<script setup>

import Navbar from '../../../components/Navbar.vue';
import Slider from '../../../components/Slider.vue';
import MyFooter from '../../../components/MyFooter.vue';
import About from './About.vue';
import Contactus from './Contactus.vue';




components: { Navbar,Slider,MyFooter,About,Contactus }
</script>

<style>

</style>