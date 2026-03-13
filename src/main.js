import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAZL3tHlAkTvRCvTVXb_3hSr2h5OUMuThI",
  authDomain: "chat-game-b43c0.firebaseapp.com",
  databaseURL: "https://chat-game-b43c0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chat-game-b43c0",
  storageBucket: "chat-game-b43c0.firebasestorage.app",
  messagingSenderId: "541968072167",
  appId: "1:541968072167:web:67620bff6023c31d465142"
};

initializeApp(firebaseConfig)

if (location.hostname === "localhost") {
  connectAuthEmulator(getAuth(), "http://localhost:9099");
}

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.mount('#app')