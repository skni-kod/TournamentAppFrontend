<template>
  <v-row justify="center">
    <v-col cols="8" sm="8">
      <h2 class="tytul">
        Wielki Turniej Studenckiego Koła Naukowego Informatyków "KOD"
      </h2>
      <tournament-info
        v-if="!module || module === 'tournament-info'"
      ></tournament-info>
      <players v-else-if="module === 'players'"></players>
      <gallery v-else-if="module === 'gallery'"></gallery>
      <matches v-else-if="module === 'matches'"></matches>
    </v-col>
  </v-row>
</template>

<script>
import Vue from 'vue';
import Gallery from './Gallery.vue';
import TournamentInfo from './TournamentInfo.vue';
import Matches from './Matches.vue';
import Players from '@/views/tournament/Players.vue';
import { Component } from 'vue-property-decorator';

@Component({
  components: {
    Gallery,
    Players,
    Matches,
    TournamentInfo,
  },
})
export default class TheTournament extends Vue {
  get module() {
    return this.$route.params.module;
  }
}
</script>

<style scoped>
.tytul {
  font-size: 36px;
  color: #1b2f57;
  font-family: 'Roboto', sans-serif;
  margin: auto;
  display: flex;
  justify-content: center;
  margin: 2%;
  letter-spacing: 1px;
  word-spacing: 10px;
}
</style>
