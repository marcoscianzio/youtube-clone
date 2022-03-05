"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const class_validator_1 = require("class-validator");
const validate = async (input) => {
    try {
        await (0, class_validator_1.validateOrReject)(input);
    }
    catch (errors) {
        return errors;
    }
};
exports.validate = validate;
//# sourceMappingURL=validate.js.map