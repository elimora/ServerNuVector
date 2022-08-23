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
exports.Task = void 0;
const typeorm_1 = require("typeorm");
const Activity_1 = require("./Activity");
const Category_1 = require("./Category");
const Client_1 = require("./Client");
const Contractor_1 = require("./Contractor");
const Produtc_1 = require("./Produtc");
const Project_1 = require("./Project");
let Task = class Task extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Task.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Contractor_1.Contractor, { eager: true }),
    __metadata("design:type", Contractor_1.Contractor)
], Task.prototype, "contractor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Task.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Task.prototype, "billable_flag", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Task.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Project_1.Project, { eager: true }),
    __metadata("design:type", Project_1.Project)
], Task.prototype, "project", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Client_1.Client, { eager: true }),
    __metadata("design:type", Client_1.Client)
], Task.prototype, "client", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Produtc_1.Product, { eager: true }),
    __metadata("design:type", Produtc_1.Product)
], Task.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Activity_1.Activity, { eager: true }),
    __metadata("design:type", Activity_1.Activity)
], Task.prototype, "activity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Category_1.Category, { eager: true }),
    __metadata("design:type", Category_1.Category)
], Task.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Task.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Task.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Task.prototype, "updatedAt", void 0);
Task = __decorate([
    (0, typeorm_1.Entity)()
], Task);
exports.Task = Task;
