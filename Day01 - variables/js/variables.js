// variable de type chaine de caractères
let hello = "Hello world" // chaine de caractère avec guillemets double
console.log(typeof hello + ' ' + hello)

let js = 'n\'est-ce pas un langage formidable' // chaine de caractère avec guillemets simple
console.log(typeof js + ' ' + js)

// variable de type entier
let number = 25
console.log(typeof number + ' ' + number)

// variable de type float
let float = 3.14
console.log(typeof float + ' ' + float)

// variable de type bool
let boolean = true
console.log(typeof boolean + ' ' + boolean)

// variable de type tableau
let fruits = ['Pomme', 'Fraise', 'Mongue', 'Banane']
console.log(fruits)
fruits.forEach(fruit => console.log(fruit))


// variable tableau d'objets
let eleves = [
    {
        nom: 'Noual',
        prenom: 'Ali',
        dateNaissance: "19/06/1996",
        specialite: 'informatique'
    },
    {
        nom: 'Achour',
        prenom: 'Younes',
        dateNaissance: "26/12/1998",
        specialite: 'Cuisinier'
    }
]

console.log(eleves)
eleves.forEach(eleve => console.log(eleve.nom + ' ' + eleve.prenom + ' ' + eleve.dateNaissance + ' ' + eleve.specialite))


// variable de type objet

let languages = {js: 'JavaScript', html: 'HyperText markup language', css: 'Cascading Style Sheet', sql: 'Structured Query Language', php: 'HyperText Preprocessor'}
console.log(typeof languages)
console.log(languages)