const bigObject = {
    name: "John",
    age: 35,
    country: "USA",
    relatives: [
        {
            status: "brother",
            name: "David",
            age: 24
        },
        {
            status: "sister",
            name: "Lisa",
            age: 30
        }
    ]
}

const {name,age,country} = bigObject
console.log(name,age,country)


const {relatives} = bigObject
console.log(relatives)


const [johnsBrother, johnsSister] = relatives
console.log(johnsBrother)
console.log(johnsSister)


//alternative
const {
    relatives: [
        //Must be renamed. Both has the same name.
        {name: johnsBroName, ...restOfJohnsBro},
        {name: johnsSisName, ...restOfJohnsSis}
    ]
} = bigObject

console.log(johnsBroName,johnsSisName)
console.log(restOfJohnsBro,restOfJohnsSis)