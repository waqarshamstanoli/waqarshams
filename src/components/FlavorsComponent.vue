<template>
  <div>
    <v-row>
      <v-col cols="12" lg="6" md="12" sm="12"> </v-col>
      <v-col cols="12" lg="6" md="12" sm="12"> </v-col>
    </v-row>
  </div>
</template>

<script>
// import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    pageScroll() {
      // If at page bottom, scroll by to top
      // if((window.innerHeight + window.scrollY) >= document.body.offsetHeight)
      //   window.scrollTo(0, 0)
      // else
      //   // Scroll 1px down
      //   window.scrollBy(0, 1)
    },
    reveal() {
      var reveals = document.querySelectorAll(".headingRight");
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
    animateHeadingLeft() {
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
    animateParagraphRight() {
      var reveals = document.querySelectorAll(".paragraphRight");
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
    animateParagraphLeft() {
      var reveals = document.querySelectorAll(".paragraphLeft");
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
    animateHeadingCenter() {
      var reveals = document.querySelectorAll(".headingCenter");
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
    animateHeadingLeftBottom() {
      var reveals = document.querySelectorAll(".headingLeftBottom");
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
    animateCenterCards() {
      var reveals = document.querySelectorAll(".centerCards");
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
  },
  created() {
    window.addEventListener("scroll", this.pageScroll);
    window.addEventListener("scroll", this.reveal);
    window.addEventListener("scroll", this.animateParagraphRight);
    window.addEventListener("scroll", this.animateParagraphLeft);
    window.addEventListener("scroll", this.animateHeadingLeft);
    window.addEventListener("scroll", this.animateHeadingLeftBottom);
    window.addEventListener("scroll", this.animateHeadingCenter);
    window.addEventListener("scroll", this.animateCenterCards);
  },
};
</script>

<style>
.containerHeight {
  display: flex;
  align-items: center; /* Vertically center the items */
  justify-content: center; /* Horizontally center the items */
  height: 100vh; /* Set the height of the container */
}

.headingRight {
  position: relative;
  opacity: 0;
  visibility: hidden;
  transform: translate(150px, -50px);
  /* transform: translateY(-100px); */
  opacity: 0;
  transition: 2s all ease;
}

.headingRight.active {
  opacity: 1;
  visibility: inherit;
  transform: translate(0px, 0px);
}
.paragraphRight {
  position: relative;
  opacity: 0;
  visibility: hidden;
  transform: translate(150px, 50px);
  /* transform: translateY(-100px); */
  opacity: 0;
  transition: 2s all ease;
}

.paragraphRight.active {
  opacity: 1;
  visibility: inherit;
  transform: translate(0px, 0px);
}
.headingLeft {
  position: relative;
  opacity: 0;
  visibility: hidden;
  transform: translate(-200px, -200px);
  transition: 2s all ease;
}

.headingLeft.active {
  opacity: 1;
  visibility: inherit;
  transform: translate(0px, 0px);
}
.headingLeftBottom {
  position: relative;
  opacity: 0;
  visibility: hidden;
  transform: translate(-200px, 200px);
  transition: 2s all ease;
}

.headingLeftBottom.active {
  opacity: 1;
  visibility: inherit;
  transform: translate(0px, 0px);
}
.paragraphLeft {
  position: relative;
  opacity: 0;
  visibility: hidden;
  transform: translate(-200px, 70px);
  transition: 2s all ease;
}

.paragraphLeft.active {
  opacity: 1;
  visibility: inherit;
  transform: translate(0px, 0px);
}
.headingCenter {
  position: relative;
  opacity: 0;
  visibility: hidden;
  transform: translate(0px, -70px);
  transition: 2s all ease;
}

.headingCenter.active {
  opacity: 1;
  visibility: inherit;
  transform: translate(0px, 0px);
}
.centerCards {
  position: relative;
  opacity: 0;
  visibility: hidden;
  transform: scale(0.25);
  transition: 2s all ease;
}

.centerCards.active {
  opacity: 1;
  visibility: inherit;
  transform: scale(1);
}
</style>
