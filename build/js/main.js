"use strict";
// convert to more or less specific
var a = 'hello';
var b = a; // less specific
var c = a; // more specific
var d = 'world';
var e = 'world';
var addOrConcat = function (a, b, c) {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
var myVal = addOrConcat(2, 2, 'concat');
// be careful! TS sees no problem - but a string is returned
var nextVal = addOrConcat(2, 2, 'concat');
//  10 as string
10;
var img = document.querySelector('img');
var myImg = document.getElementById('#img');
var nextImg = document.getElementById('#img');
img.src;
myImg.src;
