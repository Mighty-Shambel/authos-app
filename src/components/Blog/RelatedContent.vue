<template>
    <div class="grid grid-cols-2  mb-5 shadow md w-96 md:w-48 lg:w-96 bg-white rounded md">
        <div>
          <img :src="image" class="rounded-md">
        </div>
      <div class="pt-2 pr-5">
        <h1 class=" pl-5">{{ title }}</h1>
      <p class="text-slate-500 pl-5 ">{{ desc }}</p>
      </div>
      </div>
</template>

<script>
export default {
props:{
    title:String,
    image:String,
    desc:String
}
}
</script>

<style>

</style>