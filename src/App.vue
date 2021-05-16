<template>
  <v-app>
    <navbar></navbar>
    <v-main class="accent">
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Vue from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { Component } from 'vue-property-decorator';

@Component({
  components: {
    Navbar,
    Footer,
  },
})
export default class App extends Vue {
  data() {
    return {};
  }
}
</script>
