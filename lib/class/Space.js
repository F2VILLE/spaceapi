"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Space {
    constructor(url) {
        this.url = url;
        this.data = null;
    }
    fetch() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                axios_1.default.get(this.url)
                    .then((response) => {
                    this.data = response.data;
                    resolve(response.data);
                })
                    .catch((error) => {
                    reject(error);
                });
            });
        });
    }
    get name() {
        return this.data.space;
    }
    get contact() {
        return this.data.contact;
    }
    get location() {
        return this.data.location;
    }
    get state() {
        return this.data.state;
    }
    get events() {
        return this.data.events;
    }
    get sensors() {
        return this.data.sensors;
    }
    get feeds() {
        return this.data.feeds;
    }
    get logo() {
        return this.data.logo;
    }
    get space() {
        return this.data.space;
    }
}
exports.default = Space;
//# sourceMappingURL=Space.js.map