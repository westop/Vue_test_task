<template>

  <l-map id="map" :zoom="zoom" :center="center" @click="setupMarker">
    <l-tile-layer :url="url"></l-tile-layer>
    <l-marker ref="marker" v-for="marker in markers" :key="marker" :lat-lng="marker.latlng" >
      <l-popup ref="popup">{{ marker.title }}</l-popup>
      <l-tooltip ref="popup">{{ marker.title }}</l-tooltip>
    </l-marker>
  </l-map>
  <my-dialog v-model:show="dialogVisible">
    <my-input v-focus v-model="titleThis" type="text" placeholder="Title" />
    <my-input v-model="lat" type="text" placeholder="Lat" />
    <my-input v-model="lng" type="text" placeholder="Lng" />
    <my-button @click="addMarker()">
      Create marker
    </my-button>
  </my-dialog>

  <my-button @click="createMarker()">
    Create marker
  </my-button>

</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "@vue-leaflet/vue-leaflet";


export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
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
      titleThis: "",
      lat: 49.8397,
      lng: 24.0297,
      dialogVisible: false,
    };
  },
  methods: {

    addMarker() {
      this.markers.push({
        title: this.titleThis,
        latlng: [this.lat, this.lng],
      });
      localStorage.setItem('markers', JSON.stringify(this.markers))
      this.dialogVisible = false;
    },
    removeMarker(index) {
      this.markers.splice(index, 1);
      this.markers = this.markers.filter(i => i.latlng !== index.latlng)
    },
    showDialog() {
      this.dialogVisible = true;
    },
    createMarker() {
      this.titleThis = "";
      this.lat = "";
      this.lng = "";
      this.showDialog();
    },
    setupMarker(e) {
      this.titleThis = "";
      this.lat = e.latlng.lat;
      this.lng = e.latlng.lng;
      this.showDialog();
    },
    loadMarkersFromLocalStorage() {
      if (localStorage.getItem('markers')) {
        this.markers = JSON.parse(localStorage.getItem('markers'));
      }
    },
  },
  mounted() {
    this.loadMarkersFromLocalStorage();
  },
};
</script>

<style>
#map {
  position: fixed;
  top: 115px;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
