<template>
  <v-footer class="primary white--text">
    <v-row justify="center" no-gutters>
      <v-col v-for="(link,i) in links" :key="i" class="text-center">
        <v-btn rounded text :class="link.active ? 'primary' : ''" v-bind:href="link.link"
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
        { link: '', name: 'Pomoc i FAQ', active: false },
        { link: '', name: 'Polityka prywatności', active: false },
        { link: '', name: 'Warunki korzystania', active: false },
        { link: 'https://kod.prz.edu.pl/#/', name: 'O Nas', active: true },
      ],
    };
  }
}
</script>
