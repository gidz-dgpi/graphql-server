"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
let DemoResolver = class DemoResolver {
    getAllDemos() {
        return [
            {
                id: 1,
                title: 'Demo 1',
                author: 'Author 1',
                price: 10,
            },
            {
                id: 2,
                title: 'Demo 2',
                author: 'Author 2',
                price: 10,
            },
            {
                id: 1,
                title: 'Demo 3',
                author: 'Author 1',
                price: 10,
            }
        ];
    }
};
exports.DemoResolver = DemoResolver;
__decorate([
    (0, graphql_1.Query)('demos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DemoResolver.prototype, "getAllDemos", null);
exports.DemoResolver = DemoResolver = __decorate([
    (0, graphql_1.Resolver)('Demo')
], DemoResolver);
//# sourceMappingURL=demo.resolver.js.map