<template>
  <l-map id="map" :zoom="zoom" :center="center" @ready="onMapReady()" @click="addMarker">
    <l-tile-layer :url="url"></l-tile-layer>
    <l-marker ref="marker" v-for="marker in markers" :key="marker" :lat-lng="marker.latlng">
      <l-popup ref="popup">{{ marker.title }}</l-popup>
    </l-marker>
  </l-map>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";


export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
  },
  mounted() {

  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 6,
      center: [48.3794, 31.1656],
      markers: [{
        title: "Kharkiv",
        latlng: [49.9935, 36.2304],
      },
      {
        title: "Kyiv",
        latlng: [50.4501, 30.5234],
      },
      {
        title: "Lviv",
        latlng: [49.8397, 24.0297],
      },
      ],
    };
  },
  methods: {
    onMapReady(mapObject) {
      this.$nextTick(() => {
        const map = this.$refs.map.leafletObject;
      });
    },
    addMarker(event) {
      this.markers.push({
        latlng:event.latlng
      });
    },
    removeMarker(index) {
      this.markers.splice(index, 1);
      this.markers = this.markers.filter(i => i.latlng !== index.latlng)
    },
  },
};
</script>

<style>
#map {
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
