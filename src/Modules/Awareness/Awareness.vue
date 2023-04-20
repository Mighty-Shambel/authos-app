<template>
  <section class="destination">
  <h1>{{ destination.title }}</h1>
  <div class="destination-details">
    <img :src="`/assets/${destination.image}`" :alt='destination.name'> 
    <p>{{ destination.image }}</p>
  </div>
  <h2>This is the destination{{ $route.params.id }}</h2>
</section>
</template>

<script>
import sourceData from '../../data.json'
export default {
 computed:{
    destinationId(){
        return parseInt(this.$route.params.id)
    },
    destination(){
    return sourceData.destinations.find(destination =>destination.id === this.desitnationId)
    }
 }
  }
</script>

<style>

</style>