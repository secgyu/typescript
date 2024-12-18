// 인터페이스 : 타입에 이름을 지어주는 또 다른 문법
// 객체의 구조를 정의하는데 특화된 문법 (상속, 합침 등의 특수한 기능을 제공함)

/**
 * 인터페이스 (유니온, 교집합은 여기서 안된다)
 */

interface Person {
    readonly name: string;
    age?: number;
    sayHi(): void;
    sayHi(a: number, b: number): void
}

const person: Person = {
    name: '김규민',
    sayHi: function () {
        console.log('hi')
    }
};

person.sayHi();
person.sayHi(1, 2);