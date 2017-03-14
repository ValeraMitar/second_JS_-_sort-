
/*домашнее задание*/

function getRandomNumber(from, to) {
    return Math.round(from + Math.random() * (to - from))
}


function generateArray(k) {
    var length = Math.round(Math.random() * k),
        arr = new Array(length),
        limits = requestLimits();
    for (var i = 0; i < length; i++) {
        arr[i] = getRandomNumber(limits.from, limits.to);
    }
    return arr;
}

function requestValidNumber(message, nonPositive) {
    var length;
    do {
        length = parseInt(prompt(message));
    } while ((nonPositive ? false : length <= 0) || isNaN(length));
    return length;
}

function requestLimits() {
    var from = requestValidNumber('Enter to:', true),
        to;
    do {
        to = requestValidNumber('Enter from:', true)
    } while (to <= from);

    return {
        from: from,
        to: to
    };

}

var Arr = generateArray(requestValidNumber('Enter lucky number'));

function bubbles(arr) {
    var newPlace = 0;
    for (var i =  0; i <= arr.length - 1; i++ ) {
        for ( var j = arr.length - 1; j >= i; j-- ) {
            if (arr[j - 1] < arr [j]){
                newPlace = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = newPlace;

            }
        }
    }
    return arr;
}
console.log(Arr);
console.log(bubbles(Arr));
