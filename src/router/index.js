import { createRouter, createWebHistory } from "vue-router";
//home pages
import LandingPage from "../Modules/Home/pages/LandingPage.vue"
import About from "../Modules/Home/pages/About.vue";
import Contactus from "../Modules/Home/pages/Contactus.vue";
import Privacypolicy from "../Modules/Home/pages/Privacypolicy.vue";
import Termsofuse from "../Modules/Home/pages/Termsofuse.vue";

//Communication pages
import Signin from "../Modules/Communication/Auth/Signin.vue";
import CreateAccount from "../Modules/Communication/Auth/CreateAccount.vue";
import Parent from "../Modules/Communication/Auth/Parent.vue";
import HealthProfessional from "../Modules/Communication/Auth/HealthProfessional.vue";
import Organization from "../Modules/Communication/Auth/Organization.vue";
import Child from "../Modules/Communication/Auth/Child.vue";
import ForgotPassword from "../Modules/Communication/Auth/ForgotPassword.vue";
import Chat from "../Modules/Communication/Pages/Chat.vue"
import Feed from "../Modules/Communication/pages/Feed.vue"
import Notification from "../Modules/Communication/pages/Notification.vue"
import Profile  from "../Modules/Communication/Pages/Profile.vue"
import Friends from  "../Modules/Communication/Pages/Friends.vue"
import ChatList from "../Modules/Communication/Pages/ChatList.vue"

//Awareness pages
import AwarenessBlog from "../Modules/Awareness/pages/AwarenessBlog.vue";
import Categories from "../Modules/Awareness/pages/Categories.vue";
import Causes from "../Modules/Awareness/pages/Causes.vue";
import Definition from "../Modules/Awareness/pages/Definition.vue";
import Doctors from "../Modules/Awareness/pages/Doctors.vue";
import NotRecomended from "../Modules/Awareness/pages/NotRecomended.vue";
import OrganizationRec from "../Modules/Awareness/pages/OrganizationRec.vue";
import Recomended from "../Modules/Awareness/pages/Recomended.vue";
import Symptom from "../Modules/Awareness/pages/Symptom.vue";

//Admin pages
import AdminDashboard from "../Modules/Dashboard/Admin/AdminDashboard.vue";
import CreateCategories from "../Modules/Dashboard/Admin/System/CreateCategories.vue";
import CreateCauses from "../Modules/Dashboard/Admin/System/CreateCauses.vue";
import CreateDefinition from "../Modules/Dashboard/Admin/System/CreateDefinition.vue";
import CreateDoctors from "../Modules/Dashboard/Admin/System/CreateDoctors.vue";
import CreateFood from "../Modules/Dashboard/Admin/System/CreateFood.vue";
import CreateNotRecomended from "../Modules/Dashboard/Admin/System/CreateNotRecomended.vue";
import CreateOrganization from "../Modules/Dashboard/Admin/System/CreateOrganization.vue";
import CreateSymptom from "../Modules/Dashboard/Admin/System/CreateSymptom.vue";
import SystemUpdate from "../Modules/Dashboard/Admin/System/SystemUpdate.vue";
import UserList from "../Modules/Dashboard/Admin/UserList.vue";
import AssignModerator from "../Modules/Dashboard/Admin/AssignModerator.vue";
import ReportAdmin from "../Modules/Dashboard/Admin/ReportAdmin.vue";
import VerificationAdmin from "../Modules/Dashboard/Admin/VerificationAdmin.vue";
import ReportDetailsAdmin from "../Modules/Dashboard/Admin/ReportDetailsAdmin.vue";
import EditAdmin from "../Modules/Dashboard/Admin/EditAdmin.vue"
import LoginAdmin from "../Modules/Dashboard/Admin/LoginAdmin.vue"

//Moderator pages
import ModReport from "../Modules/Dashboard/Moderator/Report/ModReport.vue";
import ModReportDetails from "../Modules/Dashboard/Moderator/Report/ModReportDetails.vue";
import ModVerification from "../Modules/Dashboard/Moderator/ModVerification.vue";
import ModEdit from "../Modules/Dashboard/Moderator/ModEdit.vue";
import ModConfirm from "../Modules/Dashboard/Moderator/ModConfirm.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //home pages
    {
      path: "/",
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
      path: "/chat",
      name: "Chat",
      component: Chat,
    },
    {
      path: "/feed",
      name: "Feed",
      component: Feed,
    },
    {
      path: "/notification",
      name: "Notification",
      component: Notification,
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
    },
    {
      path: "/friends",
      name: "Friends",
      component: Friends,
    },
    {
      path: "/chatlist",
      name: "ChatList",
      component: ChatList,
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
      path: "/reportadmin",
      name: "ReportAdmin",
      component: ReportAdmin,
    },
    {
      path: "/verificationadmin",
      name: "VerificationAdmin",
      component: VerificationAdmin,
    },
    {
      path: "/reportdetailsadmin",
      name: "ReportDetailsAdmin",
      component: ReportDetailsAdmin,
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