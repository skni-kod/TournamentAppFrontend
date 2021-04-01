<template>
  <div>
    <v-app-bar color="primary" dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Apka turniejowa</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon v-for="icon in iconLinks" :key="icon.icon">
      <v-icon>{{ icon.icon }}</v-icon>
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
          icon: "mdi-seal",
        },
        {
          icon: "mdi-account-multiple-outline",
        },
        {
          icon: "mdi-bell-outline",
        },
        {
          icon: "mdi-login",
        },
      ],
    };
  }
};
</script>
