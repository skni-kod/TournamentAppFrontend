<template>
  <v-row justify="center">
    <v-col cols="8" sm="8">
      <v-container rounded>
        <v-carousel cycle height="350px">
          <v-carousel-item
            v-for="(image, i) in images"
            :key="i"
            :src="image.src"
            contain
          >
          </v-carousel-item>
        </v-carousel>
        <v-card>
          <v-tabs
            v-model="x"
            background-color="secondary"
            centered
            dark
            class="rounded-b-xl"
            icons-and-text
          >
            <v-tab v-for="item in items" :key="item.tab">
              <div class="d-none d-sm-flex">{{ item.tab }}</div>
              <v-icon>{{ item.icon }}</v-icon>
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="x">
            <v-tab-item v-for="item in items" :key="item">
              <v-data-table
                :headers="item.headers"
                :items="item.positions"
                item-key="name"
                :expanded.sync="expanded"
                show-expand
                single-expand
                :items-per-page="10"
                class="elevation-1"
              >
                <template v-slot:expanded-item="{ headers, item }">
                  <td :colspan="headers.length">
                    {{ item.info }}
                  </td>
                </template>
              </v-data-table>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  data() {
    return {
      x: null,
      tab: null,
      
      images: [
        {
          src: 'https://dogemuchwow.com/wp-content/uploads/2020/12/bonk-it.jpg',
        },
        {
          src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftelegramguides.com%2Fwp-content%2Fuploads%2F2018%2F04%2Fpepe-sticker-package-telegram-4.png&f=1&nofb=1',
        },
        {
          src: 'https://i.imgur.com/Fp2RQn4.png',
        },
      ],
      items: [
        {
          tab: 'Turnieje',
          icon: 'mdi-tournament',
          headers: [
            { text: 'Nazwa', value: 'name' },
            { text: 'Data rozpoczęcia', value: 'date' },
            { text: 'Typ gry', value: 'type' },
            { text: 'Kraj', value: 'country' },
            { text: '', value: 'data-table-expand' },
          ],
          positions: [
            {
              name: 'OWC - Osu world cup',
              date: '15.05.2021',
              type: 'szybka',
              country: 'Polska',
              info: 'Tomek, dawaj streama z Osu!'
            },
            {
              name: 'Przestancie palowac pls',
              date: '23.05.2021',
              type: 'speedrun',
              country: 'Mielec',
              info: 'Nie ma żadnych dowodów na to, że Oskar wiedział o pałowaniu w kole.'
            },
          ],
        },
        {
          tab: 'Kluby',
          icon: 'mdi-account-group-outline',
          headers: [
            { text: 'Nazwa klubu', value: 'name' },
            { text: 'Kraj', value: 'country' },
            { text: '', value: 'data-table-expand'},
            
          ],
          positions: [
            {
              name: 'Pałownicy Oskara',
              country: 'Polska',
              info: 'Czy wiedziałeś, że Oskar nie przyszedł na spotkanie projektu i nie poniósł za to żadnych konsekwencji? Jeśli Ty też chcesz wymierzyć mu sprawiedliwość to dołącz do naszego zespołu.'
            },
            {
              name: 'Kocham Matematykę Dyskretną',
              country: 'Mielec',
              info: 'Jeśli istnieje tylko 1 minimalny zbiór totalnie dominujący to jest on podzbiorem każdego zbioru totalnie dominującego'
            },
          ],
        },
      ],
    };
  }
}
</script>
