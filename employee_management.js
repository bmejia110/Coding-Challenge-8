//Task 1: Create an Employee Class

class Employee {
    constructor(name, salary, position, department) {  //constructor to initialize employee properites
        this._name = name;
        this._salary = salary;
        this._position = position;
        this._department = department;
    }
    getDetails() {  // returns employee details
        return "${this._name works as ${this._position} in ${this._department}, eanring $${this._salary}.";
    }
}

//Task 2: Create Department Class

class Department {
    constructor(name) {  //constuctor for department properties
        this._name = name;
        this._employees = [];  //array to hold employee objects
    }
    addEmployee(employee) {
        this._employees.push(employee);  //add employee object to array
    }

    getDepartmentSalary () {
        return this._ this._employees.reduce((total, employee) => total + employee._salary, 0);  // use reduce to sump up salaries
    }
}