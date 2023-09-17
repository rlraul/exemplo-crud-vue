<template lang="pt">
    <div class='container w-75'>
        <div class='mt-4 p-2 bg-secondary text-white rounded'>
            <h3>Cadastro de Produtos</h3>
        </div>
        <div class='mt-2 d-flex justify-content-end'>
            <router-link to="/form" class="btn btn-primary">Cadastrar</router-link>
        </div>   
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Placa de Vídeo</td>
                        <td>R$2000,00</td>
                        <td>Placa de Vídeo RTX 3060TI 8GB GDDR6x</td>
                    </tr>
                </tbody>
            </table>
        </div>


        <!-- <div>
            
        </div>  -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
    name: 'ListaProdutos'   
})

</script>

<style>
    
</style>