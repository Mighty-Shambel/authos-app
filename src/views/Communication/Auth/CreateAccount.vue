<template>
  <div
    class="hidden lg:block grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 bg-gradient-to-l from-primary p-24 pl-40 pr-40"
  >
    <div class="grid grid-cols-1 md:gird-cols-1 lg:grid-cols-2 shadow-2xl">
      <socialmedia></socialmedia>
      <div
        class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 p-10 lg:pt-20 lg:pl-20 md:pt-10 bg-white">
        <div class="w-full max-w-md space-y-8">
          <div>
            <h2
              class="text-center text-2xl font-semibold tracking-tight text-gray-900">
              Create Account
            </h2>
          </div>
          <form @submit.prevent="submitForm" class="mt-8 space-y-6" >
            <div class="-space-y-px rounded-md shadow-sm">
              <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div class="mt-2">
                  <input v-model="state.email" placeholder="email" id="email" name="email" type="email" autocomplete="email" required="" class=" p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                <p v-if="v$.email.$error" class="text-red-600 text-sm py-1">
                  <span>{{ v$.email.$errors[0].$message }} </span>
              </p>
              </div>
              <div>
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div class="mt-2">
                  <input  v-model="state.password" placeholder="password" id="password1" name="password" type="password" autocomplete="password" required="" class=" p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                <p v-if="v$.password.$error" class="text-red-600 text-sm py-1">
                  <span>{{ v$.password.$errors[0].$message }} </span>
              </p>
              </div>
              <div class="pb-2 mb-2">
                <div>
                  <label for="confirmpassword1" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                  <div class="mt-2">
                    <input  v-model="state.confirmpassword" placeholder="confirm password" id="confirmpassword" name="confirmpassword" type="password" autocomplete="password" class=" p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                  <p v-if="v$.confirmpassword.$error" class="text-red-600 text-sm py-1">
                    <span>{{ v$.confirmpassword.$errors[0].$message }} </span>
                </p>
                </div>
              </div>
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white pb-3"
                >User Type</label
              >
              <select v-model="state.user_type" id="selectedItem" name="selectedItem" class="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" validationRules="required">
                <option disabled value="">Select relation</option>
                <option v-for="item in state.dropdownItems" :key="item" :value="item">{{ item }}</option>
              </select>
              <p v-if="v$.user_type.$error" class="text-red-600 text-sm py-1">
                <span>{{ v$.user_type.$errors[0].$message }}</span>
              </p>
            </div>

            <div>
              <button
              type="button"
              @click="submitForm"
                class="mb-3 group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-blue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign up
              </button>
              <span class="text-slate-400"
                >Already have an account?
                <router-link
                  :to="{ name: 'Signin' }"
                  class="text-primary text-semibold"
                  >Log in</router-link
                >
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- mobile view -->
  <div
    class="xl:hidden lg:block flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-40"
  >
    <div class="w-full max-w-md space-y-8 shadow-md p-5">
      <div>
        <h2
          class="mt-6 text-center text-2xl font-semibold tracking-tight text-gray-900"
        >
          Create Account
        </h2>
      </div>
      <form class="mt-8 space-y-6" >
        <div class="-space-y-px rounded-md shadow-sm">
          <div class="pb-2">
            <div>
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div class="mt-2">
                <input  v-model="state.email" id="email" name="email" type="email" autocomplete="email" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
              <p v-if="v$.email.$error" class="text-red-600 text-sm py-1">
                <span>{{ v$.email.$errors[0].$message }} </span>
            </p>
            </div>
            <div>
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div class="mt-2">
                <input v-model="state.password" id="password2" name="password" type="password" autocomplete="password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
              <p v-if="v$.password.$error" class="text-red-600 text-sm py-1">
                <span>{{ v$.password.$errors[0].$message }} </span>
            </p>
            </div>

            <div>
              <label for="confirmpassword" class="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
              <div class="mt-2">
                <input v-model="state.confirmpassword" id="confirmpassword2" name="confirmpassword" type="password" autocomplete="password" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
              <p v-if="v$.confirmpassword.$error" class="text-red-600 text-sm py-1">
                <span>{{ v$.confirmpassword.$errors[0].$message }} </span>
            </p>
            </div>
          <label
            for="usertype"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white pb-3"
            >User Type</label
          >
          <select v-model="state.user_type" id="selectedItem" name="selectedItem" class="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" validationRules="required">
            <option disabled value="">Select relation</option>
            <option v-for="item in state.dropdownItems" :key="item" :value="item">{{ item }}</option>
          </select>
          <p v-if="v$.user_type.$error" class="text-red-600 text-sm py-1">
            <span>{{ v$.user_type.$errors[0].$message }}</span>
          </p>
        </div>

        <div>
          <button
            type="button"
            @click="submitForm"
            class="mb-3 group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-blue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Sign up
          </button>
          <span class="text-slate-400"
            >Already have an account?
            <router-link
              :to="{ name: 'Signin' }"
              class="text-primary text-semibold"
              >Log in</router-link
            >
          </span>
        </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>

import axios from "axios";
import { useRoute, useRouter } from 'vue-router';
import Socialmedia from "../../../components/communication/Socialmedia.vue";
import { required, email, minLength } from '@vuelidate/validators';
import { computed, reactive } from 'vue';
import useValidate from "@vuelidate/core";

export default {
  components: { Socialmedia },
  setup() {
    const state = reactive({
      email: "",
      password: "",
      user_type: '',
      dropdownItems: ['Parent', 'Health_professional', 'Organization', 'other']
    });

    const rules = computed(() => {
      return {
        email: { required, email },
        password: { required, minLength: minLength(8) },
        confirmpassword: { required, minLength: minLength(8) },
        user_type: { required },
      }
    });

    const v$ = useValidate(rules, state);
    return { state, v$ }
  },
  methods: {
    async submitForm() {
      console.log("form data", this.state.email, this.state.password, this.state.user_type);
      this.v$.$validate();

      if (!this.v$.$error) {
        try {
          const response = await axios.post("http://192.168.8.118:3000/api/v1/auth/signup", {
            email: this.state.email,
            password: this.state.password,
            user_type: this.state.user_type
          });

          const userId = response.data.payload.id; // Extract the user ID from the response
          console.log("User ID:", userId);


          localStorage.setItem("user", JSON.stringify({ id: userId })); // Store the user ID in localStorage
          console.log(response.data);

          // Redirect to the OTP verification page
          this.$router.push('/otpverification');
        } catch (error) {
          console.log("error", error);
        }
      } else {
        alert("Failed to submit");
      }
    }
  },
};

</script>
