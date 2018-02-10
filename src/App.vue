<template>
  <v-app id="inspire">
    <!--<v-toolbar app></v-toolbar>-->


    <v-toolbar
      color="blue-grey"
      dark
      fixed
      app
      clipped-right
    >
      <v-toolbar-title>Map Proof of Concept</v-toolbar-title>
      <v-spacer></v-spacer>

      <app-save-map></app-save-map>
      <app-reset-button></app-reset-button>

      <v-text-field prepend-icon="search" hide-details single-line></v-text-field>

      <v-btn icon>
        <v-icon>my_location</v-icon>
      </v-btn>

      <v-toolbar-side-icon @click.stop="drawerRight = !drawerRight"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <!--<v-container fluid>-->
          <!--<img src="./assets/logo.png">-->
        <app-leaflet-map></app-leaflet-map>
      <!--</v-container>-->
    </v-content>

    <v-navigation-drawer
      right
      temporary
      v-model="right"
      fixed
    ></v-navigation-drawer>

    <v-footer color="blue-grey" class="white--text" app>
      <span>Leaflet with Vue/Vuex/Vuetify</span>
      <v-spacer></v-spacer>
      <span>20180131</span>
    </v-footer>

  </v-app>
</template>

<script>
  import LeafletMap from './components/LeafletMap.vue';
  import ResetButton from './components/ResetButton.vue';
  import SaveMap from './components/SaveMap.vue';

  export default {
    name: 'App',
    components: {
      appLeafletMap: LeafletMap,
      appResetButton: ResetButton,
      appSaveMap: SaveMap
    },
    data() {
      return {
        clipped: false,
        fixed: false,
        title: 'Map Prototype',
        drawer: null,
        drawerRight: false,
        right: null,
        left: null
      }
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
