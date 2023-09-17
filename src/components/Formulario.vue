<template lang="pt">
    <div class="container w-50">
        <form @submit.prevent="cadastrarProduto">
            <div class="mb-3">
                <label for="name" class="form-label">Nome do produto</label>
                <input v-model="produto.name" type="text" class="form-control" id="name" placeholder="Nome do Produto">
            </div> 
            <div class="mb-3">
                <label for="value" class="form-label">Valor do produto</label>
                <input v-model="produto.value" type="number" class="form-control" id="value" placeholder="Valor do Produto">
            </div> 
            <div class="mb-3">
                <label for="description" class="form-label">Descrição do produto</label>
                <textarea v-model="produto.description" class="form-control" id="description" placeholder="Descrição do Produto" rows="3"></textarea>
            </div>
            
            <div className="text-center m-2">
                <Button type="submit" class="btn btn-success mx-2">Salvar</Button>
                <router-link to="/" class="btn btn-primary">Voltar</router-link>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { IProduto } from '@/commons/interfaces';
import ProdutoService from '@/services/ProdutoService';
import { defineComponent } from 'vue';

export default defineComponent ({
    name: 'formularioProduto',
    data() {
        return {
            produto: {
                name: '',
                value: 0,
                description: '',
            } as IProduto
        }
    },
    methods: {
        async cadastrarProduto() {
            await ProdutoService.save(this.produto)
                .then(response => {
                    this.$router.push('/');    
                })
                .catch(error => {
                    console.log('Erro ao cadastrar produto: ' + error);
                })
        }
    },
})

</script>