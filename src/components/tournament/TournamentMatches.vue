<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="positions"
      item-key="id"
      :items-per-page="5"
      class="elevation-0 rounded-sm"
    >
    </v-data-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Matches extends Vue {
  @Prop({ required: true }) readonly value!: [];
  data() {
    return {
      headers: [
        {
          text: 'Zawodnik',
          value: 'player',
          class: 'primary white--text',
        },
        {
          text: 'Punkty',
          value: 'points',
          class: 'primary white--text',
        },
        {
          text: 'Rating',
          value: 'rating',
          class: 'primary white--text',
        },
        { text: 'Wynik', value: 'result', class: 'primary white--text' },
        {
          text: 'Rating',
          value: 'ratingi',
          class: 'primary white--text',
        },
        {
          text: 'Punkty',
          value: 'pointsi',
          class: 'primary white--text',
        },
        {
          text: 'Przeciwnik',
          value: 'opponent',
          class: 'primary white--text',
        },
      ],
    };
  }

  get positions() {
    return this.value;
  }
}
</script>
