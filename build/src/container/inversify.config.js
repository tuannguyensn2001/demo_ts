"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myContainer = void 0;
var inversify_1 = require("inversify");
var type_1 = __importDefault(require("~/container/type"));
var service_1 = require("~/services/post/service");
var myContainer = new inversify_1.Container();
exports.myContainer = myContainer;
myContainer.bind(type_1.default.PostService).to(service_1.PostService);
