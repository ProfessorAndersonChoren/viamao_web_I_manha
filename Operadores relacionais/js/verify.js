let inputYear = document.getElementById("inputYear")
let feedback = document.getElementById("feedback")
let withMajor = document.getElementById("withMajor")
let year = new Date().getFullYear()
let minYear = year - 100

document.getElementById("btnVerify").addEventListener("click", () => {
    let inputValue = inputYear.value
    let enterYear = parseInt(inputValue)
    let age = year - inputValue

    if (inputValue == "") {
        inputYear.classList.add("is-invalid")
        feedback.innerText = "O campo não pode ficar vazio"
    } else if (enterYear < minYear) {
        inputYear.classList.add("is-invalid")
        feedback.innerText = `A data informada é inferior ao ano ${minYear}`
    } else if (enterYear > year) {
        inputYear.classList.add("is-invalid");
        feedback.innerText = `A data informada é superior ao ano ${year}`
    } else {
        inputYear.classList.remove("is-invalid")
        inputYear.classList.add("is-valid")
        verifyAccess(age)
    }
})

function verifyAccess(age) {
    if (age >= 18) {
        alert("Bem-vindo ao nosso sistema!!!")
    } else if(age>=16 && withMajor.checked){
        alert("Bem-vindos ao nossos sistema!!!")
    }else {
        alert("Lamento, seu acesso não foi liberado!!!")
    }
}