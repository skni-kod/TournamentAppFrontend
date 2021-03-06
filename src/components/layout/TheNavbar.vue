<template>
  <div :class="{ sticky: stickyNav }">
    <v-app-bar dark class="primary p-2">
      <img
        :src="require('../../../public/logo.png')"
        class="img-fluid mr-2"
        style="height: 35px; margin-left: -5px"
      />
      <v-toolbar-title v-if="$vuetify.breakpoint.mdAndUp">
        Aplikacja Turniejowa
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-row justify="end">
        <div v-for="(page, i) in pages" :key="i">
          <v-btn
            v-if="page.default || auth"
            icon
            :to="page.link"
            class="icon mr-3 px-2 rounded-xl"
            width="auto"
          >
            <v-icon class="mr-1">{{ page.icon }}</v-icon>
            <h4 v-if="$vuetify.breakpoint.smAndUp" justify="start">
              {{ page.text }}
            </h4>
          </v-btn>
        </div>
        <div>
          <v-btn
            icon
            class="icon mr-3 px-2 rounded-xl"
            width="auto"
            @click="auth ? logout() : login()"
          >
            <v-icon class="mr-1">{{ text.icon }}</v-icon>
            <h4 v-if="$vuetify.breakpoint.smAndUp">{{ text.info }}</h4>
          </v-btn>
        </div>
      </v-row>
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.xs"
        class="ml-2"
        @click.stop="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      top
      right
      temporary
      style="height: 215px"
      class="primary rounded-xl rounded-tr-0"
    >
      <v-list nav dense shaped>
        <v-list-item-group v-model="group">
          <h3 class="font-weight-bold pl-2 mb-2 white--text">
            Aplikacja Turniejowa
          </h3>
          <div v-for="(page, i) in pages" :key="i">
            <v-list-item v-if="page.default || auth" :to="page.link">
              <v-icon color="white">{{ page.icon }}</v-icon>
              <v-list-item-title>
                <h4 class="white--text pl-4">{{ page.text }}</h4>
              </v-list-item-title>
            </v-list-item>
          </div>

          <v-list-item @click="auth ? logout() : login()">
            <v-icon color="white">{{ text.icon }}</v-icon>
            <v-list-item-title>
              <h4 class="white--text pl-4">{{ text.info }}</h4>
            </v-list-item-title>
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
      pages: [
        {
          link: { name: 'Home' },
          icon: 'mdi-home',
          text: 'Start',
          default: true,
        },
        {
          link: { name: 'Schedules' },
          icon: 'mdi-tournament',
          text: 'Rozgrywki',
          default: false,
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
  get text() {
    if (this.auth) {
      return { icon: 'mdi-logout', info: 'Wyloguj' };
    } else {
      return { icon: 'mdi-login', info: 'Zaloguj' };
    }
  }
  get stickyNav() {
    return this.$route.meta?.stickyNavbar || this.$vuetify.breakpoint.xs;
  }
}
</script>

<style scoped>
.v-btn:before {
  background-color: transparent;
}
.sticky {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
}
</style>
