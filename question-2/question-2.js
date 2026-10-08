// bring over the original helper functions from callbacks.js
const delayedSuccess = () => {
    let success = {'message': 'delayed success!'};
    return success;
};

const delayedException = () => {
    throw new Error('error: delayed exception!');
};

// resolve wrapper function
function resolvedPromise() {
    return new Promise((res) => {
        setTimeout(() => {
            // resolve with the success object after 500ms
            res(delayedSuccess());
        }, 500);
    });
}

// reject wrapper function
function rejectedPromise() {
    return new Promise((_, rej) => {
        setTimeout(() => {
            // catch the error thrown by the function and reject
            try {
                delayedException();
            } catch (e) {
                rej({'error': 'delayed exception!'});
            }
        }, 500);
    });
}

// calls on resolved promise
resolvedPromise()
    .then(data => console.log(data)) // log the output if resolved
    .catch(error => console.log(error));

// calls on rejected promise
rejectedPromise()
    .then(data => console.log(data))
    .catch(error => console.log(error)); // log the output if rejected