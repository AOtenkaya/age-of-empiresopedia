import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

loadFonts();

const app = createApp(App);

const formatCost = (costs) => {
  if (costs) {
    return Object.entries(costs)
      .map(([key, value]) => `${key}: ${value}`)
      .join(', ');
  }

  return '';
};

app.config.globalProperties.$filters = {
  formatCost,
};

app.use(router).use(store).use(vuetify).mount('#app');
