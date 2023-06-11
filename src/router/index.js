import { createRouter, createWebHistory } from "vue-router";

//home pages
import LandingPage from "../views/Home/LandingPage.vue"
import About from "../views/Home/About.vue";
import Contactus from "../views/Home/Contactus.vue";
import Privacypolicy from "../views/Home/Privacypolicy.vue";
import Termsofuse from "../views/Home/Termsofuse.vue";
import HomeLayout from '../Layouts/HomeLayout.vue'

//Communication pages
import Signin from "../views/Communication/Auth/Signin.vue";
import CreateAccount from "../views/Communication/Auth/CreateAccount.vue";
import Parent from "../views/Communication/Auth/Parent.vue";
import HealthProfessional from "../views/Communication/Auth/HealthProfessional.vue";
import Organization from "../views/Communication/Auth/Organization.vue";
import Child from "../views/Communication/Auth/Child.vue";
import ForgotPassword from "../views/Communication/Auth/ForgotPassword.vue";
import Chat from "../views/Communication/Pages/Chat.vue"
import Feed from "../views/Communication/pages/Feed.vue"
import Notification from "../views/Communication/pages/Notification.vue"
import Profile  from "../views/Communication/Pages/Profile.vue"
import Friends from  "../views/Communication/Pages/Friends.vue"
import ChatList from "../views/Communication/Pages/ChatList.vue"
import OtpVerification from '../views/communication/auth/OtpVerification.vue'
//Awareness pages
import AwarenessBlog from "../views/Awareness/AwarenessBlog.vue";
import AwarenessView from '../views/awareness/AwarenessView'
import AwarenessLayout from '../layouts/AwarenessLayout.vue'
import CommunicationLayout from '../layouts/CommunicationLayout.vue'
//Admin pages
import AdminLayout from '../layouts/AdminLayout'
import AdminDashboard from "../views/Dashboard/Admin/AdminDashboard.vue";
import CreateCategories from "../views/Dashboard/Admin/System/CreateCategories.vue";
import CreateCauses from "../views/Dashboard/Admin/System/CreateCauses.vue";
import CreateDefinition from "../views/Dashboard/Admin/System/CreateDefinition.vue";
import CreateDoctors from "../views/Dashboard/Admin/System/CreateDoctors.vue";
import CreateFood from "../views/Dashboard/Admin/System/CreateFood.vue";
import CreateNotRecomended from "../views/Dashboard/Admin/System/CreateNotRecomended.vue";
import CreateOrganization from "../views/Dashboard/Admin/System/CreateOrganization.vue";
import CreateSymptom from "../views/Dashboard/Admin/System/CreateSymptom.vue";
import SystemUpdate from "../views/Dashboard/Admin/System/SystemUpdate.vue";
import UserList from "../views/Dashboard/Admin/UserList.vue";
import AssignModerator from "../views/Dashboard/Admin/AssignModerator.vue";
import VerificationAdmin from "../views/Dashboard/Admin/VerificationAdmin.vue";
import ReportDropdown from "../views/Dashboard/Admin/Report/ReportDropdown.vue"
import ReportProfile from "../views/Dashboard/Admin/Report/ReportProfile.vue"
import ReportComment from "../views/Dashboard/Admin/Report/ReportComment.vue"
import ReportPost from "../views/Dashboard/Admin/Report/ReportPost.vue"
import EditAdmin from "../views/Dashboard/Admin/EditAdmin.vue"
import LoginAdmin from "../views/Dashboard/Admin/LoginAdmin.vue"

