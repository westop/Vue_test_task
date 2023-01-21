<template>
    <div>

        <div id="map"></div>
        <my-dialog v-model:show="dialogVisible">
            <my-input></my-input>
            <my-input></my-input>
            <my-input></my-input>
        </my-dialog>


    </div>
</template>

<script>
import L from "leaflet";
import { onMounted, ref } from "vue";
import axios from "axios";


import PostForm from "@/components/PostForm";
import MyInput from "@/components/UI/MyInput";
export default {
    name: "App",

    components: {
        PostForm,
        MyInput,
    },
    data() {
        return {
            dialogVisible: false,
            markers: [{
                title: "1",
                lat: 49.62318710125795,
                lng: 31.68655843732102
            },
            {
                title: "2",
                lat: 48.4121615523613,
                lng: 31.73051384182521
            },
            {
                title: "3",
                lat: 48.746682702488485,
                lng: 36.7194522530482
            },

            ]

        }
    },
    methods: {
        loadMarkers() {
            for (const item of this.markers) {
                L.marker([item.lat, item.lng])
                    .bindPopup(item.title).openPopup().addTo(map)

            }
            console.log("ok")
        },
        showDialog() {
            this.dialogVisible = true;
        },
        addMarker() {

            map.on('click', function (e) { 
                //this.dialogvisible = true;
                L.marker([e.latlng.lat, e.latlng.lng])
                    .bindPopup("qwefgqwf").openPopup().addTo(map)
                console.log(e.latlng);
                //this.dialogvisible = false;
            });

            
        },
        
    },
    mounted() {
        map = L.map('map').setView([48, 31], 6);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        this.loadMarkers();
        this.addMarker();
    },
    watch: {


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