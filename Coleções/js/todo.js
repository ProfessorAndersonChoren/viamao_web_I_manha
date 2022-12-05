let tasks = [];
let inputTask = document.querySelector("#inputTask")
let tasksList = document.querySelector("#tasksList")

document.querySelector("#btnAddTask").addEventListener('click', () => {
    let task = inputTask.value
    if (task != "") {
        // Criação dos elementos HTML
        let container = document.createElement("div")
        let checkbox = document.createElement("input")
        let label = document.createElement("label")

        // Personalizar os atributos e valores
        container.classList.add("form-check")
        checkbox.setAttribute("type", "checkbox")
        checkbox.classList.add("form-check-input")
        label.innerText = task
        label.classList.add("form-check-label")

        // Injetar os elementos na tela
        container.appendChild(checkbox)
        container.appendChild(label)
        tasksList.appendChild(container)
    }
})