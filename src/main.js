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
                return(
                    "<p style='color:orange'>" + numero + " - Impar</p>"
                )
            }
        }
    }
}

app.use(router).mount('#app')