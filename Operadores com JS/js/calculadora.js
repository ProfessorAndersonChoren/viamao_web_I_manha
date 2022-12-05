let inputOne = document.getElementById("inputOne")
let inputTwo = document.getElementById("inputTwo")
let divOutput = document.getElementById("divOutput")

function showMessage(message) {
    divOutput.innerText = message
    divOutput.classList.remove("d-none")

    setTimeout(() => {
        divOutput.classList.add("d-none")
    },4000)
}

document.getElementById("btnSum").addEventListener("click", () => {
    let numberOne = parseFloat(inputOne.value)
    let numberTwo = parseFloat(inputTwo.value)

    let sum = numberOne + numberTwo

    showMessage(`O resultado da soma é ${sum}`)
})