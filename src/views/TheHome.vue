<template>
  <div class="main-container">
    <div>
      <HomePage />
    </div>
    <div>
      <BasicInfo />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import HomePage from '@/components/general/HomePage.vue';
import BasicInfo from '@/components/general/BasicInfo.vue';
@Component({
  components: {
    HomePage,
    BasicInfo,
  },
})
export default class Index extends Vue {}
</script>
<style scoped></style>
