"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EstoqueDto = void 0;
var openapi = require("@nestjs/swagger");
var swagger_1 = require("@nestjs/swagger");
var EstoqueDto = /** @class */ (function () {
    function EstoqueDto() {
    }
    EstoqueDto._OPENAPI_METADATA_FACTORY = function () {
        return { id: { required: true, type: function () { return Number; } }, capacidade: { required: true, type: function () { return Number; } }, produto: { required: true, type: function () { return [Object]; } } };
    };
    __decorate([
        (0, swagger_1.ApiProperty)()
    ], EstoqueDto.prototype, "id");
    __decorate([
        (0, swagger_1.ApiProperty)()
    ], EstoqueDto.prototype, "capacidade");
    __decorate([
        (0, swagger_1.ApiProperty)()
    ], EstoqueDto.prototype, "produto");
    return EstoqueDto;
}());
exports.EstoqueDto = EstoqueDto;
