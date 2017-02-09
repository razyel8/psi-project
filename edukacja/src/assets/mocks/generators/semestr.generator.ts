/// <reference path="../../../typings/globals/node/index.d.ts" />
import {RandomCharsGenerator, Generator} from "./_generator";
import {Sondaz} from "../../../app/model/survey/Sondaz";
import {PowierzeniaWSemestrze} from "../../../app/model/designations/PowierzeniaWSemestrze";
import {Semestr} from "../../../app/model/general/Semestr";
let rndGen = new RandomCharsGenerator();
var specjalnoscGenerator = require("./specjalnosci.generator");

let fileName = "semestry";
export let template = (() => {
    return {
        id: rndGen.generateCounter(),
        nazwa: rndGen.generateString(),
        dataRozpoczecia: rndGen.generateDate(),
        dataZakonczenia: rndGen.generateDate(),
    }
});
export let generator = new Generator<Semestr>(template);

export let generateAndSave = function () {
    generator.generateMany(5);
    generator.save(fileName);
};

generateAndSave();

if((<any>process.argv).find(arg => arg === fileName)){
    generateAndSave();
}

