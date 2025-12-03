const person:{name:string, ID:number, employed:boolean} = {
    name: 'omar',
    ID: 1,
    employed: true,
}

console.log(person);

const contactInfo={
    email: 'omar@gmail.com',
    phone: 12345
}

let mergedPerson = {...person,...contactInfo};
console.log(mergedPerson);

type Person = {
    name: string,
    ID: number
}

const omar:Person = {
    name: "omar",
    ID: 5
}

console.log(omar);