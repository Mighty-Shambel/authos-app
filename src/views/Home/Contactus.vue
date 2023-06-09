<template>

<div class="shadow md flex min-h-full items-center justify-center py-10 sm:px-6 lg:px-8">
  <div class="w-full max-w-md space-y-8 ">
    <div>
      <img class="mx-auto h-12 w-auto" src="/assets/logo.jpg" alt="Your Company">
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Ads Submission Form</h2>
    </div>
    <form @submit.prevent="submitForm" class="mt-8 space-y-6" >
      <div class="-space-y-px rounded-md shadow-sm">
       <div>
          <label for="companyname" class="block text-sm font-medium leading-6 text-gray-900">Company Name</label>
          <div class="mt-2">
            <input  v-model="state.companyname" id="companyname" name="companyname" type="text"  placeholder="company name" class=" px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          <p v-if="v$.companyname.$error" class="text-red-600 text-sm py-1">
            <span>{{ v$.companyname.$errors[0].$message }} </span>
        </p>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input  v-model="state.email" id="email" name="email" type="email" autocomplete="email"  placeholder="abebe123@gmail.com" class=" px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          <p v-if="v$.email.$error" class="text-red-600 text-sm py-1">
            <span>{{ v$.email.$errors[0].$message }} </span>
        </p>
        </div>
        <div>
          <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Phone</label>
          <div class="mt-2">
            <input  v-model="state.phone" id="phone" name="phone" type="number" placeholder="phone" class=" px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          <p v-if="v$.phone.$error" class="text-red-600 text-sm py-1">
            <span>{{ v$.phone.$errors[0].$message }} </span>
        </p>
        </div>
        <div >
          <label for="desc">Description</label>
          <textarea v-model="state.desc" id="desc" name="desc" type="text" class="mt-1 relative block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Description"></textarea>
        </div>
        <p v-if="v$.desc.$error" class="text-red-600 text-sm py-1">
          <span>{{ v$.desc.$errors[0].$message }} </span>
      </p>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" class=" px-1 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
          <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
        </div>

        <div class="text-sm">
          <router-link  :to="{name:'ForgotPassword'}" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password?</router-link>
        </div>
      </div>

      <div>
        <button @click="submitForm" type="submit" class="group relative flex w-full justify-center rounded-md bg-primary py-2 px-3 text-sm font-semibold text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Submit
        </button>
      </div>
    </form>
   
  </div>
</div>
</template>

<script>

import axios from 'axios'
import Navbar from '../../components/Home/Navbar.vue';
import { required, email,minLength} from '@vuelidate/validators';
import {computed, reactive} from 'vue';
import useValidate from "@vuelidate/core";
export default {
  components: {Navbar},
  setup() {
        const state = reactive({
            companyname:"",
            email: "",
            phone:"",
            desc:"",
        })
        const rules = computed
        (() => {
            return {
                companyname:{required},
                email: {required, email},
                phone:{required,minLength: minLength(10)},
                desc:{required},
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
