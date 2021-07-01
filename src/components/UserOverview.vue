<template>
  <div>
    <v-card max-width="700" class="mx-auto">
      <v-container>
        <v-row dense>
          <v-col >
            <v-card-title><b>Informacje</b></v-card-title>
            <v-divider></v-divider>
            <v-card-text v-for="(t, i) in text" :key="i" cols="12"
              ><b>{{ t }}</b> {{ info1[i] }}</v-card-text
            >
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import axios from '@/axios';

@Component
export default class UserOverview extends Vue {
  created() {
    this.downloadData();
  }
  downloadData() {
    let tab;
    if (this.auth) {
      axios
        .get('user/' + this.$store.getters.id + '/', {
          headers: {
            Authorization: 'Bearer ' + this.$store.getters.token,
          },
        })
        .then((res3) => {
          if (res3.status === 200) {
            const data = res3.data;
            tab = data.profile[0];
            this.$data.info = tab;
            axios
              .get('profile/' + tab + '/', {
                headers: {
                  Authorization: 'Bearer ' + this.$store.getters.token,
                },
              })
              .then((res4) => {
                let tab1 = [];
                const data1 = res4.data;
                tab1[0] = data1.user.first_name + ' ' + data1.user.last_name;
                tab1[1] = data1.rating;
                tab1[2] = data1.club;
                tab1[3] = data1.user.email;
                this.$data.info1 = tab1;
              });
          }
        })
        .catch(() => {
          console.log('Błąd w UserOverview');
        });
    }
  }
  get auth() {
    return this.$store.getters.isAuthenticated;
  }

  data() {
    return {
      text: ['Imie i Nazwisko: ', 'Rating: ', 'Klub: ', 'Email: '],
      info: [],
      info1:[],
    };
  }
}
</script>
