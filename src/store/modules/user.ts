import { Module } from 'vuex';
import axios from '../../axios';
import router from '../../router/index';

const userModule: Module<any, any> = {
  state: {
    token: undefined,
    refreshToken: undefined,
    id:undefined,
  },

  mutations: {
    authUser(state, auth) {
      state.token = auth.token;
      state.refreshToken = auth.refreshToken;
      state.id=auth.id;
    },
    clearAuthData(state) {
      state.token = undefined;
      state.refreshToken = undefined;
      state.userData = {};
      state.id = undefined;
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
            alert('Logowanie przebiegło pomyślnie.');
            commit('authUser', {
              token: res.data.access,
              refreshToken: res.data.refresh,
              id: res.data.id,
            });
            router.replace({ name: 'Home' });
          }
        })
        .catch((err) => {
          alert('Błąd logowania. Spróbuj ponownie.');
        });
    },
    logout({ dispatch, commit, state }) {
      commit('clearAuthData');
      router.replace({ name: 'Login' });
      alert("Wylogowanie przebiegło pomyślnie.")
    },
    register({dispatch}, data){
      axios
        .post('user/', data)
        .then((res) => {
          if (res.status == 201){
            alert("Rejestracja przebiegła pomyślnie. Możesz teraz się zalogować.");
            router.go(0);
          }
        })
        .catch((err) => {
          alert("Wystąpił problem. Spróbuj ponownie.")
        });
    },
  },

  getters: {
    token: (state) => state.token,
    isAuthenticated: (state) => state.token !== undefined,
    id: (state) => state.id,
  },
};

export default userModule;
