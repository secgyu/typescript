/**
 * 인터페이스의 확장(상속)
 */

// 인터페이스가 아니라 타입이어도 확장 가능하다

interface Animal {
    name: string;
    color: string;
}

interface Dog extends Animal {
    name: string;
    isBark: boolean;
}

const dog: Dog = {
    name: "",
    color: "",
    isBark: true,
}

interface Cat extends Animal {
    isScratch: boolean;
}

interface Chicken extends Animal {
    isFly: boolean;
}

/**
 * 다중 확장
 */
interface DogCat extends Dog, Cat { }

const dogCat: DogCat = {
    name: "",
    color: "",
    isBark: true,
    isScratch: true,
}


