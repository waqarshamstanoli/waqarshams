import Vue from "vue";
import VueRouter from "vue-router";
import ConsumerLayout from "../layouts/ConsumerLayout";
// import BusinessLayout from "../layouts/BusinessLayout";
// import Store from "@/store/store";
// import {createRouter, createWebHistory} from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Consumer",
      component: ConsumerLayout,
      props: true,
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("../views/HomeView.vue"),
        },
       
      ],
    },
   
  ],
  
});

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

router.beforeEach((to, from, next) => {
  let isAuthenticated = false;
  const admin = localStorage.getItem("roleAdmin");
  // console.log("router", to, isAuthenticated);
  if (to.meta.needsAuth) {
    if (admin) {
      next();
    } else {
      next("/");
    }
  } 
  else {
    next();
  }
});

// const router = new VueRouter({
//   routes,
// });

export default router;
