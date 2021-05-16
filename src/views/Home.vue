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
            <v-tab-item v-for="item in items" :key="item.tab">
              <v-card>
                <v-list>
                  <v-list-group v-for="element in item.listy" :key="element">
                    <template v-slot:activator>
                      <v-list-item-title v-text="element"></v-list-item-title>
                    </template>
                    <v-list-item-group>
                      <v-list-item v-for="info in item.infos" :key="info">
                        <v-list-item-content>
                          <v-list-item-subtitle
                            v-text="info"
                          ></v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list-group>
                </v-list>
              </v-card>
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
          listy: [
            '1. OWC - Osu world cup',
            '2. Przestancie palowac pls',
            '3. No i dont want to go to brazil',
          ],
          infos: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget lacinia nisi, sed condimentum leo. Nam posuere, felis in finibus fringilla, mauris mi rutrum orci, et pulvinar lectus libero a augue.',
            'adsfg',
            'asdfas',
          ],
        },
        {
          tab: 'Kluby',
          icon: 'mdi-account-group-outline',
          listy: ['1. depends', '2. bonk'],
          infos: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget lacinia nisi, sed condimentum leo. Nam posuere, felis in finibus fringilla, mauris mi rutrum orci, et pulvinar lectus libero a augue.',
            'adsfg',
            'asdfas',
          ],
        },
        {
          tab: 'Ranking',
          icon: 'mdi-trophy-outline',
          listy: ['1. no dobra', '2. h'],
          infos: ['adsfg', 'asdfas'],
        },
      ],
    };
  }
}
</script>
