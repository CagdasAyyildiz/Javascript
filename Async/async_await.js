


async function fetcher() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    let jsonplaceholder = await response.json()
    console.log(jsonplaceholder.id)
}

fetcher()