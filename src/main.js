import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap'; // Assurez-vous que ce fichier existe
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';


import router from './router/index.js'

const app = createApp(App) // Créer l'application
app.use(router) // Ajouter Vue Router
app.mount('#app') // Monter l'application
