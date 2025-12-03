class Employee{
    static companyName = 'Company';
    private static employeeCount = 0;

    constructor(employeeName:string){
        Employee.employeeCount++;
    }
    static employeeAge(){
        return 25;
    }
    static getEmployeesCount(){
        return Employee.employeeCount;
    }
}

console.log(Employee.companyName);
console.log(Employee.employeeAge());
console.log(Employee.getEmployeesCount());
const omar = new Employee('Omar');
console.log(Employee.getEmployeesCount());
const ahmed = new Employee('Ahmed');
console.log(Employee.getEmployeesCount());
