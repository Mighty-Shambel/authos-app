<template>
    <div class="hidden lg:block grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 bg-gradient-to-l from-primary  p-24 pl-40 pr-40">
        <div class="grid grid-cols-1 md:gird-cols-1 lg:grid-cols-2 shadow-2xl">
         <socialmedia></socialmedia>
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 p-10 lg:pt-44 lg:pl-20 md:pt-10 bg-white  ">
        <div class="w-full max-w-md space-y-8">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="1.25 4 5.75 6">
      <path d="M 2 4 C 1 4 1 5 2 5 C 1 5 1 6 2 6 C 1 6 1 7 2 7 C 1 7 1 8 2 8 C 1 8 1 9 2 9 C 1 9 1 10 2 10 M 7 5" fill=""/>
    </svg> -->
          <div class="mt-20">
            <h2 class="mt-6 text-center text-2xl font-semibold tracking-tight text-gray-900">Forgot password</h2>
          </div>
          <form  @submit.prevent="forgotPassword" class="mt-8 space-y-5">
            <div class=" rounded-md shadow-sm mb-10">
              <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div class="mt-2">
                  <input v-model="state.email" placeholder="email" id="email" name="email" type="email" autocomplete="email" required="" class=" p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                <p v-if="v$.email.$error" class="text-red-600 text-sm py-1">
                  <span>{{ v$.email.$errors[0].$message }} </span>
              </p>
              </div>
            </div>
            <div>
              <button @click="forgotPassword" type="submit" class="mb-20 group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-blue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                
                Submit
              </button>
              <!-- <span class="text-slate-400">Don't have account? <router-link :to="{name:'createaccount'}" class="text-primary text-semibold"> Sign up</router-link> </span> -->
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
            <h2 class="mt-6 text-center text-2xl font-semibold tracking-tight text-gray-900">Forgot password</h2>
          </div>
          <form @submit.prevent="forgotPassword" class="mt-8 space-y-5" >
            <div class=" rounded-md shadow-sm mb-3">
              <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div class="mt-2">
                  <input v-model="state.email" placeholder="email" id="email" name="email" type="email" autocomplete="email" required="" class=" p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                <p v-if="v$.email.$error" class="text-red-600 text-sm py-1">
                  <span>{{ v$.email.$errors[0].$message }} </span>
              </p>
              </div>
            </div>
            <div class="flex items-center justify-between"> 
              <!-- <div class="text-sm">
                <p  class="font-medium text-black hover:text-indigo-500"><router-link :to="{name:'forgotpassword'}"> forgot your password?</router-link> </p>
              </div> -->
            </div>
    
            <div>
              <button  @click="forgotPassword" type="submit" class=" mb-5 group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-blue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Submit
              </button>
              <!-- <span class="text-slate-400">Don't have account? <router-link :to="{name:'createaccount'}" class="text-primary text-semibold"> Sign up</router-link> </span> -->
            </div>
          </form>
        </div>
      </div>
    </template>

    <script >
    import axios from 'axios'
   import Socialmedia from '../../../components/Communication/Socialmedia.vue';
   import { required,email } from '@vuelidate/validators';
    import {computed, reactive} from 'vue';
    import useValidate from "@vuelidate/core";
     export default{
      components:{Socialmedia},
      setup() {
        const state = reactive({
            email: "",
        })
        const rules = computed
        (() => {
            return {
                email: {required, email},
            }
        });
        const v$ = useValidate(rules, state);
        return {state, v$}
    },
      
      methods:{
      async forgotPassword(){
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
      }
      }
     }
    </script>
   