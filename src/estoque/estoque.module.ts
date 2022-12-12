import { Module } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { EstoqueController } from './estoque.controller';
import { PrismaModule } from 'src/database/prisma.module';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [EstoqueController],
  providers: [EstoqueService, PrismaService],
  imports: [PrismaModule]
})
export class EstoqueModule {}
