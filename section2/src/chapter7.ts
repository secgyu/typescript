// void

function func1(): string {
    return 'hello'
}

function func2(): void {
    console.log('hello')
}

// never 
// 존재하지않는, 불가능한 타입

function func3(): never {
    while (true) { }
}

function func4(): never {
    throw new Error();
}