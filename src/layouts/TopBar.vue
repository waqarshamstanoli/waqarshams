<template>
  <div>
    <!-- <v-container fluid>

    </v-container> -->
    <v-app-bar class="elevation-0 hidden-sm-and-down header" color="" fixed dense height="auto">
      <v-toolbar-items>

        <img @click="scrollTo(0)" src="../assets/WAQAR SHAMS.png" width="400px" height="60px" alt="" class="mt-4  ml-md-4 cursor-pointer" to="/"
          v-if="selectedItem == 'mdi-weather-night'" />
        <img @click="scrollTo(0)" src="../assets/WAQAR SHAMS.png" width="400px" height="60px" alt="" class="mt-4  ml-md-4 cursor-pointer" to="/"
          v-if="selectedItem != 'mdi-weather-night'" />
      </v-toolbar-items>

      <v-toolbar-items class="hidden-sm-and-down mx-auto">
        <v-btn text large @click="scrollTo(0)" :class="{ activeButton: scrollPosition == 1150 }"
          class="text-capitalize btnText--text py-2"> About Me </v-btn>
        <v-btn text large @click="scrollTo(700)" :class="{ activeButton: scrollPosition == 1950 }"
          class="text-capitalize btnText--text py-2"> Projects </v-btn>
        <v-btn text large @click="scrollTo(1350)" :class="{ activeButton: scrollPosition == 3350 }"
          class="text-capitalize btnText--text py-2"> Skills </v-btn>
        <v-btn text large @click="scrollTo(2450)" :class="{ activeButton: scrollPosition == 4350 }"
          class="text-capitalize btnText--text py-2"> Work Experience </v-btn>
        <!-- <v-btn text large @click="scrollTo(3450)" :class="{ activeButton: scrollPosition == 5150 }"
          class="text-capitalize btnText--text py-2"> Education </v-btn> -->
        <v-btn text large @click="scrollTo(4250)" :class="{ activeButton: scrollPosition == 5150 }"
          class="text-capitalize btnText--text py-2"> Contact </v-btn>
      </v-toolbar-items>
      <v-menu offset-y left="true" rounded="lg">
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" class=" menu elevation-0">
            <v-icon color="icon" class="" v-on="on"> {{ selectedItem }} </v-icon>
            <v-icon color="icon" class="ml-4"> mdi-chevron-down </v-icon>
          </v-btn>
        </template>

        <v-list dense>
          <v-list-item class="" v-for="item in items" :key="item" @click="selectItem(item)">
            <v-list-item-icon class="">
              <v-icon color="icon" class="" v-on="on"> {{ item.icon }} </v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>
    <!-- MOBILE NAVBAR -->

    <v-app-bar height="auto" class="hidden-md-and-up" color="blue" dense>
      <v-toolbar-title class="mobile-title">
        <v-toolbar-items>
          <router-link to="/">
          <img src="../assets/logo dark.png" height="60px" alt="" class="mt-4  ml-md-4 cursor-pointer" to="/"
            v-if="selectedItem == 'mdi-weather-night'" />
          <img src="../assets/logo dark.png" height="60px" alt="" class="mt-4  ml-md-4 cursor-pointer" to="/"
            v-if="selectedItem != 'mdi-weather-night'" />
          </router-link>
        </v-toolbar-items>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- <v-spacer></v-spacer> -->
      <v-menu offset-y left="true" rounded="lg">
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" class=" menu elevation-0">
            <v-icon color="icon" class="" v-on="on"> {{ selectedItem }} </v-icon>
            <v-icon color="icon"> mdi-chevron-down </v-icon>
          </v-btn>
        </template>

        <v-list dense>
          <v-list-item class="" v-for="item in items" :key="item" @click="selectItem(item)">
            <v-list-item-icon class="">
              <v-icon color="icon" class="" v-on="on"> {{ item.icon }} </v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <div class="text-right">
        <v-app-bar-nav-icon class="mbl-nav-icon" @click="toggleMenu"></v-app-bar-nav-icon>
      </div>
    </v-app-bar>
    <!-- MOBILE NAVBAR -->

    <!-- MOBILE NAVIGATION DRAWER -->
    <v-navigation-drawer width="100%" v-if="showMenu" class="mbl-navbar" v-model="showMenu">
      <v-list>
        <v-list-item link>
          <v-btn text large @click="scrollTo(0)" :class="{ activeButton: scrollPosition == 1150 }"
            class="text-capitalize btnText--text py-2"> About Me </v-btn>
        </v-list-item>
        <v-list-item link>
          <v-btn text large @click="scrollTo(750)" :class="{ activeButton: scrollPosition == 1950 }"
            class="text-capitalize btnText--text py-2"> Projects </v-btn>
        </v-list-item>
        <v-list-item link>
          <v-btn text large @click="scrollTo(1850)" :class="{ activeButton: scrollPosition == 3550 }"
            class="text-capitalize btnText--text py-2"> Skills </v-btn>
        </v-list-item>
        <v-list-item link>
          <v-btn text large @click="scrollTo(2850)" :class="{ activeButton: scrollPosition == 4350 }"
            class="text-capitalize btnText--text py-2"> Work Experience </v-btn>
        </v-list-item>
        <!-- <v-list-item link>
          <v-btn text large @click="scrollTo(3450)" :class="{ activeButton: scrollPosition == 5150 }"
            class="text-capitalize btnText--text py-2"> Education </v-btn>
        </v-list-item> -->
        <v-list-item link>
          <v-btn text large @click="scrollTo(4250)" :class="{ activeButton: scrollPosition == 5150 }"
            class="text-capitalize btnText--text py-2"> Contact </v-btn>
        </v-list-item>


      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
