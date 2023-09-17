<template>
  <Formulario/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Formulario from './components/Formulario.vue';


export default defineComponent({
  name: 'App',
  components: {
    Formulario
}
});
</script>

<style>

</style>
