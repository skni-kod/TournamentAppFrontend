<template>
  <v-dialog v-model="dialog" persistent max-width="50%">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="secondary"
        class="white--text mb-5"
        v-bind="attrs"
        v-on="on"
      >
        Zarejestruj się
      </v-btn>
    </template>
    <v-form v-model="valid">
      <v-card>
        <v-card-title>Rejestracja użytkownika</v-card-title>
        <v-card-subtitle>Wypełnij informacje o sobie.</v-card-subtitle>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="4">
                <v-text-field label="Imię" v-model="first_name"></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  label="Nazwisko"
                  v-model="last_name"
                ></v-text-field>
              </v-col>
              <v-col cols="2">
                <v-select
                  :items="gender_list"
                  item-value="code"
                  item-text="name_pl"
                  label="Płeć"
                  v-model="gender"
                ></v-select>
              </v-col>
              <v-col cols="2">
                <v-select
                  :items="country_list"
                  item-value="name_en"
                  item-text="name_pl"
                  label="Kraj*"
                  v-model="country"
                  :rules="[
                  rules.required,
                  ]"
                  required
                ></v-select>
              </v-col>
              <v-col cols="8">
                <v-text-field
                  label="Adres e-mail*"
                  v-model="email"
                  :rules="[
                    rules.required,
                    rules.regex_email(email)
                  ]"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="Hasło*"
                  type="password"
                  v-model="password"
                  :rules="[
                  rules.required, 
                  rules.counter(password, 8, 'ów'),
                  rules.regex_password(password)]"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="Powtórz hasło*"
                  type="password"
                  v-model="re_password"
                  required
                  :rules="[
                    rules.required,
                    rules.integrity(password, re_password),
                  ]"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="Klub szachowy"
                  v-model="club"
                ></v-text-field>
              </v-col>
              <v-col cols="2">
                <v-text-field
                  label="Rating"
                  type="number"
                  min="0"
                  max="3500"
                  v-model="rating"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>* oznacza pole wymagane.</small>
          <v-checkbox 
            v-model="checkbox" 
            :rules="[
            rules.required
            ]"
            required>
            <div slot="label">
              Zapoznałem/am się z
              <router-link to="/regulations">Regulaminem serwisu</router-link>
              i akceptuję go.
            </div>
          </v-checkbox>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary" text @click="dialog = false">
            Zamknij
          </v-btn>
          <v-btn color="secondary" class="white--text" @click="register()">
            Zarejestruj się
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { countries } from '../assets/country';

@Component({

})

export default class Registration extends Vue {
  private data() {
    return {
      club: '',
      gender: '',
      country: '',
      checkbox: false,
      dialog: false,
      valid: true,
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      re_password: '',
      profile: [{
      club: '',
      gender: '',
      country: '',
      }],
      rating: 0,
      country_list: countries,
      gender_list: [
        { name_pl: 'Kobieta', code: 'F' },
        { name_pl: 'Mężczyzna', code: 'M' },
        { name_pl: 'Nie chcę podawać', code: 'other' },
      ],
      rules: {
        required: (input: string) => !!input || 'To pole jest wymagane',
        counter: (input: string, number: number, end: string) =>
          input.length >= number || 'Musisz podać minimum ' + number + ' znak' + end,
        integrity: (input1: string, input2: string) => input1 === input2 || 'Podane hasła się różnią',
        regex_email: (input: string) => {
          const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return regex.test(input) || 'Musisz podać poprawny adres e-mail';
        },
        regex_password: (input: string) => {
          const regex = /([a-z]{1,}[0-9]{0,})/ig;
          return regex.test(input) || 'Hasło nie może się składać z samych cyfr';
        },
      },
    }
  }

  register(): void{
    if(this.$data.valid){
      this.$store.dispatch('register', {
        email: this.$data.email,
        password: this.$data.password,
        first_name: this.$data.first_name,
        last_name: this.$data.last_name,
        profile: [{
        club: this.$data.club,
        gender: this.$data.gender,
        country: this.$data.country}]
      });
    }
    
  }
}
</script>
