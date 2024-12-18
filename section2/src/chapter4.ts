type User = { id: number; name: string; nickname: string; birth: string; bio: string; location: string; }
type CountryCodes = { [key: string]: string; }
type CountryNumberCodes = {
    [key: string]: number;
    Korea: number
}

let user: User = {
    id: 1,
    name: '김규민',
    nickname: 'rbals1915',
    birth: '2001-11-05',
    bio: '안녕하세요',
    location: '거제시'
}

let user2: User = {
    id: 2,
    name: '홍길동',
    nickname: 'rbals1915',
    birth: '2001-11-05',
    bio: '안녕하세요',
    location: '거제시'
}

// 인덱스 시그니처
let countryCodes: CountryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk'
}

let countryNumberCodes: CountryNumberCodes = {
    Korea: 410
}