<template>
    <div>
        <div id="map" @click="onMapClick"></div>
    </div>
</template>

<script>
import L from "leaflet";
import { onMounted, ref } from "vue";
import axios from "axios";
export default {
    name: "Home",
    setup() {
        
        onMounted(() => {
            map = L.map('map').setView([48, 31], 6);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
           
        })

    },
    methods:{
        onMapClick(){
            map.on('click', function(e) {
                var marker = new L.marker([e.latlng.lat, e.latlng.lng]).addTo(map)
                console.log(e.latlng.lat, e.latlng.lng)
            });
        } 
    }

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