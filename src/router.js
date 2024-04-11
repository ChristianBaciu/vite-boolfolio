import {createRouter, createWebHistory} from "vue-router";

import HomePage from './pages/HomePage.vue'
import ProjectList from './pages/ProjectList.vue'
import ProjectSingle from './pages/ProjectSingle.vue'
import ContactUs from './pages/ContactUs.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/list',
            name: 'list',
            component: ProjectList
        },
        {
            path: '/list/:titolo',
            name: 'single-project',
            component: ProjectSingle
        },
        {
            path: "/contact-us",
            name: 'contact-us',
            component: ContactUs
        },
        {
            path: "/:pathMatch(.*)*",
            name: 'errore',
            component: NotFound
        },


    ]
});
export {router};