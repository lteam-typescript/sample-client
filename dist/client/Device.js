"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Device {
    constructor(requester) {
        this.requester = requester;
    }
    static build(baseURL = "http://127.0.0.1") {
        return new Device(axios_1.default.create({
            baseURL
        }));
    }
    updateRequester(requester, log_reason = "add login token") {
        // log
        this.requester = requester;
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.requester.post('/device', {
                status: "on"
            });
            return resp.data;
        });
    }
    retrieve(device_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.requester.get(`/device/${device_id}`);
            return resp.data;
        });
    }
}
exports.Device = Device;
exports.default = Device;
