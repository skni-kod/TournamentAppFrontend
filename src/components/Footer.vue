<template>
  <v-footer class="primary white--text">
    <v-row justify="center" no-gutters>
      <v-col v-for="link in links" :key="link.link" class="text-center">
        <v-btn rounded color="white" text="center" v-bind:href="link.link"
          >{{ link.name }}
        </v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
  data() {
    return {
      links: [
        { link: '', name: 'Pomoc i FAQ' },
        { link: '', name: 'Polityka prywatności' },
        { link: '', name: 'Warunki korzystania' },
        { link: 'https://kod.prz.edu.pl/#/', name: 'O Nas' },
      ],
    };
  }
}
</script>
