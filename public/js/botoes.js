// declaração de variaveis 
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const inputTempo = document.getElementById("tempo")

const body = document.getElementsByTagName("body")
const Botaos = document.querySelectorAll(".alterartempo")



// declaração de variaveis  "fimescolha" para economizar funções
const escolha = {
    Pomodoro:{
        "tempo" : 25,
        "cor": "#C3423F",
        "transicao": "0.5s",  
        "valor": 25
    },
    
    Descanso:{
        "tempo": 5,
        "cor": "#0F7173",
        "transicao": "0.5s",
        "valor": 5
    },
    
    DescansoLongo:{
        "tempo" : 15,
        "cor": "#211A1E",
        "transicao": "0.5s",
        "valor": 15  


    }
} 

Botaos.forEach(function(item) {
        
    item.addEventListener("click", () =>{
        
        adicionar(item.id)
    })
});


function adicionar(id){
    const {tempo, cor, transicao, valor} = escolha[id] 

    min.innerHTML = tempo;
    body[0].style.backgroundColor = `${cor}`;
    body[0].style.transitionDuration = transicao;
    inputTempo.value = valor;
    
}







