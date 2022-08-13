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
exports.Client = void 0;
const typeorm_1 = require("typeorm");
let Client = class Client extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Client.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "name" }),
    __metadata("design:type", String)
], Client.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "city" }),
    __metadata("design:type", String)
], Client.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "state" }),
    __metadata("design:type", String)
], Client.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "country" }),
    __metadata("design:type", String)
], Client.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "industry_codes" }),
    __metadata("design:type", String)
], Client.prototype, "industryCodes", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "active" }),
    __metadata("design:type", Boolean)
], Client.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at" }),
    __metadata("design:type", Date)
], Client.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "updated_at" }),
    __metadata("design:type", Date)
], Client.prototype, "updatedAt", void 0);
Client = __decorate([
    (0, typeorm_1.Entity)()
], Client);
exports.Client = Client;
