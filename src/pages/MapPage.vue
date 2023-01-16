<template>
    <div>
        <div id="map"></div>
    </div>
</template>

<script>
import leaflet from "leaflet";
import { onMounted, ref } from "vue";
import axios from "axios";
export default {
    name: "Home",
    setup() {
        let map;
        onMounted(() => {
            map = leaflet.map('map').setView([51.505, -0.09], 13);
            leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
        })

    },

}
</script>

<style scoped>
#map {
    position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>