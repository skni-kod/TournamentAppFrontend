<template>
  <v-footer class="primary white--text">
    <v-row justify="center" no-gutters>
      <v-col class="text-center">
        <v-btn rounded text :class="'primary'" :to="links[0].link">
          {{ links[0].text }}
        </v-btn>
      </v-col>
      <v-col class="text-center">
        <v-btn rounded text :class="'primary'" :to="links[1].link">
          {{ links[1].text }}
        </v-btn>
      </v-col>
      <v-col class="text-center">
        <v-btn rounded text :class="'primary'" :href="skni.link">
          {{ skni.text }}
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
      ],
      skni: { link: 'https://kod.prz.edu.pl/#/', text: 'O Nas' },
    };
  }
}
</script>
