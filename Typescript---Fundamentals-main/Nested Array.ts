let employeeArray: [number, string][] = [

    [1, "Omar"],
    [2, "Mohamed"]
];

console.log(employeeArray[0]);

console.log(employeeArray[1]?.[1]);

let employeesObject = {
    name: 'Omar',
    address: {
        country: 'Egypt',
        city: 'Cairo'
    }
}

console.log(employeesObject.name);
console.log(employeesObject.address.city);