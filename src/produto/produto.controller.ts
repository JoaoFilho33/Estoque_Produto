import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { IRepositoryProduto } from './Interface/IRepositoryProduto';
import { Prisma } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';
import { ProdutoDto } from '../dto/produto.dto';

@ApiTags('produto')
@Controller('produto')
export class ProdutoController implements IRepositoryProduto{
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  async create(@Body() createProdutoDto: ProdutoDto) {
    return this.produtoService.create(createProdutoDto);
  }

  @Get()
  async findAll() {
    return this.produtoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.produtoService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: ProdutoDto) {
    return this.produtoService.update(+id, data)
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.produtoService.delete(+id);
  }
}
