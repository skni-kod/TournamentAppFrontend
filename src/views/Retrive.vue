<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="10" md="8" lg="6" xl="4" class="pa-md-4">
        <v-card class="ma-2 text-center">
          <v-card-title class="justify-center">Zapomniane hasło:</v-card-title>
          <v-card-subtitle>
            Poniżej wpisz adres e-mail powiązany z Twoim kontem.<br />
            Zostanie wysłana wiadomość z instrukcjami, które pomogą Ci zmienić
            hasło.
          </v-card-subtitle>
          <v-card-text>
            <v-form
              ref="retrive-password"
              v-model="valid"
              lazy-validation
              class="pb-5 mx-5"
            >
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Adres e-mail"
                required
              ></v-text-field>
              <v-btn color="secondary" class="white--text" @click="validate">
                Wyślij wiadomość
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Retrive extends Vue {}
</script>