//Moderator pages
import ModeratorLayout from '../layouts/ModeratorLayout.vue'
import ModReport from "../views/Dashboard/Moderator/Report/ModReport.vue";
import ModVerification from "../views/Dashboard/Moderator/ModVerification.vue";
import ModEdit from "../views/Dashboard/Moderator/ModEdit.vue";
import ModConfirm from "../views/Dashboard/Moderator/ModConfirm.vue"
import ModReportDropdown from "../views/Dashboard/Moderator/Report/ModReportDropdown.vue"
import ModReportProfile from "../views/Dashboard/Moderator/Report/ModReportProfile.vue"
import ModReportComment from "../views/Dashboard/Moderator/Report/ModReportComment.vue"
import ModReportPost from "../views/Dashboard/Moderator/Report/ModReportPost.vue"
import NotFound from "../views/home/NotFound.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:'/awareness/:id',
      name:'AwarenessView',
      component:AwarenessView
    },
    //home pages
    {
      path: "/",
      name:PublicKeyCredential,
      component:HomeLayout,
      redirect:'/',
      children:[
        {
      path:'/',
      name: "LandingPage",
      component: LandingPage,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },

    {
      path: "/privacypolicy",
      name: "Privacypolicy",
      component: Privacypolicy,
    },
    {
      path: "/termsofuse",
      name: "Termsofuse",
      component: Termsofuse,
    },

    {
      path: "/contactus",
      name: "Contactus",
      component: Contactus,
    },
  ]
},
{
  path: "/",
  name:PublicKeyCredential,
  component:AwarenessLayout,
  redirect:'/',
  children:[
    //Awareness pages
    {
      path:'/awareness/:id',
      name:'AwarenessView',
      component:AwarenessView
    },
    {
      path: "/awarenessblog",
      name: "AwarenessBlog",
      component: AwarenessBlog,
    },
    
  ]
},
    //communication pages
    {
      path: "/signin",
      name: "Signin",
      component: Signin,
    },
    {
      path: "/createaccount",
      name: "CreateAccount",
      component: CreateAccount,
    },
    {
      path: "/parent",
      name: "Parent",
      component: Parent,
    },
    {
      path: "/organization",
      name: "Organization",
      component: Organization,
    },
    {
      path: "/healthprofessional",
      name: "HealthProfessional",
      component: HealthProfessional,
    },
    {
      path: "/child",
      name: "Child",
      component: Child,
    },
    {
      path: "/forgotpassword",
      name: "ForgotPassword",
      component: ForgotPassword,
    },
    {
      path: "/otpverification",
      name: "OtpVerification",
      component: OtpVerification,
    },
    {
      path: "/",
      name:PublicKeyCredential,
      component:CommunicationLayout,
      redirect:'/',
      children:[
    {
      path: "/feed",
      name: "Feed",
      component: Feed,
    },
    {
      path: "/friends",
      name: "Friends",
      component: Friends,
    },
    {
      path: "/notification",
      name: "Notification",
      component: Notification,
    },
    {
      path: "/chatlist",
      name: "ChatList",
      component: ChatList,
    },
    {
      path: "/chat",
      name: "Chat",
      component: Chat,
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
    },
  ],
},
   
{
  path: "/",
  name:PublicKeyCredential,
  component:AdminLayout,
  redirect:'/',
  children:[
    //Admin pages
    {
      path: "/admindashboard",
      name: "AdminDashboard",
      component: AdminDashboard,
    },
    {
      path: "/systemupdate",
      name: "SystemUpdate",
      component: SystemUpdate,
    },
    {
      path: "/createcategories",
      name: "CreateCategories",
      component: CreateCategories,
    },
    {
      path: "/createcauses",
      name: "CreateCauses",
      component: CreateCauses,
    },
    {
      path: "/createdefinition",
      name: "CreateDefinition",
      component: CreateDefinition,
    },
    {
      path: "/createdoctors",
      name: "CreateDoctors",
      component: CreateDoctors,
    },
    {
      path: "/createfood",
      name: "CreateFood",
      component: CreateFood,
    },
    {
      path: "/createnotrecomended",
      name: "CreateNotRecomended",
      component: CreateNotRecomended,
    },
    {
      path: "/createorganization",
      name: "CreateOrganization",
      component: CreateOrganization,
    },
    {
      path: "/createsymptom",
      name: "CreateSymptom",
      component: CreateSymptom,
    },
    {
      path: "/userlist",
      name: "UserList",
      component: UserList,
    },
    {
      path: "/assignmoderator",
      name: "AssignModerator",
      component: AssignModerator,
    },
    {
      path: "/verificationadmin",
      name: "VerificationAdmin",
      component: VerificationAdmin,
    },
    {
      path:"/reportdropdown",
      name:"ReportDropdown",
      component:ReportDropdown
    },
    {
      path:"/reportprofile",
      name:"ReportProfile",
      component:ReportProfile
    },
    {
      path:"/reportpost",
      name:"ReportPost",
      component:ReportPost
    },
    {
      path:"/reportcomment",
      name:"ReportComment",
      component:ReportComment
    },
    {
      path: "/editadmin",
      name: "EditAdmin",
      component: EditAdmin,
    },
  ]
  },
  {
    path:"/loginadmin",
    name:"LoginAdmin",
    component:LoginAdmin
  },
    
  {
    path: "/",
    name:PublicKeyCredential,
    component:ModeratorLayout,
    redirect:'/',
    children:[
      //Moderator pages
      {
      path: "/modreport",
      name: "ModReport",
      component: ModReport,
    },
    {
      path: "/modedit",
      name: "ModEdit",
      component: ModEdit,
    },
    {
      path: "/modverification",
      name: "ModVerification",
      component: ModVerification,
    },
    {
      path:'/modconfirm',
      name:"ModConfirm",
      component:ModConfirm
    },
    {
      path:"/modreportdropdown",
      name:"ModReportDropdown",
      component:ModReportDropdown
    },
    {
      path:"/modreportprofile",
      name:"ModReportProfile",
      component:ModReportProfile
    },
    {
      path:"/modreportpost",
      name:"ModReportPost",
      component:ModReportPost
    },
    {
      path:"/modreportcomment",
      name:"ModReportComment",
      component:ModReportComment
    },

  ],
},
{
  path:"/:pathMatch(.*)*",
  name:"NotFound",
  component:NotFound
}
  ],
});
export default router;