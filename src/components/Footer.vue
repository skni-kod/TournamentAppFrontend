<template>
  <v-footer color="#1b2f57">

      <v-row no-gutters>
        <v-col v-for="ref in refs" justify="right">
          <router-link class="footer_refs" :to="{path:ref.router}">{{ref.name}}</router-link>
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
      refs: [
        {router: '/faq', name: 'Pomoc i FAQ'},
        {router: '/toa', name: 'Polityka prywatności'},
        {router: '/regulations', name: 'Regulamin'},
        {router: '/contact', name: 'Kontakt'}
      ]
    };
  }
}
</script>
<style>
.footer_refs{
  color:white!important;
  text-decoration: none;
  font-weight: 300!important;
  text-align: right!important;
  font-size: 15px;
}

</style>