<template>
  <div  class="">
    
<AboutUs></AboutUs>
<!-- <AboutUs></AboutUs> -->
    <flavors-component></flavors-component>
    <projects-comp></projects-comp>
    <SkillsComp ref="section" class="section"></SkillsComp>
    <WorkExperience></WorkExperience>
    <!-- <education-comp ref="myEl"></education-comp> -->
    <v-footer fixed color="transparent">
      <v-btn large icon class="mx-auto" @click="scrollToContent"
        ><v-icon>mdi-chevron-down</v-icon></v-btn
      >
    </v-footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import AboutUs from "@/components/AboutUs.vue"
import AboutUs from "@/components/AboutUs.vue"
import FlavorsComponent from "@/components/FlavorsComponent.vue";
import ProjectsComp from "@/components/ProjectsComp.vue";
import SkillsComp from "@/components/SkillsComp.vue";
import WorkExperience from "@/components/WorkExperience.vue";
import EducationComp from "@/components/EducationComp.vue";


export default {
  components: {
    FlavorsComponent,
    ProjectsComp,
    SkillsComp,
    WorkExperience,
    EducationComp,
    // AboutUs,
    AboutUs
    
  },
  data() {
    return {
      scrollPosition: 0,
      increment: 0,
      test: false,
      texts: ["Muhammad Waqar", " Developer"],
    currentTextIndex: 0,
    typedText: '',
    index: 0,
    animationKey: 0, 
   
    };
  },
  methods: {
    playClickSound() {
      const audio = new Audio(require('../assets/sounds/click.wav'));
      audio.play();
  },
    restartAnimation() {
      this.animationKey += 1;
    },
    
    typeText() {
      if (this.index <= this.texts[this.currentTextIndex].length) {
        this.typedText = this.texts[this.currentTextIndex].slice(0, this.index);
        this.index++;
        setTimeout(this.typeText, 200); // Typing speed (adjust as needed)
      } else {
        // Wait for a second before clearing the text
        setTimeout(() => {
          this.clearText();
        }, 1500);
      }
    },
    clearText() {
      if (this.index >= 0) {
        this.typedText = this.texts[this.currentTextIndex].slice(0, this.index);
        this.index--;
        setTimeout(this.clearText, 100); // Deleting speed (adjust as needed)
      } else {
        // Reset for the next text
        setTimeout(() => {
          this.index = 0;
          this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
          this.typeText();
        }, 500); // Wait for 0.5 seconds before typing the next text
      }
    },
    
    pageScroll() {
      // console.log(
      //   window.innerHeight + window.scrollY >= document.body.offsetHeight
      // );
      let intervalId = window.setInterval(() => {
        if (window.scrollY >= this.scrollTo) {
          clearInterval(intervalId);
          this.scrollPosition = this.scrollTo;
        } else {
          if (window.innerHeight + window.scrollY >= document.body.offsetHeight)
            window.scrollTo(0, 0);
          else window.scrollBy(0, 3);
        }
      }, 5);
    },

    scrollToContent() {
      
      if (this.scrollPosition == 0) {
        this.increment = 750;
        this.scrollTo = this.scrollPosition + this.increment;
      } else if (this.scrollPosition == 750) {
        this.increment = 1100;
        this.scrollTo = this.scrollPosition + this.increment;
      } else if (this.scrollPosition == 1850) {
        this.increment = 1000;
        this.scrollTo = this.scrollPosition + this.increment;
      }
      else {
        // console.log('chal nikal')
      }
      //  else if (this.scrollPosition == 2750) {
      //   this.increment = 800;
      //   this.scrollTo = this.scrollPosition + this.increment;
      // } else if (this.scrollPosition == 3550) {
      //   this.increment = 800;
      //   this.scrollTo = this.scrollPosition + this.increment;
      // } else if (this.scrollPosition == 4350) {
      //   this.increment = 950;
      //   this.scrollTo = this.scrollPosition + this.increment;
      // } else if (this.scrollPosition == 5150) {
      //   alert("5150");
        
      // }
      
      this.pageScroll(this.scrollTo);
      this.getScrollValue = this.scrollTo
      
    },
    movetoScrollPosition(value) {
      
      this.scrollPosition = value;
      window.scroll({
        top: value,
        left: 0,
        behavior: "smooth",
      });
    },
    animate() {
      var reveals = document.querySelectorAll(".headingLeft");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    },
    handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Call your function when the section becomes visible
          this.onSectionVisible();
        }
      });
    },
    onSectionVisible() {
      alert("fdsfdsfdsf");
      this.test = true;
      // console.log(this.test);
      // Your logic wthishen the section becomes visible
    },
  },

  mounted() {
    this.typeText();
    this.animate();
    // this.animateDot();
    setInterval(this.restartAnimation, 25000);
    // this.restartAnimation();
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this value based on your needs
    };

    const observer = new IntersectionObserver(this.handleIntersection, options);
    observer.observe(this.$refs.sectionElement);
  },
  created() {
    // window.addEventListener("scroll",  this.handleScroll)
  },
  watch: {
    getScrollValue: {
      deep: true,
      handler(newColor) {
        this.movetoScrollPosition(newColor);
      },
    },
  },
  computed: {
    ...mapGetters(["getScrollValue"]),
  },
};
</script>
<style>
.marginTop {
  margin-top: 200px;
}
/* .scroll-ease {
  transition: transform 0.03s ease-out;
} */
/* .translate-element {
  transition: transform 3s ease-out;
  position: fixed;
  top: 100px;
} */
/* .scroll-effect {
  transition: opacity 5s ease-in-out;
  opacity: 1;
} */

