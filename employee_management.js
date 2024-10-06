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

//Task 3: Create a Manager Class that Inherits from Employee

class Manager extends Employee {
    constructor(name, salary, position, department, bonus) {
        super(name, salary, position, department);  // call the employees class using super
        this._bonus = bonus;
    }
    getDetails() {  // editing get details to include the bonus
        return "${super.getDetails()} Bonus is $${this._bonus}";
    }
}

//Task 4: Handle Bonuses for Managers

calculateTotalSalaryWIthBonus() {
    return this.employees.reduce((total, employee) => {
        if(employee instanceof Manager) {
            return total +employee.salary + employee.bonus;
 
        }
    }) 
}

//Task 5: Create and Manage Department Employees

const salesDepartment = new Department("sales");
const hrDepartment = new Department("hr");
//creating new employees
const bri = new Manager("bri", 80000, "Hr Manager", "hr");
const nikki = new employee("nikki", 80000, "Sales Employee", "sales");
const myles = new employee("myles", 80000, "Sales Employee", "sales");
const tyler = new employee("tyler", 80000, "Sales Employee", "sales");
// adding employees to department
salesDepartment.addEmployee(bri);
salesDepartment.addEmployee(nikki);
salesDepartment.addEmployee(myles);
salesDepartment.addEmployee(tyler);

console.log("sales department total salary: $${salesDepartment.calculateTotalSalaryWithBonus()}")  //Total salary for each depart with bonuses
console.log("hr department total salary: $${hrDepartment.calculateTotalSalaryWithBonus()}")