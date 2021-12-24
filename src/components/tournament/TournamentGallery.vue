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
import { Component, Prop } from 'vue-property-decorator';
import VueGallery from '../../../node_modules/vue-gallery/src/component/gallery.vue';

@Component({
  components: {
    gallery: VueGallery,
  },
})
export default class Gallery extends Vue {
  @Prop({ required: true }) readonly value!: String[];
  data() {
    return {
      index: null,
    };
  }

  get images() {
    return this.value;
  }
}
</script>

<style scoped>
.image {
  float: left;
  background-size: cover;
  background-position: center center;
}

@media screen and (min-width: 1040px) and (max-width: 1510px) {
  .image {
    max-width: 50%;
  }
}
</style>
