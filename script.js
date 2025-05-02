function clearGrid() {
    const squares = document.querySelectorAll(".square")
    for (square of squares) {
        square.remove()
    }
}

function createGrid(numSquaresPerSide) {
    // console.log(`Creating new grid with ${numSquaresPerSide} squares per side`)
    clearGrid()
    const container = document.querySelector(".container")
    const sideLength = (1 / numSquaresPerSide) * 100

    for (i = 0; i < Math.pow(numSquaresPerSide, 2); i++) {
        const div = document.createElement("div")
        div.classList.add("square")
        div.style.cssText = `width: ${sideLength}%; height: ${sideLength}%;`
        div.addEventListener("mouseover", () => {
            const rVal = Math.floor(Math.random() * 255)
            const gVal = Math.floor(Math.random() * 255)
            const bVal = Math.floor(Math.random() * 255)
            let currentOpacity = parseFloat(div.style.opacity)
            let newOpacity = 1
            if (isNaN(currentOpacity)) {
                newOpacity = 0.1
            } else if (currentOpacity != 1) {
                newOpacity = currentOpacity += 0.1
            }
            div.style.backgroundColor = `rgb(${rVal},${gVal},${bVal})`
            div.style.opacity = newOpacity
        })

        container.appendChild(div)
    }
}

const gridSizeButton = document.querySelector("#set-grid-size")

gridSizeButton.addEventListener("click", () => {
    let newSize = prompt(`enter # of squares per side for the new grid`)
    newSize = Math.min(100, Math.max(newSize, 1))
    createGrid(newSize)
})

createGrid(16)