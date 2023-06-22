<template>
    <div
      class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div
        class="w-full max-w-md space-y-8 shadow-md mt-40 p-10 pl-30 pr-30 pt-5"
      >
        <div>
          <h2
            class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
          >
            Log in
          </h2>
        </div>
        <form @submit.prevent="login">
          <div class="grid grid-cols-1">
            <label class="mb-1">Email</label>
            <input
              id="email"
              type="email"
              v-model="state.email"
              class="border border-black mb-4 rounded-md p-1"
              placeholder="email"
            />
            <p v-if="v$.email.$error" class="text-red-600 text-sm py-1">
              <span>{{ v$.email.$errors[0].$message }} </span>
          </p>
            <label class="mb-1">Password</label>
            <input
              id="password"
              type="password"
              v-model="state.password"
              placeholder="password"
              class="border border-black rounded-md p-1"
            />
            <p v-if="v$.password.$error" class="text-red-600 text-sm py-1">
              <span>{{ v$.password.$errors[0].$message }} </span>
          </p>
          </div>
        </form>
  
        <button @click="login" class="ml-24 w-40 group relative flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white bg-tertiary ">Login</button>
      </div>
    </div>
  </template>
  
  <script>
 
import axios from 'axios'
import { required, email ,minLength } from '@vuelidate/validators';
import {computed, reactive} from 'vue';
import useValidate from "@vuelidate/core";
export default {
  setup() {
        const state = reactive({
            email: "",
            password: "",
        })
        const rules = computed
        (() => {
            return {
                email: {required, email},
                password: {required, minLength: minLength(8)}
            }
        });
        const v$ = useValidate(rules, state);
        return {state, v$}
    },
  methods: {
    async login() {
  console.log("form data", this.state);
  this.v$.$validate();
  if (!this.v$.$error) {
    try {
      const response = await axios.post(`http://192.168.8.159:3000/api/v1/auth/signin`, 
      {
        email:this.state.email,
        password:this.state.password,
      });
      console.log(response.data.payload.token);
      localStorage.setItem("token", response.data.payload.token);
      console.log(response.data);
      this.$router.push('/systemupdate');
    } catch (error) {
      console.log("error", error);
      if (error.response) {
        console.log("Status code:", error.response.status);
        console.log("Error message:", error.response.data.message);
        // Handle the error based on the status code
        // For example, you can display an appropriate error message or redirect to a specific route
        if (error.response.status === 401) {
          alert("Unauthorized: Please check your credentials");
        } else if (error.response.status === 404) {
          alert("Endpoint not found");
        } else {
          alert("An error occurred");
        }
      } else {
        console.log("Network error:", error.message);
        alert("Network error occurred");
      }
    }
  } else {
    alert("Failed to submit");
  }
}
  },
};
  </script>
  
  <style>
  </style>