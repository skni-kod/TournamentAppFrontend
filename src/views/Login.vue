<template>
  <div>
    <v-row style="max-width: 1450px;" class="mx-auto justify-center">
      <v-col sm="8" md="4">
        <v-img
          :src="require('../assets/login-picture.png')"
          alt="Logo Apki turniejowej"
          contain
          height="540"
          class="mx-auto my-12"
        ></v-img>
      </v-col>
      <v-col sm="8" md="4">
        <v-card class="my-12 mx-auto text-center rounded-lg" style="max-width: 450px">
          <v-card-title class="justify-center"
            ><div>
              <h2 class="mt-3 mb-6">Masz już konto?</h2>
              <h3 class="mb-1">Zaloguj się:</h3>
            </div>
          </v-card-title>

          <v-card-text>
            <v-form
              ref="sign-in"
              v-model="valid"
              lazy-validation
              class="pb-5 mx-3"
            >
              <v-text-field
                v-model="email"
                label="Adres e-mail"
                :rules="[rules.required, rules.counter(email, 6, 'ów')]"
                required
              ></v-text-field>

              <v-text-field
                :append-icon="show ? 'mdi-eye-off' : 'mdi-eye'"
                :rules="[rules.required, rules.counter(password, 8, 'ów')]"
                :type="show ? 'text' : 'password'"
                label="Hasło"
                required
                v-model="password"
                @click:append="() => (show = !show)"
              ></v-text-field>

              <div class="mb-5">
                <v-btn
                  color="secondary"
                  class="white--text rounded-pill"
                  @click="validate()"
                >
                  <h4>Zaloguj się</h4>
                </v-btn>
              </div>

              <div>
                <router-link :to="{ name: 'Retrive' }"
                  >Nie pamiętam hasła</router-link
                >
              </div>
            </v-form>
          </v-card-text>

          <hr />

          <v-card-title class="justify-center"
            ><h3>... lub zarejestruj</h3>
          </v-card-title>

          <v-card-subtitle>
            Przed rejestracją zapoznaj się z
            <router-link :to="{ name: 'FAQ' }">naszym FAQ</router-link>
            oraz
            <router-link :to="{ name: 'Privacy Policy' }"
              >Polityką prywatności</router-link
            >
          </v-card-subtitle>

          <Registration />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Registration from '@/components/Registration.vue';

@Component({
  components: {
    Registration,
  },
})
export default class Login extends Vue {
  validate() {
    this.$store.dispatch('login', {
      email: this.$data.email,
      password: this.$data.password,
    });
  }

  data() {
    return {
      email: '',
      password: '',
      dialog: false,
      valid: false,
      rules: {
        required: (input: string) => !!input || 'To pole jest wymagane',
        counter: (input: string, number: number, end: string) =>
          input.length >= number ||
          'Musisz podać minimum ' + number + ' znak' + end,
      },
      show: false,
    };
  }
}
</script>
