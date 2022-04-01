import { createStore } from 'vuex';
import axios from 'axios';

// const BASE_URL = 'http://localhost:8000/'
const BASE_URL = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : 'http://localhost:8000/';
const api = axios.create({ baseURL: BASE_URL });

export default createStore({
  state() {
    return {
      baseUrl: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : 'http://localhost:8000/',
      baseUrlFE: import.meta.env.VITE_API_URLFE ? import.meta.env.VITE_API_URLFE : 'http://localhost:3000/',
      // auth
      token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
      isLogin: localStorage.getItem('isLogin') ? localStorage.getItem('isLogin') : false,
      isSideBarActive: false,
      // vuegoodtabelsettings
      settingVueGoodTable: {
        search: true,
        pagination: true,
        perPageDropdown: [10, 15, 25, 50],
        styleClass: 'vgt-table striped bordered condensed',
      },
    };
  },
  getters: {
  },
  mutations: {
    setSideBar(state, value) {
      state.isSideBarActive = value;
    },
    setToken(state, value) {
      state.token = value;
    },
    setIsLogin(state, value) {
      state.isLogin = value;
    },
  },

  actions: {
  },

});
