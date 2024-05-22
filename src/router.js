import {createRouter, createMemoryHistory} from 'vue-router'

import HomeView from './views/HomeView.vue';

const routes = [
    {path: '/', component: HomeView, meta: {title: "Accueil"}},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            left: 0, top: 0,
            behavior: 'smooth',
        }
    }
})

export default router