<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="positions"
      item-key="id"
      :items-per-page="5"
      class="elevation-1 rounded-sm"
    >
    </v-data-table>
  </div>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Players extends Vue {
  data() {
    return {
      headers: [
        { text: 'Nr', value: 'id', class: 'primary white--text' },
        {
          text: 'Imię i nazwisko',
          value: 'name',
          class: 'primary white--text',
        },
        {
          text: 'Kraj',
          value: 'country',
          class: 'primary white--text',
        },
        { text: 'Klub', value: 'club', class: 'primary white--text' },
        {
          text: 'Rating',
          value: 'rating',
          class: 'primary white--text',
        },
      ],
      positions: [
        {
          id: '1',
          name: 'Damian Kowalski',
          country: 'Polska',
          club: 'Nie dotyczy',
          rating: '1000',
        },
        {
          id: '2',
          name: 'Piotr Nowak',
          country: 'Polska',
          club: 'Nie dotyczy',
          rating: '1000',
        },
      ],
    };
  }
}
</script>
