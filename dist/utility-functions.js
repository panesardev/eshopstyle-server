"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffle = exports.timeStamp = void 0;
function timeStamp() {
    const date = new Date();
    const timeStamp = `${date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} | ${date.getDate()} ${month(date.getMonth())} ${date.getFullYear()}`;
    return timeStamp;
}
exports.timeStamp = timeStamp;
function month(n) {
    switch (n) {
        case 0: return 'Jan';
        case 1: return 'Feb';
        case 2: return 'Mar';
        case 3: return 'Apr';
        case 4: return 'May';
        case 5: return 'Jun';
        case 6: return 'Jul';
        case 7: return 'Aug';
        case 8: return 'Sept';
        case 9: return 'Oct';
        case 10: return 'Nov';
        case 11: return 'Dec';
        default: return '';
    }
}
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
exports.shuffle = shuffle;
//# sourceMappingURL=utility-functions.js.map