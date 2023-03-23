import { createApp } from "vue";
import "./style.css";
import { createRouter, createWebHistory } from "vue-router";
import VueSplide from "@splidejs/vue-splide";
import App from "./App.vue";

//home pages
import LandingPage from "../src/Modules/Home/pages/LandingPage.vue";
import About from "../src/Modules/Home/pages/About.vue";
import Contactus from "../src/Modules/Home/pages/Contactus.vue";
import Privacypolicy from "../src/Modules/Home/pages/Privacypolicy.vue";
import Termsofuse from "../src/Modules/Home/pages/Termsofuse.vue";

//Communication pages
import Signin from "../src/Modules/Communication/Auth/Signin.vue";
import CreateAccount from "../src/Modules/Communication/Auth/CreateAccount.vue";
import Parent from "../src/Modules/Communication/Auth/Parent.vue";
import HealthProfessional from "../src/Modules/Communication/Auth/HealthProfessional.vue";
import Organization from "../src/Modules/Communication/Auth/Organization.vue";
import Child from "../src/Modules/Communication/Auth/Child.vue";
import ForgotPassword from "../src/Modules/Communication/Auth/ForgotPassword.vue";

//Awareness pages
import AwarenessBlog from "../src/Modules/Awareness/pages/AwarenessBlog.vue";
import Categories from "../src/Modules/Awareness/pages/Categories.vue";
import Causes from "../src/Modules/Awareness/pages/Causes.vue";
import Definition from "../src/Modules/Awareness/pages/Definition.vue";
import Doctors from "../src/Modules/Awareness/pages/Doctors.vue";
import NotRecomended from "../src/Modules/Awareness/pages/NotRecomended.vue";
import OrganizationRec from "../src/Modules/Awareness/pages/OrganizationRec.vue";
import Recomended from "../src/Modules/Awareness/pages/Recomended.vue";
import Symptom from "../src/Modules/Awareness/pages/Symptom.vue";

//Admin pages
import AdminDashboard from "../src/Modules/Dashboard/Admin/AdminDashboard.vue";
import CreateCategories from "../src/Modules/Dashboard/Admin/System/CreateCategories.vue";
import CreateCauses from "../src/Modules/Dashboard/Admin/System/CreateCauses.vue";
import CreateDefinition from "../src/Modules/Dashboard/Admin/System/CreateDefinition.vue";
import CreateDoctors from "../src/Modules/Dashboard/Admin/System/CreateDoctors.vue";
import CreateFood from "../src/Modules/Dashboard/Admin/System/CreateFood.vue";
import CreateNotRecomended from "../src/Modules/Dashboard/Admin/System/CreateNotRecomended.vue";
import CreateOrganization from "../src/Modules/Dashboard/Admin/System/CreateOrganization.vue";
import CreateSymptom from "../src/Modules/Dashboard/Admin/System/CreateSymptom.vue";
import SystemUpdate from "../src/Modules/Dashboard/Admin/System/SystemUpdate.vue";
import UserList from "../src/Modules/Dashboard/Admin/UserList.vue";
import AssignModerator from "../src/Modules/Dashboard/Admin/AssignModerator.vue";
import ReportAdmin from "../src/Modules/Dashboard/Admin/ReportAdmin.vue";
import VerificationAdmin from "../src/Modules/Dashboard/Admin/VerificationAdmin.vue";
import ReportDetailsAdmin from "../src/Modules/Dashboard/Admin/ReportDetailsAdmin.vue";

//Moderator pages
import ModReport from "../src/Modules/Dashboard/Moderator/Report/ModReport.vue";
import ModReportDetails from "../src/Modules/Dashboard/Moderator/Report/ModReportDetails.vue";
import ModVerification from "../src/Modules/Dashboard/Moderator/ModVerification.vue";
import ModEdit from "../src/Modules/Dashboard/Moderator/ModEdit.vue";

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
  ],
});
createApp(App).use(router).use(VueSplide).mount("#app");
