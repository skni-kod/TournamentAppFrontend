<template>
  <v-card tile>
    <v-tabs
      v-model="x"
      background-color="secondary"
      centered
      dark
      class="rounded-sm"
      icons-and-text
    >
      <v-tab v-for="(item, id) in items" :key="id">
        <div class="d-none d-sm-flex">{{ item.tab }}</div>
        <v-icon>{{ item.icon }}</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="x">
      <v-tab-item v-for="(itemtab, index) in items" :key="index">
        <v-data-table
          :headers="itemtab.headers"
          :items="itemtab.positions"
          item-key="name"
          show-expand
          single-expand
          :items-per-page="10"
          class="elevation-1 rounded-sm"
        >
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              <v-row>
                <v-col class="my-auto">
                  {{ item.info }}
                </v-col>
                <v-col cols="auto" class="my-auto" v-if="itemtab.tab === 'Turnieje'">
                  <v-btn :to="path"
                    >Więcej o Turnieju</v-btn
                  >
                </v-col>
              </v-row>
            </td>
          </template>
        </v-data-table>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import Vue from 'vue';
import TheTournament from './TheTournament.vue';
import { Component } from 'vue-property-decorator';

@Component({
  components: {
    TheTournament,
  },
})
export default class HomeTabs extends Vue {
  data() {
    return {
      x: null,
      path: '/tournament',
      items: [
        {
          tab: 'Turnieje',
          icon: 'mdi-tournament',
          headers: [
            { text: 'Nazwa', value: 'name', class: 'primary white--text' },
            {
              text: 'Data rozpoczęcia',
              value: 'date',
              class: 'primary white--text',
            },
            { text: 'Typ gry', value: 'type', class: 'primary white--text' },
            { text: 'Kraj', value: 'country', class: 'primary white--text' },
            {
              text: '',
              value: 'data-table-expand',
              class: 'primary white--text',
            },
          ],
          positions: [
            {
              name: 'Mistrzostwa Polski 2021',
              date: '11.05.2021',
              type: 'Round Robin',
              country: 'Polska',
              info: '',
            },
            {
              name: 'Mistrzostwa Czech',
              date: '17.07.2021',
              type: 'Drabinka turniejowa',
              country: 'Czechy',
              info: '',
            },
            {
              name: 'Mistrzostwa Podkarpacia',
              date: '30.09.2021',
              type: 'Drabinka turniejowa',
              country: 'Polska',
              info: '',
            },
            {
              name: 'Wielki Turniej SKNI KOD',
              date: '30.11.2021',
              type: 'Round Robin',
              country: 'Polska',
              info: '',
            },
          ],
        },
        {
          tab: 'Kluby',
          icon: 'mdi-account-group-outline',
          headers: [
            {
              text: 'Nazwa klubu',
              value: 'name',
              class: 'primary white--text',
            },
            { text: 'Kraj', value: 'country', class: 'primary white--text' },
            {
              text: '',
              value: 'data-table-expand',
              class: 'primary white--text',
            },
          ],
          positions: [
            {
              name: 'Klub Szachowy „Polonia” Warszawa',
              country: 'Polska',
              info: 'Klub Szachowy „Polonia” powstał w 2005 roku, 2 lata później zarejestrowano go w Polskim Związku Szachowym. Jego siedziba znajduje się przy ul. Konwiktorskiej 6. Zawodnicy tego klubu w znacznej mierze wywodzą się z KS „Polonia” Warszawa. Nie był on w stanie zapewnić odpowiedniego rozwoju szachistom z uwagi na problemy finansowe.\r\n\r\nObecnie Klub Szachowy „Polonia” Warszawa wspiera aktywnie młodych szachistów. Organizuje szkółkę szachową dla dzieci i młodzieży.',
            },
            {
              name: 'Klub Szachowy „Stilon” Gorzów Wielkopolski',
              country: 'Polska',
              info: 'Klub Szachowy „Stilon” powstał w 1952 roku w Gorzowie Wielkopolskim. Na początku jego działalność koncentrowała się wokół amatorskiego grania w szachy, po kilku latach to się zmieniło. Członkowie klubu zaczęli odnosić sukcesy, awansowali do ligi okręgowej i międzywojewódzkiej. Wśród wybitnych szachistów należących do Stilonu wyróżnia się Roberta Kuczyńskiego, Igora Chenkina, Barbarę Kaczorowską, Pawła Jaracza, Romana Sokołowskiego czy Józefa Goldberga.',
            },
            {
              name: 'Klub Szachowy „Hetman” Katowice',
              country: 'Polska',
              info: 'Klub Szachowy „Hetman” powstał w 1975 roku. Początkowo istniał jako sekcja szachowa w szopienickim Domu Kultury. Do jego powstania przyczynili się miłośnicy szachów, tj. Henryk Ciesielski, Alojzy Kaczmarczyk, Krystian Klimczok i Piotr Ottenburger. Klub ten odnosi sukcesy od 1976 roku, kiedy zdobył mistrzostwo klasy „A”. W ostatnich latach zawodnicy wielokrotnie zajmowali I miejsce w Drużynowych Mistrzostwach Polski. Tak było w roku 2015, 2016, 2017 czy 2018.',
            },
          ],
        },
      ],
    };
  }
}
</script>
