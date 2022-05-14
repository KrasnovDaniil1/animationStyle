const blockHourFirst = document.getElementById('blockHourFirst');
const blockHourSecond = document.getElementById('blockHourSecond');
const blockMinutesFirst = document.getElementById('blockMinutesFirst');
const blockMinutesSecond = document.getElementById('blockMinutesSecond');
const blockSecondsFirst = document.getElementById('blockSecondsFirst');
const blockSecondsSecond = document.getElementById('blockSecondsSecond');

const numLight = {
    0: [0, 1, 2, 4, 5, 6],
    1: [2, 5],
    2: [0, 2, 3, 4, 6],
    3: [0, 2, 3, 5, 6],
    4: [1, 2, 3, 5],
    5: [0, 1, 3, 5, 6],
    6: [0, 1, 3, 4, 5, 6],
    7: [0, 2, 5],
    8: [0, 1, 2, 3, 4, 5, 6],
    9: [0, 1, 2, 3, 5, 6],
};

setInterval(() => {
    let date = new Date();

    let hour = date.getHours();
    newHour = numberSplit(hour);

    let minutes = date.getMinutes();
    newMinutes = numberSplit(minutes);

    let seconds = date.getSeconds();
    newSeconds = numberSplit(seconds);

    clearClassAdd(blockHourFirst);
    generateLightElem(newHour[0], blockHourFirst);

    clearClassAdd(blockHourSecond);
    generateLightElem(newHour[1], blockHourSecond);

    clearClassAdd(blockMinutesFirst);
    generateLightElem(newMinutes[0], blockMinutesFirst);

    clearClassAdd(blockMinutesSecond);
    generateLightElem(newMinutes[1], blockMinutesSecond);

    clearClassAdd(blockSecondsFirst);
    generateLightElem(newSeconds[0], blockSecondsFirst);

    clearClassAdd(blockSecondsSecond);
    generateLightElem(newSeconds[1], blockSecondsSecond);

}, 1000);

function numberSplit(num) {
    newNum = num.toString().split('');
    if (newNum.length == 1) {
        newNum.unshift('0');
    }
    return newNum;
}

function generateLightElem(num, block) {
    for (const key in numLight) {
        if (key == num) {
            for (const i of numLight[num]) {
                block.children[i].classList.add('stick-light');
            }
        }
    }
}

function clearClassAdd(block) {
    for (const stick of block.children) {
        if (stick.classList.contains('stick-light')) {
            stick.classList.remove('stick-light');
        }
    }
}
