<template>
  <div>
    <v-app-bar color="rgb(41,70,129)" dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title class="d-none d-sm-flex">Apka turniejowa</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon v-for="item in iconLinks" :key="item.link" :to="item.link">
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-app-bar>
  </div>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
  data() {
    return {
      iconLinks: [
        {
          link:"/",icon: "mdi-seal",
        },
        {
          icon: "mdi-account-multiple-outline",
        },
        {
          icon: "mdi-bell-outline",
        },
        {
          link:"/login",icon: "mdi-login",
        },
      ],
    };
  }
};
</script>
