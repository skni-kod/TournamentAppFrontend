<template>
  <v-app>
    <navbar />
    <v-main class="accent">
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/layout/TheNavbar.vue';
import Footer from '@/components/layout/TheFooter.vue';
import { Component } from 'vue-property-decorator';

@Component({
  components: {
    Navbar,
    Footer,
  },
})
export default class App extends Vue {}
</script>
<style scoped>
html,
body {
  overflow-x: hidden;
}
body {
  position: relative;
  width: 100%;
}
</style>
