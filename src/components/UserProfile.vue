<template>
    <v-navigation-drawer v-model="drawer" color="secondary" 
    dark
    permament
    app>
      <v-list dense nav class="py-0">
        <v-list-item two-line>
          <v-list-item-avatar>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frisibank.fr%2Fcache%2Fstickers%2Fd1973%2F197365-full.png&f=1&nofb=1"
            />
          </v-list-item-avatar>

          <v-list-item-content two-line >
            <v-list-item-title>Imie Nazwisko</v-list-item-title>
            <v-list-item-subtitle>Klub</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item v-for="item in items" :key="item.title" :to="item.path">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
@Component
export default class UserProfile extends Vue {
  data() {
    return {
      drawer: true,
      items: [
        {
          path: '/user',
          title: 'Ogólne',
          icon: 'mdi-information-outline',
        },
        { path: '/user/userrecent', title: 'Ostatnie', icon: 'mdi-history' },
      ],
    };
  }
}
</script>

<style>
</style>