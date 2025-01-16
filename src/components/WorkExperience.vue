<template>
  <v-container class="py-16">
    <v-row class="justify-space-around">
     
      <v-col cols="12" lg="12" md="12" sm="12">
        <v-card width="100%" color="transparent" class="elevation-0 mx-auto mt-md-16">
          <v-card-text>
            <h2 class="secondary--text text-center text--h2 headingRight">WORK EXPERIENCE</h2>
           
          </v-card-text>
          
        </v-card>
      </v-col>
      <v-col cols="12" lg="6" md="12" sm="12" v-for="experience in experiences" :key="experience">
        <v-card outlined width="100%" class="custom mx-auto mt-8 px-4 py-4 pb-8 px-md-16 borderRadius py-md-8 paragraphLeft">
          <div class="text-center">
            <v-card-title class="secondary--text text-24 justify-center pb-1">{{experience.company}}</v-card-title>
            <h5 class="secondary--text text--h5">{{ experience.jobTitle }}</h5>
            <h4 class="secondary--text text--h4">{{ experience.duration }}</h4>

            <p class="text-body-1 gray--text font-weight-regular mt-4">{{ experience.description }}</p>
          </div>
        </v-card>
      </v-col>
     
    </v-row>
  </v-container>
</template>s

<script>
export default {
  data() {
    return {
    experiences:[{company:'Shape Solutions', jobTitle:'Front End Developer', duration:'July 2022 - Present', description:' At Shape Solutions, we are not just in the business of providing IT services; we are architects of digital transformation, sculptors of cutting-edge solutions, and partners in your journey to success. With a commitment to innovation, excellence, and client satisfaction, we redefine possibilities and empower businesses to thrive in the digital age'}]
    };
  },
  methods: {
    
  },
};
</script>

<style scoped>

.scaled {
  transform: scale(1.5); /* Increase the scale value as desired */
  transition: transform 1.9s ease; /* Add a smooth transition effect */
}
/* .dark{
  transform: scale(5.5);
} */
.glass {
  width: 200px;
  height: 400px;
}
@media only screen and(max-width: 400) {
  .glass {
    width: 100px;
    height: 200px;
  }
}
.borderRadius {
  border-radius: 40px;
}
@media only screen and (max-width: 767px) {

.v-application .text--h5{
  font-size: 18px !important;
}
.v-application .text--h4{
  font-size: 14px !important;
}
.text-24{
  font-size: 24px !important;
}
}
</style>
