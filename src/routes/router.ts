import { createRouter, createWebHistory } from 'vue-router';
import ListaProdutos from '../components/ListaProdutos.vue';
import Formulario from '../components/Formulario.vue';

//Rotas da aplicação
const routes = [
  { path: '/', component: ListaProdutos },
  { path: '/form', component: Formulario },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
