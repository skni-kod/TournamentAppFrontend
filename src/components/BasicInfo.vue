<template>
  <section>
    <!--Sekcja pierwsza -->

    <v-row class="justify-center">
      <v-col class="pa-0">
        <v-card-title
          class="justify-center py-8 indigo darken-2 white--text"
          :class="mobileTitle"
        >
          <b>Czym jest i jakie funkcje spełnia Aplikacja Turniejowa?</b>
        </v-card-title>
        <div class="s1bg my-3">
          <v-row class="justify-center align-center pa-4 pt-8">
            <v-col class="mx-8" cols="10" :lg="4" :md="5">
              <div class="messL">
                <v-card-text
                  class="text-justify px-4"
                  :class="mobileText"
                  style="text-indent: 1.5em"
                >
                  Aplikacja Turniejowa to system do zarządzania turniejami
                  szachowymi, opracowany przez członków SKNI "KOD". Głównym
                  założeniem strony WWW jest prezentacja wyników oraz stworzenie
                  środowiska przystępnego dla różnego rodzaju użytkowników.
                </v-card-text>
              </div>
            </v-col>
            <v-col cols="12" :lg="5" :md="6">
              <v-img
                src="../assets/index/1.png"
                contain
                max-height="400px"
                style="box-shadow: 0 0 1em rgb(128, 128, 129)"
              ></v-img>
            </v-col>
          </v-row>
          <v-row class="align-center justify-center pa-4">
            <v-col cols="12" :lg="4" :md="6">
              <v-img
                src="../assets/index/2.png"
                contain
                max-height="400px"
                style="box-shadow: 0 0 1em rgb(128, 128, 129)"
              ></v-img>
            </v-col>
            <v-col class="mx-8" cols="10" :lg="4" :md="5">
              <div class="messR">
                <v-card-text
                  class="text-justify px-4"
                  :class="mobileText"
                  style="text-indent: 1.5em"
                >
                  Każde z zarejestrowanych kont może działać dwojako, przy
                  podaniu tylko podstawowych danych takich jak login, hasło i
                  email, możliwa jest obserwacja wyników na żywo ze wszystkich
                  dostępnych w systemie turniejów.
                </v-card-text>
              </div>
            </v-col></v-row
          >
        </div>

        <!--Sekcja druga -->

        <v-row class="justify-space-around indigo lighten-5 ma-0 pa-4">
          <v-col cols="12" :lg="5">
            <v-card-text :class="mobileText">
              <b>Funkcjonalności dla zwykłego użytkownika:</b>
              <ul class="pt-4">
                <li v-for="item in content" :key="item">
                  {{ item }}
                </li>
              </ul></v-card-text
            ></v-col
          >
          <v-col cols="12" :lg="5">
            <v-card-text :class="mobileText">
              <b>Funkcjonalności dla użytkownika z pełnymi informacjami:</b>
              <ul class="pt-4">
                <li v-for="item in content2" :key="item">
                  {{ item }}
                </li>
              </ul>
            </v-card-text>
          </v-col>
        </v-row>
      </v-col></v-row
    >
    <!--Sekcja trzecia -->

    <v-row
      class="justify-center pb-4 indigo darken-2 white--text"
      style="margin: 0px"
    >
      <v-col>
        <v-card-title class="justify-center" :class="mobileTitle"
          ><b>Kto stworzył Aplikację Turniejową?</b></v-card-title
        >
        <v-row class="align-center justify-center">
          <v-col cols="12" :lg="4" v-if="$vuetify.breakpoint.mdAndUp"
            ><v-img
              src="../assets/index/logo_white.png"
              contain
              max-height="200px"
            ></v-img></v-col
          ><v-col cols="12" :lg="4"
            ><v-card-text
              class="text-justify"
              :class="mobileText"
              style="text-indent: 1.5em"
            >
              Aplikacja Turniejowa została stworzona w ramach projektu dla
              rzeszowskiego Studenckiego Koła Naukowego Informatyków KOD przez
              zespół w składzie: Brajan Miśkowicz, Hubert Futoma, Konrad
              Bochenek, Natalia Miarowska, Oskar Tyniec, Tomasz Popek.
            </v-card-text></v-col
          ></v-row
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
          { 'text-h5 pb-4': this.$vuetify.breakpoint.smAndDown },
          { 'text-h3': this.$vuetify.breakpoint.mdAndUp },
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
.s1bg {
  position: relative;
  width: 100%;
}
.s1bg:before {
  background: url('../assets/index/s1_bg.jpg') no-repeat center center fixed;
  background-size: cover;
  position: absolute;
  content: '';
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.2;
}
.v-card__text,
.v-card__title {
  word-break: normal;
}

.messL,
.messR {
  width: 100%;
  background: rgb(247, 234, 163);
  position: relative;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  box-shadow: 0 0 1em rgb(128, 128, 129);
}
.messL:before,
.messR:before {
  content: '';
  position: absolute;
  top: 26px;
  width: 0;
  height: 0;
  border-top: 13px solid transparent;
  border-bottom: 13px solid transparent;
}
</style>