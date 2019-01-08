import Vue from 'vue';
import App from './App.vue';
import router from './router'


import './main.css';



const addModuleHTML = () => {
  const container = document.createElement('div');
  container.id = 'abtasty-module';
  document.body.appendChild(container);

  new Vue({
    el: '#abtasty-module',
	router,
    render: h => h(App)
  });
};

const start = () => {
  addModuleHTML();
  window._ab.ready();
};

start();
