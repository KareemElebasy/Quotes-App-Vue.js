import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    quate: {},
    quates: [],
  },
  getters: {
    getSingleQuate: (state) => (text) => {
      return state.quates.find((q) => {
        q.text.split(" ").join("%") === text;
      });
    },
  },
  mutations: {
    GetRandomQuate(state) {
      axios.get("https://type.fit/api/quotes").then((res) => {
        state.quates = res.data;
        const randomIndex = Math.floor(Math.random() * state.quates.length);
        const item = state.quates[randomIndex];
        state.quate = item;
        console.log(state.quate);
      });
    },

    GetQuates(state) {
      axios.get("https://type.fit/api/quotes").then((res) => {
        state.quates = res.data;
        console.log(state.quates);
      });
    },
  },
  actions: {},
  modules: {},
});
