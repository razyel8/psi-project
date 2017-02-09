"use strict";
/// <reference path="../../../typings/globals/node/index.d.ts" />
var _generator_1 = require("./_generator");
var rndGen = new _generator_1.RandomCharsGenerator();
var fileName = "powierzenia";
exports.template = (function () {
    return {
        id: rndGen.generateCounter(),
        typStudiow: rndGen.generateString(),
        wydzial: rndGen.generateString(),
        kierunek: rndGen.generateString(),
        kurs: rndGen.generateString(),
        kursId: rndGen.generateInteger(5),
        forma: rndGen.generateString(1),
        nrSem: rndGen.generateInteger(2),
        godziny: rndGen.generateInteger(500),
        status: rndGen.generateString(10),
        statusEnum: rndGen.generateInteger(3)
    };
});
exports.generator = new _generator_1.Generator(exports.template);
exports.generateAndSave = function () {
    exports.generator.generateMany(4);
    exports.generator.save(fileName);
};
exports.generateAndSave();
if (process.argv.find(function (arg) { return arg === fileName; })) {
    exports.generateAndSave();
}
