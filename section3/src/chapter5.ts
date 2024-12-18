/**
 * 타입 추론
 */

let a = 10;
let b = 'hello';
let c = {
    id: 1,
    name: '이정환',
    profile: {
        nickname: 'winterlood'
    },
    urls: ["https://winterlood.com"]
};

// let {id, name, profile} = c;

let [one, two, three] = [1, 'hello', true]

function func(message = 'hello') {
    return 'hello'
}

// any 타입의 진화
let d;
d = 10
d.toFixed();

d = 'hello'
d.toUpperCase();

const num = 10;
const str = 'hello' // <= string이 아니라 리터럴이다. 상수여서

let arr = [1, 'string']
