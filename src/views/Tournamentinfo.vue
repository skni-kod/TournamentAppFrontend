<template>
    <div>
        <gallery></gallery>
    </div>
</template>

<script>
import Vue from 'vue';
import Gallery from '../components/Gallery.vue';
import { Component } from 'vue-property-decorator';

@Component({
  components: {
    Gallery
  },
})

export default class TournamentInfo extends Vue {
  data() {
    return {

    };
  }
}
</script>
