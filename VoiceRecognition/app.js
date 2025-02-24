// Initialisation de la reconnaissance vocale en fonction du navigateur
// Pour l'instant, seul Google Chrome le supporte
let SpeechRecognition = window.SpeechRecognition ||
                          window.webkitSpeechRecognition ||
                          window.mozSpeechRecognition ||
                          window.msSpeechRecognition ||
                          window.oSpeechRecognition;

let button = document.querySelector('button')

let nav = navigator.permissions
console.log(nav)

//var navigator = navigator.mediaDevices.getUserMedia({audio: true, video: true})
//navigator.then(function(success){console.log(success)}).catch(function(error) {console.log(error)})

// Initialisation de la reconnaissance vocale
recognition = new SpeechRecognition()
// Reconnaissance en continue
recognition.continuous = true
// Langue française
recognition.lang = 'fr-FR'
recognition.interimResults = true


recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join(' ')
        console.log(transcript)
})

recognition.start()
console.log(recognition)