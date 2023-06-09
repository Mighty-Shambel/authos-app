<template>
  <div class="flex  items-center justify-center sm:px-6 lg:px-8">
    <div class="w-full px-20 pr-72 ">
      <div>
        <h2 class=" flex justify-start mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Create </h2>
      </div>
      <form @submit.prevent="createSystem" class="mt-8 space-y-6">
        <div class="-space-y-px rounded-md shadow-sm">
            <div class="pb-2" >
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
            <input v-model="state.title" type="text" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="title" >
          </div>
          <p v-if="v$.title.$error" class="text-red-600 text-sm py-1">
            <span>{{ v$.title.$errors[0].$message }} </span>
        </p>
          <div class="pb-2 mb-3" >
            <label for="desc" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">Description</label>
            <textarea v-model="state.description" id="desc" rows="4"  class="w-full bg-gray-50 p-2.5 text-sm rounded-lg  border border-gray-300" placeholder="Description..."></textarea>
          </div>
          <p v-if="v$.description.$error" class="text-red-600 text-sm py-1">
            <span>{{ v$.description.$errors[0].$message }} </span>
        </p>
          <div class="pb-2">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Cover Image</label>
        <input @change="getImage" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file">
        </div>
        </div>

        <div class="flex justify-start">
          <button @click="createSystem" type="submit" class=" w-40 group relative flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white bg-tertiary ">
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
            title: "",
            description: "",
        })
        const rules = computed
        (() => {
            return {
                title: {required},
                description: {required}
            }
        });
        const v$ = useValidate(rules, state);
        return {state, v$}
    },
  methods: {
    async createSystem() {
      console.log("form data", this.state);
      axios
        .post(`http://192.168.8.101:7000/api/v1/auth/signin`, this.state, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then((response) => {
          console.log(response.data.payload.token);
          localStorage.setItem("token", response.data.payload.token)
          this.$router.push('/systemupdate');
        })
        .catch((error) => {
          console.log("eroor", error);
        });
      //console.warn(result)
    },
    getImage(e) {
      const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>{
                    this.previewImage = e.target.result;
                    console.log(this.previewImage.split('/base64,', 1));
                    this.formData = this.previewImage.split('/base64,', 1);
                };
    }
  },
};
</script>