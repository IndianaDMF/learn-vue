import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  namespaces: true,
  state: {
    prospect: null,
  },
  mutations: {
    getProspect(state, prospect) {
      // eslint-disable-next-line
      state.prospect = prospect;
    },
    addProspect(state, prospect) {
      // eslint-disable-next-line
      state.prospect = prospect;
    },
  },
  actions: {
    getProspect({ commit }) {
      const url = '';
      const auth = '';
      const config = {
        mode: 'cors',
        headers: {
          Authorization: auth,
        },
      };
      axios.get(url, config)
        .then(response => commit('getProspect', response.data.message))
        .catch(console.error);
    },
    addProspect({ commit }, prospect) {
      const postUrl = '';
      const auth = '';
      const config = {
        mode: 'cors',
        headers: {
          Authorization: auth,
        },
      };
      return axios.post(postUrl, config, prospect)
        .then(() => commit('addProspect', prospect));
    },
  },
});
