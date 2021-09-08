<template>
  <v-container rounded>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6" xl="4" class="pa-md-4">
        <v-card class="primary white--text">
          <v-card-title class="justify-center">
            <h2>Często zadawane pytania</h2>
          </v-card-title>
          <v-expansion-panels accordion multiple>
            <v-expansion-panel
              v-for="(item, id) in questions"
              :key="id"
              class="text-justify"
            >
              <v-expansion-panel-header>
                <h4>{{ item.question }}</h4></v-expansion-panel-header
              >
              <v-expansion-panel-content>
                {{ item.answer }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class FAQ extends Vue {
  data() {
    return {
      questions: [
        {
          question: 'Czy można tu grać w szachy?',
          answer: 'Tak, można tu grać w szachy',
        },
        {
          question: 'Jak przyznawane są punkty po turnieju?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper, arcu vitae ornare maximus, est leo ullamcorper felis, a elementum lorem lectus ut nisl. Donec fringilla iaculis mauris, vel tincidunt eros malesuada ac. Morbi molestie, tellus non facilisis laoreet, velit leo ullamcorper leo, sit amet vehicula velit turpis eget elit.',
        },
        {
          question: 'Lorem ipsum dolor sit amet',
          answer:
            'Quia labore voluptas et aut ipsa sit. Nihil voluptatem excepturi nostrum error dolor voluptas et. Quo doloremque ut sunt. Voluptatem neque inventore corporis ut sit quia. Neque dolorem est dicta iure. Excepturi quia aut dignissimos consequatur quia ut blanditiis enim.',
        },
      ],
    };
  }
}
</script>

