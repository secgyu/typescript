/**
 * 선언 합침
 */

// 타입은 중복 발생하면 오류가 나지만, 인터페이스는 그렇지 않다.

interface Person {
    name: string;
}

interface Person {
    name: string; //충돌은 허용되지 않는다. 그래서 위에꺼랑 타입을 똑같이 해야한다.
    age: number
}

interface Developer extends Person { //확장과 선언합침은 다르다. (합칠때는 반드시 동일하지만은, 선언합침은 다르다)
    name: 'hello'
}

const person: Person = {
    name: "",
    age: 24,
};

/**
 * 모듈 보강
 */

interface Lib {
    a: number;
    b: number;
}

interface Lib {
    c: string
}

const lib: Lib = {
    a: 1,
    b: 2,
    c: 'hello'
}