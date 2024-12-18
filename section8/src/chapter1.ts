/**
 * keyof 연산자(객체 타입에 적용)
 */

// interface Person {
//     name: string;
//     age: number;
// }

type Person = typeof person

function getPropertyKey(person: Person, key: keyof Person) {
    return person[key]
}

const person = {
    name: '이정환',
    age: 27
}

getPropertyKey(person, 'name')

