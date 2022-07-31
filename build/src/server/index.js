"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_config_1 = require("~/container/inversify.config");
var type_1 = __importDefault(require("~/container/type"));
require("reflect-metadata");
var service = inversify_config_1.myContainer.get(type_1.default.PostService);
console.log(service.say());
