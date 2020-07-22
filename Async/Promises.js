
const doSomething = new Promise((resolve,reject) => {
  let num = 3
  if ( num == 3 )
    resolve(num-1) // passes 2 to then method
  else
    reject(num+1)
})



doSomething
.then(response => {
  return new Promise((resolve,reject) => {
    if ( response == 2 ) // response returned by doSomething is 2
      resolve(response-1) // passes 1 to chained then block
    else
      reject(response+1)
  })
}).then(response => {
  return new Promise((resolve,reject) => {
    if (response == 1 ) // response returned by chained then is 1
      resolve(response+1) // passes 2 to chained then bloc
    else 
      reject(response-1)
  })
}).then(response => {
  console.log(response)
}) // prints 2