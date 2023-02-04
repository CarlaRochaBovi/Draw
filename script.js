const personInput = document.getElementById('PersonInput')
const buttonAdd = document.getElementById('add')
const buttonRandom = document.getElementById('random')
const p = document.getElementById('displayParticipantes')
const h1 = document.getElementById('displaySorteado')
let pessoas = [];
addPerson()
personInput.addEventListener('keydown', function(event) {
    if(event.key == 'Enter') {
        addPerson()
    }
})

function addPerson() {
    let pessoa = personInput.value;
    if(personInput.value == '') {
        return false
    }
    pessoas.push(' ' + pessoa );
    p.innerHTML = pessoas;
    personInput.value  = '';
    
}


function sortear() {
    if(pessoas.length == 0) {
        return false
    }
    num = Math.floor(Math.random() * pessoas.length);
    
    
    let index = pessoas[num]
    h1.innerHTML = pessoas[num]  
    p.innerHTML = pessoas;
    pessoas.splice(num, 1)
    
    console.log(pessoas)
    
}