<template>
  <div>
    <v-app-bar dark class="primary">
      <v-icon v-if="$vuetify.breakpoint.xsOnly">mdi-chess-king</v-icon>
      <v-toolbar-title v-else>Aplikacja Turniejowa
      </v-toolbar-title>
      

      <v-spacer></v-spacer>

      <div v-for="(page, i) in pages" :key="i">
        <v-btn v-if="page.default || auth" icon :to="page.link">
          <v-icon>{{ page.icon }}</v-icon>
        </v-btn>
      </div>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute top right temporary>
      <v-list nav dense shaped>
        <v-list-item-group v-model="group">
          <h3 class="font-weight-bold pl-2 mb-2">Aplikacja Turniejowa</h3>

          <div v-for="(page, i) in pages" :key="i">
            <v-list-item v-if="page.default || auth" :to="page.link">
              <v-icon>{{ page.icon }}</v-icon>
              <v-list-item-title
                ><h4 class="grey--text text--darken-2">
                  {{ page.text }}
                </h4></v-list-item-title
              >
            </v-list-item>
          </div>

          <v-list-item @click="auth ? logout() : login()">
            <v-icon>{{ text.icon }}</v-icon>
            <v-list-item-title
              ><h4 class="grey--text text--darken-2">
                {{ text.info }}
              </h4></v-list-item-title
            >
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
      pages: [
        {
          link: { name: 'Home' },
          icon: 'mdi-seal',
          text: 'Strona główna',
          default: true,
        },
        {
          link: { name: 'User' },
          icon: 'mdi-account-outline',
          text: 'Profil',
          default: false,
        },
      ],
    };
  }

  login() {
    if (this.$route.name !== 'Login') {
      this.$router.push({ name: 'Login' });
    }
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
  get text() {
    if (this.auth) {
      return { icon: 'mdi-logout', info: 'Wyloguj się' };
    } else {
      return { icon: 'mdi-login', info: 'Zaloguj się' };
    }
  }
}
</script>

<style scoped>
.v-btn:before {
  background-color: transparent;
}
</style>
