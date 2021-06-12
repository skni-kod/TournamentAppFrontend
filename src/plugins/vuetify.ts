import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import pl from "vuetify/src/locale/pl";

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { pl },
    current: "pl",
  },
  theme: {
    themes: {
      light: {
        primary: '#294681',
        secondary: '#1b2f57',
        accent: '#f7f7f7',
        info: '#12203c',
      },
    },
  },
});