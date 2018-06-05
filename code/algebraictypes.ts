type Maybe<A> = Nothing<A> | Just<A>

class Nothing<A> {}

class Just<A> {
    constructor(readonly value: A) {}
}

type Either<A, B> = Left<A, B> | Right<A, B>

class Left<A, B> {
    constructor(readonly value: A) {}
}

class Right<A, B> {
    constructor(readonly value: B) {}
}

enum Unit {unit}

function f<A>(m: Maybe<A>): Either<A, Unit> {
    if (m instanceof Nothing) {
        return new Right(Unit.unit)
    }

    return new Left(m.value)
}

function g<A>(e: Either<A, Unit>): Maybe<A> {
    if (e instanceof Left) {
        return new Just(e.value)
    }

    return Nothing
}

type Shape = Circle | Rect | Square

class Circle {
    constructor(readonly radius: number) {}
}

class Rect {
    constructor(readonly base: number, readonly height: number) {}
}

class Square {
    constructor(readonly side: number) {}
}

function area(s: Shape): number {
    if (s instanceof Circle) {
        return Math.PI * s.radius * s.radius
    }
    if (s instanceof Rect) {
        return s.base * s.height
    }

    return s.side * s.side
}

function circ(s: Shape): number {
    if (s instanceof Circle) {
        return 2 * Math.PI * s.radius
    }
    if (s instanceof Rect) {
        return 2 * (s.base + s.height)
    }

    return 4 * s.side
}

function etb(e: Either<Unit, Unit>): boolean {
    return e instanceof Left
}

function bte(b: boolean): Either<Unit, Unit> {
    return b ? new Left(Unit.unit) : new Right(Unit.unit)
}
