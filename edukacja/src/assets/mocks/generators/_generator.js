"use strict";
/// <reference path="../../../typings/globals/node/index.d.ts" />
var fs = require('fs');
var Generator = (function () {
    function Generator(template) {
        this.many = [];
        this.template = template;
    }
    Generator.prototype.generateOne = function () {
        this.one = this.template();
        return this.one;
    };
    Generator.prototype.generateMany = function (amount) {
        if (amount === void 0) { amount = 20; }
        this.many = [];
        for (var i = 0; i < amount; i++) {
            this.many.push(this.template());
        }
        return this.many;
    };
    Generator.prototype.save = function (fileName) {
        fs.writeFile("../json/" + fileName + ".json", JSON.stringify(this.many), function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file " + fileName + ".json was saved!");
        });
    };
    return Generator;
}());
exports.Generator = Generator;
var RandomCharsGenerator = (function () {
    function RandomCharsGenerator() {
        this.counterState = 0;
    }
    RandomCharsGenerator.prototype.generateInteger = function (end, start) {
        if (end === void 0) { end = 1000; }
        if (start === void 0) { start = 0; }
        return Math.floor((Math.random() * end) + start);
    };
    RandomCharsGenerator.prototype.generateCounter = function () {
        return this.counterState++;
    };
    RandomCharsGenerator.prototype.generateDouble = function (end, start) {
        if (end === void 0) { end = 1000; }
        if (start === void 0) { start = 0; }
        return (Math.random() * end) + start;
    };
    RandomCharsGenerator.prototype.generateString = function (maxChars, minChars) {
        if (maxChars === void 0) { maxChars = 50; }
        if (minChars === void 0) { minChars = 10; }
        var text = "";
        var possibleBig = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var possibleSmall = "abcdefghijklmnopqrstuvwxyz ";
        text += possibleBig.charAt(Math.floor(Math.random() * possibleBig.length));
        for (var i = 0; i < Math.floor((Math.random() * maxChars) + minChars); i++)
            text += possibleSmall.charAt(Math.floor(Math.random() * possibleSmall.length));
        return text;
    };
    RandomCharsGenerator.prototype.generateOneString = function (values) {
        var randVal = Math.floor((Math.random() * values.length));
        return values[randVal];
    };
    RandomCharsGenerator.prototype.generateDate = function (start, end) {
        if (start === undefined) {
            start = new Date(2012, 0, 1);
        }
        if (end === undefined) {
            end = new Date();
        }
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString();
    };
    RandomCharsGenerator.prototype.generatePostalCode = function () {
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
    };
    return RandomCharsGenerator;
}());
exports.RandomCharsGenerator = RandomCharsGenerator;
