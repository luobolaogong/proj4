<template>
  <v-app id="inspire">
    <v-toolbar app></v-toolbar>
    <v-content>
      <!--<v-container fluid>-->
          <!--<img src="./assets/logo.png">-->
        <app-leaflet-map></app-leaflet-map>
      <!--</v-container>-->
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
  import LeafletMap from './components/LeafletMap.vue';

  export default {
    name: 'App',
    components: {
      appLeafletMap: LeafletMap
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
