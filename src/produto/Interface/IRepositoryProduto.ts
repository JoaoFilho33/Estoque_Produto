import { Prisma } from "@prisma/client";

export interface IRepositoryProduto{
    create(produto: Prisma.ProdutoCreateManyInput);
    update(id: number, produto: Prisma.ProdutoUpdateInput);
    findOne(id: number);
    findAll();
    delete(id: number);
}