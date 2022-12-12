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

  @Get('produto')
  async findAll() {
    return this.produtoService.findAll();
  }

  @Get('produto/:id')
  async findOne(@Param('id') id: number) {
    return this.produtoService.findOne(+id);
  }

  @Put('produto/:id')
  async update(@Param('id') id: number, @Body('data') data: Prisma.ProdutoUpdateInput) {
    return this.produtoService.update(+id, data)
  }

  @Delete('produto/:id')
  async delete(@Param('id') id: number) {
    return this.produtoService.delete(+id);
  }
}
