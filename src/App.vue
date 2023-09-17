<template>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Formulario from './components/Formulario.vue';
import ListaProdutos from './components/ListaProdutos.vue';


export default defineComponent({
  name: 'App',
  components: {
}
});
</script>

<style>

</style>
