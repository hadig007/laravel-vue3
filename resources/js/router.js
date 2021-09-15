import { createRouter, createWebHistory } from 'vue-router'

import MainApp from './components/MainApp.vue'
import Tags from './components/Tags.vue'
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component:MainApp
        },
        {
            path:'/tags',
            component:Tags
        },
    ]
});

export default router;