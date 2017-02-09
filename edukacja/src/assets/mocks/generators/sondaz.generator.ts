/// <reference path="../../../typings/globals/node/index.d.ts" />
import {RandomCharsGenerator, Generator} from "./_generator";
import {Sondaz} from "../../../app/model/survey/Sondaz";
let rndGen = new RandomCharsGenerator();
var specjalnoscGenerator = require("./specjalnosci.generator");

let fileName = "sondaze";
export let template = (() => {
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
    }
});
export let generator = new Generator<Sondaz>(template);

export let generateAndSave = function () {
    generator.generateMany(15);
    generator.save(fileName);
};

generateAndSave();

if((<any>process.argv).find(arg => arg === fileName)){
    generateAndSave();
}

