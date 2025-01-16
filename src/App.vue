<template>
  <v-app>
    <v-main>
      <img src="./assets/pattern-1.svg" alt="" class="setimage" :class="{ transformImage: left }"/>
      <!-- <div class="dot" :style="{ top: `${dotPosition.y+45}px`, left: `${dotPosition.x+10}px` }">
        </div> -->
        <!-- <div class="dottext" v-if="showtext" :style="{ top: `${dotPosition.y +110}px`, left: `${dotPosition.x + 20}px` }"><p class="primary--text ml-2">Click to stop ripples</p></div> -->
      <!-- <div class="ripples-container">
        <div v-for="(ripple, index) in ripples" :key="index" class="ripple" :style="{ top: `${dotPosition.y+20}px`, left: `${dotPosition.x-15}px` }">
         </div>
      </div> -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
    left: true,
    right: false,
    dotPosition: { x: 0, y: 0 },
    showtext:true,
    ripples: [],
    tempX: 0,
    tempY: 0,
  }),
  methods: {
    stopFunction() {
      this.showtext=false
      clearInterval(this.intervalId);
      this.ripples=[]
    },
    handleMouseMove() {
    if (!this.firstMove) {
      this.firstMove = true;
      this.changeCursorToPointer();
    }
  },
  changeCursorToPointer() {
    document.body.style.cursor = 'pointer';
  },
    
    createRipples() {
      
      this.ripples.push({});
      
      setTimeout(() => {
       
        // this.ripples.pop();
      }, 2000); 
    },

    rotate() {
      if (window.pageYOffset > 10 && window.pageYOffset < 650) {
        this.left = true;
        this.right = false;
      } else if (window.pageYOffset > 651 && window.pageYOffset < 1110) {
        this.right = true;
        this.left = false;
      } else if (window.pageYOffset > 1101 && window.pageYOffset < 2750) {
        this.left = true;
        this.right = false;
      } else if (window.pageYOffset > 2760 && window.pageYOffset < 3550) {
        this.right = true;
        this.left = false;
      } else if (window.pageYOffset > 3560 && window.pageYOffset < 4350) {
        this.left = true;
        this.right = false;
      } else if (window.pageYOffset > 4360 && window.pageYOffset < 5150) {
        this.right = true;
        this.left = false;
      } else if (window.pageYOffset > 4350 && window.pageYOffset < 5150) {
        this.left = true;
        this.right = false;
      }
      // this.left=true
    },
    updateDotPosition(event) {
      const offsetX = 10;
      const offsetY = 120;

      if (event.clientX !== undefined) {
        this.dotPosition = {
          x: event.clientX + window.scrollX - offsetX,
          y: event.clientY + window.scrollY - offsetY,
        };

        (this.tempX = event.clientX), (this.tempY = event.clientY);
      } else {
        this.dotPosition = {
          x: this.tempX + window.scrollX - offsetX,
          y: this.tempY + window.scrollY - offsetY,
        };
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.rotate);
  },

  mounted() {
    this.handleMouseMove()
    this.updateDotPosition({
      clientX: window.innerWidth / 2,
      clientY: window.innerHeight / 2,
    });

    this.intervalId = setInterval(this.createRipples, 2000); 
    document.addEventListener('click', this.stopFunction);
    window.addEventListener("mousemove", this.updateDotPosition);
    window.addEventListener("scroll", this.updateDotPosition);
  },
  beforeDestroy() {
    window.removeEventListener("mousemove", this.updateDotPosition);
    window.removeEventListener("scroll", this.updateDotPosition);
  },
};
</script>
<style>
.setimage {
  position: fixed;
  width: 1000px;
  bottom: 200px;
  /* left:900px; top:0px; transform:rotate(0deg); */
  animation-name: moveRight;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  /* Add this line */
  opacity: 0.5;
}
@media only screen and (max-width: 600px) {
  .setimage {
    display: none;
  }
}

@keyframes moveRight {
  0% {
    left: 50px;
    top: 10px;
    transform: rotate(-160deg);
  }

  100% {
    left: 70%;
    top: 10px;
    transform: rotate(62deg);
  }
}

.transformImage {
  animation-name: moveLeft;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  opacity: 0.5;
}

@keyframes moveLeft {
  0% {
    left: 800px;
    top: 0px;
  }

  100% {
    left: -450px;
    top: 0px;
    transform: rotate(-140deg);
  }
}

.dot {
  position: absolute;
  z-index: 1000;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #0ea5ea;
  transform: translate(-50%, -50%);
  pointer-events: none;
  /* Prevent the dot from blocking interactions */
}
.dottext {
  position: absolute;
  z-index: 1000;
  width: 150px;
  transform: translate(-50%, -50%);
  font-size: 12px;
}

.ripple {
  position: absolute;
  z-index: 100;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #0bd1d1;
  /* transform: translate(-50%, -50%); */
  pointer-events: none;
  animation: rippleAnimation 4s linear;
  animation-fill-mode: forwards;
}

@keyframes rippleAnimation {
  to {
    transform: scale(2);
    opacity: 0;
  }
}
</style>
