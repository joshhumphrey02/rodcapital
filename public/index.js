const buttonA = document.getElementById('typeA')
const buttonB = document.getElementById('typeB')
const buttonC = document.getElementById('typeC')
let buttons = document.querySelectorAll('.toggle-btn')
let popup = document.querySelector('.popup')

buttonA.addEventListener('click', ()=>{
    const style = getComputedStyle(popup)
    popup.style.setProperty('visibility','visible')
})
buttonB.addEventListener('click', ()=>{
    const style = getComputedStyle(popup)
    popup.style.setProperty('visibility','visible')
})
buttonC.addEventListener('click', ()=>{
    const style = getComputedStyle(popup)
    popup.style.setProperty('visibility','visible')
})

popup.addEventListener('click', ()=>{
    const style = getComputedStyle(popup)
    popup.style.setProperty('visibility','hidden')
})

