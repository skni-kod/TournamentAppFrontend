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
          'https://cdn.pixabay.com/photo/2021/01/29/11/33/chess-5960730_960_720.jpg',
          'https://cdn.pixabay.com/photo/2017/09/08/02/24/chess-2727443_960_720.jpg',
          'https://cdn.pixabay.com/photo/2019/03/04/11/59/chess-4033887_960_720.jpg',
          'https://cdn.pixabay.com/photo/2017/02/24/18/20/king-2095834_960_720.jpg'
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
