<template>
    <div>
        <gallery></gallery>
    </div>
</template>

<script>
import Vue from 'vue';
import Gallery from './Gallery.vue';
import { Component } from 'vue-property-decorator';

@Component({
  components: {
    Gallery
  },
})

export default class TournamentInfo extends Vue {
}
</script>
