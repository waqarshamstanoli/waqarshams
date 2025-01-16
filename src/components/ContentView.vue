<template>
  <div>
    <v-container>
      <router-view></router-view>
    </v-container>
  </div>
</template>
  <script>
export default {
  data() {
    return {
      translateX: 0,
      rotation: 0,
    };
  },
  methods: {
    
  },
  created() {
  },
};
</script>
  <style>
/* .animateElement {
  opacity: 1;
  visibility: inherit;
  transform: translate(-100%, 0%) rotate(90deg);
} */
/* .swinger {
  z-index: 20;
  transform: translate(100%, 0%);
  
} */
</style>