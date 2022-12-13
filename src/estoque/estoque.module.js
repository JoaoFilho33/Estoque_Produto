"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EstoqueModule = void 0;
var common_1 = require("@nestjs/common");
var estoque_service_1 = require("./estoque.service");
var estoque_controller_1 = require("./estoque.controller");
var prisma_module_1 = require("../database/prisma.module");
var prisma_service_1 = require("../database/prisma.service");
var EstoqueModule = /** @class */ (function () {
    function EstoqueModule() {
    }
    EstoqueModule = __decorate([
        (0, common_1.Module)({
            controllers: [estoque_controller_1.EstoqueController],
            providers: [estoque_service_1.EstoqueService, prisma_service_1.PrismaService],
            imports: [prisma_module_1.PrismaModule]
        })
    ], EstoqueModule);
    return EstoqueModule;
}());
exports.EstoqueModule = EstoqueModule;
