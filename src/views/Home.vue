<template>
  <v-row justify="center">
    <v-col cols="8" sm="8">
      <v-container>
        <v-carousel cycle height="350px">
          <v-carousel-item
            v-for="(image, i) in images"
            :key="i"
            :src="image.src"
            contain
          >
          </v-carousel-item>
        </v-carousel>
        <home-tabs></home-tabs>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import Vue from 'vue';
import HomeTabs from './HomeTabs.vue';
import { Component } from 'vue-property-decorator';

@Component({
  components: {
    HomeTabs,
  },
})
export default class Home extends Vue {
  data() {
    return {
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
    };
  }
}
</script>
