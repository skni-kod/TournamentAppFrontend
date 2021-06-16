import { Module } from 'vuex';
import axios from '../../axios';
import router from '../../router/index';

const userModule: Module<any, any> = {
  state: {
    token: undefined,
    refreshToken: undefined,
  },

  mutations: {
    authUser(state, auth) {
      state.token = auth.token;
      state.refreshToken = auth.refreshToken;
    },
    clearAuthData(state) {
      state.token = undefined;
      state.refreshToken = undefined;
      state.userData = {};
    },
  },

  actions: {
    login({ commit }, data) {
      axios
        .post('token/', {
          email: data.email,
          password: data.password,
        })
        .then((res) => {
          if (res.status == 200) {
            commit('authUser', {
              token: res.data.access,
              refreshToken: res.data.refresh,
            });
            router.replace({ name: 'Home' });
          }
        })
        .catch((err) => {
          console.log(err.response.status);
          console.log('Błąd logowania');
        });
    },
    logout({ dispatch, commit, state }) {
      commit('clearAuthData');
      if (router.currentRoute.name !== 'Home') {
        router.replace({ name: 'Home' });
      }
      console.log('Wylogowano');
    },
  },

  getters: {
    token: (state) => state.token,
    isAuthenticated: (state) => state.token !== undefined,
  },
};

export default userModule;
