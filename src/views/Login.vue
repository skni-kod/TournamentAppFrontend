<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="10" md="8" lg="6" xl="4">
        <v-img
          :src="require('../assets/login-picture.png')"
          alt="Logo Apki turniejowej"
          contain
          height="500px"
          class="mx-auto"
        ></v-img>
      </v-col>
      <v-col cols="12" sm="10" md="8" lg="6" xl="4" class="pa-md-4">
        <v-card class="ma-2 text-center">
          <v-card-title class="justify-center"
            >Masz już konto?<br />Zaloguj się:
          </v-card-title>

          <v-card-subtitle>Wpisz swoje dane:</v-card-subtitle>

          <v-card-text>
            <v-form
              ref="sign-in"
              v-model="valid"
              lazy-validation
              class="pb-5 mx-auto"
            >
              <v-text-field
                v-model="email"
                label="Adres e-mail"
                :rules="[rules.required, rules.counter(email, 6, 'ów')]"
                required
                @keyup.enter="validate()"
              ></v-text-field>

              <v-text-field
                :append-icon="show ? 'mdi-eye-off' : 'mdi-eye'"
                :rules="[rules.required, rules.counter(password, 8, 'ów')]"
                :type="show ? 'text' : 'password'"
                label="Hasło"
                required
                v-model="password"
                @click:append="() => (show = !show)"   
                @keyup.enter="validate()"
              ></v-text-field>

              <v-btn color="secondary" class="white--text" @click="validate()">
                Zaloguj się
              </v-btn>

              <br /><br />

              <router-link to="/retrive">Nie pamiętam hasła</router-link>
            </v-form>
          </v-card-text>

          <hr />

          <v-card-title class="justify-center"
            >... lub zarejestruj się:
          </v-card-title>

          <v-card-subtitle>
            Przed rejestracją zapoznaj się z
            <router-link to="/regulations">Regulaminem serwisu</router-link>
            oraz <router-link to="/toa">Polityką prywatności</router-link>
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
import Registration from '../components/Registration.vue';

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
      show: false
    };
  }
}
</script>
