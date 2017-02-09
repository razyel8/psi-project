"use strict";
/// <reference path="../../../typings/globals/node/index.d.ts" />
var _generator_1 = require("./_generator");
var rndGen = new _generator_1.RandomCharsGenerator();
var fileName = "survey";
exports.template = (function () {
    return {
        id: rndGen.generateCounter(),
        nazwa: rndGen.generateString(),
        dataUtw: rndGen.generateDate(),
        dataRozp: rndGen.generateDate(),
        dataZak: rndGen.generateDate(),
        statusSondazu: rndGen.generateString(11),
        statusSondazuEnum: rndGen.generateInteger(),
        semestrId: rndGen.generateInteger()
    };
});
exports.generator = new _generator_1.Generator(exports.template);
exports.generateAndSave = function () {
    exports.generator.generateOne();
    exports.generator.save(fileName);
};
if (process.argv.find(function (arg) { return arg === fileName; })) {
    exports.generateAndSave();
}
