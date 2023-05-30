// document.getElementById("count-el").innerText = 5




//EX1: let myAge = 24
// let dogYear = myAge * 7
// console.log("your dog age is:",dogYear)


//EX2: var bonusPoints = 50
// bonusPoints = bonusPoints + 25
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)


//EX3 incrementing
// let addingIt = 0

// function increment1() {
//     console.log("the btn was clicked")
//     addingIt = addingIt + 1
// }

// increment1()
// increment1()
// increment1()

// console.log(addingIt)

var saveEl = document.getElementById("save-el")
var countEl = document.getElementById("count-el")
var count = 0;

function increment(){
    // console.log("hi")
    count += 1
    countEl.innerText = count
}



function saveElement(){
    var lastCount = count + " - " 
    saveEl.textContent += lastCount
    count = 0
    countEl.innerText = 0


}



// welcome massage
var name = " yukabed" 
var greeting = "welcome back"
var greet = greeting + name +" 👋 ."
alert(
    greet
)






