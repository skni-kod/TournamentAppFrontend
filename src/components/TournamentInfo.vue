<template>
  <v-container>
    <v-row justify="center">
      <v-divider></v-divider>
      <v-col class="col-12 col-md-6 mb-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82057.96349532958!2d21.918243913309265!3d50.00551909965454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfae3cc14d449%3A0xd2240d31b33eb2ed!2zUnplc3rDs3c!5e0!3m2!1spl!2spl!4v1623101375521!5m2!1spl!2spl"
          class="pa-6"
          width="500"
          height="400"
          style="border: 0"
          loading="lazy"
        ></iframe>
      </v-col>
      <v-col class="col-12 col-md-6 mb-5">
        <v-card-title><b>Informacje</b></v-card-title>
        <v-card-text v-for="(t, i) in text" :key="i"
          ><b>{{ t }}: </b>{{ info[i] }}</v-card-text
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import axios from '@/axios';

@Component
export default class TournamentInfo extends Vue {
  @Prop({required: true}) readonly value!: String[] 
  data() {
    return {
      text: [
        'Nazwa turnieju',
        'Data turnieju',
        'Kraj',
        'Adres',
        'Limit uczestnikow',
        'Organizator',
        'System rozgrywek',
      ],
    };
  }
  get info() {
    return this.value;
  }
}
</script>
