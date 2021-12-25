<template>
  <v-card tile>
    <v-tabs
      v-model="x"
      background-color="secondary"
      centered
      dark
      class="rounded-sm"
      icons-and-text
    >
      <v-tab v-for="(item, id) in items" :key="id">
        <div class="d-sm-flex">{{ item.tab }}</div>
        <v-icon>{{ item.icon }}</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="x">
      <v-tab-item v-for="(itemtab, index) in items" :key="index">
        <v-data-table
          :headers="itemtab.headers"
          :items="itemtab.positions"
          item-key="name"
          show-expand
          single-expand
          :items-per-page="5"
          class="elevation-1 rounded-sm"
          :loading="loading"
        >
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              <v-row>
                <v-col class="my-3">
                  {{ item.info }}
                </v-col>
                <v-col
                  v-if="itemtab.tab === 'Turnieje'"
                  cols="auto"
                  class="my-3"
                >
                  <v-btn
                    :to="{
                      name: 'Tournament',
                      params: { id: item.id, module },
                    }"
                    >Więcej o Turnieju</v-btn
                  >
                </v-col>
                <v-col v-else cols="auto" class="my-auto">
                  <v-btn
                    :to="{
                      name: 'Club',
                      params: { id: item.id },
                    }"
                  >
                    Więcej o Klubie</v-btn
                  >
                </v-col>
              </v-row>
            </td>
          </template>
        </v-data-table>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import axios from '@/axios';
import { countries } from '../../assets/country';

@Component
export default class HomeTabs extends Vue {
  created() {
    this.downloadData();
  }

  downloadData() {
    this.$data.loading = true;
    if (this.auth) {
      axios
        .get('tournament/', {
          headers: {
            Authorization: 'Bearer ' + this.token,
          },
        })
        .then((res2) => {
          if (res2.status === 200) {
            let tabelki: any = [];
            const data = res2.data;
            data.forEach((element: any) => {
              let tab: any = {};
              tab.name = element.name;
              tab.date = element.date;
              tab.type = element.play_type === 'RR' ? 'Kołowy' : 'Drabinkowy';
              const country_code = element.country;
              const countryObject = countries.find(
                (c: any) => c.code === country_code,
              );
              tab.country = countryObject?.name_pl;
              tab.id = element.id;
              tabelki.push(tab);
            });
            this.$data.items[0].positions = tabelki;
          }
        })
        .catch(() => {
          console.log('Błąd w turniejach');
        })
        .then(() => {
          this.$data.loading = false;
        });

      axios
        .get('club/', {
          headers: {
            Authorization: 'Bearer ' + this.token,
          },
        })
        .then((club) => {
          if (club.status === 200) {
            let tabelki: any = [];
            const data = club.data;
            data.forEach((element: any) => {
              let tab: any = {};
              tab.id = element.id;
              tab.name = element.club_name;
              const country_code = element.country;
              const countryObject = countries.find(
                (c: any) => c.code === country_code,
              );
              tab.country = countryObject?.name_pl;
              tab.info = element.club_info;
              tabelki.push(tab);
            });
            this.$data.items[1].positions = tabelki;
          }
        })
        .catch(() => {
          console.log('Błąd w klubach');
        });
    }
  }

  get auth() {
    return this.$store.getters.isAuthenticated;
  }

  get token() {
    return this.$store.getters.token;
  }

  data() {
    return {
      loading: false,
      x: null,
      module: 'info',
      items: [
        {
          tab: 'Turnieje',
          icon: 'mdi-tournament',
          headers: [
            { text: 'Nazwa', value: 'name', class: 'primary white--text' },
            {
              text: 'Data rozpoczęcia',
              value: 'date',
              class: 'primary white--text',
            },
            {
              text: 'System rozgrywek',
              value: 'type',
              class: 'primary white--text',
            },
            { text: 'Kraj', value: 'country', class: 'primary white--text' },
            {
              text: '',
              value: 'data-table-expand',
              class: 'primary white--text',
            },
          ],
          positions: [],
        },

        {
          tab: 'Kluby',
          icon: 'mdi-account-group-outline',
          headers: [
            {
              text: 'Nazwa klubu',
              value: 'name',
              class: 'primary white--text',
            },
            { text: 'Kraj', value: 'country', class: 'primary white--text' },
            {
              text: '',
              value: 'data-table-expand',
              class: 'primary white--text',
            },
          ],
          positions: [],
        },
      ],
    };
  }
}
</script>

<style scoped>
.v-data-table
  >>> .v-data-table__wrapper
  tbody
  tr.v-data-table__expanded__content {
  box-shadow: none;
}
</style>
