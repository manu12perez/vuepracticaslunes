import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue'
import MenuComponent from './components/CollatzComponent.vue'

//CREAMOS UNA CONSTANTE ARRAY PARA LA RUTA
const myRoutes = [
    { path: "/", component: HomeComponent },
    { path: "/collatz", component: MenuComponent }
]

//CREAMOS UNA CONSTANTE PARA EL HISTORIAL E INCLUIR EN EL ARRAY DE RUTAS
//DICHO NOMBRE DE CONSTANTE SERA EL QUE UTILIZAREMOS DENRO DE Main.js

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

//POR ULTIMO EXPORTAMOS LA CONSTANTE router PARA SER UTILIZADA EN App
export default router;