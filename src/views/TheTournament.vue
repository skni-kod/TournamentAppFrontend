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
        <component :is="module"></component>
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
            let name;
            const data = res2.data;
            name = data.name;
            this.$data.name = name;
          }
        })
        .catch(() => {
          console.log('Błąd w nazwie turnieju');
        });
    }
  }

  data() {
    return {
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
