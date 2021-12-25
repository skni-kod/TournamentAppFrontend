<template>
  <div>
    <v-card max-width="60%" class="mx-auto mt-8">
      <v-container>
        <v-row dense>
          <v-col>
            <v-card-title><b>Informacje</b></v-card-title>
            <v-list dense nav class="py-0">
              <v-list-item two-line>
                <v-list-item-avatar>
                  <img src="https://i.imgur.com/IiNWFmy.png" />
                </v-list-item-avatar>

                <v-list-item-content two-line>
                  <v-list-item-title
                    ><b>{{ info[0] }} {{ info[1] }}</b></v-list-item-title
                  >
                  <v-list-item-subtitle>{{ info[2] }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>
            </v-list>
            <v-divider></v-divider>
            <v-card-text v-for="(t, i) in text" :key="i" cols="12"
              ><b>{{ t }}</b> {{ player[i] }}</v-card-text
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
import { countries } from '../../assets/country';

@Component
export default class TheUser extends Vue {
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
        .then((res) => {
          if (res.status === 200) {
            let basic = []; //imie, nazwisko etc
            const data = res.data;
            basic[0] = data.first_name;
            basic[1] = data.last_name;
            basic[2] = data.email;
            this.$data.info = basic;
            this.$data.id = this.$store.getters.id;

            let player_id: any;
            player_id = data.profile[0];
            axios
              .get('profile/' + player_id + '/', {
                headers: {
                  Authorization: 'Bearer ' + this.$store.getters.token,
                },
              })
              .then((res2) => {
                let player = []; //player rating, klub etc
                const data1 = res2.data;
                player[0] = data1.rating;
                player[1] = data1.club.club_name;
                player[2] = data1.user.email;
                const country_code = data1.country;
                const countryObject = countries.find(
                  (c: any) => c.code === country_code,
                );
                player[3] = countryObject?.name_pl;
                this.$data.player = player;
              })
              .catch(() => {
                console.log('Błąd w szczególnych danych usera.');
              });
          }
        })
        .catch(() => {
          console.log('Błąd w User');
        });
    }
  }
  get auth() {
    return this.$store.getters.isAuthenticated;
  }
  get id() {
    return this.$store.getters.id;
  }

  data() {
    return {
      text: ['Rating: ', 'Klub: ', 'Email: ', 'Kraj: '],
      info: [], //imie, nazwisko etc
      player: [], //rating, klub etc
    };
  }
}
</script>
