"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const userRoute_2 = __importDefault(require("./routes/userRoute"));
const roleRoute_1 = __importDefault(require("./routes/roleRoute"));
const buildingRoute_1 = __importDefault(require("./routes/buildingRoute"));
const elevatorRoute_1 = __importDefault(require("./routes/elevatorRoute"));
const floorRoute_1 = __importDefault(require("./routes/floorRoute"));
const robotRoute_1 = __importDefault(require("./routes/robotRoute"));
const passageRoute_1 = __importDefault(require("./routes/passageRoute"));
exports.default = () => {
    const app = (0, express_1.Router)();
    (0, userRoute_1.default)(app);
    (0, userRoute_2.default)(app);
    (0, roleRoute_1.default)(app);
    (0, buildingRoute_1.default)(app);
    (0, floorRoute_1.default)(app);
    (0, robotRoute_1.default)(app);
    (0, elevatorRoute_1.default)(app);
    (0, passageRoute_1.default)(app);
    return app;
};
//# sourceMappingURL=index.js.map