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
                    <tr v-for="produto in produtos" :key="produto.id">
                        <th scope="row">{{ produto.id }}</th>
                        <td>{{ produto.name }}</td>
                        <td>{{ produto.value }}</td>
                        <td>{{ produto.description }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProdutoService from "../services/ProdutoService";

export default defineComponent ({
    name: 'ListaProdutos',
    data() {
        return {
            produtos: []
        };
    } ,
    mounted() {
        ProdutoService.findAll() 
            .then(response => {
                this.produtos = response.data;
            })  
    } 
})

</script>