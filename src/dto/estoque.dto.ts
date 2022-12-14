import { ApiProperty } from "@nestjs/swagger"
import { ProdutoDto } from "src/dto/produto.dto"

export class EstoqueDto{
    @ApiProperty()
    id: number;
    @ApiProperty()
    produto: ProdutoDto[]
}
