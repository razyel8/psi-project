"use strict";
/// <reference path="../../../typings/globals/node/index.d.ts" />
var _generator_1 = require("./_generator");
var rndGen = new _generator_1.RandomCharsGenerator();
var specjalnoscGenerator = require("./specjalnosci.generator");
var fileName = "sondaze";
exports.template = (function () {
    return {
        id: rndGen.generateCounter(),
        nazwa: rndGen.generateString(),
        dataUtw: rndGen.generateDate(),
        dataRozp: rndGen.generateDate(),
        dataZak: rndGen.generateDate(),
        opis: rndGen.generateString(1000, 300),
        semestrId: rndGen.generateInteger(),
        statusSondazu: rndGen.generateOneString(["Aktywny", "Nieaktywny", "Zakonczony"]),
        statusSondazuEnum: rndGen.generateInteger(),
        selectedSpecId: specjalnoscGenerator.generator.counterState + rndGen.generateInteger(4),
        specjalnosci: specjalnoscGenerator.generator.generateMany(5)
    };
});
exports.generator = new _generator_1.Generator(exports.template);
exports.generateAndSave = function () {
    exports.generator.generateMany(15);
    exports.generator.save(fileName);
};
exports.generateAndSave();
if (process.argv.find(function (arg) { return arg === fileName; })) {
    exports.generateAndSave();
}
