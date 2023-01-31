
import {createRouter, createWebHistory} from "vue-router";
import UserPage from "@/pages/UserPage";
import PostIdPage from "@/pages/PostIdPage";
import MapPage from "@/pages/MapPage";


const routes = [
    
    {
        path: '/map',
        component: MapPage
    },
    {
        path: '/posts',
        component: UserPage
    },
    
    {
        path: '/posts/:id',
        component: PostIdPage
    },
    
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
