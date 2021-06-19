<template>
  <div>
    <v-card max-width="700" class="mx-auto">
      <v-container>
        <v-row dense>
          <v-col>
            <v-card-title><b>Informacje</b></v-card-title>
            <v-divider></v-divider>
            <v-card-text v-for="(t, i) in text" :key="i" cols="12"
              ><b>{{ t }}</b> {{ info[i] }}</v-card-text
            >
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import axios from '@/axios';

@Component
export default class UserOverview extends Vue {
  created() {
    this.downloadData();
  }
  downloadData() {
    if (this.auth) {
      axios
        .get('profile/' + this.$route.params.id + '/', {
          headers: {
            Authorization: 'Bearer ' + this.$store.getters.token,
          },
        })
        .then((res3) => {
          if (res3.status === 200) {
            let tab = [];
            const data = res3.data;
            const data2 = data.user;
            tab[0] = data2.first_name;
            tab[1] = data2.last_name;
            tab[3] = data.rating;
            tab[4] = data.club;
            tab[5] = data2.email;

            this.$data.info = tab;
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
  get id() {
    return this.$route.params.id;
  }
  data() {
    return {
      text: ['Imie: ', 'Nazwisko: ', 'Rating: ', 'Klub: ', 'Email: '],
      info: [],
    };
  }
}
</script>
