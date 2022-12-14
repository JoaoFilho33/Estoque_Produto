import { Prisma } from "@prisma/client";
import { ProdutoDto } from "src/dto/produto.dto";

export interface IRepositoryProduto{
    create(produto: Prisma.ProdutoCreateManyInput);
    update(id: number, produto: Prisma.ProdutoUpdateInput);
    findOne(id: number);
    findAll();
    delete(id: number);
}