<template>
    <div class="hidden lg:block grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 bg-gradient-to-l from-primary p-5 pl-40 pr-40">
        <div class="grid grid-cols-1 md:gird-cols-1 lg:grid-cols-2 shadow-2xl">
      
         <socialmedia></socialmedia>
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 p-10 lg:pt-20 lg:pl-20 md:pt-5 bg-white  ">
        <div class="w-full max-w-md space-y-8">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="1.25 4 5.75 6">
      <path d="M 2 4 C 1 4 1 5 2 5 C 1 5 1 6 2 6 C 1 6 1 7 2 7 C 1 7 1 8 2 8 C 1 8 1 9 2 9 C 1 9 1 10 2 10 M 7 5" fill=""/>
    </svg> -->
    <div>
        <h2 class="mt-4 text-center text-2xl font-semibold tracking-tight text-gray-900">Organization</h2>
      </div>
      <form  @submit.prevent="orgInfo" class="mt-8 space-y-2" >
        <div class="-space-y-px rounded-md shadow-sm ">
          <div>
            <label for="orgname" class="block text-sm font-medium leading-6 text-gray-900">Organization Name</label>
            <div class="mt-2">
              <input  v-model="state.orgname" id="orgname" name="orgname" type="text"   placeholder="Organization name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <p v-if="v$.orgname.$error" class="text-red-600 text-sm py-1">
              <span>{{ v$.orgname.$errors[0].$message }} </span>
          </p>
          </div>
          <div>
            <label for="address" class="block text-sm font-medium leading-6 text-gray-900">Address</label>
            <div class="mt-2">
              <input v-model="state.address" id="address" name="address" type="text"   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <p v-if="v$.address.$error" class="text-red-600 text-sm py-1">
              <span>{{ v$.address.$errors[0].$message }} </span>
          </p>
          </div>
  
          <div class="pb-2" >
          <label for="year" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Starting year</label>
          <input type="number" id="year" v-model="state.startyr" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="starting year" required>
          <p v-if="v$.startyr.$error" class="text-red-600 text-sm py-1">
            <span>{{ v$.startyr.$errors[0].$message }} </span>
        </p>
        </div>
        <div>
          <label for="bio" class="block text-sm font-medium leading-6 text-gray-900">Biography</label>
          <div class="mt-2">
            <textarea  v-model="state.bio" id="bio" name="bio" type="text" validationRules="required"  placeholder="bio" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div>
          <p v-if="v$.bio.$error" class="text-red-600 text-sm py-1">
            <span>{{ v$.bio.$errors[0].$message }} </span>
        </p>
        </div>
        <div class="pb-2">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="license_input">License</label>
          <input
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="license_input"
            type="file"
            ref="licenseInput"
            @change="handleFileChange('license',$event)"
          >
          <p v-if="v$.license.$error" class="text-red-600 text-sm py-1">
            <span>{{ v$.license.$errors[0].$message }} </span>
        </p>
        </div>
        <div class="pb-2">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="profilepic_input">Profile pic</label>
          <input
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="profilepic_input_help"
            id="profilepic_input"
            type="file"
            ref="profilePicInput"
            @change="handleFileChange('profilePic',$event)"
          >
          <p v-if="v$.profilePic.$error" class="text-red-600 text-sm py-1">
            <span>{{ v$.profilePic.$errors[0].$message }} </span>
        </p>
        </div>
        <div class="pb-2">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="coverpic_input">Cover pic</label>
          <input
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="coverpic_input_help"
            id="coverpic_input"
            type="file"
            ref="coverPicInput"
            @change="handleFileChange('coverPic',$event)"
          >
          <p v-if="v$.coverPic.$error" class="text-red-600 text-sm py-1">
            <span>{{ v$.coverPic.$errors[0].$message }} </span>
        </p>
        </div>
        </div>
  
        <div>
          <button @click="orgInfo" type="submit" class=" group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-blue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Submit
          </button>
        </div>
      </form>
      </div>
      </div>
        </div>
      </div>
      <!-- Mobile view -->
      <div
    class="xl:hidden lg:block flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-10"
  >
    <div class="w-full max-w-md space-y-8 shadow-md p-5">
      <div>
        <h2 class="mt-4 text-center text-2xl font-semibold tracking-tight text-gray-900">Organization</h2>
      </div>
      <form @submit.prevent="orgInfo" class="mt-8 space-y-2">
        <div class="-space-y-px rounded-md shadow-sm ">
          <div>
            <label for="orgname" class="block text-sm font-medium leading-6 text-gray-900">Organization Name</label>
            <div class="mt-2">
              <input  v-model="state.orgname" id="orgname" name="orgname" type="text"  placeholder="Organization name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <p v-if="v$.orgname.$error" class="text-red-600 text-sm py-1">
              <span>{{ v$.orgname.$errors[0].$message }} </span>
          </p>
          </div>
          <div>
            <label for="address" class="block text-sm font-medium leading-6 text-gray-900">Address</label>
            <div class="mt-2">
              <input  v-model="state.address" id="address" name="address" type="text"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <p v-if="v$.address.$error" class="text-red-600 text-sm py-1">
              <span>{{ v$.address.$errors[0].$message }} </span>
          </p>
          </div>
          <div class="pb-2" >
          <label for="year" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Starting year</label>
          <input v-model="state.startyr" type="number" id="year" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="starting year">
          <p v-if="v$.startyr.$error" class="text-red-600 text-sm py-1">
            <span>{{ v$.startyr.$errors[0].$message }} </span>
        </p>
        </div>
        <div>
          <label for="bio" class="block text-sm font-medium leading-6 text-gray-900">Biography</label>
          <div class="mt-2">
            <textarea  v-model="state.bio" id="bio" name="bio" type="text"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          <p v-if="v$.bio.$error" class="text-red-600 text-sm py-1">
            <span>{{ v$.bio.$errors[0].$message }} </span>
        </p>
        </div>
        <div class="pb-2">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="license_input">License</label>
          <input
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="license_input_help"
            id="license_input"
            type="file"
            ref="licenseInput"
            @change="handleFileChange('license',$event)"
          >
          <p v-if="v$.license.$error" class="text-red-600 text-sm py-1">
            <span>{{ v$.license.$errors[0].$message }} </span>
        </p>
        </div>
        <div class="pb-2">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="profilepic_input">Profile pic</label>
          <input
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="profilepic_input_help"
            id="profilepic_input"
            type="file"
            ref="profilePicInput"
            @change="handleFileChange('profilePic',$event)"
          >
          <p v-if="v$.profilePic.$error" class="text-red-600 text-sm py-1">
            <span>{{ v$.profilePic.$errors[0].$message }} </span>
        </p>
        </div>
        <div class="pb-2">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="coverpic_input">Cover pic</label>
          <input
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="coverpic_input_help"
            id="coverpic_input"
            type="file"
            ref="coverPicInput"
            @change="handleFileChange('coverPic',$event)"
          >
          <p v-if="v$.coverPic.$error" class="text-red-600 text-sm py-1">
            <span>{{ v$.coverPic.$errors[0].$message }} </span>
        </p>
        </div>
        </div>
  
        <div>
          <button @click="orgInfo" type="submit" class=" group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-blue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>  
    </template>
    <script>
    import axios from 'axios'
    import Socialmedia from '../../../components/Communication/Socialmedia.vue';
    import { required } from '@vuelidate/validators';
    import {computed, reactive} from 'vue';
    import useValidate from "@vuelidate/core";
    import { ref } from 'vue';
    export default {
      components: {
        Socialmedia,
        setup() {
        const state = reactive({
            orgname: '',
            address: '',
            startyr: '',
            bio: '',
            license: '',
            profilePic:'',
            coverPic: '',
        })
        const rules = computed
        (() => {
            return {
            orgname: {required},
            address: {required},
            startyr:{required},
            bio: {required},
            license:{required},
            profilePic:{required},
            coverPic: {required},
            }
        });
        const v$ = useValidate(rules, state);
        return {state, v$}
    },
      },
      
      methods: {
        async orgInfo() {
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
        });
      } else {
                alert("Failed to submit")
            }
    },
        handleFileChange(type, event) {
          const file = event.target.files[0];
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = event =>{
            this.previewImage=event.target.result;
            this.state = this.previewImage.split('/base64,',1);
          }
        
        },
      },
    };
    </script>
    
    