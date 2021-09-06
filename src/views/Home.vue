<template>
  <v-row justify="center">
    <v-col sm="10" md="8" xl="5">
      <v-container>
        <v-carousel cycle height="350px">
          <v-carousel-item
            v-for="(image, i) in images"
            :key="i"
            :src="image"
            contain
          >
          </v-carousel-item>
        </v-carousel>
        <home-tabs />
      </v-container>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import HomeTabs from '@/components/HomeTabs.vue';
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
        'https://cdn.pixabay.com/photo/2021/01/29/11/33/chess-5960730_960_720.jpg',
        'https://cdn.pixabay.com/photo/2017/09/08/02/24/chess-2727443_960_720.jpg',
        'https://cdn.pixabay.com/photo/2019/03/04/11/59/chess-4033887_960_720.jpg',
        'https://cdn.pixabay.com/photo/2017/02/24/18/20/king-2095834_960_720.jpg',
      ],
    };
  }
}
</script>
