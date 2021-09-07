<template>
  <v-row justify="center">
    <v-col sm="12" md="9" lg="8" xl="6">
      <v-container>
        <v-carousel cycle height="480px">
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
        require('@/assets/home/chess.jpg'),
        require('@/assets/home/chess2.jpg'),
        require('@/assets/home/chess3.jpg'),
        require('@/assets/home/chess4.jpg'),
      ],
    };
  }
}
</script>
