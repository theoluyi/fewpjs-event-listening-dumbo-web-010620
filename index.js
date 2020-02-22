function addingEventListener() {
    const inputField = document.querySelector("input#input")
    inputField.addEventListener("click", (event) => alert("you clicked me lol."))
}

addingEventListener()