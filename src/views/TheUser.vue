<template>
  <div>
    <div>
      <div>
        <v-card max-width="700" class="mx-auto">
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
                        >{{ info[0] }} {{ info[1] }}</v-list-item-title
                      >
                      <v-list-item-subtitle>{{ info[2] }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider></v-divider>
                </v-list>
                <v-divider></v-divider>
                <v-card-text v-for="(t, i) in text" :key="i" cols="12"
                  ><b>{{ t }}</b> {{ info1[i] }}</v-card-text
                >
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import axios from '@/axios';

@Component
export default class UserProfile extends Vue {
  created() {
    this.downloadData();
    this.downloadData2();
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
            this.$data.id = this.$store.getters.id;
          }
        })
        .catch(() => {
          console.log('Błąd w UserProfile');
        });
    }
  }
  downloadData2() {
    let tab2;
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
            tab2 = data.profile[0];
            axios
              .get('profile/' + tab2 + '/', {
                headers: {
                  Authorization: 'Bearer ' + this.$store.getters.token,
                },
              })
              .then((res4) => {
                let tab1 = [];
                const data1 = res4.data;
                tab1[0] = data1.rating;
                tab1[1] = data1.club;
                tab1[2] = data1.user.email;
                tab1[3] = data1.country;
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
      id: undefined,
      drawer: true,
      text: ['Rating: ', 'Klub: ', 'Email: ', 'Kraj: '],
      items: [
        {
          path: '/user/' + this.$store.getters.id,
          title: 'Ogólne',
          icon: 'mdi-information-outline',
        },
        { title: 'Ostatnie', icon: 'mdi-history' },
      ],
      info: [],
      info1: [],
    };
  }
}
</script>
