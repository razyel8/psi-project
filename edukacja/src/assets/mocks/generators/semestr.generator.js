"use strict";
/// <reference path="../../../typings/globals/node/index.d.ts" />
var _generator_1 = require("./_generator");
var rndGen = new _generator_1.RandomCharsGenerator();
var specjalnoscGenerator = require("./specjalnosci.generator");
var fileName = "semestry";
exports.template = (function () {
    return {
        id: rndGen.generateCounter(),
        nazwa: rndGen.generateString(),
        dataRozpoczecia: rndGen.generateDate(),
        dataZakonczenia: rndGen.generateDate()
    };
});
exports.generator = new _generator_1.Generator(exports.template);
exports.generateAndSave = function () {
    exports.generator.generateMany(5);
    exports.generator.save(fileName);
};
exports.generateAndSave();
if (process.argv.find(function (arg) { return arg === fileName; })) {
    exports.generateAndSave();
}
