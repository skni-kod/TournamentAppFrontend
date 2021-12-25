<template>
  <v-row justify="center">
    <v-col sm="12" md="9" lg="8" xl="6" class="px-5">
      <v-container class="mb-12">
        <v-carousel
          cycle
          height="35vh"
          show-arrows-on-hover
          hide-delimiter-background
        >
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
import HomeTabs from '@/components/general/ScheduleTabs.vue';
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
        require('@/assets/tournament/chess.jpg'),
        require('@/assets/tournament/chess2.jpg'),
        require('@/assets/tournament/chess3.jpg'),
      ],
    };
  }
}
</script>
