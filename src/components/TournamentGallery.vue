<template>
  <div>
    <v-container>
      <v-row justify="center">
        <gallery
          :images="images"
          :index="index"
          @close="index = null"
        ></gallery>
        <v-img
          class="image rounded ma-2"
          v-for="(image, imageIndex) in images"
          :key="imageIndex"
          @click="index = imageIndex"
          :style="{
            backgroundImage: 'url(' + image + ')',
            width: '300px',
            height: '300px',
          }"
        ></v-img>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import VueGallery from '@/node_modules/vue-gallery/src/component/gallery.vue';
import axios from '@/axios';

@Component({
  components: {
    VueGallery
  }
})
export default class Gallery extends Vue {
  created() {
    this.downloadData();
  }

  downloadData() {
    if (this.auth) {
      axios
        .get('tournament/' + this.$route.params.id + '/', {
          headers: {
            Authorization: 'Bearer ' + this.$store.getters.token,
          },
        })
        .then((res2) => {
          if (res2.status === 200) {
            let gal:object[] = [];
            const data = res2.data.gallery.image;
            data.forEach((element:any) => {
              let photo = element.image;
              gal.push(photo);
            });
            this.$data.images = gal;
          }
        })
        .catch(() => {
          console.log('Błąd w galerii');
        });
    }
  }

  get auth() {
    return this.$store.getters.isAuthenticated;
  }

  data() {
    return {
      index: null,
      images: [],
    };
  }
}
</script>

<style scoped>
.image {
  float: left;
  background-size: cover;
  background-position: center center;
}
</style>
