<template>
  <v-footer class="primary white--text">
    <v-row justify="center" no-gutters>
      <v-col
        sm="4"
        md="3"
        lg="2"
        v-for="(link, i) in links"
        :key="i"
        class="text-center"
      >
        <v-btn rounded text class="primary" :to="link.link">
          {{ link.text }}
        </v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
  data() {
    return {
      links: [
        { link: { name: 'FAQ' }, text: 'Pomoc i FAQ' },
        { link: { name: 'Privacy Policy' }, text: 'Polityka prywatności' },
        { link: { name: 'SKNI' }, text: 'O nas' },
      ],
    };
  }
}
</script>

<style scoped>
.v-btn:before {
  background-color: transparent;
}
</style>
