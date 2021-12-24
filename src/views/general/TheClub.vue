<template>
  <v-row justify="center">
    <v-col
      cols="12"
      sm="12"
      md="9"
      lg="8"
      xl="6"
      class="pa-md-4 my-6"
      style="max-width: 1600px"
    >
      <v-card>
        <v-card-title class="pa-6">
          <v-col>
            <v-row class="justify-center mx-16 mb-2">
              <v-avatar color="primary" size="150">
                <img v-bind:src="club.club_logo" alt="John Xina" />
              </v-avatar>
            </v-row>
            <v-row class="justify-center mx-16">
              <h1>{{ club.club_name }}</h1>
            </v-row>
            <v-row class="justify-center mx-15 pt-4 pb-2">
              <v-img
                v-bind:src="generateFlagURL()"
                max-height="32px"
                max-width="32px"
                class="mr-2"
              >
              </v-img>
              {{ getCountryName() }}
            </v-row>
          </v-col>
        </v-card-title>
        <h1 class="pt-2 px-3">O klubie</h1>
        <div class="pt-2 px-3 text-justify">
          {{ club.club_info }}
        </div>
        <h1 class="pt-2 px-3">Członkowie</h1>
        <v-list class="pt-2 px-3">
          <template>
            <v-list-item
              v-bind:to="member.profile"
              v-for="(member, id) in members"
              :key="id"
            >
              <v-list-item-avatar>
                <v-img v-bind:src="member.avatar"> </v-img>
              </v-list-item-avatar>
              {{ member.nickname }}
            </v-list-item>
          </template>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { countries } from '../../assets/country';

@Component
export default class ClubPage extends Vue {
  data() {
    return {
      club: {
        id: 1,
        club_name: 'Klub Szachowy „Polonia” Warszawa',
        club_info:
          'Klub Szachowy „Polonia” powstał w 2005 roku, 2 lata później zarejestrowano go w Polskim Związku Szachowym. Jego siedziba znajduje się przy ul. Konwiktorskiej 6. Zawodnicy tego klubu w znacznej mierze wywodzą się z KS „Polonia” Warszawa. Nie był on w stanie zapewnić odpowiedniego rozwoju szachistom z uwagi na problemy finansowe.\\r\\n\\r\\nObecnie Klub Szachowy „Polonia” Warszawa wspiera aktywnie młodych szachistów. Organizuje szkółkę szachową dla dzieci i młodzieży.',
        club_logo:
          'https://cdn.dribbble.com/users/2407143/screenshots/7166796/letter_v_3d_logo3_4x.png',
        country: 'CN',
      },
      members: [
        {
          nickname: 'Random Citizen',
          avatar:
            'https://qph.fs.quoracdn.net/main-qimg-817bea36ddd7fa50b40fea92dd2121c3-c',
          profile: 'Profile_URL_1',
        },
        {
          nickname: 'John Xina',
          avatar: 'https://i.ytimg.com/vi/nC_14l9cdXw/hqdefault.jpg',
          profile: 'Profile_URL_2',
        },
        {
          nickname: 'Xi Jinping',
          avatar:
            'https://purepng.com/public/uploads/medium/purepng.com-winnie-poohwinnie-poohwinniepoohpooh-bearbearwinnie-the-poohteddy-bearcharacterbook-winnie-the-pooh-1926pooh-corner-1928-1701528660039lfqkq.png',
          profile: 'Profile_URL_3',
        },
      ],
    };
  }

  generateFlagURL() {
    return (
      'https://www.countryflagicons.com/SHINY/32/' +
      this.$data.club.country +
      '.png'
    );
  }

  getCountryName() {
    let countryObject = countries.find(
      (e) => e.code === this.$data.club.country,
    );
    return countryObject?.name_pl;
  }
}
</script>
