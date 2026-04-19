// input
const amountInput = document.getElementById("amount")
const termInput = document.getElementById("term")
const rateInput = document.getElementById("rate")
const allRadios = document.querySelectorAll('input[name="mortgage-type"]')

// UI
const emptyContainer = document.getElementById("empty-results")
const completedContainer = document.getElementById("completed-results")
completedContainer.classList.add("hidden")

// validates inputs
let validationInput = (e) => {
    e.preventDefault()
    let isFormValid = true

    /* radio buttons */
    
    const radioChecked = Array.from(allRadios).some(radio => radio.checked)
    const errorRadio = document.querySelector('.errorRadioMsg')

    if (!radioChecked) {
        errorRadio.innerText =  "This field is required"
        isFormValid = false
    }
    else {
        errorRadio.innerText = ""
        const selectedValue = Array.from(allRadios).find(r => r.checked).value
    }

    // input values
    const inputs = document.querySelectorAll('input[type="number"]')
    inputs.forEach(input => {
        const value = input.value.trim()
        const numValue = parseFloat(value)
        const container = input.closest('.form-group')
        const errorMsg = container.querySelector(".errorMsg")

        let errorMessage

        // if empty display message
        if (!value ) errorMessage =  "This field is required"
        else if (isNaN(numValue) || numValue <= 0) errorMessage = "Enter a positive number"
        else if (input.id === "term" && !Number.isInteger(Number(value))) errorMessage = "Must be whole number"
        
        // adds class if empty or invalid input 
        if (errorMessage) {
            input.parentElement.classList.add("error")
            errorMsg.innerText = errorMessage
            isFormValid = false
        }
            
        else {
            input.parentElement.classList.remove("error")
            errorMsg.innerText = ""
        }
    })

    if (isFormValid) {
        const type = document.querySelector('input[name="mortgage-type"]:checked').value
        const amount = parseFloat(amountInput.value)
        const term = parseFloat(termInput.value)
        const rate = parseFloat(rateInput.value)
        
        // send values to fn
        calculationFn(type, amount, term, rate)
        
        // UI 
        emptyContainer.classList.add("hidden")
        completedContainer.classList.remove("hidden")
    }
    
}

// calculation fn
let calculationFn = (mortageType, mortageAmount, mortageTerm, interestRate) => {
    const monthlyRepayment = document.getElementById("monthly-repayment-result")
    const totalRepayment = document.getElementById("total-repayment-result")

    let monthlyCalc
    let totalCalc
    let r = (interestRate / 12) / 100 // monthly interest rate
    let n = mortageTerm * 12 // number of payment in months

    if (mortageType === "repayment") {
        let numerator = r * Math.pow(1 + r, n)
        let denominator = Math.pow(1 + r, n) - 1
            
        monthlyCalc = mortageAmount * (numerator / denominator)
        totalCalc = monthlyCalc * n
    } else { 
        monthlyCalc = mortageAmount * r
        totalCalc = (monthlyCalc * n)
    }

    // display result container
    emptyContainer.classList.add("hidden")
    completedContainer.classList.remove("hidden")
    // printing results
    monthlyRepayment.innerText = `$${monthlyCalc.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`
    totalRepayment.innerText = `$${totalCalc.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`
}

// calc btn
const calculateBtn = document.getElementById("calculateBtn")
calculateBtn.addEventListener("click", validationInput) 

// reset btn
const clearBtn = document.getElementById("clearBtn")
const mortgageForm = document.getElementById("mortgage-form")
clearBtn.addEventListener("click", () => {
    mortgageForm.reset()

    document.querySelectorAll(".error")
        .forEach(el => el.classList.remove("error"))
    document.querySelectorAll('.errorMsg, .errorRadioMsg')
        .forEach(el => el.innerText = "")
    emptyContainer.classList.remove("hidden")
    completedContainer.classList.add("hidden")
})