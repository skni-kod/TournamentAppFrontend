<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" sm=10 md=8 lg=6 xl=4>
        <v-img
          :src="require('../assets/login-picture.png')"
          alt="Logo Apki turniejowej"
          contain
          height="500px"
          class="mx-auto"
        ></v-img>
      </v-col>
      <v-col cols="12" sm=10 md=8 lg=6 xl=4 class="pa-md-4">
        <v-card class="ma-2 text-center">
          <v-card-title class="justify-center">Masz już konto?<br>Zaloguj się:</v-card-title>
          <v-card-subtitle>Wpisz swoje dane:</v-card-subtitle>
            <v-form
              ref="sign-in"
              v-model="valid"
              lazy-validation
              class="pb-5"
            >
              <v-text-field
                v-model="email"
                label="Adres e-mail"
                required
              ></v-text-field>
              <v-text-field
                type="password"
                label="Hasło"
                required
              ></v-text-field>
              <v-checkbox
                v-model="checkbox"
                label="Zapamiętaj mnie"
              ></v-checkbox>

              <v-btn
                color="#1b2f57"
                class="white--text"
                @click="validate"
              >
                Zaloguj się
              </v-btn>
              <br><br>
              <router-link to="/retrive">Nie pamiętam hasła</router-link>
            </v-form>
            <hr>
            <v-card-title class="justify-center">... lub zarejestruj się:</v-card-title>
            <v-card-subtitle>
              Przed rejestracją zapoznaj się z <router-link to="/regulations">Regulaminem serwisu</router-link> oraz <router-link to="/toa">Polityką prywatności</router-link>
            </v-card-subtitle>
              <template>
                <v-dialog
                  v-model="dialog"
                  persistent
                  max-width="50%"
                >
                  <template v-slot:activator="{ on, attrs }" class="register-btn">
                    <v-btn
                      color="#1b2f57"
                      class="white--text mb-5"
                      v-bind="attrs"
                      v-on="on"
                    >
                      Zarejestruj się
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>Rejestracja użytkownika</v-card-title>
                    <v-card-subtitle>Wypełnij informacje o sobie.</v-card-subtitle>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="4">
                            <v-text-field
                              label="Imię*"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4">
                            <v-text-field
                              label="Nazwisko*"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="2">
                            <v-select
                              :items="['Kobieta', 'Mężczyzna', 'Nie chcę podawać']"
                              label="Płeć*"
                              required
                            ></v-select>
                          </v-col>
                          <v-col cols="2">
                            <v-select
                               :items="['aaa', 'bbb', 'ccc']"
                               label="Kraj*"
                               required
                            ></v-select>
                          </v-col>
                          <v-col cols="6">
                            <v-text-field
                              label="Adres e-mail*"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="6">
                            <v-text-field
                              label="Hasło*"
                              type="password"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="6">
                            <v-text-field
                              label="Klub szachowy"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="2">
                            <v-text-field
                              label="Rating"
                              type="number"
                            ></v-text-field>
                          </v-col> 
                        </v-row>
                      </v-container>
                      <small>* oznacza pole wymagane.</small>
                      <v-checkbox
                        v-model="checkbox"
                        required
                      >
                        <div slot='label'>
                          Zapoznałem/am się z <router-link to="/regulations">Regulaminem serwisu</router-link> i akceptuję go.
                        </div>
                      </v-checkbox> 
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="#1b2f57"
                        text
                        @click="dialog = false"
                      >
                        Zamknij
                      </v-btn>
                      <v-btn
                        color="#1b2f57"
                        class="white--text"
                        @click="dialog = false"
                      >
                        Zarejestruj się
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

              </template>
            
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
  data() {
    return {
      dialog: false,
    };
  }
}
</script>

<style scoped>
.v-form{
  width: 80%;
  margin: 0 auto;
}
</style>