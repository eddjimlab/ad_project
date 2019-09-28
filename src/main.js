import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import * as fb from 'firebase'
import vuetify from './plugins/vuetify'
import './sass/main.scss'
import './sass/_variables.scss'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyDD2MngIteiluI4-K5xd4khpf5_GLfDHxI',
      authDomain: 'itc-adc-f1114.firebaseapp.com',
      databaseURL: 'https://itc-adc-f1114.firebaseio.com',
      projectId: 'itc-adc-f1114',
      storageBucket: '',
      messagingSenderId: '134376462889',
      appId: '1:134376462889:web:af9fcfb306710bd2e4da38'
    })
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
    this.$store.dispatch('fetchAds')
  }
}).$mount('#app')
