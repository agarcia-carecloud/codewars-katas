function sortArray(array) {
    var odds = [];
    //if it's odd, push to odds array
    for (var i = 0; i < array.length; ++i) {
        if (array[i] % 2 !== 0) {
            odds.push(array[i]);
        }
    }
    //sort odds from smallest to largest
    odds.sort(function (a, b) {
        return a - b;
    });

    //replace any odd values with sorted odd values
    for (var j = 0; j < array.length; ++j) {
        if (array[j] % 2 !== 0) {
            array[j] = odds.shift();
        }
    }

    return array;
}