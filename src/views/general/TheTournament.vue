<template>
  <v-row justify="center">
    <v-col cols="8">
      <div class="info--text text-h3 text-center font-weight-bold my-8 tytul">
        {{ name }}
      </div>

      <v-row justify="center" no-gutters class="ma-3">
        <v-responsive min-width="500px" max-width="1200px" class="rounded-lg">
          <v-tabs
            fixed-tabs
            center-active
            show-arrows
            height="70px"
            background-color="primary"
            active-class="active"
          >
            <v-tab
              v-for="(mod, i) in modules"
              :key="i"
              @click="onTabClick(mod, id)"
              class="rounded text-h5 text-capitalize grey--text"
              style="width: fit-content; min-width: 150px"
            >
              {{ mod.name }}
            </v-tab>
          </v-tabs>
        </v-responsive>
      </v-row>

      <v-card class="py-4 px-6 rounded-lg mb-3">
        <component :is="module" v-bind="{ value: $data[module] }"></component>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import Gallery from '@/components/tournament/TournamentGallery.vue';
import Matches from '@/components/tournament/TournamentMatches.vue';
import Players from '@/components/tournament/TournamentPlayers.vue';
import Info from '@/components/tournament/TournamentInfo.vue';
import axios from '@/axios';
import { countries } from '../../assets/country';
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

  onTabClick(mod: any, id: any) {
    if (
      !(this.$router.currentRoute.path === '/tournament/' + id + '/' + mod.mod)
    ) {
      this.$router.replace('/tournament/' + id + '/' + mod.mod);
    }
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
            /*Nazwa oraz informacje o turnieju*/
            let tab = [];
            let name;
            const data = res2.data;
            tab[0] = data.name;
            tab[1] = data.date;
            const country_code = data.country;
            const countryObject = countries.find(
              (c: any) => c.code === country_code,
            );
            tab[2] = countryObject?.name_pl;
            tab[3] = data.address;
            tab[4] = data.members_limit;
            tab[5] = data.organiser;
            tab[6] = data.play_type === 'RR' ? 'Kołowy' : 'Drabinkowy';
            name = data.name;
            this.$data.name = name;
            this.$data.info = tab;

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
            /*Uczestnicy turnieju*/
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
                  const country_code = member.player.country;
                  const countryObject = countries.find(
                    (c: any) => c.code === country_code,
                  );
                  player.country = countryObject?.name_pl;
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

      axios
        .get('tournament_games/' + this.id, {
          headers: {
            Authorization: 'Bearer ' + this.$store.getters.token,
          },
        })
        .then((res2) => {
          if (res2.status === 200) {
            /*Rozgrywki*/
            let wyniki: any[] = [];
            const data = res2.data.game;
            data.forEach((g: any) => {
              let game: any = {};
              game.player =
                g.player1.user.first_name + ' ' + g.player1.user.last_name;
              game.rating = g.player1.rating;
              game.opponent =
                g.player2 !== null
                  ? g.player2.user.first_name + ' ' + g.player2.user.last_name
                  : 'Bye';
              game.ratingi = game.opponent === 'Bye' ? '0' : g.player2.rating;
              if (g.result === '1' || g.result === '4') {
                game.points = '2';
                game.pointsi = '0';
                game.result = '2:0';
              } else if (g.result === '2' || g.result === '5') {
                game.pointsi = '2';
                game.points = '0';
                game.result = '0:2';
              } else {
                game.points = '1';
                game.pointsi = '1';
                game.result = '1:1';
              }
              wyniki.push(game);
            });
            this.$data.matches = wyniki;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  data() {
    return {
      info: [],
      gallery: [],
      players: [],
      matches: [],
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

.active {
  color: white !important;
}
</style>
