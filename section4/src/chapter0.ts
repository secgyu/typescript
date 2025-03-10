/**
 * 함수 타입 정의
 */

// 함수 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 타입의 매개변수를 받고, 어떤 타입의 결과값을 반환하는지 이야기
function func(a: number, b: number) {
    return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 */

function introduce(name = '김규민', age: number, tall?: number) {
    console.log(`name: ${name}`)
    if (typeof tall === 'number') {
        console.log(`tall: ${tall + 10}`)
    }
}

introduce('김규민', 24, 168)
introduce('김규민', 24)


// rest 타입도 가능하다
// 튜플도 가능하고 number[] 로 배열도 가능하다.
function getSum(...rest: [number, number, number]) {
    let sum = 0
    rest.forEach((it) => (sum += it))
    return sum
}

getSum(1, 2, 3) // 6
// getSum(1, 2, 3, 4, 5) // 5
