<template>
    <v-row justify="center">
        <v-col cols="12" class="pa-md-4 my-6" style="max-width: 1600px">
            <v-card 
            class="primary white--text mx-3">
                <v-card-title
                    class="text-center justify-center"
                    style="word-break: break-word;"
                    >
                    <h2> Polityka Prywatności </h2>
                </v-card-title>
                <v-card-text
                    v-for="(article, id) in articles"
                    :key="id"
                    class="background-color: white black--text text-justify"
                >
                    <br>
                    <h2> {{ article.sectionTitle }} </h2>
                    {{ article.section }}
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component} from 'vue-property-decorator';

@Component
export default class PrivacyPolicy extends Vue {
    data(){
        return{
        articles:[
                {
                    sectionTitle: "Lorem ipsum sit",
                    section: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                                {
                    sectionTitle: "Lorem ipsum sit amet",
                    section: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                                {
                    sectionTitle: "Lorem ipsum",
                    section: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
            ]
        }
    }
}
</script>

