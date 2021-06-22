import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import './assets/tailwind.css'

import MainWindow from './components/MainWindow.vue';
import AddBrew from './components/AddBrew.vue';
import PickMethod from './components/PickMethod.vue';
import BrewRecipe from './components/BrewRecipe.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/MainWindow' },
        { name: 'mainwindow', path: '/MainWindow', component: MainWindow, props: true },
        { name: 'addbrew', path: '/AddBrew', component: AddBrew, props: true },
        { name: 'pickmethod', path: '/PickMethod', component: PickMethod, props: true },
        { name: 'brewrecipe', path: '/BrewRecipe', component: BrewRecipe, props: true}
    ]
})

const app = createApp(App);

app.use(router);

router.replace('/MainWindow');

app.mount('#app');