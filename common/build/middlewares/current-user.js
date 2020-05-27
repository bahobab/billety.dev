"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentUser = void 0;
var jwt = require("jsonwebtoken");
exports.currentUser = function (req, res, next) {
    var _a;
    if (!((_a = req.session) === null || _a === void 0 ? void 0 : _a.jwt)) {
        return next();
    }
    try {
        var payload = jwt.verify(req.session.jwt, process.env.JWT_SECRET);
        req.currentUser = payload;
    }
    catch (error) { }
    next();
};