// import InputSwitch from "@/components/InputSwitch.vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex"; // Import mapGetters to access the current route

export default {
  // components: { InputSwitch },
  data() {
    return {
      showMenu: false,
      isHovered: true,
      // consumer: false,
      scrollPosition: "",
      visible: false,
      items: [{ icon: 'mdi-white-balance-sunny', name: "Light" }, { icon: 'mdi-weather-night', name: "Dark" }],
      selectedItem: 'mdi-weather-night',
    };
  },


  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu; // Toggle the menu state
    },
    ...mapActions(["moveToNext"]),
    playClickSound() {
      const audio = new Audio(require('../assets/sounds/click.wav'));
      audio.play();
    },
    selectItem(item) {
      this.selectedItem = item.icon;
      this.$emit('item-selected', this.selectedItem)
    },
    openModal() {
      if (this.$vuetify.theme.dark == false) {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    },
    toggle(event) {
      this.visible = event;
    },
    select(option) {
      this.name = option.name;
      this.image = option.img;
      this.visible = false;
    },

    handleSwitchToggle() {


      if (this.$vuetify.theme.dark == false) {
        this.$vuetify.theme.dark = true;
        this.$router.push({ path: "/business/machines" });
      } else {
        this.$vuetify.theme.dark = false;
        this.$router.push({ path: "/" });
      }

      // this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    scrollTo(position) {
      this.playClickSound()
      this.scrollPosition = position;
      this.$store.commit("SET_SCROLL_POSITION", position);
    },
  },
  mounted() {
    // Check the current route and set the selectedItem accordingly
    switch (this.$route.path) {
      case "/": // Assuming "/" corresponds to the About Me route
        this.selectedItem = "mdi-weather-night";
        break;
      case "/projects":
        this.selectedItem = "YourIconForProjects";
        break;
      // Add cases for other routes if needed
      default:
        this.selectedItem = "mdi-weather-night"; // Set default if route not matched
    }
  },

  computed: {
    // map the $route object to a local computed property
    ...mapGetters(["$route"])
  },
};
</script>

<style scoped>
.aselect {
  width: 75px;
}

.arrow {
  position: absolute;
  right: 10px;
  top: 20%;
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 10px solid #888;
  transform: rotateZ(0deg) translateY(0px);
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.59, 1.39, 0.37, 1.01);
}

.expanded {
  transform: rotateZ(180deg) translateY(2px);
}

.label {
  display: block;
  padding: 2px 12px;
  font-size: 16px;
  color: white;
  font-family: Tungsten !important;
}

/* .current {
			background: #eaeaea;
		}
		.hidden {
			visibility: hidden;
		}
		.visible {
			visibility: visible;
		} */
.selector {
  /* border: 1px solid gainsboro; */
  background: transparent;
  position: relative;
  z-index: 1;
}

ul {
  /* width: 100%; */
  list-style-type: none;

  margin: 0;
  font-size: 16px;
  font-family: tungsten;
  border: 1px solid gainsboro;
  position: absolute;
  z-index: 1;
  background: #fff;
  border-radius: 5px;
  padding: 10px 25px 10px 10px;
}

.topBarOpacity {
  opacity: 0.8;
}

.activeButton {
  background-color: #ffec00;
}

.mbl-navbar {
  display: none;
}

/*.hover-effect {
  transition: transform 0.3s ease-in-out;
}

 Define the transformation on hover 
.hover-effect:hover {
  transform: scale(1.1);
   Scale up the image by 10% 
}*/

.content-container {
  position: fixed;
  top: 17%;
  left: 0;
  width: 100%;
  height: fit-content;
  z-index: 1000;

}

.dialog-wrapper {
  background-color: #ffffff;
  /* Background color of the dialog */
  padding: 20px;

}

.dialog-content {
  max-width: 100%;
}


@media only screen and (max-width: 767px) {
  .mbl-navbar {
    display: block;
  }

  .mbl-nav-icon {
    display: block !important;
  }

  .desktop-nav {
    display: none !important;
  }

  .mobile-title {
    display: flex;
    align-items: center;
  }

  .mobile-title {
    justify-content: space-between;
  }
}
</style>
