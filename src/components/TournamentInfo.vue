<template>
  <v-container>
    <v-row justify="center">
      <v-divider></v-divider>
      <v-col class="col-12 col-md-6 mb-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82057.96349532958!2d21.918243913309265!3d50.00551909965454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfae3cc14d449%3A0xd2240d31b33eb2ed!2zUnplc3rDs3c!5e0!3m2!1spl!2spl!4v1623101375521!5m2!1spl!2spl"
          class="pa-6"
          width="100%"
          height="100%"
          style="border: 0"
          loading="lazy"
        ></iframe>
      </v-col>
      <v-col class="col-12 col-md-6 mb-5">
        <v-card-title><b>Informacje</b></v-card-title>
        <v-card-text v-for="(t, i) in text" :key="i"
          ><b>{{ t }}: </b>{{ info[i] }}</v-card-text
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import axios from '@/axios';

@Component
export default class TournamentInfo extends Vue {
  created() {
    this.downloadData();
  }

  downloadData() {
    if (this.auth) {
      axios
        .get('tournament/' + this.$route.params.id + '/', {
          headers: {
            Authorization: 'Bearer ' + this.$store.getters.token,
          },
        })
        .then((res2) => {
          if (res2.status === 200) {
            let tab = [];
            const data = res2.data;
            tab[0] = data.name;
            tab[1] = data.date;
            tab[2] = data.country;
            tab[3] = data.address;
            tab[4] = data.members_limit;
            tab[5] = data.organiser;
            tab[6] = data.play_type;
            this.$data.info = tab;
          }
        })
        .catch((error) => {
          console.log('Błąd w TournamentInfo');
        });
    }
  }

  get auth() {
    return this.$store.getters.isAuthenticated;
  }
  data() {
    return {
      text: [
        'Nazwa turnieju',
        'Data turnieju',
        'Kraj',
        'Adres',
        'Limit uczestnikow',
        'Organizator',
        'System rozgrywek',
      ],
      info: [],
    };
  }
}
</script>
