<template>
    <div class="flex shadow md rounded-full mb-4 w-72 hover:border-2 ">
        <img :src="image" class="h-14 w-14 rounded-full ">
        <p class="pl-3 pt-3">{{ title }}</p></div>
</template>

<script>
export default {
props:{
    title:String,
    image:String,
}
}
</script>

<style>

</style>