/* .slide-up-enter-active,
.slide-up-leave-active {
  transition: all 4s ease-out;
} */
/* .slide-up-enter-from {
  transform: translateY(0px);
} */
/* .slide-up-leave-to {
  transform: translateY(-300px);
} */
/* .cross {
    width: 20px;
    height: 20px;
    background-color: red;
    border-radius: 50%;
    position: relative;
    transition: top 10.5s ease, left 10.5s ease; 
} */

.animated-div {
  position: relative;
  animation-name: cross1;
  animation-duration: 25s;
}
.cross-2 {
position: relative;
animation-name: cross2;
animation-duration: 25s;
}

@keyframes cross1 {
  0%   { left: 150px; top: 50px; }   /* Top vertex of the diamond */
  25%  { left: 250px; top: 150px; }  /* Right vertex of the diamond */
  50%  { left: 150px; top: 250px; }  /* Bottom vertex of the diamond */
  75%  { left: 50px; top: 150px; }   /* Left vertex of the diamond */
  100% { left: 150px; top: 50px; }   /* Back to the top vertex */
}

@keyframes cross2 {
  0%   { left: 200px; top: 200px; }  /* Start at the center */
  25%  { left: 300px; top: 300px; } /* Move to the bottom-right */
  50%  { left: 200px; top: 400px; } /* Move to the bottom */
  75%  { left: 100px; top: 300px; } /* Move to the bottom-left */
  100% { left: 200px; top: 200px; } /* Return to the center */
}
.bouncing-element {
  animation: bounce 6s infinite;
  margin-top: 200px;
  position: relative;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #0CB9DF;
}
@keyframes bounce {
  0%{
    transform: translateY(250px);
  } 
  50% {
    transform: translateY(320px);
  }
  100% {
    transform: translateY(250px);
  }
}
.bouncing-element2 {
  animation: scale 3s infinite;
  margin-top: 400px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #B2E8F4;
}
@keyframes scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.8);
  }
  100% {
    transform: scale(1);
  }
}

.subscribe-button {
      /* background: linear-gradient(to right, #ff7e5f, #feb47b);  */
      background: linear-gradient(to right, #0ea5ea,  #0ea5ea, #0bd1d1);
      font-size: 16px;
      font-weight: 700 !important;
    
}


</style>
