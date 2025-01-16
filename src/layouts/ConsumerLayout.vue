<template>
  <div class="dashboard-layout">
    <div>
      <Top-bar @item-selected="changeTheme"></Top-bar>
      <dashboard-content ref="content"  :class="(darkTheme ? 'dark-theme' : 'body')" ></dashboard-content>
      <Footer></Footer>
     
    </div>
  </div>
</template>

<script>
import DashboardContent from "../components/ContentView.vue";
import TopBar from "./TopBar.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    DashboardContent,
    TopBar,
    Footer
  },

  data() {
    return {
      // count: 1000000,
      // digits: [],
      darkTheme:true
    };
  },
  methods: {
    changeTheme(theme) {
      
      if (theme == 'mdi-weather-night') {
        this.$vuetify.theme.dark = true;
        this.darkTheme = true
        
      } else {
        this.$vuetify.theme.dark = false;
        this.darkTheme = false
        
      }

    },
  },
  // created() {
  //   this.digits = "" + this.count;
  //   setInterval(() => {
  //     this.increment();
  //   }, 100000); 
  // },
};
</script>

<style lang="scss">
.v-application .text--h2 {
  line-height: 0.9em !important;
  font-size: 64px !important;
  font-weight: 800 !important;
  font-family: "Noto_Sans-Black" !important;
  // font-family: "Halyard";
}
.v-application .body-1 {
  font-family: 'NotoSans-Medium' !important;
}
.v-application .text--h4 {
  font-size: 18px !important;
  font-family: "NotoSans-Medium";
  font-weight: 100 !important;
  line-height: 35px !important;
}
.v-application .text--h3 {
  font-size: 16px !important;
  font-family: "NotoSans-Medium" !important;
  font-weight: 400 !important;
  line-height: 24px !important;
  // color: #7E9CC7;
}
.v-application .text--h6 {
  font-size: 40px !important;
  line-height: normal !important
}
.v-application .text--h5 {
  font-size: 22px !important;
  font-family: "NotoSans-Medium";
  font-weight: 500 !important;
  line-height: 35px !important;
}
.v-card__title {
  font-size: 30px !important;
  font-weight: 600;
  font-family: 'NotoSans-Medium' !important;
}
.v-text-field.v-text-field--enclosed .v-text-field__details {
    padding-top: 0px;
    margin-bottom: 8px;
    display: none !important;
}
.header-text{
   background: linear-gradient(90deg, #0ea5ea,  #0ea5ea, #6b4ef8);
     -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    background-clip: text !important;
    text-fill-color: transparent;
}
.header{
   background: linear-gradient(90deg, #6b4ef8,  #0ea5ea, #6b4ef8);
    
}
.v-btn.v-size--large {
  transition: all 0.15s ease-in-out;
  // color: #2E548C !important;
  // 94a9c9
  font-family: 'NotoSans-Medium' !important;
  font-size: 16px !important;
  cursor: pointer;
  border-radius: 30px !important;
}
.menu.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default {
  background-color: transparent !important;
}
.menu.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--dark.v-size--default {
  background-color: transparent !important;
}
.menu.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default:hover {
  background-color: transparent !important;
}

// .v-btn:hover{
//   background:#3a2d3b !important
// }
.v-text-field--outlined.v-input--dense .v-label {
    color: #7F92B0 !important;
    font-size: 14px !important;
    font-family: 'NotoSans-Medium' !important;
}
.v-text-field--outlined fieldset {
    color: transparent !important;
}
.body {
  background: linear-gradient(to bottom left, #dceef3, #F9FBFF, #dae8ec, #F9FBFF);
}
.dark-theme{
  background-color:#0F172A
}
.theme--light.v-btn {
    color: rgba(0, 0, 0, 0);
}
.theme--dark.v-btn {
    color: rgba(0, 0, 0, 0);
}
.custom.theme--dark.v-card {
    background-color: rgb(12,69,119,0.1) !important;
    color: #FFFFFF;
}

















.v-btn.v-size--small {
  color: #bfbfbf !important;
  font-family: Noto_Sans !important;
  font-size: 16px !important;
}

.v-btn--active {
  background: #ffec00 !important;
  color: black !important;
}
.topBarSpan {
  font-family: Noto_Sans !important;
  font-size: 16px !important;
}

.v-application .text--h1 {
  line-height: 52px !important;
  font-size: 60px !important;
  font-weight: 900 !important;
  // font-family: "Halyard";
  font-family: "Noto_Sans-Black";
}





.v-btn--rounded {
  font-family: "Noto_Sans" !important;
}
.v-btn.v-size--x-large {
  border-radius: 40px !important;
  border: 2px solid black !important;
  font-size: 30px !important;
}
@font-face {
  font-family: "Noto_Sans-Black";
  src: local("Noto_Sans"),
    url(../assets/Noto_Sans/static/NotoSans-Black.ttf) format("truetype");
}
@font-face {
  font-family: "NotoSans-Medium";
  src: local("Noto_Sans"),
    url(../assets/Noto_Sans/static/NotoSans-Medium.ttf) format("truetype");
}
@font-face {
  font-family: "Tungsten-light";
  src: local("Tungsten-light"),
    url(../assets/tungsten/Tungsten-Light.ttf) format("truetype");
}
@font-face {
  font-family: "Halyard";
  src: local("Halyard"),
    url(../assets/Halyard/HalyardDisplay.ttf) format("truetype");
}
.ffHalyard {
  font-family: Halyard !important;
}
// .v-application .body-1 {
//   font-size: 28px !important;
//   font-weight: 200;

//   font-family: Halyard !important;
// }
// .v-application .body-2 {
//   font-size: 58px !important;
//   font-weight: 200;

//   font-family: Halyard !important;
// }
.v-application .caption {
  font-size: 22px !important;
  font-weight: 200;

  font-family: Halyard !important;
}


.height {
  height: fit-content;
}


.gradientButton2 {
  color: white !important;
  background-image: linear-gradient(to right, #5f2a89, #0ea8e3);
  font-size: 25px !important;
  border: none !important;
}
.cursor-pointer {
  cursor: pointer;
}
.gifAnimation {
  margin-top: 62px;
  margin-left: 117px;
}

// TEXT
.text-decoration-underline:hover {
  color: #fbbf23;
}
///business layout ki classes

@media only screen and (max-width: 767px) {
  .v-application .text--h2 {
    font-size: 36px !important;
  }
}
</style>
