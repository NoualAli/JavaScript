// Simple condition
/*
let age = prompt("your age : ")

if(age >= 18){
    console.log("You take your license")
}else if (age >= 15){
    console.log("You can spend driving accompanied")
}else{
    console.log("You can't drive")
}*/

// More complex condition

let age = prompt("Your age")

if (age >= 18 && age <= 25) {
    console.log('Welcome to the party !')
} else {
    if (age > 25) {
        console.log("Sorry :/ you can't access the party")
    } else {
        age = 18 - age
        console.log("Sorry :/ you can't access the party, come back in " + age + " years")
    }
}