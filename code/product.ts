type Either<A, B> = Left<A, B> | Right<A, B>

class Left<A, B> {
    constructor(readonly value: A) {}
}

class Right<A, B> {
    constructor(readonly value: B) {}
}

function i(n: number): number {
    return n;
}

function j(b: boolean): number {
    return b? 0: 1;
}

function m(enb: Either<number, boolean>): number {
    if (enb instanceof Left) {
        return i(enb.value);
    }

    return j(enb.value);
}

function ii(n: number): number {
    if (n < 0) {
        return n
    }

    return n + 2
}

function jj(b: boolean): number {
    return b ? 0 : 1
}

function mm(enb: Either<number, boolean>): number {
    if (enb instanceof Left) {
        return ii(enb.value);
    }
    
    return jj(enb.value);
}