function lowerCaseWords(arr) {
    // resolve, reject
    return new Promise((res, rej) => {
        if (!Array.isArray(arr)) {
            // reject if array is incorrect
            return rej("Invalid array input");
        }
        // filtering and transforming words before resolving array
        const words = arr
            .filter(x => typeof x === 'string')
            .map(x => x.toLowerCase()); // if array is upcase, change to lowercase

        res(words);
    });
}

// instructions from the lab to use, solve to for this
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(out => console.log(out)) // process if it's correct
    .catch(err => console.log(err)); // reject if it's incorrect