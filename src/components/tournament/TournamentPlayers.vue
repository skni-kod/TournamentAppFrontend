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
import axios from '@/axios';

@Component
export default class Players extends Vue {
  @Prop({required: true}) readonly value!: String[]
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
    };
  }
  get positions() {
    return this.value;
  }
}
</script>
