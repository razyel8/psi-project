"use strict";
/// <reference path="../../../typings/globals/node/index.d.ts" />
var _generator_1 = require("./_generator");
exports.rndGen = new _generator_1.RandomCharsGenerator();
var fileName = "spacjalnosc";
exports.template = (function () {
    return {
        id: exports.rndGen.generateCounter(),
        nazwa: exports.rndGen.generateString(),
        pdfLink: "/assets/sample.pdf"
    };
});
exports.generator = new _generator_1.Generator(exports.template);
exports.generateAndSave = function () {
    exports.generator.generateMany(3);
    exports.generator.save(fileName);
};
if (process.argv.find(function (arg) { return arg === fileName; })) {
    exports.generateAndSave();
}
