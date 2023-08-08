const checkBox = document.getElementById("markBtn")
const counter = document.getElementById("unread-counter")
const dots = document.querySelectorAll(".red-dot")
const unread = document.querySelectorAll(".unread")

checkBox.addEventListener('click', function() {
    if(this.checked) {
        counter.innerText = "0";
        dots.forEach(dot => {
            dot.style.display = "none";
        }); 
        unread.forEach(item => {
            item.classList.remove('unread')
            item.classList.add('read')
        }) 
    }
})
