<template>
  <div>
    <v-app-bar dark class="primary">
      <v-toolbar-title>Aplikacja Turniejowa</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon :to="iconLinks[0].link">
        <v-icon>{{ iconLinks[0].icon }}</v-icon>
      </v-btn>
      <v-btn v-if="auth" icon :to="user()">
        <v-icon>{{ iconLinks[1].icon }}</v-icon>
      </v-btn>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute top right temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <div class="font-weight-bold pl-2">Aplikacja Turniejowa</div>

          <v-list-item :to="iconLinks[0].link">
              <v-icon>{{ iconLinks[0].icon }}</v-icon>
              <v-list-item-title>{{ iconLinks[0].text }}</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="auth" :to="user()">
              <v-icon>{{ iconLinks[1].icon }}</v-icon>
              <v-list-item-title>{{ iconLinks[1].text }}</v-list-item-title>
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
import axios from '@/axios';

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
          icon: 'mdi-account-outline',
          text: 'Profil',
        },
      ],
    };
  }
  user(){
    return { name: 'User', params: { id: this.id } };
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
  get id() {
    return this.$store.getters.id;
  }
}
</script>
