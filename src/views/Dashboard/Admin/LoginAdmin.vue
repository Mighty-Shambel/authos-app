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
              v-model="formData.email"
              class="border border-black mb-4 rounded-md p-1"
              placeholder="email"
            />
            <label class="mb-1">Password</label>
            <input
              id="password"
              type="password"
              v-model="formData.password"
              placeholder="password"
              class="border border-black rounded-md p-1"
            />
          </div>
        </form>
  
        <button @click="login" class="ml-24 w-40 group relative flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white bg-tertiary ">Login</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        formData: {
          email: "",
          password: "",
          user_type: "Parent",
        },
      };
    },
    methods: {
      async login() {
        console.log("form data", this.formData);
        axios
          .post(`http://192.168.8.101:7000/api/v1/auth/signin`, this.formData)
          .then((response) => {
            console.log(response.data.payload.token);
            localStorage.setItem("token", response.data.payload.token)
            this.$router.push('/systemupdate');
          })
          .catch((error) => {
            console.log("eroor", error);
            console.log("errrrrrrrrrrrrrrrrrrrr", error.response.data.message);
          });
        //console.warn(result)
      },
    },
  };
  </script>
  
  <style>
  </style>