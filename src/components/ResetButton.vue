<template>
  <div id="resetButton">
    <v-btn flat small @click="resetMap()">Reset Map</v-btn>
  </div>
</template>

<script>
  // import {mapGetters} from 'vuex';

  export default {
    name: "reset-button",
    methods: {
      resetMap() {
        // console.log("In ResetButton.vue.script.resetMap(), because of the button click in this component, calling store.dispatch('resetMap')");
        this.$store.dispatch('resetMap', 12345);
        // console.log("Leaving ResetButton.vue.script.resetMap() after having called store.dispatch('resetMap')");
      }
    }
  }
</script>

<style scoped>
</style>
