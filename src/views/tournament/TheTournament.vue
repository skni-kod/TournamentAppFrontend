<template>
  <v-row justify="center">
    <v-col cols="8" sm="8">
       <h2 class="tytul" @click="$router.push('/register')">Wielki Turniej Studenckiego Koła Naukowego Informatyków "KOD"</h2>
       <v-row justify="center" no-gutters class="ma-5">
       <v-col v-for="(mod,i) in modules" :key="i" class="text-center">
        <v-btn @click="$router.replace('/tournament/' + mod.mod)" color="primary"
          >{{ mod.name }}
        </v-btn>
        </v-col>
       </v-row>
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
import Matches from './Matches.vue';
import Players from './Players.vue';
import { Component } from 'vue-property-decorator';
import TournamentInfo from './TournamentInfo.vue';
@Component({
  components: {
    Gallery,
    Players,
    Matches,
    TournamentInfo,
  },
})
export default class TheTournament extends Vue {
  data(){
    return{
      modules: [
        { mod: 'tournament-info', name: 'Opis turnieju'},
        { mod: 'players', name: 'Gracze'},
        { mod: 'matches', name: 'Rozgrywki'},
        { mod: 'gallery', name: 'Galeria'},
      ],
    }
  }
  get module() {
    return this.$route.params.module;
  }
}
</script>

<style scoped>
.tytul{
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