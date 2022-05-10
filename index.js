let welcomeEl = document.getElementById("welcome-el")
welcomeEl.textContent = "Hello 4hm"
let countEl = document.getElementById("count-el")
let counterEl = document.getElementById("counter-el")


count = 0
function increment(){
    count += 1
    countEl.textContent = count
    console.log(count)
}

function save(){
    counterEl.textContent += count + " - "
    count = 0
    countEl.textContent = count
}