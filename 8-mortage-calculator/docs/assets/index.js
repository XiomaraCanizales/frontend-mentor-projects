const clearBtn = document.getElementById("clearBtn")
const calculateBtn = document.getElementById("calculateBtn")


/* input values */
const mortgageAmt = document.getElementById("amount")
const term = document.getElementById("term")
const interest = document.getElementById("interest")
const mortgageType = document.querySelector("input[name='mortgage-type']")

let validationInput = (e) => {
    e.preventDefault()

    /* adds class if empty or invalid input */
    const inputs = document.querySelectorAll('input[type="number"]')
    inputs.forEach(input => {
        const value = input.value.trim()
        const numValue = parseFloat(value)
        const container = input.closest('.form-group')
        const errorMsg = container.querySelector(".errorMsg")
        console.log(errorMsg)

        if (!value || isNaN(numValue) || numValue <= 0) {
            input.parentElement.classList.add("error")
            errorMsg.innerText =  "This field is required"
        }
        else {
            input.parentElement.classList.remove("error")
            errorMsg.innerText = ""
            // send values to fn
        }
    })
}


calculateBtn.addEventListener("click", validationInput) 



