<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" sm=10 md=8 lg=6 xl=4>
        <v-card class="ma-2">
          <v-card-title>Login</v-card-title>
          <v-card-subtitle>Login</v-card-subtitle>
          <v-card-text>Login</v-card-text>
          <v-card-actions>
            <v-btn link to="/">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Login extends Vue {}
</script>