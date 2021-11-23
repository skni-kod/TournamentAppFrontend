import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import pl from 'vuetify/src/locale/pl';

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { pl },
    current: 'pl',
  },
  theme: {
    themes: {
      light: {
        primary: '#3949AB',
        secondary: '#7986CB',
        accent: '#f7f7f7',
        info: '#12203c',
      },
    },
  },
});
