//object
let user: { id?: number; name: string } = {
    id: 1,
    name: '김규민'
}

// ?는 선택적 property (있어도되고 없어도됨)

//user.id; 이런게 안된다.(객체 말고는 표현이 안됨 -> 그 이상을 모름) object
// 리터럴타입으로 해야함

// 구조적 타입 시스템

// let dog: { name: string; color: string; } = {
//     name: '돌돌이',
//     color: 'brown'
// }

let config: { readonly apiKey: string } = {
    apiKey: 'MY API KEY'
}
//config.apiKey = 'asd'