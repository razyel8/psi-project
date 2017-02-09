/// <reference path="../../../typings/globals/node/index.d.ts" />
import {RandomCharsGenerator, Generator} from "./_generator";
import {Specjalnosc} from "../../../app/model/survey/Specjalnosc";
export let rndGen = new RandomCharsGenerator();

let fileName = "spacjalnosc";
export let template = (() => {
    return {
        id: rndGen.generateCounter(),
        nazwa: rndGen.generateString(),
        pdfLink: "/assets/sample.pdf"
    }
});
export let generator = new Generator<Specjalnosc>(template);

export let generateAndSave = function () {
    generator.generateMany(3);
    generator.save(fileName);
};

if((<any>process.argv).find(arg => arg === fileName)){
    generateAndSave();
}