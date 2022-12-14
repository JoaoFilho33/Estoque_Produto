export class EstoqueExistenteErro extends Error{
    constructor(message: string){super(message)}
}

export class EstoqueInexistenteErro extends Error{
    constructor(message: string){super(message)}
}

export class ProdutoExistenteErro extends Error{
    constructor(message: string){super(message)}
}

export class ProdutoInexistenteErro extends Error{
    constructor(message: string){super(message)}
}