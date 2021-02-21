"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const common_1 = require("@nestjs/common");
const utility_functions_1 = require("./utility-functions");
function logger(request, response, next) {
    common_1.Logger.log(`[${utility_functions_1.timeStamp()}] ${request.method} ${request.url}`);
    next();
}
exports.logger = logger;
;
//# sourceMappingURL=logger.middleware.js.map