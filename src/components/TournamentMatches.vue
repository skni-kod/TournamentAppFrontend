<template>
  <div>
    <v-pagination v-model="page" :length="7"></v-pagination>
    <v-data-table
      :headers="headers"
      :items="positions[page]"
      item-key="id"
      :items-per-page="5"
      class="elevation-0 rounded-sm"
    >
    </v-data-table>
  </div>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import axios from '@/axios';

@Component
export default class Matches extends Vue {
  data() {
    return {
      page: 1,
      headers: [
        { text: 'Nr', value: 'id', class: 'primary white--text' },
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
      positions: [
        [], //0
        [
          //1
          {
            id: '1',
            player: 'Damian Kowalski',
            points: '6',
            rating: '1000',
            result: '1:0',
            ratingi: '',
            pointsi: '',
            opponent: 'BYE',
          },
          {
            id: '2',
            player: 'Oskar Wasilewski',
            points: '3',
            rating: '1000',
            result: '1:0',
            ratingi: '1000',
            pointsi: '4',
            opponent: 'Mikołaj Rasiak',
          },
          {
            id: '3',
            player: 'Jakub Świętoń',
            points: '2',
            rating: '1000',
            result: '0:1',
            ratingi: '1000',
            pointsi: '3',
            opponent: 'Hubert Cichoń',
          },
          {
            id: '4',
            player: 'Jerzy Wilk',
            points: '2',
            rating: '1000',
            result: '0:1',
            ratingi: '1000',
            pointsi: '4',
            opponent: 'Szymon Nowak',
          },
        ],
        [
          //2
          {
            id: '1',
            player: 'Mikołaj Rasiak',
            points: '6',
            rating: '1000',
            result: '1:0',
            ratingi: '',
            pointsi: '',
            opponent: 'BYE',
          },
          {
            id: '2',
            player: 'Damian Kowalski',
            points: '3',
            rating: '1000',
            result: '1:0',
            ratingi: '1000',
            pointsi: '4',
            opponent: 'Jerzy Wilk',
          },
          {
            id: '3',
            player: 'Szymon Nowak',
            points: '4',
            rating: '1000',
            result: '1:0',
            ratingi: '1000',
            pointsi: '3',
            opponent: 'Hubert Cichoń',
          },
          {
            id: '4',
            player: 'Jakub Świętoń',
            points: '2',
            rating: '1000',
            result: '1:0',
            ratingi: '1000',
            pointsi: '4',
            opponent: 'Oskar Wasilewski',
          },
        ],
        [
          //3
          {
            id: '1',
            player: 'Jakub Świętoń',
            points: '6',
            rating: '1000',
            result: '1:0',
            ratingi: '',
            pointsi: '',
            opponent: 'BYE',
          },
          {
            id: '2',
            player: 'Oskar Wasilewski',
            points: '3',
            rating: '1000',
            result: '1:0',
            ratingi: '1000',
            pointsi: '4',
            opponent: 'Szymon Nowak',
          },
          {
            id: '3',
            player: 'Damian Kowalski',
            points: '2',
            rating: '1000',
            result: '0:1',
            ratingi: '1000',
            pointsi: '3',
            opponent: 'Hubert Cichoń',
          },
          {
            id: '4',
            player: 'Jerzy Wilk',
            points: '2',
            rating: '1000',
            result: '0:1',
            ratingi: '1000',
            pointsi: '4',
            opponent: 'Mikołaj Rasiak',
          },
        ],
        [
          {
            id: '1',
            player: 'Damian Kowalski',
            points: '6',
            rating: '1000',
            result: '1:0',
            ratingi: '',
            pointsi: '',
            opponent: 'BYE',
          },
          {
            id: '2',
            player: 'Oskar Wasilewski',
            points: '3',
            rating: '1000',
            result: '1:0',
            ratingi: '1000',
            pointsi: '4',
            opponent: 'Mikołaj Rasiak',
          },
          {
            id: '3',
            player: 'Hubert Cichoń',
            points: '2',
            rating: '1000',
            result: '0:1',
            ratingi: '1000',
            pointsi: '3',
            opponent: 'Jakub Świętoń',
          },
          {
            id: '4',
            player: 'Jerzy Wilk',
            points: '2',
            rating: '1000',
            result: '0:1',
            ratingi: '1000',
            pointsi: '4',
            opponent: 'Szymon Nowak',
          },
        ],
        [
          {
            id: '1',
            player: 'Damian Kowalski',
            points: '6',
            rating: '1000',
            result: '1:0',
            ratingi: '',
            pointsi: '',
            opponent: 'BYE',
          },
          {
            id: '2',
            player: 'Oskar Wasilewski',
            points: '3',
            rating: '1000',
            result: '1:0',
            ratingi: '1000',
            pointsi: '4',
            opponent: 'Mikołaj Rasiak',
          },
          {
            id: '3',
            player: 'Jakub Świętoń',
            points: '2',
            rating: '1000',
            result: '0:1',
            ratingi: '1000',
            pointsi: '3',
            opponent: 'Hubert Cichoń',
          },
          {
            id: '4',
            player: 'Jerzy Wilk',
            points: '2',
            rating: '1000',
            result: '0:1',
            ratingi: '1000',
            pointsi: '4',
            opponent: 'Szymon Nowak',
          },
        ],
        [
          {
            id: '1',
            player: 'Damian Kowalski',
            points: '6',
            rating: '1000',
            result: '1:0',
            ratingi: '',
            pointsi: '',
            opponent: 'BYE',
          },
          {
            id: '2',
            player: 'Oskar Wasilewski',
            points: '3',
            rating: '1000',
            result: '1:0',
            ratingi: '1000',
            pointsi: '4',
            opponent: 'Mikołaj Rasiak',
          },
          {
            id: '3',
            player: 'Jakub Świętoń',
            points: '2',
            rating: '1000',
            result: '0:1',
            ratingi: '1000',
            pointsi: '3',
            opponent: 'Hubert Cichoń',
          },
          {
            id: '4',
            player: 'Jerzy Wilk',
            points: '2',
            rating: '1000',
            result: '0:1',
            ratingi: '1000',
            pointsi: '4',
            opponent: 'Szymon Nowak',
          },
        ],
        [
          {
            id: '1',
            player: 'Jerzy Wilk',
            points: '6',
            rating: '1000',
            result: '1:0',
            ratingi: '',
            pointsi: '',
            opponent: 'BYE',
          },
          {
            id: '2',
            player: 'Oskar Wasilewski',
            points: '2',
            rating: '1000',
            result: '1:0',
            ratingi: '1000',
            pointsi: '4',
            opponent: 'Jakub Świętoń',
          },
          {
            id: '3',
            player: 'Mikołaj Rasiak',
            points: '3',
            rating: '1000',
            result: '0:1',
            ratingi: '1000',
            pointsi: '4',
            opponent: 'Hubert Cichoń',
          },
          {
            id: '4',
            player: 'Damian Kowalski',
            points: '3',
            rating: '1000',
            result: '0:1',
            ratingi: '1000',
            pointsi: '4',
            opponent: 'Szymon Nowak',
          },
        ],
      ],
    };
  }
}
</script>
