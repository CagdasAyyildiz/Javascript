//Both give the same result

function templateLiteral1(strings, ...rest) {
    return `${strings[0]}${rest[0]}${strings[1]}${rest[1]}`
}

function templateLiteral2(strings, value1, value2) {
    return `${strings[0]}${value1}${strings[1]}${value2}`
}

let template = 'template'
let fine = 'fine'

let myString = templateLiteral1`This is a ${template} and it works ${fine}`
console.log(myString)

myString = templateLiteral2`This is a ${template} and it works ${fine}`
console.log(myString)