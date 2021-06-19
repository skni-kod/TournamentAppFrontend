<template>
  <div>
    <v-container>
      <v-row justify="center">
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

@Component
export default class Gallery extends Vue {
  /*created() {
    this.downloadData();
  },

  downloadData() {
    console.log(this.$route.params.id);
    if (this.auth) {
      axios
        .get('tournament/' + this.$route.params.id + '/', {
          headers: {
            Authorization: 'Bearer ' + this.token,
          },
        })
        .then((res2) => {
          if (res2.status === 200) {
            console.log('asd');
            let tabelki = [];
            const data = res2.data;
            data.forEach((element) => {
              let tab = {};
              console.log(element);
              tab[0] = element.name;
              tab[1] = element.date;
              tab[2] = element.country;
              tab[3] = element.address;
              tab[4] = element.members_limit;
              tab[5] = element.organiser;
              tab[6] = element.play_type;
              tabelki.push(tab);
              console.log(tabelki);
            });
            this.$data.info = tabelki;
            console.log(tabelki);
          }
        })
        .catch(() => {
          console.log('Błąd w turniejach');
        });
    }
  },
*/
  data() {
    return {
      index: null,
      images: [
        'https://cdn.pixabay.com/photo/2021/01/29/11/33/chess-5960730_960_720.jpg',
        'https://cdn.pixabay.com/photo/2017/09/08/02/24/chess-2727443_960_720.jpg',
        'https://cdn.pixabay.com/photo/2019/03/04/11/59/chess-4033887_960_720.jpg',
        'https://cdn.pixabay.com/photo/2017/02/24/18/20/king-2095834_960_720.jpg',
      ],
    };
  }
};
</script>

<style scoped>
.image {
  float: left;
  background-size: cover;
  background-position: center center;
}
</style>
