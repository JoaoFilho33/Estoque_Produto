import { BadRequestException, Injectable } from '@nestjs/common';
import { Estoque, Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { EstoqueDto } from '../dto/estoque.dto';
import { iRepositoryEstoque } from './Interface/iRepositoryEstoque';

@Injectable()
export class EstoqueService implements iRepositoryEstoque{

  constructor(private prisma : PrismaService){}

  async create(createEstoqueDto: Prisma.EstoqueCreateManyInput): Promise<Estoque>{
    const estoqueExist = await this.prisma.estoque.findFirst({
      where:{
        id: createEstoqueDto.id
      }
    })

    if(estoqueExist){
      throw new BadRequestException('Estoque já existe')
    }

    return await this.prisma.estoque.create({ data: createEstoqueDto })
  }

  async findAll() {
    return this.prisma.estoque.findMany();
  }

  async findOne(id: number) {
    return this.prisma.estoque.findMany({
      select: {id: true}
    });
  }

  async update(id: number, data: Prisma.EstoqueUpdateInput){
      const estoqueExist = await this.prisma.estoque.findUnique({
          where: {
              id,
          },
      });

      if(!estoqueExist){
          throw new Error('Estoque does not exists!')
      }

      return await this.prisma.estoque.update({
          data, 
          where: {
              id,
          },
      })
  }

  async delete(id: number) {
    const estoqueExist = await this.prisma.estoque.findUnique({
      where: {
          id,
      },
    });

    if(!estoqueExist){
      throw new Error('Estoque does not exists!')
    }

    return await this.prisma.estoque.delete({
      where:{
        id,
      },
    });

  }
}
