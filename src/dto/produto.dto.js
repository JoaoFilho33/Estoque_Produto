"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProdutoDto = void 0;
var openapi = require("@nestjs/swagger");
var swagger_1 = require("@nestjs/swagger");
var ProdutoDto = /** @class */ (function () {
    function ProdutoDto() {
    }
    ProdutoDto._OPENAPI_METADATA_FACTORY = function () {
        return { id: { required: true, type: function () { return Number; } }, nome: { required: true, type: function () { return String; } }, marca: { required: true, type: function () { return String; } }, valor: { required: true, type: function () { return Number; } }, codidoBarra: { required: true, type: function () { return String; } }, dataValidade: { required: true, type: function () { return Date; } }, produto: { required: true, type: function () { return Object; } }, produtoId: { required: true, type: function () { return Number; } }, perecivel: { required: true, type: function () { return Boolean; } }, quantidade: { required: true, type: function () { return Number; } } };
    };
    __decorate([
        (0, swagger_1.ApiProperty)()
    ], ProdutoDto.prototype, "id");
    __decorate([
        (0, swagger_1.ApiProperty)({
            example: 'Arroz',
            description: 'Representa o nome do Produto'
        })
    ], ProdutoDto.prototype, "nome");
    __decorate([
        (0, swagger_1.ApiProperty)({
            example: 'Achei',
            description: 'Representa o nome do Produto'
        })
    ], ProdutoDto.prototype, "marca");
    __decorate([
        (0, swagger_1.ApiProperty)({
            example: '4.55',
            description: 'Representa o valor unitário do Produto'
        })
    ], ProdutoDto.prototype, "valor");
    __decorate([
        (0, swagger_1.ApiProperty)()
    ], ProdutoDto.prototype, "codidoBarra");
    __decorate([
        (0, swagger_1.ApiProperty)({
            example: '2024-05-31',
            description: 'Representa a data de validade do produto, no modelo yyyy-mm-dd'
        })
    ], ProdutoDto.prototype, "dataValidade");
    __decorate([
        (0, swagger_1.ApiProperty)()
    ], ProdutoDto.prototype, "produto");
    __decorate([
        (0, swagger_1.ApiProperty)()
    ], ProdutoDto.prototype, "produtoId");
    __decorate([
        (0, swagger_1.ApiProperty)()
    ], ProdutoDto.prototype, "perecivel");
    __decorate([
        (0, swagger_1.ApiProperty)()
    ], ProdutoDto.prototype, "quantidade");
    return ProdutoDto;
}());
exports.ProdutoDto = ProdutoDto;
