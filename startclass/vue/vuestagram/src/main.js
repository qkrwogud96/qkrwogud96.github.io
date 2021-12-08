import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

//모든 컴포넌트가 사용 가능한 변수 설정.
let emitter = mitt();
let app = createApp(App)
app.config.globalProperties.emitter = emitter;

import store from './store.js'

app.use(store).mount('#app')
