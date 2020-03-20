
async function fetcher() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    let jsonplaceholder = await response.json()
    let new_text = document.createElement("h1")
    new_text.textContent = jsonplaceholder.id
    //Doesn't work for some reason ?!
    window.onload = () => document.body.appendChild(new_text)
}

fetcher()