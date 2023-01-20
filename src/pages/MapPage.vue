<template>
    <div> 
        
        <div id="map" @click="onMapClick"></div>
        <my-dialog v-model:show="dialogVisible">
           
        </my-dialog>
       
        
    </div>
</template>

<script>
import L from "leaflet";
import { onMounted, ref } from "vue";
import axios from "axios";


import PostForm from "@/components/PostForm";

export default {
    name: "App",
    
    components: {
        PostForm,
    },
    data() {
        return{
            dialogVisible:true,
            
        }
    },



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
                let marker = new L.marker([e.latlng.lat, e.latlng.lng])
                .bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup().addTo(map)
                console.log("ok")
                
            });
        } ,
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