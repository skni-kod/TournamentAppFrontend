<template>
  <v-row justify="center">
    <v-col cols="8" sm="8">
      <div
        class="info--text text-h3 text-center font-weight-bold my-8 tytul"
        @click="$router.push('/register')"
      >
        Wielki Turniej Studenckiego Koła Naukowego Informatyków "KOD"
      </div>
      <v-row justify="center" no-gutters class="ma-5">
        <v-col v-for="(mod, i) in modules" :key="i" class="text-center">
          <v-btn
            @click="$router.replace('/tournament/' + mod.mod)"
            color="primary"
            class="rounded text-h5 text-capitalize pa-4"
            >{{ mod.name }}
          </v-btn>
        </v-col>
      </v-row>
      <component :is="module"></component>
    </v-col>
  </v-row>
</template>

<script>
import Vue from 'vue';
import Gallery from './TournamentGallery.vue';
import Matches from './TournamentMatches.vue';
import Players from './TournamentPlayers.vue';
import Info from './TournamentInfo.vue';
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
  data() {
    return {
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
}
</script>

<style scoped>
.tytul {
  font-family: 'Roboto', sans-serif;
  letter-spacing: 1px;
  word-spacing: 10px;
  cursor: pointer
}
</style>
