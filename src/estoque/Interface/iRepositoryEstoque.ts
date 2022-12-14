import { Prisma } from "@prisma/client";
import { EstoqueDto } from "../../dto/estoque.dto";

export interface iRepositoryEstoque{
    create(produto: EstoqueDto);
    update(id: number, data: Prisma.EstoqueUpdateInput)
    findAll()
    findInEstoque(id: number);
    delete(id: number);
}