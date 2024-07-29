"use strict";
// Literal types
var myName;
var userName;
userName = 'Amy';
// functions
var add = function (a, b) {
    return a + b;
};
var logMsg = function (message) {
    console.log(message);
};
logMsg('Hello!');
logMsg(add(2, 3));
var subtract = function (c, d) {
    return c - d;
};
var multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
//optional parameters
var addAll = function (a, b, c) {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
var sumAll = function (a, b, c) {
    if (a === void 0) { a = 10; }
    if (c === void 0) { c = 2; }
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3, 2));
logMsg(sumAll(undefined, 3));
// rest parameters
var total = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (prev, curr) { return prev + curr; });
};
logMsg(total(10, 2, 3));
var createError = function (errMsg) {
    throw new Error(errMsg);
};
var infinite = function () {
    var i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//custom type guard
var isNumber = function (value) {
    return typeof value === 'number'
        ? true : false;
};
// use of the never type
var numberOrString = function (value) {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    return createError('This should never happen!');
};
