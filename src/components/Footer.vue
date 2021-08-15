<template>
  <v-footer class="primary white--text">
    <v-row justify="center" no-gutters>
      <v-col v-for="(link,i) in links" :key="i" class="text-center">
        <v-btn
          rounded
          text
          :class="'primary'"
          :to="link.link"
          >{{ link.name }}
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
        { link: 'FAQ', name: 'Pomoc i FAQ'},
        { link: 'PrivacyPolicy', name: 'Polityka prywatności'},
      ],
      privacy: { link: 'https://kod.prz.edu.pl/#/', name: 'O Nas' },
    };
  }
}
</script>
