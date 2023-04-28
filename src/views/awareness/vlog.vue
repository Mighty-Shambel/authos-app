<template>
  <div 
  v-for="info in data"
  :key="info.id"
  @click="router.push(`/awareness/${info.id}`)"
  >
    <p>{{ info.title }}</p>
    {{ info.desc }}
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router'
import Data from '../../data.json'
import {ref} from 'vue'

const data =ref(Data)
const router =useRouter()
</script>
