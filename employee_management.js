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