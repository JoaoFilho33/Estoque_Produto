import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { EstoqueDto } from '../dto/estoque.dto';
import { iRepositoryEstoque } from './Interface/iRepositoryEstoque';
import { Prisma } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('estoque')
@Controller('estoque')
export class EstoqueController implements iRepositoryEstoque{
  produtoService: any;
  constructor(private readonly estoqueService: EstoqueService) {}

  @Post()
  async create(@Body() createEstoqueDto: EstoqueDto) {
    return this.estoqueService.create(createEstoqueDto);
  }

  @Get()
  async findAll() {
    return this.estoqueService.findAll();
  }

  // @Get(':id')
  // async findOne(@Param('id') id: number) {
  //   return this.estoqueService.findOne(+id)
  // }

  @Get(':id')
  async findOne(@Param('id') id: number){
    return this.estoqueService.findByEstoque(+id)
  }

  @Put(':id')
  async update(@Param("id") id: number, @Body() data: Prisma.EstoqueUpdateInput){
    return this.estoqueService.update(+id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.estoqueService.delete(+id);
  }
}
