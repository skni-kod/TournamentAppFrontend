<template>
  <v-row justify="center">
    <v-col cols="8" sm="8">
      <div
        class="info--text text-h3 text-center font-weight-bold my-8 tytul"
        @click="$router.push('/register')"
      >
        {{ name }}
      </div>

      <v-row justify="center" no-gutters class="ma-5">
        <v-col v-for="(mod, i) in modules" :key="i" class="text-center">
          <v-btn
            @click="$router.replace('/tournament/' + id + '/' + mod.mod)"
            color="primary"
            class="rounded text-h5 text-capitalize pa-4"
            :disabled="$route.path === '/tournament/' + id + '/' + mod.mod"
            >{{ mod.name }}
          </v-btn>
        </v-col>
      </v-row>

      <v-card class="py-4 px-6 rounded-lg mb-3">
        <info v-if="!module || module === 'info'" :value="t_info"></info>
        <players v-else-if="module === 'players'" :value="players"></players>
        <gallery v-else-if="module === 'gallery'" :value="gallery"></gallery>
        <matches v-else-if="module === 'matches'"></matches>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import Gallery from '@/components/TournamentGallery.vue';
import Matches from '@/components/TournamentMatches.vue';
import Players from '@/components/TournamentPlayers.vue';
import Info from '@/components/TournamentInfo.vue';
import axios from '@/axios';

import { Component } from 'vue-property-decorator';

@Component({
  components: {
    Gallery,
    Players,
    Matches,
    Info,
  },
})
export default class TheTournament extends Vue {
  created() {
    this.downloadData();
  }

  downloadData() {
    if (this.$store.getters.isAuthenticated) {
      axios
        .get('tournament/' + this.$route.params.id + '/', {
          headers: {
            Authorization: 'Bearer ' + this.$store.getters.token,
          },
        })
        .then((res2) => {
          if (res2.status === 200) {
            let tab = [];
            let name;
            const data = res2.data;
            tab[0] = data.name;
            tab[1] = data.date;
            tab[2] = data.country;
            tab[3] = data.address;
            tab[4] = data.members_limit;
            tab[5] = data.organiser;
            tab[6] = data.play_type;
            name = data.name;
            this.$data.name = name;
            this.$data.t_info = tab;

            let gal: object[] = [];
            const data2 = res2.data.gallery.image;
            data2.forEach((element: any) => {
              let photo = element.image;
              gal.push(photo);
            });
            this.$data.gallery = gal;
          }
        })
        .catch(() => {
          console.log('Błąd w nazwie/info turnieju');
        });
      axios
        .get('tournament_player_notifications/', {
          headers: {
            Authorization: 'Bearer ' + this.$store.getters.token,
          },
        })
        .then((res2) => {
          if (res2.status === 200) {
            let players: object[] = [];
            const data = res2.data;
            data.forEach((members: any) => {
              if (this.$route.params.id == members.id) {
                const data2 = members.notification;
                data2.forEach((member: any) => {
                  let player: any = {};
                  player.id = member.player.id;
                  player.name =
                    member.player.first_name + ' ' + member.player.last_name;
                  player.country = member.player.country;
                  player.club = member.player.club;
                  player.rating = member.player.rating;
                  players.push(player);
                });
                this.$data.players = players;
              }
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  data() {
    return {
      t_info: [],
      gallery: [],
      players: [],
      name: '',
      modules: [
        { mod: 'info', name: 'O turnieju' },
        { mod: 'players', name: 'Gracze' },
        { mod: 'matches', name: 'Rozgrywki' },
        { mod: 'gallery', name: 'Galeria' },
      ],
    };
  }

  get module() {
    return this.$route.params.module;
  }
  get id() {
    return this.$route.params.id;
  }
}
</script>

<style scoped>
.tytul {
  font-family: 'Roboto', sans-serif;
  letter-spacing: 1px;
  word-spacing: 10px;
  cursor: pointer;
}
</style>
