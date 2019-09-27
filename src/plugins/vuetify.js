import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    themes: {
      light: {
        primary: '#6200EA',
        secondary: '#00bcd4',
        accent: '#e91e63',
        error: '#f44336',
        warning: '#ff9800',
        info: '#03a9f4',
        success: '#8bc34a'
      }
    }
  }
})
