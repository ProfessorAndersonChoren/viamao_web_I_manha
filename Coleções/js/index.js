let subtitles = document.getElementsByTagName("h2")
let subtitlesWithClass = document.getElementsByClassName("subtitle")

// subtitles.item(0).classList.add("text-success")

for (let element of subtitles) {
    element.classList.add("text-success")
}

for (let element of subtitlesWithClass) {
    element.style = "font-size: 50px"
}