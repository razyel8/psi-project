/// <reference path="../../../typings/globals/node/index.d.ts" />
import {RandomCharsGenerator, Generator} from "./_generator";
import {Powierzenie} from "../../../app/model/designations/Powierzenie";
let rndGen = new RandomCharsGenerator();

let fileName = "powierzenia";
export let template = (() => {
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
        statusEnum: rndGen.generateInteger(3),
    }
});
export let generator = new Generator<Powierzenie>(template);

export let generateAndSave = function () {
    generator.generateMany(4);
    generator.save(fileName);
};

generateAndSave();

if ((<any>process.argv).find(arg => arg === fileName)) {
    generateAndSave();
}





