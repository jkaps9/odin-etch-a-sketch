const container = document.querySelector(".container")

for (i = 0; i < 16 * 16; i++) {
    const div = document.createElement("div")
    div.classList.add("square")
    container.appendChild(div)
}