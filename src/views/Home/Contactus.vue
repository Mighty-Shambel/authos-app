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
            <input  v-model="formData.companyname" id="companyname" name="companyname" type="text" validationRules="required"  placeholder="company name" class=" px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input  v-model="formData.email" id="email" name="email" type="email" autocomplete="email" required=""  placeholder="abebe123@gmail.com" class=" px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Phone</label>
          <div class="mt-2">
            <input  v-model="formData.phone" id="phone" name="phone" type="number"  required="" placeholder="phone" class=" px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div >
          <label for="desc">Description</label>
          <textarea v-model="formData.desc" id="desc" name="desc" type="text" autocomplete="phone" required class="mt-1 relative block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Description"></textarea>
        </div>
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
import Navbar from '../../components/Home/Navbar.vue';
 export default{
  components:{Navbar},
  data(){
    return{
      formData:{
        companyname:'',
        email:'',
        phone:'',
        desc:'',
      }
    }
  },
  methods:{
      async submitForm(){
        console.log('email',this.formData)
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
      }
      }
 }
</script>
