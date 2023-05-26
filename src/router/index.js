import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
// create array
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/rahma',
        name: 'Rubab',
        component: About
    }
]

// define router
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router