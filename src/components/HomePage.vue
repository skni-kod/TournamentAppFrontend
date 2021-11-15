<!-- lewa strona-->
<template>
  <div class="main">
    <div
      v-if="$vuetify.breakpoint.mdAndUp"
      class="d-flex justify-space-around align-center leftSide"
    >
      <p
        class="white--text"
        style="font-size: 70px; text-shadow: 2px 2px #000000"
      >
        Aplikacja Turniejowa
      </p>
    </div>
    <!-- prawa strona-->
    <div
      class="d-flex pb-12 pt-8"
      :class="[removeElement ? rightSide2 : '', rightSide]"
    >
      <v-col cols="12" class="d-flex justify-space-around">
        <v-card>
          <v-img
            src="../assets/login-picture.png"
            height="80%"
            class="mx-auto"
            contain
          ></v-img>
          <div class="d-flex justify-space-around pa-5">
            <v-btn rounded-pill color="secondary" to="login"
              ><v-icon>mdi-login</v-icon>
              <div class="d-none d-md-block">Zaloguj się</div></v-btn
            >
          </div>
        </v-card>
      </v-col>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
@Component
export default class HomePage extends Vue {
  //
  data() {
    return {
      rightSide: 'rightSide',
      rightSide2: 'rightSide2',
    };
  }
}
</script>


<style scoped>
/*główny wrap*/
.main {
  position: relative;
  height: 100vh;
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
}
/*tło po lewej stronie*/
.leftSide {
  background: linear-gradient(
      90deg,
      hsla(0, 0%, 100%, 0),
      rgba(10, 72, 130, 0.8) 0
    ),
    url('../assets/indexBg.jpg');
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