type Maybe<A> = Nothing | Just<A>

class Nothing {}

class Just<A> {
    constructor(readonly value: A) {}
}

function fmap<A, B> (f: (x: A) => B, ma: Maybe<A>): Maybe<B> {
    return Nothing
}

// Const Nothing is a functor

class Reader<E, A> {
    constructor(readonly run: (e: E) => A) {}
    map<B>(f: (a: A) => B): Reader<E, B> {
        return new Reader((e: E) => f(this.run(e)))
    }
}

interface HKT2<F, A, B> {}

interface Bifunctor<F> {
    readonly bimap: <A, B, C, D>(arg: HKT2<F, A, B>, f: (a: A) => C, g: (b: B) => D) => HKT2<F, B, D>
}

class Pair<A, B> {
    constructor(readonly fst: A, readonly snd: B) {}
    bimap<C, D>(f: (a: A) => C, g: (b: B) => D): Pair<C, D> {
        return new Pair(f(this.fst), g(this.snd))
    }
}

type PreList<A, B> = Nil<A, B> | Cons<A, B>

class Nil<A, B> {
    bimap<C, D>(f: (a: A) => C, g: (b: B) => D): Nil<C, D> {
        return new Nil
    }
}

class Cons<A, B> {
    constructor(readonly a: A, readonly b: B) {}
    bimap<C, D>(f: (a: A) => C, g: (b: B) => D): Cons<C, D> {
        return new Cons(f(this.a), g(this.b))
    }
}
