<template>
  <div id="saveMap">
    <v-btn flat small @click="saveMap()">Save Map</v-btn>
  </div>
</template>

<script>
  export default {
    name: "save-map",
    methods: {
      saveMap() {
        console.log("In SaveMap.vue.script.saveMap(), because of the button click in this component, calling store.dispatch('saveMap')");
        this.$store.dispatch('saveMap', 12345);
        console.log("Leaving SaveMap.vue.script.saveMap() after having called store.dispatch('saveMap')");
      }
    }
  }
</script>

<style scoped>
</style>
