/**
 * 맵드 타입(객체 조작)
 */

interface User {
    id: number;
    name: string;
    age: number;
}

type PartialUser = {
    [key in 'id' | 'name' | 'age']?: User[key]; //key:value
}

type BooleanUser = {
    [key in keyof User]: boolean;
}

type ReadOnlyUser = {
    readonly [key in keyof User]: User[key]
}

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
    //.. 기능들
    return {
        id: 1,
        name: '이정환',
        age: 27
    }
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
    //..수정하는 기능
}

updateUser({
    // id: 1,
    // name: '이정환',
    age: 25
})