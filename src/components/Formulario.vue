<template lang="pt">
    <div class="container w-50">
        <form>
            <div class="mb-3">
                <label for="name" class="form-label">Nome do produto</label>
                <input type="text" class="form-control" id="name" placeholder="Nome do Produto">
            </div> 
            <div class="mb-3">
                <label for="value" class="form-label">Valor do produto</label>
                <input type="number" class="form-control" id="value" placeholder="Valor do Produto">
            </div> 
            <div class="mb-3">
                <label for="description" class="form-label">Descrição do produto</label>
                <textarea class="form-control" id="description" placeholder="Descrição do Produto" rows="3"></textarea>
            </div>
            
            <div className="text-center m-2">
                <Button type="button" class="btn btn-success mx-2">Salvar</Button>
                <Button type="button" class="btn btn-primary">Voltar</Button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
    name: 'formularioProduto',
    
})

</script>