import { createApp } from 'vue';
// library
import Popper from 'vue3-popper';
import './index.css';
import Vuex from 'vuex';
import AOS from 'aos';
import VueTilt from 'vue-tilt.js';
import VueGoodTablePlugin from 'vue-good-table-next';
import { QuillEditor } from '@vueup/vue-quill';
import Datepicker from '@vuepic/vue-datepicker';
import vSelect from 'vue-select';
import store from './store';
import router from './router';
import App from './App.vue';

// import the styles
import 'aos/dist/aos.css';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
// import '@vueup/vue-quill/dist/vue-quill.bubble.css';
import 'vue-good-table-next/dist/vue-good-table-next.css';
import '@vuepic/vue-datepicker/dist/main.css';
import 'vue-select/dist/vue-select.css';

// declare var
const app = createApp(App);

// calling libarry
app.use(Vuex);
app.use(router);
app.use(store);
app.use(AOS.init());
app.use(VueTilt);
app.use(VueGoodTablePlugin);

// calling component
app.component('QuillEditor', QuillEditor);
// eslint-disable-next-line vue/multi-word-component-names
app.component('Datepicker', Datepicker);
app.component('v-select', vSelect);
// eslint-disable-next-line vue/multi-word-component-names
app.component('Popper', Popper);
// execute
app.mount('#app');
