/// <reference path="../../../typings/globals/node/index.d.ts" />
import {RandomCharsGenerator, Generator} from "./_generator";
import {Survey} from "../../../app/model/survey/Survey";

let rndGen = new RandomCharsGenerator();

let fileName = "survey";
export let template = (() => {
    return {
        id: rndGen.generateCounter(),
        nazwa: rndGen.generateString(),
        dataUtw: rndGen.generateDate(),
        dataRozp: rndGen.generateDate(),
        dataZak: rndGen.generateDate(),
        statusSondazu: rndGen.generateString(11),
        statusSondazuEnum: rndGen.generateInteger(),
        semestrId: rndGen.generateInteger()
    }
});
export let generator = new Generator<Survey>(template);

export let generateAndSave = function () {
    generator.generateOne();
    generator.save(fileName);
};

if((<any>process.argv).find(arg => arg === fileName)){
    generateAndSave();
}