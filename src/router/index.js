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

//Awareness pages
import AwarenessBlog from "../views/Awareness/pages/AwarenessBlog.vue";
import Categories from "../views/Awareness/pages/Categories.vue";
import Causes from "../views/Awareness/pages/Causes.vue";
import Definition from "../views/Awareness/pages/Definition.vue";
import Doctors from "../views/Awareness/pages/Doctors.vue";
import NotRecomended from "../views/Awareness/pages/NotRecomended.vue";
import OrganizationRec from "../views/Awareness/pages/OrganizationRec.vue";
import Recomended from "../views/Awareness/pages/Recomended.vue";
import Symptom from "../views/Awareness/pages/Symptom.vue";
import AwarenessLayout from '../Layouts/AwarenessLayout.vue'
import CommunicationLayout from '../Layouts/CommunicationLayout.vue'
//Admin pages
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
import ModReport from "../views/Dashboard/Moderator/Report/ModReport.vue";
import ModReportDetails from "../views/Dashboard/Moderator/Report/ModReportDetails.vue";
import ModVerification from "../views/Dashboard/Moderator/ModVerification.vue";
import ModEdit from "../views/Dashboard/Moderator/ModEdit.vue";
import ModConfirm from "../views/Dashboard/Moderator/ModConfirm.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
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
      path: "/awarenessblog",
      name: "AwarenessBlog",
      component: AwarenessBlog,
    },
    {
      path: "/categories",
      name: "Categories",
      component: Categories,
    },
    {
      path: "/causes",
      name: "Causes",
      component: Causes,
    },
    {
      path: "/definition",
      name: "Definition",
      component: Definition,
    },
    {
      path: "/doctors",
      name: "Doctors",
      component: Doctors,
    },
    {
      path: "/notrecomended",
      name: "NotRecomended",
      component: NotRecomended,
    },
    {
      path: "/organiztionrec",
      name: "OrganizationRec",
      component: OrganizationRec,
    },
    {
      path: "/recomended",
      name: "Recomended",
      component: Recomended,
    },
    {
      path: "/symptom",
      name: "Symptom",
      component: Symptom,
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
   
   




    //Admin pages
    {
      path: "/systemupdate",
      name: "SystemUpdate",
      component: SystemUpdate,
    },
    {
      path: "/admindashboard",
      name: "AdminDashboard",
      component: AdminDashboard,
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
    {
      path:"/loginadmin",
      name:"LoginAdmin",
      component:LoginAdmin
    },
    //Moderator
    {
      path: "/modreport",
      name: "ModReport",
      component: ModReport,
    },
    {
      path: "/modreportdetails",
      name: "ModReportDetails",
      component: ModReportDetails,
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
    }
  ],
});
export default router;