/**
 * Unknown 타입 -> 모든 타입에 슈퍼타입이다.
 */

function unknownExam() {
    let a: unknown = 1;
    let b: unknown = 'hello';
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    // let unknownVar: unknown;
    // let str: string = unknownVar
}

/**
 * Never 타입 -> 공집합
 */

function neverExam() {
    function neverFunc(): never {
        while (true) { }
    }

    let num: number = neverFunc()
    let str: string = neverFunc()
    let bool: boolean = neverFunc()

    // let never1: never = 10;
}

/**
 * Void 타입
 */

function voidExam() {
    function voidFunc(): void {
        console.log('hi')
        return undefined
    }
    let voidVar: void = undefined
}

/**
 * Any 타입 
 */
// 자기한테 오는 다운캐스팅, 자기가 가는 다운캐스팅 둘 다 가능
// 타입 계층 다 무시함 (사용 잘 안함)
function anyExam() {
    let unKnownVar: unknown
    let anyVar: any
    let undefinedVar: undefined
    let neverVar: never

    anyVar = unKnownVar // 다운캐스팅 가능
    undefinedVar = anyVar
    // neverVar = anyVar //never는 공집합이어서 안됨
}