"use strict";
/// <reference path="../../../typings/globals/node/index.d.ts" />
var _generator_1 = require("./_generator");
var rndGen = new _generator_1.RandomCharsGenerator();
var specjalnoscGenerator = require("./specjalnosci.generator");
var fileName = "desinsem";
exports.template = (function () {
    return {
        id: rndGen.generateCounter(),
        dataPrzeslania: rndGen.generateDate(),
        dataAkceptacji: rndGen.generateDate(),
        dataUtworzenia: rndGen.generateDate(),
        postepAkceptacji: rndGen.generateInteger(100).toString() + "%",
        idKierunku: rndGen.generateInteger(10),
        kierunek: rndGen.generateString(),
        idWydzialu: rndGen.generateInteger(10),
        wydzial: rndGen.generateString(),
        statusPowierzenWSemestrze: rndGen.generateInteger(3),
        idSemestru: rndGen.generateInteger(10),
        semestr: rndGen.generateString()
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
