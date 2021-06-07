<template>
  <v-row justify="center">
    <v-col cols="8" sm="8">
      <players v-if="!modules || modules==='players'"></players>
      <gallery v-else-if="modules==='gallery'"></gallery>
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
  get module() {
    return this.route.params.module;
  }
})
export default class TournamentInfo extends Vue {}
</script>
