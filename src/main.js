import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)

app.config.globalProperties.$url = process.env.NODE_ENV === 'production'
 ? "https://portal.army.idf/sites/gdud383/Ktechni/_api/web/Lists/"
 : "http://localhost:3000/";

app.config.globalProperties.$isSharePointUrl = process.env.NODE_ENV === 'production'
app.config.globalProperties.$asyncParse = function(str){
    return new Promise((resolve)=>{
    resolve(JSON.parse(str))
  })
},
app.mount('#app')
