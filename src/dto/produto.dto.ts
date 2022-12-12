import { ApiProperty } from "@nestjs/swagger"
import { EstoqueDto } from "src/dto/estoque.dto"

export class ProdutoDto {
    @ApiProperty()
    id: number
    
    @ApiProperty({
        example: 'Arroz',
        description: 'Representa o nome do Produto'
    })
    nome: string
    
    @ApiProperty({
        example: 'Achei',
        description: 'Representa o nome do Produto'
    })
    marca: string

    @ApiProperty({
        example: '4.55',
        description: 'Representa o valor unitário do Produto'
    })
    valor: number

    @ApiProperty()
    codidoBarra: string

    @ApiProperty({
        example: '2024-05-31',
        description: 'Representa a data de validade do produto, no modelo yyyy-mm-dd'
    })
    dataValidade: Date

    @ApiProperty()
    produto: EstoqueDto

    @ApiProperty()
    produtoId: number

    @ApiProperty()
    perecivel: boolean
    
    @ApiProperty() 
    quantidade: number
}