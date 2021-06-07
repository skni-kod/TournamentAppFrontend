<template>
  <div>
    <v-card>
      <gallery :images="images" :index="index" @close="index = null"></gallery>
      <v-img
        class="image rounded ma-2"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{
          backgroundImage: 'url(' + image + ')',
          width: '250px',
          height: '250px',
        }"
      ></v-img>
    </v-card>
  </div>
</template>

<script>
import VueGallery from 'vue-gallery';

export default {
  data: function() {
    return {
      images: [
        'https://i.imgur.com/B4Em7p5.jpg',
        'https://i.imgur.com/EiNm8IU.jpg',
        'https://i.imgur.com/nQomgLJ.jpg',
        'https://i.imgur.com/uUVIogR.jpg',
        'https://i.imgur.com/RU9auUz.jpg',
        'https://i.imgur.com/uUVIogR.jpg',
        'https://i.imgur.com/RU9auUz.jpg',
      ],
      index: null,
    };
  },
  components: {
    gallery: VueGallery,
  },
};
</script>

<style scoped>
.image {
  float: left;
  background-size: cover;
  background-position: center center;
}
</style>
