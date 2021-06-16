<template>
  <div>
    <v-card max-width="700" class="mx-auto">
      <v-container>
        <v-row dense>
          <v-col v-for="(item, i) in items" :key="i" cols="12">
            <v-card-title><b>Informacje</b></v-card-title>
            <v-divider></v-divider>
            <v-card-text><b>Imię i nazwisko:</b> {{ item.name }}</v-card-text>
            <v-card-text><b>Rating:</b> {{ item.Rating }}</v-card-text>
            <v-card-text><b>Klub:</b> {{ item.Klub }}</v-card-text>
            <v-card-text><b>Email:</b> {{ item.email }}</v-card-text>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class UserOverview extends Vue {
  data() {
    return {
      items: [
        {
          name: 'Oskar Wasilewski',
          Rating: 1000,
          Klub: 'Akademia Szachowa Gambit',
          email: 'oskarwasilewski123@gmail.com',
        },
      ],
    };
  }
}
</script>
