<template>
  <div class="main-container">
    <div>
      <HomePage />
    </div>
    <div>
      <BasicInfo class="pt-5" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import HomePage from '@/components/HomePage.vue';
import BasicInfo from '@/components/BasicInfo.vue';
@Component({
  components: {
    HomePage,
    BasicInfo,
  },
})
export default class Index extends Vue {}
</script>
<style scoped>
</style>

