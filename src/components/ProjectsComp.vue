<template>
  <v-container>
    <v-row class="justify-space-around">
      <v-col cols="12" lg="12" md="12" sm="12">
        <v-card class="headingCenter project_card elevation-0 mx-auto mt-16" color="transparent">
          <h1 class="gray-text text--h2 text-center">PROJECTS</h1>
          <p class="text-body-1 gray--text font-weight-regular mt-8 text-center">Stay in control - und create the shake that meets your needs. Just as you like it. Just as you need it. Keep an eye out for our machines. The rest's a cinch:</p>
        </v-card>
      </v-col>
      <v-col cols="12">
        <vue-slick-carousel v-bind="slickOptions" >
            <v-card v-for="(project, index) in projects" :key="index" rounded="lg" color="transparent" width="290px" class="mx-auto mt-8 elevation-0">
              <v-card-text>
                <h4 class="secondary--text text--h4 text-center mt-2">{{ project.projectName }}.</h4>
                <v-img :src="project.projectImg" alt="" class="mt-8"> </v-img>
              </v-card-text>
              <v-card-actions>
                <v-btn class="py-5 px-6 white--text text-capitalize subscribe-button mx-auto mb-4" > <a :href="project.projectLink">Live</a></v-btn>
              </v-card-actions>
            </v-card>
        </vue-slick-carousel>
      </v-col>
    </v-row>
  </v-container>
       
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default {
  components: {
    VueSlickCarousel,    
  },
  data() {
    return {
      slickOptions: {
  slidesToShow: 4, // Number of slides to show at once
  slidesToScroll: 1, // Number of slides to scroll at once
  autoplaySpeed: 2000, // Auto-play speed in milliseconds
  arrows: true, // Show navigation arrows
  dots: true, // Show navigation dots
  infinite: true, // Loop the slider infinitely
  speed: 500, // Transition speed in milliseconds
  responsive: [ // Responsive breakpoints
    {
      breakpoint: 1024, // Breakpoint at which settings will change
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
  arrows: false, // Show navigation arrows

      }
    }
  ]
},
      step4Highlight: false,
      projects: [
        {
          projectName: "AEVENT",
          projectImg: require("../assets/aevent.webp"),
          projectDescription: "",
          projectLink: "https://app.aevent.com/#/",
        },
        {
          projectName: "BimmeTech",
          projectImg: require("../assets/2.png"),
          projectDescription: "",
          projectLink: "https://www.bimmer-tech.net/",
        },
        {projectName:'TECHBAR', projectImg:require("../assets/techbar.png"),projectDescription:'', projectLink:'https://admin-r2.techbar.com/auth/login'},
         {projectName:'OPTIMUS HEALTH', projectImg:require("../assets/optimus.png"),projectDescription:'',projectLink:'https://www.myoptimushealth.com/'},
        {projectName:'RESEARCH PAL', projectImg:require("../assets/research.png"),projectDescription:'',projectLink:'https://researchpal.co/'},
        {projectName:'TALKITOUT', projectImg:require("../assets/talkit.png"),projectDescription:'',projectLink:'https://talkitout.ai/'},

        {
          projectName: "KAARKA",
          projectImg: require("../assets/kaarka.png"),
          projectDescription: "",
          projectLink: "https://kaarka.netlify.app/#/",
        },
        {
          projectName: "EXTSY",
          projectImg: require("../assets/ex.png"),
          projectDescription: "",
          projectLink: "https://extsy.top/",
        },
        {
          projectName: "EYE SMARTY",
          projectImg: require("../assets/eye.svg"),
          projectDescription: "",
          projectLink: "https://www.eyesmarty.com/",
        },
        {
          projectName: "Distinction Wrapping",
          projectImg: require("../assets/3.png"),
          projectDescription: "",
          projectLink: "https://www.distinctionwrapping.com/",
        },
        {
          projectName: "The Taxcom Accountants",
          projectImg: require("../assets/TheTax.png"),
          projectDescription: "",
          projectLink: "https://thetaxcom.co.uk/",
        },
        {
          projectName: "PureSun",
          projectImg: require("../assets/PureSun.png"),
          projectDescription: "",
          projectLink: "https://demo23.anazah.com/",
        },
        {
          projectName: "FITRROBIX",
          projectImg: require("../assets/fit.png"),
          projectDescription: "",
          projectLink: "",
        },
        {
          projectName: "INTELLI COMMERCE",
          projectImg: require("../assets/intel.png"),
          projectDescription: "",
          projectLink: "",
        },
        {
          projectName: "Chef Special",
          projectImg: require("../assets/ChefSpecial.png"),
          projectDescription: "",
          projectLink: "",
        },
        {
          projectName: "One Stop Claims",
          projectImg: require("../assets/5.png"),
          projectDescription: "",
          projectLink: "",
        },
        {
          projectName: "Beyond Blend",
          projectImg: require("../assets/1.png"),
          projectDescription: "",
          projectLink: "",
        },
        {
          projectName: "Shop.Co",
          projectImg: require("../assets/6.png"),
          projectDescription: "",
          projectLink: "",
        },
        {
          projectName: "NASEEM EDUCATION",
          projectImg: require("../assets/nas.png"),
          projectDescription: "",
          projectLink: "",
        },
        {
          projectName: "FINANCIALS UNLIMITED",
          projectImg: require("../assets/proteins.png"),
          projectDescription: "",
          projectLink: "",
        },
        {
          projectName: "WHEELS N DEALS",
          projectImg: require("../assets/wnd.png"),
          projectDescription: "",
          projectLink: "",
        },
       
       
      ],
      projectDetails: false,
    };
  },
  methods: {
   
    // step1Visible() {
    //   setTimeout(() => {
    //     this.whiteProtien = true;
    //   }, 1000);
    // },
    // step1Hide() {
    //   setTimeout(() => {
    //     this.whiteProtien = false;
    //   }, 10000);
    // },
    // step2Visible() {
    //   setTimeout(() => {
    //     this.step2Highlight = true;
    //   }, 5000);
    // },
    // step3Visible() {
    //   setTimeout(() => {
    //     this.step3Highlight = true;
    //   }, 7000);
    // },
    // step4Visible() {
    //   setTimeout(() => {
    //     this.step4Highlight = true;
    //   }, 8000);
    // },

    // makeAllInactive() {
    //   setTimeout(() => {
    //     this.step4Highlight = false;
    //     this.step3Highlight = false;
    //     this.step2Highlight = false;
    //   }, 12000);
    // },

    // handleIntersection(entries) {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       this.step1Visible();
    //       this.step2Visible();
    //       this.step3Visible();
    //       this.step4Visible();
    //       this.makeAllInactive();
    //       this.step1Hide();
    //     }
    //   });
    // },
  },
  created() {
    window.addEventListener("scroll", this.reveal);
  },
  mounted() {
    const observer = new IntersectionObserver(this.handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });
    observer.observe(this.$refs.mySection);
    // this.step1Visible()
  },
};
</script>

<style>
.Hide {
  transition: transform 1s ease;
  transform: scale(0);
}
.scaled {
  transform: scale(0.2);
  transition: transform 1s ease; /* Add a smooth transition effect */
}
.scaled2 {
  transform: scale(1);
  transition: transform 1s ease; /* Add a smooth transition effect */
}
a{
  color: white !important;
}
.project_card{
  width: 50% !important;
}
@media only screen and (max-width: 767px) {
  .project_card{
  width: 100% !important;
}
}
</style>
