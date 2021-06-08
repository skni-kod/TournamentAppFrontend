<template>
  <div>
    <v-app-bar dark class="primary">
      <v-toolbar-title>Aplikacja Turniejowa</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon v-for="(icon,id) in iconLinks" :key="id" :to="icon.link">
        <v-icon>{{ icon.icon }}</v-icon>
      </v-btn>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute top right temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <div class="font-weight-bold pl-2">Aplikacja Turniejowa</div>
          <v-list-item v-for="(icon,id) in iconLinks" :key="id" :to="icon.link">
            <v-icon>{{ icon.icon }}</v-icon>
            <v-list-item-title>{{ icon.text }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
@Component
export default class Navbar extends Vue {
  data() {
    return {
      drawer: false,
      group: null,
      iconLinks: [
        {
          link: '/',
          icon: 'mdi-seal',
          text: 'Strona główna',
        },
        {
          link: '/user',
          icon: 'mdi-account-outline',
          text: 'Profil',
        },
        {
          link: '/login',
          icon: 'mdi-login',
          text: 'Wyloguj się',
        },
      ],
    };
  }
  watch(group) {
    this.drawer = false;
  }
}
</script>
