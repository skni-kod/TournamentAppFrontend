<template>
  <v-container>
    <v-row justify="center">
      <v-divider></v-divider>
      <v-col class="col-12 col-md-6 mb-5">
        <GmapMap
          :center="{lat:50.036478837861466,lng:22.00336856058096}"
          :zoom="12"
          style="width:100%;height:100%;"
        >
        </GmapMap>
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
  @Prop({ required: true }) readonly value!: String[];

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
  setup() {
    const center = { lat: 40.689247, lng: -74.044502 };

    return { center };
  }
  get info() {
    return this.value;
  }
}
</script>
