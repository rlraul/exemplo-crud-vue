import { IProduto } from "@/commons/interfaces";
import { api } from "@/lib/axios";

const findAll = () => {
    return api.get("/produtos");
}

const save = (produto: IProduto) => {
    return api.post("/produtos", produto);
};
  
const remove = (id: number) => {
    return api.delete(`/produtos/${id}`);
};
  
const findOne = (id: number) => {
    return api.get(`/produtos/${id}`);
};
  
const ProdutoService = {
    findAll,
    save,
    remove,
    findOne,
}

export default ProdutoService;