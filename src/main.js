import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

// createApp(App).mount('#app')
var app = createApp(App);
{
    app.config.globalProperties.$filters = {
        colorParImpar(numero) {
            if (numero % 2 == 0) {
                return (
                    "<p style='color:red'>" + numero + " - Par </p>"
                )
            } else {
                return (
                    "<p style='color:orange'>" + numero + " - Impar</p>"
                )
            }
        },
        // Metodo del profesor
        // evaluarNumero(num) {
        //     if (num % 2 == 0) {
        //         return "<span style='color:green'>" + num + "</span>";
        //     } else {
        //         return "<span style='color:red'>" + num + "</span>";
        //     }
        // }
        getOperacion(numero, multi) {
            return numero + " * " + multi;
        },
        getMultiplicacion(numero, multi) {
            return numero * multi;
        }
    }
}

app.use(router).mount('#app')