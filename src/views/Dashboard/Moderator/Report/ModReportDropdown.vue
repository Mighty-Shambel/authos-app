<template>
  <div class="menu-item " @click="isOpened = !isOpened" >
   <div class="flex flex-row   ">
      <span class="mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path fill-rule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clip-rule="evenodd" />
          <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
        </svg>          
      </span>
      <a href ='#' class=" hover:bg-slate-100">
          {{ name }}
      </a>
      <span class="ml-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 ml-16 mt-2">
          <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
        </svg>          
      </span>
   </div>
   
      <transition name="fade" apear>
       <div class="sub-menu w-48" v-if="isOpened">
          <div class="menu-item  pl-16 pt-1 pb-1">
            <router-link :to="{name:'ModReportPost'}">Post</router-link>
          </div>
          <div class="menu-item   pl-16 pt-1 pb-1">
            <router-link :to="{name:'ModReportProfile'}">Profile</router-link>
          </div>
           <div class="menu-item  pl-16 pt-1 pb-1 ">
            <router-link :to="{name:'ModReportComment'}">Comment</router-link>
          </div>
      </div>
      </transition>
  </div>
</template>

<script>
export default {
name: 'ModReportDropdown',
props: ['name'],
data () {
  return {
    isOpened: false,
    }
  }
}
</script>
