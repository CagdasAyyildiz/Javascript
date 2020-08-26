function templateLiteral(strings, ...rest) {
    return `${strings[0]}${rest[0]}${strings[1]}${rest[1]}`
}

let template = 'template'
let fine = 'fine'

let myString = templateLiteral`This is a ${template} and it works ${fine}`
console.log(myString)