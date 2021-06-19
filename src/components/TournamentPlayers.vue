<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="positions"
      item-key="id"
      :items-per-page="5"
      class="elevation-0 rounded-sm"
    >
    </v-data-table>
  </div>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import axios from '@/axios';

@Component
export default class Players extends Vue {
  created() {
    this.downloadData();
  }

  downloadData() {
    if (this.auth) {
      axios
        .get('tournament_player_notifications/', {
          headers: {
            Authorization: 'Bearer ' + this.$store.getters.token,
          },
        })
        .then((res2) => {
          if (res2.status === 200) {
            let players = [];
            const data = res2.data;
            data.forEach((members) => {
              if(this.$route.params.id == members.id){
                const data2 = members.notification;
                data2.forEach((member) => {
                  let player = {};
                  player.id = member.player.id;
                  player.name = member.player.first_name + ' ' + member.player.last_name;
                  player.country = member.player.country;
                  player.club = member.player.club;
                  player.rating = member.player.rating;
                  players.push(player);
                });
                this.$data.positions = players;
              }
            })
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  data() {
    return {
      headers: [
        { text: 'Nr', value: 'id', class: 'primary white--text' },
        {
          text: 'Imię i nazwisko',
          value: 'name',
          class: 'primary white--text',
        },
        {
          text: 'Kraj',
          value: 'country',
          class: 'primary white--text',
        },
        { text: 'Klub', value: 'club', class: 'primary white--text' },
        {
          text: 'Rating',
          value: 'rating',
          class: 'primary white--text',
        },
      ],
      positions: [],
    };
  }
  get auth() {
    return this.$store.getters.isAuthenticated;
  }
}
</script>
