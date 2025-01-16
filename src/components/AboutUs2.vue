<template>
    <div >
      <v-row class="justify-center" style="height: 80vh">
        <v-col cols="12"   lg="4" md="12" sm="12" class="red" >
          <v-card
            width="80%"
            color="transparent"
            class="elevation-0 mx-auto marginTop"
            @click="playClickSound"
          >
            <v-card-text>
              
              <h4 class="text-subtitle-2 font-weight-bold gray--text headingLeft">
                Hey My Name is
              </h4>
              <h2 class="text--h2 secondary--text  headingLeft mt-4">
                I'm <span class="header-text"> Muhammad Waqar</span>
              </h2>
              
              
            </v-card-text>
           
          </v-card>
        </v-col>
        <v-col cols="12" lg="4" md="12" sm="12" class=" green">
          <div class="containers">
  <div class="centered-div radius">
    <!-- <div class="text-center radius "> -->
          <img src="../assets/banner.png" alt="" class="mt-16">
          <!-- </div> -->
  </div>
</div>
          <!-- <div class="text-center radius centered-div">
          <img src="../assets/banner.png" alt="" class="mt-16">
          </div> -->
        </v-col>
        <v-col cols="12" lg="4" md="12" sm="12" class="red">
         
        </v-col>
       
       
      </v-row>
  
     
      
    </div>
  </template>
  
  <script>
  

  
  
  export default {
    components: {
     
    },
    data() {
      return {
        texts: ["Muhammad Waqar", " Developer"],
      };
    },
   
  
   
    computed: {
    },
  };
  </script>
  <style>
  .marginTop {
    margin-top: 200px;
  }
  
  
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
    0%   {  left: 10px; top: 200px; }
    25%  {  left: 150px; top: 190px; }
    50%  {  left: 250px; top: 250px; }
    75%  {  left: 0px; top: 200px; }
    100% {  left: 0px; top: 0px; }
  }
  @keyframes cross2 {
    0%   {  left: 200px; top: 200px; }
    25%  {  left: 150px; top: 300px; }
    50%  {  left: 250px; top: 250px; }
    75%  {  left: 0px; top: 200px; }
    100% {  left: 0px; top: 0px; }
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
  .radius{
    border-radius: 170px;
   
    background-color: #fdd746;
  }
  .containers {
    display: flex;
    justify-content: center;
  }

  .centered-div {
    width: 70%; /* You can adjust the width as needed */
    height: 70vh;
  }
  
  </style>
  