<template>
  <div>
    <v-row justify="center" class="mt-5">
      <v-col sm="10" md="7" lg="6" xl="4">
        <v-card class="ma-5 pa-3 text-center rounded-lg">
          <v-card-title class="justify-center mb-5 pt-5">
            <h2>Zapomniane hasło:</h2>
          </v-card-title>
          <v-card-subtitle class="pb-2">
            Poniżej wpisz adres e-mail powiązany z Twoim kontem.<br />
            Zostanie wysłana wiadomość z instrukcjami, które pomogą Ci zmienić
            hasło.
          </v-card-subtitle>
          <v-card-text>
            <v-form
              ref="retrive-password"
              v-model="valid"
              lazy-validation
              class="mb-5"
            >
              <v-text-field
                v-model="email"
                label="Adres e-mail"
                style="max-width: 350px; margin: auto"
              ></v-text-field>
              <v-btn
                color="secondary"
                class="white--text rounded-pill mt-1"
                @click="validate"
              >
                Wyślij wiadomość
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Retrive extends Vue {
  data() {
    return {
      email: '',
      valid: false,
    };
  }
  validate() {
    const email = this.$data.email;
  }
}
</script>
