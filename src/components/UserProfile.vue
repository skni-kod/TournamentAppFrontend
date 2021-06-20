<template>
  <v-navigation-drawer v-model="drawer" color="secondary" dark permament app>
    <v-list dense nav class="py-0">
      <v-list-item two-line>
        <v-list-item-avatar>
          <img src="https://i.imgur.com/IiNWFmy.png" />
        </v-list-item-avatar>

        <v-list-item-content two-line>
          <v-list-item-title>{{ info[0] }} {{ info[1] }}</v-list-item-title>
          <v-list-item-subtitle>{{ info[2] }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item v-for="(item, i) in items" :key="i" :to="item.path">
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
import axios from '@/axios';

@Component
export default class UserProfile extends Vue {
  created() {
    this.downloadData();
  }
  downloadData() {
    if (this.auth) {
      axios
        .get('user/' + this.$store.getters.id + '/', {
          headers: {
            Authorization: 'Bearer ' + this.$store.getters.token,
          },
        })
        .then((res4) => {
          if (res4.status === 200) {
            let tab = [];
            const data = res4.data;
            tab[0] = data.first_name;
            tab[1] = data.last_name;
            tab[2] = data.email;
            this.$data.info = tab;
          }
        })
        .catch(() => {
          console.log('Błąd w UserProfile ');
        });
      }
  }
  

  get auth() {
    return this.$store.getters.isAuthenticated;
  }
  

  data() {
    return {
      drawer: true,
      items: [
        {
          path: '/user/' + this.$store.getters.id + '/',
          title: 'Ogólne',
          icon: 'mdi-information-outline',
        },
        { path: '/user/userrecent', title: 'Ostatnie', icon: 'mdi-history' },
      ],
      info: [],
    };
  }
}
</script>
