/// <reference path="../../../typings/globals/node/index.d.ts" />
import {RandomCharsGenerator, Generator} from "./_generator";
import {Sondaz} from "../../../app/model/survey/Sondaz";
import {PowierzeniaWSemestrze} from "../../../app/model/designations/PowierzeniaWSemestrze";
let rndGen = new RandomCharsGenerator();
var specjalnoscGenerator = require("./specjalnosci.generator");

let fileName = "desinsem";
export let template = (() => {
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
    semestr: rndGen.generateString(),
    }
});
export let generator = new Generator<PowierzeniaWSemestrze>(template);

export let generateAndSave = function () {
    generator.generateMany(10);
    generator.save(fileName);
};

generateAndSave();

if((<any>process.argv).find(arg => arg === fileName)){
    generateAndSave();
}

