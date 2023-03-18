import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'
import VueSplide from '@splidejs/vue-splide';
import App from './App.vue'

//home pages
import LandingPage from '../src/Modules/Home/pages/LandingPage.vue'
import About from '../src/Modules/Home/pages/About.vue'
import Contactus from '../src/Modules/Home/pages/Contactus.vue'
import Privacypolicy from '../src/Modules/Home/pages/Privacypolicy.vue'
import Termsofuse from '../src/Modules/Home/pages/Termsofuse.vue'

//Communication pages
import Signin from "../src/Modules/Communication/Auth/Signin.vue"

//Awareness pages
import AwarenessBlog from "../src/Modules/Awareness/pages/AwarenessBlog.vue"
import Categories from "../src/Modules/Awareness/pages/Categories.vue"
import Causes from "../src/Modules/Awareness/pages/Causes.vue"
import Definition from "../src/Modules/Awareness/pages/Definition.vue"
import Doctors from "../src/Modules/Awareness/pages/Doctors.vue"
import NotRecomended from "../src/Modules/Awareness/pages/NotRecomended.vue"
import Organization from "../src/Modules/Awareness/pages/Organization.vue"
import Recomended from "../src/Modules/Awareness/pages/Recomended.vue"
import Symptom from "../src/Modules/Awareness/pages/Symptom.vue"


const router=createRouter({
    history:createWebHistory(),
    routes:[
        //home pages
                {
                    path:'/',
                    name:'LandingPage',
                    component:LandingPage,

                },
                {
                    path:'/about',
                    name:'About',
                    component:About
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
        
        {
            path:'/contactus',
            name:'Contactus',
            component:Contactus
        },
        
        //Awareness pages
        {
        path:'/awarenessblog',
        name:'AwarenessBlog',
        component:AwarenessBlog
        },
        {
            path:'/categories',
            name:'Categories',
            component:Categories
            },
            {
                path:'/causes',
                name:'Causes',
                component:Causes
                },
                {
                    path:'/definition',
                    name:'Definition',
                    component:Definition
                    },
                    {
                        path:'/doctors',
                        name:'Doctors',
                        component:Doctors
                        },
                        {
                            path:'/notrecomended',
                            name:'NotRecomended',
                            component:NotRecomended
                            },
                            {
                                path:'/organiztion',
                                name:'Organization',
                                component:Organization
                                },
                                {
                                    path:'/recomended',
                                    name:'Recomended',
                                    component:Recomended
                                    },
                                    {
                                        path:'/symptom',
                                        name:'Symptom',
                                        component:Symptom
                                        },
        //communication pages
        {
            path:'/signin',
            name:'Signin',
            component:Signin
        },
    ]
})
createApp(App)
.use(router)
.use( VueSplide )
.mount('#app')
