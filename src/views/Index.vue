<template>
  <div>
    <div>
      <HomePage />
    </div>
    <div>
      <BasicInfo style="padding-top: 50px" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import HomePage from "@/components/HomePage.vue";
import BasicInfo from "@/components/BasicInfo.vue";
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

