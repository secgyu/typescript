/**
 * 클래스
 */

let studentA = {
  name: "김규민",
  grade: "A+",
  age: 24,
  study() {
    console.log("열심히 공부함");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부함");
  }
  introduce() {
    console.log(`안녕하세요 ${this.name}입니다.`);
  }
}

class StudentDeveloper extends Student {
  favoriteSkill;

  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }
  promgramming() {
    console.log(`${this.favoriteSkill}로 프로그래밍함`);
  }
}

const studentdeveloper = new StudentDeveloper("이정환", "A+", 27, "TypeScripte");
console.log(studentdeveloper);
studentdeveloper.promgramming();

// let studetnB = new Student("이정환", "A+", 27);
// console.log(studetnB);
// studetnB.study();
// studetnB.introduce();
