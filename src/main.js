import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

//home pages
import LandingPage from '../src/Modules/Home/pages/LandingPage.vue'
import About from '../src/Modules/Home/pages/About.vue'
import Contactus from '../src/Modules/Home/pages/Contactus.vue'
import Privacypolicy from '../src/Modules/Home/pages/Privacypolicy.vue'
import Termsofuse from '../src/Modules/Home/pages/Termsofuse.vue'

//Communication pages
import Signin from "../src/Modules/Communication/Auth/Signin.vue"

const router=createRouter({
    history:createWebHistory(),
    routes:[
        //home pages
        {
            path:'/',
            name:'LandingPage',
            component:LandingPage
        },
        {
            path:'/about',
            name:'About',
            component:About
        },
        {
            path:'/contactus',
            name:'Contactus',
            component:Contactus
        },
        {
            path:'/privacypolicy',
            name:'Privacypolicy',
            component:Privacypolicy
        },
        {
            path:'/termsofuse',
            name:'Termsofuse',
            component:Termsofuse
        },
        //communication
        {
            path:'/signin',
            name:'Signin',
            component:Signin
        },
    ]
})
createApp(App)
.use(router)
.mount('#app')
