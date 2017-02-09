/// <reference path="../../../typings/globals/node/index.d.ts" />
import {RandomCharsGenerator, Generator} from "./_generator";
import {Sondaz} from "../../../app/model/survey/Sondaz";
import {PowierzeniaWSemestrze} from "../../../app/model/designations/PowierzeniaWSemestrze";
import {Kurs} from "../../../app/model/designations/Kurs";
let rndGen = new RandomCharsGenerator();
var specjalnoscGenerator = require("./specjalnosci.generator");

let fileName = "kursy";
export let template = (() => {
    return {
        kursId: rndGen.generateCounter(),
        typStudiow: rndGen.generateString(),
        kurs: rndGen.generateString(),
        forma: rndGen.generateString(2),
        nrSem: rndGen.generateInteger(2).toString,
        zapotrzebowanie: rndGen.generateInteger(500),
        przydzielono: rndGen.generateInteger(100),
    }
});
export let generator = new Generator<Kurs>(template);

export let generateAndSave = function () {
    generator.generateMany(10);
    generator.save(fileName);
};

generateAndSave();

if ((<any>process.argv).find(arg => arg === fileName)) {
    generateAndSave();
}

