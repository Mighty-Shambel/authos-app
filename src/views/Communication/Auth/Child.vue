<template>
    <div class="hidden lg:block grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 bg-gradient-to-l from-primary  p-24 pl-40 pr-40">
        <div class="grid grid-cols-1 md:gird-cols-1 lg:grid-cols-2 shadow-2xl">
      
         <socialmedia></socialmedia>
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 p-10 lg:pt-24 lg:pl-20 md:pt-10 bg-white  ">
        <div class="w-full max-w-md space-y-8">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="1.25 4 5.75 6">
      <path d="M 2 4 C 1 4 1 5 2 5 C 1 5 1 6 2 6 C 1 6 1 7 2 7 C 1 7 1 8 2 8 C 1 8 1 9 2 9 C 1 9 1 10 2 10 M 7 5" fill=""/>
    </svg> -->
    <div>
          <h2
            class="
              mt-6
              text-center text-2xl
              font-semibold
              tracking-tight
              text-gray-900
            "
          >
            Child Info
          </h2>
        </div>
        <form @submit.prevent="childInfo" class="mt-8 space-y-6" >
          <div class="-space-y-px rounded-md shadow-sm">
            <div>
              <label for="fname" class="block text-sm font-medium leading-6 text-gray-900">First Name</label>
              <div class="mt-2">
                <input  v-model="formData.firstName" id="firstName" name="firstName" type="text" validationRules="required"  placeholder="first name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
          <label for="lname" class="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
          <div class="mt-2">
            <input  v-model="formData.lastName" id="lastName" name="lastName" type="text" validationRules="required"  placeholder="last name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
            <div>
              <label
                for="age"
                class="
                  block
                  text-sm
                  font-medium
                  text-gray-900
                  dark:text-white
                  pb-2
                "
                >Age</label
              >
              <select
                id="age"
                class="
                  mb-2
                  bg-gray-50
                  border border-gray-300
                  text-gray-900 text-sm
                  rounded-lg
                  focus:ring-blue-500 focus:border-blue-500
                  block
                  w-full
                  p-2.5
                  dark:bg-gray-700
                  dark:border-gray-600
                  dark:placeholder-gray-400
                  dark:text-white
                  dark:focus:ring-blue-500
                  dark:focus:border-blue-500
                "
                v-model="formData.selectedAge"
              >
              <option v-for="item in dropdownItems" :key="item.id" :value="item" >{{ item }}</option>
              </select>
            </div>

            <label>Gender</label>
            <div class="flex items-center">
              <input
                id="female"
                type="radio"
                value="female"
                v-model="formData.selectedGender"
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
                v-model="formData.selectedGender"
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
          </div>

          <div>
            <button
              @click="childInfo"
              type="submit"
              class="
                mb-2
                group
                relative
                flex
                w-full
                justify-center
                rounded-md
                border border-transparent
                bg-primary
                py-2
                px-4
                text-sm
                font-medium
                text-white
                hover:bg-blue
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
                focus:ring-offset-2
              "
            >
              Submit
            </button>
            
          </div>
        </form>
          
        </div>
      </div>
      </div>
      </div>

      <!-- mobile view for child -->
      <div class="xl:hidden lg:block flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-40">
        <div class="w-full max-w-md space-y-8 shadow-md p-5">
          <div>
          <h2
            class="
              mt-6
              text-center text-2xl
              font-semibold
              tracking-tight
              text-gray-900
            "
          >
            Child Info
          </h2>
        </div>
        <form @submit.prevent="childInfo" class="mt-8 space-y-6" >
          <div class="-space-y-px rounded-md shadow-sm">
            <div>
              <label for="fname" class="block text-sm font-medium leading-6 text-gray-900">First Name</label>
              <div class="mt-2">
                <input  v-model="formData.firstName" id="firstName" name="firstName" type="text" validationRules="required"  placeholder="first name" class="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <label for="lname" class="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
              <div class="mt-2">
                <input  v-model="formData.lastName" id="lastName" name="lastName" type="text" validationRules="required"  placeholder="last name" class="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <label
                for="age"
                class="
                  block
                  text-sm
                  font-medium
                  text-gray-900
                  dark:text-white
                  pb-2
                "
                >Age</label
              >
              <select
                id="age"
                class="
                  mb-2
                  bg-gray-50
                  border border-gray-300
                  text-gray-900 text-sm
                  rounded-lg
                  focus:ring-blue-500 focus:border-blue-500
                  block
                  w-full
                  p-2.5
                  dark:bg-gray-700
                  dark:border-gray-600
                  dark:placeholder-gray-400
                  dark:text-white
                  dark:focus:ring-blue-500
                  dark:focus:border-blue-500
                "
                v-model="formData.selectedAge"
              >
              <option v-for="item in dropdownItems" :key="item.id" :value="item" >{{ item }}</option>
              </select>
            </div>

            <label>Gender</label>
            <div class="flex items-center">
              <input
                id="female"
                type="radio"
                value="female"
                v-model="formData.selectedGender"
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
                v-model="formData.selectedGender"
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
          </div>

          <div>
            <button
            @click="childInfo"
              type="submit"
              class="
                mb-2
                group
                relative
                flex
                w-full
                justify-center
                rounded-md
                border border-transparent
                bg-primary
                py-2
                px-4
                text-sm
                font-medium
                text-white
                hover:bg-blue
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
                focus:ring-offset-2
              "
            >
              Submit
            </button>
            
          </div>
        </form>
        </div>
      </div>
    </template>
    
    <script>
    import axios from 'axios';
     import Socialmedia from '../../../components/communication/Socialmedia.vue';
     export default{
      components:{Socialmedia},
      data(){
        return{
        formData:{
         firstName:'',
         lastName:'',
         age:'',
         selectedAge: '',
         selectedGender: '',
        },
        dropdownItems: ['0-14', '15-24', '25-48','above 48'] // Replace with your actual dropdown items
        }
      },
    methods:{
      async childInfo(){
      console.log('this form details',this.formData)
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
     };
</script>
   