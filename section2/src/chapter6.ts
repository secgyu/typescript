// any
// 특정 변수의 타입을 우리가 확실히 모를때
// 아무 문법이나 다 쓸 수 있다.
// 최대한 안쓰는게 좋다.

let anyVar: any = 10;
anyVar = 'hello'

let num: number = 10;
num = anyVar

anyVar = true;

// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => { }
if (typeof unknownVar === 'number') {
    num = unknownVar;
}