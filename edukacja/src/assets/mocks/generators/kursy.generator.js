"use strict";
/// <reference path="../../../typings/globals/node/index.d.ts" />
var _generator_1 = require("./_generator");
var rndGen = new _generator_1.RandomCharsGenerator();
var specjalnoscGenerator = require("./specjalnosci.generator");
var fileName = "kursy";
exports.template = (function () {
    return {
        kursId: rndGen.generateCounter(),
        typStudiow: rndGen.generateString(),
        kurs: rndGen.generateString(),
        forma: rndGen.generateString(2),
        nrSem: rndGen.generateInteger(2).toString,
        zapotrzebowanie: rndGen.generateInteger(500),
        przydzielono: rndGen.generateInteger(100)
    };
});
exports.generator = new _generator_1.Generator(exports.template);
exports.generateAndSave = function () {
    exports.generator.generateMany(10);
    exports.generator.save(fileName);
};
exports.generateAndSave();
if (process.argv.find(function (arg) { return arg === fileName; })) {
    exports.generateAndSave();
}
