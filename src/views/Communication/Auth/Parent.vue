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
            <input  v-model="state.first_name" id="first_name" name="first_name" type="text"  placeholder="first name" class=" px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          <p v-if="v$.first_name.$error" class="text-red-600 text-sm py-1">
            <span>{{ v$.first_name.$errors[0].$message }} </span>
        </p>
        </div>
        <div>
          <label for="fname" class="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
          <div class="mt-2">
            <input  v-model="state.last_name" id="last_name" name="last_name" type="text"   placeholder="last name" class=" px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          <p v-if="v$.last_name.$error" class="text-red-600 text-sm py-1">
            <span>{{ v$.last_name.$errors[0].$message }} </span>
        </p>
        </div>
        
        <div>
          <label for="bio" class="block text-sm font-medium leading-6 text-gray-900">Biography</label>
          <div class="mt-2">
            <textarea  v-model="state.bio" id="bio" name="bio" type="text"  class="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          <p v-if="v$.bio.$error" class="text-red-600 text-sm py-1">
            <span>{{ v$.bio.$errors[0].$message }} </span>
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
              >relationonship</label
            >
            <select v-model="state.relation" id="relation" name="relation" class="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" validationRules="required">
              <option disabled value="">Select relationon</option>
              <option v-for="item in state.dropdownItems" :key="item" :value="item">{{ item }}</option>
            </select>
            <p v-if="v$.relation.$error" class="text-red-600 text-sm py-1">
              <span>{{ v$.relation.$errors[0].$message }}</span>
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
          >
        </div>
        <label>Gender</label>
        <div class="flex items-center">
          <input
            id="female"
            type="radio"
            value="female"
            v-model="state.gender"
            name="gender"
            class="
              mt-2
              w-4
              h-4
              text-blue-600
              bg-gray-100
              border-gray-300
              focus:ring-blue-500
              dark:focus:ring-blue-600 dark:ring-offset-gray-800
              focus:ring-2
              dark:bg-gray-700 dark:border-gray-600
            "
          />
          <label
            for="female"
            class="
              mt-2
              ml-2
              text-sm
              font-medium
              text-gray-900
              dark:text-gray-300
              mr-5
            "
          >Female</label>
          
          <input
            id="male"
            type="radio"
            value="male"
            v-model="state.gender"
            name="gender"
            class="
              mt-2
              w-4
              h-4
              text-blue-600
              bg-gray-100
              border-gray-300
              focus:ring-blue-500
              dark:focus:ring-blue-600 dark:ring-offset-gray-800
              focus:ring-2
              dark:bg-gray-700 dark:border-gray-600
            "
          />
          <label
            for="male"
            class="
              mt-2
              ml-2
              text-sm
              font-medium
              text-gray-900
              dark:text-gray-300
            "
          >Male</label>
        </div>
        <p v-if="v$.gender.$error" class="text-red-600 text-sm py-1">
          <span>{{ v$.gender.$errors[0].$message }}</span>
        </p>
      
      </div>

      <div>
        <button @click="login" type="button" class=" mb-5 group relationve flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-blue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
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
            <input  v-model="state.first_name" id="first_name" name="first_name" type="text" validationRules="required"  placeholder="first name" class="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          <p v-if="v$.first_name.$error" class="text-red-600 text-sm py-1">
            <span>{{ v$.first_name.$errors[0].$message }} </span>
        </p>
        </div>
        <div>
          <label for="fname" class="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
          <div class="mt-2">
            <input  v-model="state.last_name" id="last_name" name="last_name" type="text" validationRules="required"  placeholder="last name" class="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          <p v-if="v$.last_name.$error" class="text-red-600 text-sm py-1">
            <span>{{ v$.last_name.$errors[0].$message }} </span>
        </p>
        </div>
        <div>
          <label for="bio" class="block text-sm font-medium leading-6 text-gray-900">Biography</label>
          <div class="mt-2">
            <textarea  v-model="state.bio" id="bio" name="bio" type="text"  class="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          <p v-if="v$.bio.$error" class="text-red-600 text-sm py-1">
            <span>{{ v$.bio.$errors[0].$message }} </span>
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
            >relationonship</label
          >
          <select v-model="state.relation" id="relation" name="relation" class="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" validationRules="required">
            <option disabled value="">Select relationon</option>
            <option v-for="item in state.dropdownItems" :key="item" :value="item">{{ item }}</option>
          </select>
          <p v-if="v$.relation.$error" class="text-red-600 text-sm py-1">
            <span>{{ v$.relation.$errors[0].$message }}</span>
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
        >
      </div>
      <label>Gender</label>
      <div class="flex items-center">
        <input
          id="female"
          type="radio"
          value="Female"
          v-model="state.gender"
          name="gender"
          class="
            mt-2
            w-4
            h-4
            text-blue-600
            bg-gray-100
            border-gray-300
            focus:ring-blue-500
            dark:focus:ring-blue-600 dark:ring-offset-gray-800
            focus:ring-2
            dark:bg-gray-700 dark:border-gray-600
          "
        />
        <label
          for="female"
          class="
            mt-2
            ml-2
            text-sm
            font-medium
            text-gray-900
            dark:text-gray-300
            mr-5
          "
        >Female</label>
        
        <input
          id="male"
          type="radio"
          value="Male"
          v-model="state.gender"
          name="gender"
          class="
            mt-2
            w-4
            h-4
            text-blue-600
            bg-gray-100
            border-gray-300
            focus:ring-blue-500
            dark:focus:ring-blue-600 dark:ring-offset-gray-800
            focus:ring-2
            dark:bg-gray-700 dark:border-gray-600
          "
        />
        <label
          for="male"
          class="
            mt-2
            ml-2
            text-sm
            font-medium
            text-gray-900
            dark:text-gray-300
          "
        >Male</label>
      </div>
      <p v-if="v$.gender.$error" class="text-red-600 text-sm py-1">
        <span>{{ v$.gender.$errors[0].$message }}</span>
      </p>
      </div>
      <div>
        <button @click="login" type="button" class=" mb-5 group relationve flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-blue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Submit
        </button>
      </div>
    </form>
        </div>
      </div>
    </template>
    
    <script >
 import axios from 'axios';
