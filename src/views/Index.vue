<template>
  <v-container class="bg" fluid>
    <v-row dense justify="center">
      <v-col cols="4">
        <v-card
          ><v-card-title>Informacje</v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            ullam commodi odio veniam, fuga id aspernatur distinctio aut est
            perspiciatis ab, repellendus nemo minus, aliquam sapiente tenetur
            consequatur atque tempore!</v-card-text
          >
        </v-card></v-col
      >
      <v-col cols="4"
        ><v-card
          ><v-card-title> Zaloguj się</v-card-title>
          <v-card-text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            eius odio sapiente itaque, repellendus in, doloremque explicabo
            nulla ad minima quos iste sed earum ex non excepturi laborum dolorem
            sint.
            <v-divider></v-divider
            ><v-btn class="d-flex justify-center" to="login">asd</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row></v-container
  >
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
@Component
export default class Index extends Vue {
  data() {}
}
</script>
<style scoped>
.bg {
  width: 100%;
  height: 600px;
  background: rgb(41, 70, 129);
  background: linear-gradient(
    180deg,
    rgba(41, 70, 129, 1) 0%,
    rgba(128, 154, 207, 1) 100%
  );
}
</style>

