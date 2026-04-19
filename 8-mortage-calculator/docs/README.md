# Frontend Mentor - Mortgage repayment calculator solution

This is a solution to the [Mortgage repayment calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Input mortgage information and see monthly repayment and total repayment amounts after submitting the form
- See form validation messages if any field is incomplete
- Complete the form only using their keyboard
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot
#### Screen view
[Default](./screenshot/web-empty.png)
[Complete](./screenshot/web-complete.png)
[Error](./screenshot/web-error.png)

#### Mobile view
[Default](./screenshot/mobile-empty.png)
[Empty](./screenshot/mobile-data.png)
[Complete](./screenshot/mobile-complete.png)

### Links

- Solution URL: [Solution URL](https://github.com/XiomaraCanizales/frontend-mentor-projects/tree/main/8-mortage-calculator/docs)
- Live Site URL: [Live site URL](https://xiomaracanizales.github.io/frontend-mentor-projects/8-mortage-calculator/docs/index.html) 

## My process

### What I learned

1. DOM Selection & Specificity
- QuerySelector Logic: Understanding that querySelector returns the first match, while querySelectorAll returns a NodeList (even if only one item is found).
- Pseudo-selectors: Using :checked to filter inputs directly within a CSS selector string. (the most challengin part in the CSS)

2. Form Validation & Logic
- The Guard Clause: Using if (!isFormValid) return; to prevent the math functions from running with "broken" or empty data.
- The .some() Method: An efficient way to check a group of elements for a condition (like "is at least one radio button clicked?") without manually counting them.
- Radio Group Handling: Treating a set of radio buttons as a single unit rather than individual inputs.

3. Data Cleaning & Type Conversion
- String to Number: Using parseFloat() and Number() to turn user text into math-ready data.
- Trim and find values inside the inputs

4. Mathematical Implementation
- Standard Amortization: Translating a complex financial formula into JavaScript using Math.pow().
- Edge Case Awareness: Identifying that "Interest Only" vs. "Repayment" requires entirely different logic branches.

5. UI/UX State Management
- Toggle vs. Display: Learning that forcing display: block in JS can break CSS Grid layouts, and that toggling a .hidden class is a much safer way to switch between the "Empty" and "Results" states.
- Live Formatting: Handling input events to update the UI in real-time as the user types.
- Global Resets: Managing a "Clear All" function that restores the application to its original state by clearing values, errors, and UI toggles simultaneously.

### Continued development

I need to work more with JavaScript and more complicated CSS projects.
I'm comfortable with functions, handling array and methods, handling input data and clean it for better use.

### AI Collaboration

Describe how you used AI tools (if any) during this project. This helps demonstrate your ability to work effectively with AI assistants.

- I use Gemini for assistance
- I use AI for explanations, sometimes, in the web there is too much information but not so specific, AND for the formula explanation because is not on the documentation provided
- I constantly needed to reminid the AI tool that i didn't want a full code answer.

## Author

- [Website](hhttps://xiomara-canizales.netlify.app)
- Frontend Mentor - [@XiomaraCanizales](https://www.frontendmentor.io/profile/XiomaraCanizales)