const rateNumber = document.querySelectorAll(".rate")
const main = document.querySelector("#main")
const result = document.querySelector("#result")
const button = document.querySelector("button")
const whatNumberSelected = document.querySelector(".how-many-selected")

let selectedRating = null

function changeBackground(event) {
    rateNumber.forEach(element => {
        element.classList.remove("selected")
    });

    event.target.classList.add("selected")
    selectedRating = event.target.textContent
}

function submit() {
    
    if(selectedRating) {
        whatNumberSelected.innerHTML = `You selected ${selectedRating} out of 5`
        main.style.display = "none"
        result.style.display = "block"
    } else {
        alert("Please select a rating!")
    }
}

rateNumber.forEach(element => {
    element.addEventListener("click", changeBackground)
});

button.addEventListener("click", submit)