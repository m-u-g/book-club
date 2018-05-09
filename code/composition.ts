function identity<T>(x: T): T {
    return x;
}

function compose<A, B, C> (f: (x: A) => B, g: (x: B) => C): ((x: A) => C) {
    return (x => g(f(x)));
}

function memoize<A, B> (f: (x: A) => B): ((y: A) => B) {
    var cache: {[key: string]: B} = {}

    return ((y: A) => {
        let key = JSON.stringify(y);

        if (cache[key]) {
            return cache[key];
        }

        let val = f(y);
        cache[key] = val;

        return val;
    }) ;
}
