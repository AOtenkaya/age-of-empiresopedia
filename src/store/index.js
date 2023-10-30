import { createStore } from "vuex";
import { units } from '@/assets/data/unitData.json';

export default createStore({
  state: {
    unitsList: [...units],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
