// Rest operator allows us to use multiple arguments without
// specifying the number of arguments. It merges the argument list into an array.

const useRest = (...args) => {
    console.log(args)
}

const useRestAgain = (arg1,arg2,...restOfArgs) => {
    console.log(arg1,arg2)
    console.log(restOfArgs)
}

//Prints all elements as an array
useRest("A","B","C","D","E")

//last two arguments taken as an array
useRestAgain(1,2,3,4)