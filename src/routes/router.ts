import { createRouter, createWebHistory } from 'vue-router';
import ListaProdutos from '../components/ListaProdutos.vue';
import Formulario from '../components/Formulario.vue';

//Array de rotas da aplicação
const routes = [
  { path: '/', component: ListaProdutos },
  { path: '/form', component: Formulario },
  { path: '/form/:id', component: Formulario },
];

const router = createRouter({
  //Mecanismo de histórico de navegação 
  //necessário para o Vue Router
  history: createWebHistory(),
  routes,
});

export default router;
