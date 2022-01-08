<template>
  <div class="main">
    <!-- lewa strona-->
    <div v-if="mdUp" class="d-flex justify-space-around align-center leftSide">
      <p
        class="text-center white--text"
        style="font-size: 65px; text-shadow: 2px 2px black"
      >
        Aplikacja <br />Turniejowa
      </p>
    </div>
    <!-- prawa strona-->
    <div
      class="d-flex pb-12 pt-8 rightSide"
      :class="[{ rightSide: mdUp }, { rightSide2: !mdUp }]"
    >
      <v-col cols="12" class="d-flex justify-space-around">
        <v-card class="pa-4">
          <v-img
            src="../../assets/login-picture.png"
            height="80%"
            class="mt-6 align-center"
            contain
          ></v-img>
          <div class="d-flex justify-space-around pa-8">
            <v-btn
              v-if="!auth"
              class="primary rounded-pill"
              x-large
              :to="{ name: 'Login' }"
            >
              <v-icon class="pe-2">mdi-login</v-icon> Zaloguj się
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
@Component
export default class HomePage extends Vue {
  get mdUp() {
    return this.$vuetify.breakpoint.mdAndUp;
  }
  get auth() {
    return this.$store.getters.isAuthenticated;
  }
}
</script>

<style scoped>
/*główny wrap*/
.main {
  background: linear-gradient(-45deg, #9652ee, #4b80e2, #4136e2, #7678ec);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  position: relative;
  height: 100vh;
}
.main :not(:focus-visible) {
  animation-play-state: paused;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
/*tło z prawej strony*/
.rightSide {
  position: absolute;
  right: 0;
  top: 10px;
  height: 100%;
  box-sizing: border-box;
  width: 50%;
}
.rightSide2 {
  position: absolute;
  right: 0;
  top: 10px;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
}
/*tło po lewej stronie*/
.leftSide {
  background: linear-gradient(
      90deg,
      hsla(0, 0%, 100%, 0),
      rgba(10, 72, 130, 0.8) 0
    ),
    url('../../assets/home/homeBg.jpg');
  height: 100%;
  background-size: cover;
  position: absolute;
  width: 50%;
  background-blend-mode: hard-light;
  clip-path: ellipse(95% 95% at 0% 50%);
  overflow: hidden;
  top: 0;
  left: 0;
  box-sizing: border-box;
}
</style>
