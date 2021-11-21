<template>
  <section>
    <v-row class="justify-center pt-6" style="margin: 0px">
      <v-col cols="12" :lg="10">
        <v-card class="pa-4 white">
          <v-card-title class="justify-center" :class="mobileTitle">
            Czym jest i jakie funkcje spełnia Aplikacja Turniejowa?
          </v-card-title>
          <v-card-text :class="mobileText">
            Aplikacja Turniejowa to system do zarządzania turniejami szachowymi,
            opracowany przez członków Sekcji Aplikacji Desktopowych, Mobilnych i
            Webowych SKNI KOD. Podzielony został na dwie części: Desktopową oraz
            Webową. Obie z aplikacji mają określone zadania. Głównym założeniem
            strony WWW jest prezentacja wyników oraz stworzenie środowiska
            przystępnego dla różnego rodzaju użytkowników. Każde z
            zarejestrowanych kont może działać dwojako, przy podaniu tylko
            podstawowych danych takich jak login, hasło i email, możliwa jest
            obserwacja wyników na żywo ze wszystkich dostępnych w systemie
            turniejów. Po uzupełnieniu pozostałych danych takich jak ranking ELO
            czy Klub, w którym zrzeszony jest dany użytkownik, odblokowane
            zostają pozostałe funkcje takie jak dołączenie do turnieju, czy
            wgląd w listę turniejów, w których braliśmy udział.
            <v-col class="pa-4">
              <v-img
                src="../assets/index/1.png"
                contain
                max-height="700px"
              ></v-img>
            </v-col>
            <b>Funkcjonalności dla zwykłego użytkownika</b>
            <ul>
              <li v-for="item in content" :key="item">{{ item }}</li>
            </ul>
            <br />
            <b>Funkcjonalności dla użytkownika z pełnymi informacjami:</b>
            <ul>
              <li v-for="item in content2" :key="item">{{ item }}</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col></v-row
    ><v-row class="justify-center pb-4" style="margin: 0px">
      <v-col cols="12" :lg="10">
        <v-card class="indigo darken-1 white--text pa-4">
          <v-card-title class="justify-center" :class="mobileTitle"
            >Kto stworzył apke turniejową?</v-card-title
          >
          <v-row class="align-center justify-center">
            <v-col cols="4" v-if="$vuetify.breakpoint.mdAndUp"
              ><v-img
                src="../assets/index/logo_white.png"
                contain
                max-height="250px"
              ></v-img></v-col
            ><v-col cols="12" :lg="8"
              ><v-card-text :class="mobileText">
                Aplikacja Turniejowa została stworzona w ramach projektu dla
                rzeszowskiego Studenckiego Koła Naukowego Informatyków KOD przez
                zespół w składzie: Oskar Tyniec, Konrad Bochenek, Hubert Futoma,
                Natalia Miarowska, Tomasz Popek, Brajan Miśkowicz</v-card-text
              ></v-col
            ></v-row
          ></v-card
        ></v-col
      ></v-row
    >
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
@Component
export default class BasicInfo extends Vue {
  data() {
    return {
      mobileText: [
        { 'px-0 text-h6': this.$vuetify.breakpoint.smAndDown },
        { 'text-h5': this.$vuetify.breakpoint.mdAndUp },
      ],
      mobileTitle: [
        [
          { 'text-h5 pa-0 pb-4': this.$vuetify.breakpoint.smAndDown },
          { 'text-h4': this.$vuetify.breakpoint.mdAndUp },
        ],
      ],
      content: [
        'podgląd rozgrywanych turniejów',
        'podgląd archiwalnych turniejów',
        'śledzenie wyników poszczególnych partii szachowych',
        'wgląd w galerię zdjęć dla poszczególnych turniejów',
        'wgląd w podstawowe statystyki zawodników',
      ],
      content2: [
        'możliwość zapisywania się na turniej',
        'wyświetlanie listy turniejów, w których user brał udział',
        'dołączanie do grup klubów szachowych',
        'podgląd szczegółowych statystyk zawodników',
      ],
    };
  }
}
</script>

<style scoped>
.v-card {
  border-radius: 40px;
}
.v-card__text,
.v-card__title {
  word-break: normal;
}
</style>