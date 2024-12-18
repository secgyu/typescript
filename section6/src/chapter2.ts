/**
 * 접근 제어자
 * access modifier
 * => public private proteced
 */

class Employee {
    private name: string;
    protected age: number;
    public position: string;

    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position
    }
    work() {
        console.log(`${this.name}일함`)
    }
}

class ExecutiveOfficer extends Employee {
    officeNumber: number;
    constructor(name: string, age: number, position: string, officeNumber: number) {
        super(name, age, position)
        this.officeNumber = officeNumber
    }
    func() {
        // this.name
        this.age
    }
}

const employee = new Employee('이정환', 27, 'developer')
// employee.name = '홍길동'
// employee.age = 30
employee.position = '디자이너'

console.log(employee)