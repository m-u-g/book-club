type Maybe<A> = Nothing<A> | Just<A>

class Nothing<A> {}

class Just<A> {
    constructor(readonly value: A) {}
}

function divide(denominator: number): Maybe<number> {
    if (denominator === 0) {
        return new Nothing();
    }

    return new Just(1/denominator);
}

function squareRoot(x: number): Maybe<number> {
    if (x < 0) {
        return new Nothing();
    }

    return new Just(Math.sqrt(x));
}

function composeMaybe<A, B, C>(f: (x: A) => Maybe<B>, g: (y: B) => Maybe<C>): ((x: A) => Maybe<C>) {
    return ((x: A) => {
        let maybefx = f(x);
        if (maybefx instanceof Just) {
            return g(maybefx.value);
        }

        return new Nothing();
    });
}

console.log(composeMaybe(divide, squareRoot)(10));
console.log(composeMaybe(divide, squareRoot)(0));
console.log(composeMaybe(divide, squareRoot)(-5));