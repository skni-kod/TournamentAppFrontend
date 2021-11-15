<template>
  <div class="main-container">
    <div>
      <HomePage />
    </div>
    <div>
      <BasicInfo style="padding-top: 50px" />
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
.main-container {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>

