//Spread operator allows us to pull elements out of the object/array

const data = {
    type : "int",
    size: "4 bytes",
}

const nestedData = {
    firstNest: {
        secondNest : {
            thirdNest: "end"
        }
    }
}

const arr = ["A","B","C","D"]

//prints the copy of object
console.log({...data})

//prints the copy of nested object
console.log({...nestedData})

//only copies the object nested inside actual object
console.log({...nestedData.firstNest})

//Doesn't pull anything. secondNest is inside firstNest
console.log({...nestedData.secondNest})

//this works
console.log({...nestedData.firstNest.secondNest})

//prints the copied array
console.log([...arr])