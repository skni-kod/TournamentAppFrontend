<template>
  <div>
    <UserProfile />
    <v-container fluid>
      <router-view />
    </v-container>
  </div>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import UserProfile from '@/components/UserProfile.vue';


@Component({
  components: {
    UserProfile,
  },
})
export default class User extends Vue {
}
</script>
