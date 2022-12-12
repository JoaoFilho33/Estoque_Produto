import { BadRequestException, Injectable, Param } from '@nestjs/common';
import { Prisma, Produto } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { ProdutoDto } from '../dto/produto.dto';
import { IRepositoryProduto } from './Interface/IRepositoryProduto';

@Injectable()
export class ProdutoService implements IRepositoryProduto{
  constructor(private prisma : PrismaService){}

  async create(createProdutoDto: Prisma.ProdutoCreateManyInput): Promise<Produto> {
    const ProdutoExist = await this.prisma.produto.findFirst({
      where: {
        id: createProdutoDto.id
      }
    })
    if(ProdutoExist){
       throw new BadRequestException('Produto existente, por favor apenas atualize as informações.')
    }

    return this.prisma.produto.create({data: createProdutoDto})
  }

  async findAll() {
    return this.prisma.produto.findMany();
  }

  async findOne(id: number) {
    return this.prisma.produto.findUnique({ where:{id} })
  }

  async update(id: number, data: Prisma.ProdutoUpdateInput){
    const estoqueExist = await this.prisma.estoque.findUnique({
      where: {
          id,
      },
    });

    if(!estoqueExist){
      throw new Error('Estoque does not exists!')
    }

    return await this.prisma.produto.update({
      data, 
      where: {
          id,
      },
    })
  }

  async delete(id: number) {
    const ProdutoExist = await this.prisma.produto.findUnique({
      where: {
        id
      }
    })

    if(!ProdutoExist){
       throw new BadRequestException('Produto inexistente')
    }

    return await this.prisma.produto.delete({
      where:{
        id,
      },
    })
  }
}
