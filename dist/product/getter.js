"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = exports.Getter = void 0;
function Getter(target, propertyName) {
    const capitalizedKey = capitalize(propertyName);
    const methodName = `get${capitalizedKey}`;
    Object.defineProperty(target, methodName, { value: () => target[propertyName] });
}
exports.Getter = Getter;
function capitalize(word) {
    const firstLetter = word[0].toUpperCase();
    const restOfTheWord = word.substr(1).toLowerCase();
    return `${firstLetter}${restOfTheWord}`;
}
exports.capitalize = capitalize;
//# sourceMappingURL=getter.js.map