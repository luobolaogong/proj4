<template>
  <!--<div class="leafletmap">-->
  <!--<div id="mapid" style="height: 700px;"></div>-->
  <div id="mapid"></div>
  <!--</div>-->
</template>

<script>
  console.log("In LeafletMap.vue.script");
  import Leaflet from 'leaflet'

  // import Vuex from 'vuex';

  export default {
    name: "leaflet-map",
    theMap: null,

    mounted() {
      // console.log("In LeafletMap.vue script portion, mounted().");
      this.theMap = L.map('mapid', {
        preferCanvas: true
      });
      this.$store.state.theMap = this.theMap;

      this.theMap.setView([51.5033, -0.1195], 14);
      var layer = L.tileLayer(// 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
      layer.addTo(this.theMap);

      var canvasRendererForGeometries = L.canvas({
        padding: 0.5
      });
      // // Greenwich, Royal Observatory 51.4769, -0.0005
      var marker = L.marker([51.4769, -0.0005], {
        renderer: canvasRendererForGeometries
      });
      marker.bindPopup("I am a marker popup.");
      marker.addTo(this.theMap);
      //Big Ben: 51.5007N   0.1246W
      var circle = L.circle([51.5007, -0.1246], {
        renderer: canvasRendererForGeometries,
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
      });
      circle.bindPopup("I am a circle.");
      circle.addTo(this.theMap);
      //console.log("Leaving creation of map inside LeafletMap.vue script, mounted()");
      //this.reset(); // just for testing
      //this.saveMap(); // just for testing
      console.log("Leaving LeafletMap.vue script portion, mounted().");
    },
    methods: {
    }
  }
  // console.log("Leaving LeafletMap.vue script");
</script>

<style scoped>
  body {
    padding: 0;
    margin: 0;
  }
  html, body, #mapid {
    height: 100%;
    width: 100%;
  }
</style>
