<template>
    <div class="hidden lg:block grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 bg-gradient-to-l from-primary  p-16 pl-40 pr-40">
        <div class="grid grid-cols-1 md:gird-cols-1 lg:grid-cols-2 shadow-2xl">
      
         <socialmedia></socialmedia>
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 p-10 lg:pt-32 lg:pl-20 md:pt-10 bg-white  ">
        <div class="w-full max-w-md space-y-8">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="1.25 4 5.75 6">
      <path d="M 2 4 C 1 4 1 5 2 5 C 1 5 1 6 2 6 C 1 6 1 7 2 7 C 1 7 1 8 2 8 C 1 8 1 9 2 9 C 1 9 1 10 2 10 M 7 5" fill=""/>
    </svg> -->
    <div>
      <h2 class="mt-6 text-center text-2xl font-semibold tracking-tight text-gray-900">Parent</h2>
    </div>
    <form @submit.prevent="login" class="mt-8 space-y-6" >
      <div class="-space-y-px rounded-md shadow-sm">
        <div>
          <label for="fname" class=" block text-sm font-medium leading-6 text-gray-900">First Name</label>
          <div class="mt-2">
            <input  v-model="state.firstName" id="firstName" name="firstName" type="text"  placeholder="first name" class=" px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          <p v-if="v$.firstName.$error" class="text-red-600 text-sm py-1">
            <span>{{ v$.firstName.$errors[0].$message }} </span>
        </p>
        </div>
        <div>
          <label for="fname" class="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
          <div class="mt-2">
            <input  v-model="state.lastName" id="lastName" name="lastName" type="text"   placeholder="last name" class=" px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          <p v-if="v$.lastName.$error" class="text-red-600 text-sm py-1">
            <span>{{ v$.lastName.$errors[0].$message }} </span>
        </p>
        </div>
        <div>
          <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Phone</label>
          <div class="mt-2">
            <input  v-model="state.phone" id="phone" name="phone" type="number"  placeholder="phone" class="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          <p v-if="v$.phone.$error" class="text-red-600 text-sm py-1">
            <span>{{ v$.phone.$errors[0].$message }} </span>
        </p>
        </div>
      <div>
        <label
            for="reltionship"
            class="
              block
              text-sm
              font-medium
              text-gray-900
              dark:text-white
              pb-2
            "
            >Relationship</label
          >
          <select v-model="state.selectedItem" id="selectedItem" name="selectedItem" class="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" validationRules="required">
            <option disabled value="">Select relation</option>
            <option v-for="item in state.dropdownItems" :key="item" :value="item">{{ item }}</option>
          </select>
          <p v-if="v$.selectedItem.$error" class="text-red-600 text-sm py-1">
            <span>{{ v$.selectedItem.$errors[0].$message }}</span>
          </p>
      </div>
      </div>

      <div>
        <button @click="login" type="button" class=" mb-5 group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-blue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Submit
        </button>
      </div>
    </form>
        </div>
      </div>
      </div>
      </div>
        <!-- Mobile view -->
        <div class="xl:hidden lg:block flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-40">
        <div class="w-full max-w-md space-y-8 shadow-md p-5">
          <div>
      <h2 class="mt-6 text-center text-2xl font-semibold tracking-tight text-gray-900">Parent</h2>
    </div>
    <form  @submit.prevent="login" class="mt-8 space-y-6">
      <div class="-space-y-px rounded-md shadow-sm">
        <div>
          <label for="fname" class="block text-sm font-medium leading-6 text-gray-900">First Name</label>
          <div class="mt-2">
            <input  v-model="state.firstName" id="firstName" name="firstName" type="text" validationRules="required"  placeholder="first name" class="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          <p v-if="v$.firstName.$error" class="text-red-600 text-sm py-1">
            <span>{{ v$.firstName.$errors[0].$message }} </span>
        </p>
        </div>
        <div>
          <label for="fname" class="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
          <div class="mt-2">
            <input  v-model="state.lastName" id="lastName" name="lastName" type="text" validationRules="required"  placeholder="last name" class="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          <p v-if="v$.lastName.$error" class="text-red-600 text-sm py-1">
            <span>{{ v$.lastName.$errors[0].$message }} </span>
        </p>
        </div>
        <div>
          <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Phone</label>
          <div class="mt-2">
            <input  v-model="state.phone" id="phone" name="phone" type="number" validationRules="required"  placeholder="phone" class="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          <p v-if="v$.phone.$error" class="text-red-600 text-sm py-1">
            <span>{{ v$.phone.$errors[0].$message }} </span>
        </p>
        </div>
      <div>
        <label
            for="relationship"
            class="
              block
              text-sm
              font-medium
              text-gray-900
              dark:text-white
              pb-2
            "
            >Relationship</label
          >
          <select v-model="state.selectedItem" id="selectedItem" name="selectedItem" class="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" validationRules="required">
            <option disabled value="">Select relation</option>
            <option v-for="item in state.dropdownItems" :key="item" :value="item">{{ item }}</option>
          </select>
          <p v-if="v$.selectedItem.$error" class="text-red-600 text-sm py-1">
            <span>{{ v$.selectedItem.$errors[0].$message }}</span>
          </p>
      </div>
      </div>
      <div>
        <button @click="login" type="button" class=" mb-5 group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-blue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Submit
        </button>
      </div>
    </form>
        </div>
      </div>
    </template>
    
    <script >
  import axios from 'axios'
import Socialmedia from '../../../components/communication/Socialmedia.vue';
import { required,minLength } from '@vuelidate/validators';
import {computed, reactive} from 'vue';
import useValidate from "@vuelidate/core";
     export default{
     components:{Socialmedia},
     
  setup() {
        const state = reactive({
          firstName: '',
          lastName:'',
          phone:'',
          selectedItem: '',
          dropdownItems: ['Family', 'Uncle/Aunt', 'Care taker','other'] // Replace with your actual dropdown items
        })
        const rules = computed
        (() => {
            return {
                firstName: {required},
                lastName: {required},
                selectedItem: { required },
                phone: {required, minLength: minLength(10)}
            }
        });
        const v$ = useValidate(rules, state);
        return {state, v$}
    },
methods: {
   async login() {
    console.log("form data", this.state);
      this.v$.$validate()
            if (!this.v$.$error) { 
      await axios
        .post(`http://192.168.8.187:3000/api/v1/auth/signin`, this.formData)
        .then((response) => {
          console.log(response.data.payload.token);
          localStorage.setItem("token", response.data.payload.token)
          console.log(response.data)
          this.$router.push('/feed');
        })
        .catch((error) => {
          console.log("eroor", error);
        });
      } else {
                alert("Failed to submit")
            }
    },
  },
     }
    </script>
