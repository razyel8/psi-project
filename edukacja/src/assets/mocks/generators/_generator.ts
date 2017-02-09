/// <reference path="../../../typings/globals/node/index.d.ts" />
var fs = require('fs');

export class Generator<T> {

    template;

    private one: T;
    private many: T[] = [];

    constructor(template) {
        this.template = template;
    }

    public generateOne(): T {
        this.one = this.template();
        return this.one;
    }

    public generateMany(amount: number = 20): T[] {
        this.many = [];
        for (let i = 0; i < amount; i++) {
            this.many.push(this.template());
        }
        return this.many;
    }

    public save(fileName: string){
        fs.writeFile("../json/"+ fileName +".json", JSON.stringify(this.many), function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file " + fileName + ".json was saved!");
        });
    }
}

export class RandomCharsGenerator{

    counterState: number = 0;

    public generateInteger(end: number = 1000, start: number = 0){
        return Math.floor((Math.random() * end) + start);
    }

    public generateCounter(){
        return this.counterState++;
    }

    public generateDouble(end: number = 1000, start: number = 0){
        return (Math.random() * end) + start;
    }

    public generateString(maxChars: number = 50, minChars: number = 10){
        var text = "";
        var possibleBig = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var possibleSmall = "abcdefghijklmnopqrstuvwxyz ";

        text += possibleBig.charAt(Math.floor(Math.random() * possibleBig.length));
        for( var i=0; i < Math.floor((Math.random() * maxChars) + minChars); i++ )
            text += possibleSmall.charAt(Math.floor(Math.random() * possibleSmall.length));

        return text;
    }

    public generateOneString(values: string[]){
        var randVal = Math.floor((Math.random() * values.length));
        return values[randVal];
    }


    public generateDate(start?, end?){
        if(start === undefined){
            start = new Date(2012, 0, 1);
        }

        if(end === undefined){
            end = new Date();
        }

        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString();
    }

    public generatePostalCode(){
        var text = "";
        var possibleBig = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var possibleSmall = "abcdefghijklmnopqrstuvwxyz";
        var possibleNum = "1234567890";

        text += possibleNum.charAt(Math.floor(Math.random() * possibleNum.length));
        text += possibleNum.charAt(Math.floor(Math.random() * possibleNum.length));
        text += '-';
        text += possibleNum.charAt(Math.floor(Math.random() * possibleNum.length));
        text += possibleNum.charAt(Math.floor(Math.random() * possibleNum.length));
        text += possibleNum.charAt(Math.floor(Math.random() * possibleNum.length));

        return text;
    }
}

