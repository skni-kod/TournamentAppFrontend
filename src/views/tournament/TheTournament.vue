<template>
  <v-row justify="center">
    <v-col cols="8" sm="8">
      <players v-if="!module || module === 'players'"></players>
      <gallery v-else-if="module === 'gallery'"></gallery>
      <p v-else>WTF</p>
    </v-col>
  </v-row>
</template>

<script>
import Vue from 'vue';
import Gallery from './Gallery.vue';
import Players from '@/views/tournament/Players.vue';
import { Component } from 'vue-property-decorator';

@Component({
  components: {
    Gallery,
    Players,
  },
})
export default class TournamentInfo extends Vue {
  get module() {
    return this.$route.params.module;
  }
}
</script>
