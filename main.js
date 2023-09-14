// // 1. Инкапсуляция  

class Car {
  #fuel = 50   //Приватное поле #fuel

  get fuel () {
    return this.#fuel
  }

  set fuel (value) {
    this.#fuel = value
    if (value > 100) this.#fuel = 100
  }
}

const car = new Car()
console.log(car.fuel) 

car.fuel = 1000
console.log(car.fuel) 

// 2. 

class User {
  constructor( name, surname){
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}


class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  getCourse() {
    const currentYear = new Date().getFullYear();  //текущий год
    const course = currentYear - this.year + 1;
    return course >= 1 && course <= 5 ? course : "Студент еще не поступил или уже закончил обучение";
  }
}
const student1 = new Student("Нурсулу", "Аванова", 2023);
console.log(student1.getFullName()); 
console.log(student1.getCourse());
 



