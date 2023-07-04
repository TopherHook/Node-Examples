export default (x, y, callback) => {
    if (x <= 0 || y <= 0) {
        callback(new Error(`Rectangle dimensions must be greater than zero. Received: ${x}, ${y}`));
    } else {
        setTimeout(() =>
            callback(null, {
                perimeter: () => 2 * (x + y),   // x and y are accessed due to "Closures"
                area: () => x * y               // these inner functions have access to the outer function variables
            }),
            2000
        );
    }
};



