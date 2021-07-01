<template>
  <div>
    <v-app-bar dark class="primary">
      <v-toolbar-title>Aplikacja Turniejowa</v-toolbar-title>
      
      <v-spacer></v-spacer>
      
      <v-btn icon v-for="(icon, id) in iconLinks" :key="id" :to="icon.link">
        <v-icon>{{ icon.icon }}</v-icon>
      </v-btn>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute top right temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <div class="font-weight-bold pl-2">Aplikacja Turniejowa</div>
          
          <v-list-item
            v-for="(icon, id) in iconLinks"
            :key="id"
            :to="icon.link"
          >
            <v-icon>{{ icon.icon }}</v-icon>
            <v-list-item-title>{{ icon.text }}</v-list-item-title>
          </v-list-item>
          
          <v-list-item v-if="auth" @click="logout">
            <v-icon>mdi-logout</v-icon>
            <v-list-item-title>Wyloguj się</v-list-item-title>
          </v-list-item>
          
          <v-list-item v-else @click="login">
            <v-icon>mdi-login</v-icon>
            <v-list-item-title>Zaloguj się</v-list-item-title>
          </v-list-item>
          
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
  data() {
    return {
      drawer: false,
      group: null,
      iconLinks: [
        {
          link: { name: 'Home' },
          icon: 'mdi-seal',
          text: 'Strona główna',
        },
        {
          link: '/user',
          icon: 'mdi-account-outline',
          text: 'Profil',
        },
      ],
    };
  }

  login() {
    this.$router.push({ name: 'Login' });
  }

  logout() {
    this.$store.dispatch('logout');
  }

  @Watch('group')
  onGroup() {
    this.$data.drawer = false;
  }

  get auth() {
    return this.$store.getters.isAuthenticated;
  }
}
</script>