import Socialmedia from '../../../components/communication/Socialmedia.vue';
import { required, minLength } from '@vuelidate/validators';
import { computed, reactive } from 'vue';
import useValidate from "@vuelidate/core";

export default {
  components: { Socialmedia },

  setup() {
    const state = reactive({
      first_name: '',
      last_name: '',
      gender:'',
      relation: '',
      bio:'',
      profilePic:'',
      dropdownItems: ['parent', 'relative', 'care taker'] // Replace with your actual dropdown items
    });

    const rules = computed(() => {
      return {
        first_name: { required },
        last_name: { required },
        gender:{required},
        bio:{required},
        relation: { required },
      };
    });

    const v$ = useValidate(rules, state);

    return { state, v$ };
  },

  methods: {
    async login() {
      console.log("form data",{
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        gender:this.state.gender,
        bio:this.state.bio,
        relation:this.state.relation,
      });
      this.v$.$validate();

      if (!this.v$.$error) {
        try {
          const token = localStorage.getItem("token");
          console.log("this token", token);
         
          await axios.post(
            "http://192.168.8.159:3000/api/v1/parentProfile",
            {
              first_name: this.state.first_name,
              last_name: this.state.last_name,
              gender:this.state.gender,
              bio:this.state.bio,
              relation:this.state.relation,
            },
            {
              headers: {
                Authorization: ` ${token}`,
              },
            }
          );

          console.log("Response data:", response.data);

          const newToken = response.data.payload.token;
          console.log("New token:", newToken);

          localStorage.setItem("token", newToken);
          this.$router.push('/child+');
        } catch (error) {
          console.log("Error:", error.response);
          // Handle specific error codes if needed
          if (error.response.status === 200) {
            // Unauthorized error
            this.$router.push('/child');
          } else {
            // Other errors
            console.log("Request failed:", error.message);
          }
        }
      } else {
        alert("Failed to submit");
      }
    }
  }
};

    </script>
