<template>
  <section>
    <v-row class="justify-center">
      <v-col class="px-0">
        <v-card-title
          class="justify-center text-center indigo darken-2 white--text"
          :class="mobileTitle"
        >
          <b>Czym jest i jakie funkcje spełnia Aplikacja Turniejowa?</b>
        </v-card-title>
        <div class="s1bg my-3">
          <v-row class="justify-center align-center pa-4 pt-8">
            <v-col class="mx-8" cols="10" lg="4" md="5">
              <div class="messL">
                <v-card-text
                  class="text-justify px-4"
                  :class="mobileText"
                  style="text-indent: 1.5em"
                >
                  {{ whatIs }}
                </v-card-text>
              </div>
            </v-col>
            <v-col cols="12" lg="4" md="6" sm="10">
              <v-img
                src="../../assets/home/schedule.png"
                contain
                style="box-shadow: 0 0 1em rgb(128, 128, 129)"
              ></v-img>
            </v-col>
          </v-row>
          <v-row class="align-center justify-center pa-4">
            <v-col cols="12" lg="4" md="6" sm="10">
              <v-img
                src="../../assets/home/t_t.png"
                contain
                style="box-shadow: 0 0 1em rgb(128, 128, 129)"
              ></v-img>
            </v-col>
            <v-col class="mx-8" cols="10" lg="4" md="5">
              <div class="messR">
                <v-card-text
                  class="text-justify px-4"
                  :class="mobileText"
                  style="text-indent: 1.5em"
                >
                  {{ funcs }}
                </v-card-text>
              </div>
            </v-col>
          </v-row>
        </div>

        <v-row class="justify-center indigo lighten-5 ma-0 py-4">
          <v-col cols="12" lg="5" class="pr-2">
            <v-card-text :class="mobileText" class="py-0">
              <b>Funkcjonalności dla zwykłego użytkownika:</b>
              <ul>
                <li v-for="item in content" :key="item">
                  {{ item }}
                </li>
              </ul>
            </v-card-text>
          </v-col>
          <v-col cols="12" lg="5" class="pr-2">
            <v-card-text :class="mobileText" class="py-0">
              <b>Funkcjonalności dla użytkownika z pełnymi informacjami:</b>
              <ul>
                <li v-for="item in content2" :key="item">
                  {{ item }}
                </li>
              </ul>
            </v-card-text>
          </v-col>
        </v-row>
      </v-col></v-row
    >

    <v-row
      class="justify-center pb-4 indigo darken-2 white--text"
      style="margin: 0px"
    >
      <v-col>
        <v-card-title
          class="justify-center text-center pb-0"
          :class="mobileTitle"
        >
          <b>Kto stworzył Aplikację Turniejową?</b>
        </v-card-title>
        <v-row class="align-center justify-center pt-2">
          <v-col v-if="$vuetify.breakpoint.lgAndUp" cols="12" lg="4"
            ><v-img
              src="../../assets/loga-skni/logo_white.png"
              contain
              max-height="200px"
            ></v-img></v-col
          ><v-col cols="12" lg="4">
            <v-card-text
              class="text-justify"
              :class="mobileText"
              style="text-indent: 1.5em"
            >
              {{ authors }}
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
      whatIs:
        'Aplikacja Turniejowa to system do zarządzania turniejami szachowymi, opracowany przez członków SKNI "KOD". Głównym założeniem strony WWW jest prezentacja wyników oraz stworzenie środowiska przystępnego dla różnego rodzaju użytkowników.',
      funcs:
        'Każde z zarejestrowanych kont może działać dwojako, przy podaniu tylko podstawowych danych takich jak login, hasło i email, możliwa jest obserwacja wyników na żywo ze wszystkich dostępnych w systemie turniejów.',
      authors:
        'Aplikacja Turniejowa została stworzona w ramach projektu dla rzeszowskiego Studenckiego Koła Naukowego Informatyków KOD przez zespół w składzie: Brajan Miśkowicz, Hubert Futoma, Konrad Bochenek, Natalia Miarowska, Oskar Tyniec, Tomasz Popek.',
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
  get mobileText() {
    return this.$vuetify.breakpoint.smAndDown ? 'text-h6' : 'text-h5';
  }
  get mobileTitle() {
    return this.$vuetify.breakpoint.smAndDown ? 'text-h5' : 'text-h3';
  }
}
</script>

<style scoped>
.s1bg {
  position: relative;
  width: 100%;
}
.s1bg:before {
  background: url('../../assets/home/homeBg2.jpg') no-repeat center center fixed;
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
  background: linear-gradient(135deg, rgb(253, 237, 144), rgb(255, 240, 190));
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
