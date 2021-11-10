<template>
  <section>
    <v-row class="align-center justify-center" style="margin: 0px">
      <v-col cols="8" class="mx-16">
        <v-card class="mx-auto"
          ><v-card-title><h1>Czym jest Aplikacja Turniejowa?</h1></v-card-title>
          <v-card-text class="pa-3 text-h5">
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
            wgląd w listę turniejów, w których braliśmy udział. <br /><br />

            <b>Funkcjonalności dla zwykłego użytkownika:</b>

            <ul>
              <li>podgląd rozgrywanych turniejów</li>
              <li>podgląd archiwalnych turniejów</li>
              <li>śledzenie wyników poszczególnych partii szachowych</li>
              <li>wgląd w galerię zdjęć dla poszczególnych turniejów</li>
              <li>wgląd w podstawowe statystyki zawodników</li>
            </ul>
            <br />
            <b>Funkcjonalności dla użytkownika z pełnymi informacjami:</b>
            <ul>
              <li>żliwość zapisywania się na turniej</li>
              <li>wyświetlanie listy turniejów, w których user brał udział</li>
              <li>dołączanie do grup klubów szachowych</li>
              <li>podgląd szczegółowych statystyk zawodników</li>
            </ul>
          </v-card-text></v-card
        ></v-col
      ></v-row
    ><v-row class="align-center justify-center pb-4" style="margin: 0px">
      <v-col cols="8" class="mx-16">
        <v-card class="mx-auto"
          ><v-card-title><h1>Kto stworzył apke turniejową?</h1></v-card-title>
          <v-row class="pa-4">
            <v-col cols="4"
              ><v-img
                src="https://kod.prz.edu.pl/img/logo_small.35e34fc9.png"
                contain
                max-height="125px"
                to="https://kod.prz.edu.pl"
              ></v-img></v-col
            ><v-col cols="8"
              ><v-card-text class="pa-3 text-h5">
                Aplikacja Turniejowa została stworzona w ramach projektu dla
                rzeszowskiego Studenckiego Koła Naukowego Informatyków
                KOD.</v-card-text
              ></v-col
            ></v-row
          >
        </v-card></v-col
      ></v-row
    >
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class BasicInfo extends Vue {}
</script>

<style scoped>
</style>