<template>
        <div class="flex  items-center justify-center sm:px-6 lg:px-8">
    <div class="w-full mr-64 pr-96  pl-20">
      <div>
        <h2 class=" flex justify-start mt-16 text-center text-3xl font-bold tracking-tight text-gray-900 ">Confirmation Code </h2>
      </div>
      <form  @submit.prevent="submitForm" class="mt-8 space-y-6">
        <div class="-space-y-px rounded-md shadow-sm">
            <div class="pb-2" >
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirmation code</label>
          <input v-model="state.code" id="code" name="code" type="text" class="relative block w-full appearance-none  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="code">
          <p v-if="v$.code.$error" class="text-red-600 text-sm py-1">
            <span>{{ v$.code.$errors[0].$message }} </span>
        </p>
        </div>
        </div>
  
        <div class="flex justify-start">
          <button @click="submitForm" type="submit" class=" w-40 group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white bg-tertiary ">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>

  </template>
  
  <script>
 import axios from 'axios'
import { required} from '@vuelidate/validators';
import {computed, reactive} from 'vue';
import useValidate from "@vuelidate/core";
export default {
  setup() {
        const state = reactive({
            code: ""
        })
        const rules = computed
        (() => {
            return {
                code: {required},
            }
        });
        const v$ = useValidate(rules, state);
        return {state, v$}
    },
  methods: {
   async submitForm() {
    
      console.log("form data", this.state);
      this.v$.$validate()
            if (!this.v$.$error) {        
      await axios
        .post(`http://192.168.8.187:3000/api/v1/auth/signin`, this.state)
        .then((response) => {
          console.log(response.data.payload.token);
          localStorage.setItem("token", response.data.payload.token)
          console.log(response.data)
          this.$router.push('/feed');
        })
        .catch((error) => {
          console.log("eroor", error);
          // console.log("errrrrrrrrrrrrrrrrrrrr", error.response.data.message);
        });
      // console.warn(result)
            } else {
                alert("Failed to submit")
            }
    },
  },
};
  </script>
  
  <style>
  
  </style>