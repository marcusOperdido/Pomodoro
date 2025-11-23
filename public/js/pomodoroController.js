class Pomodoro {
    #play;
    #controle;
    #minutos;
    #segundos;
    #interval;
    #timeElement;
    #min;
    #sec;

    #chartDom;
    #myChart;
    #option;


    //constructor para ser usado por pessoa
    
    constructor() {
        const $ = document.querySelector.bind(document);

        this.#timeElement = $('#tempo');
        this.#min = $("#min");
        this.#sec = $("#sec");
        this.#chartDom = $('#main');



        this.#play = false;
        this.#controle = true;
        this.#minutos = 0;
        this.#segundos = 0;
        this.#interval = null;

        this.#myChart = echarts.init(this.#chartDom);

        this.#option = new Option();
    }




//Botoes iniciar 
    init() {
        if (this.#play) return;

        this.#play = true

        const timeTarget = parseInt(this.#timeElement.value);
        if (isNaN(timeTarget) || timeTarget < 0) {
            alert("Digite um tempo válido!")
            window.location.reload();
        }

        this.#minutos = timeTarget;
        this.#segundos = 0;

        
       
        this.#startTimer()
        


    }

    pause() {
        this.#controle = false;
    }

    retake() {
        this.#controle = true;
    }

    reset() {
        if (this.#interval) {
            clearInterval(this.#interval);
            this.#interval = null;
        }
        this.#play = false;
        this.#controle = true;
        this.#minutos = 0;
        this.#segundos = 0;
        this.#updateDisplay();
    };





    // getter para verificar se esta rodando
    get isRunning() {
        return this.#play;
    };





    // getter para verificar se esta pausado
    get isPause() {
        return this.#play && !this.#controle;
    };




    // Coraão do Cronometro! aqui faz rodar as atualizaoes de sgeundos...
    #startTimer() {
        this.#interval = setInterval(() => {

            if (this.#controle) {

                if (this.#segundos === 0) {

                    if (this.#minutos === 0) {

                        // fianaliza o timer xD
                        this.#endTimer();
                        
 
                    } else {
                        this.#minutos--;
                        this.#segundos = 59;
                    }
                } else {
                    this.#segundos--;
                };
            };
            // atualiza no HTML
            this.#updateDisplay();

        }, 1000);

    };


    #updateDisplay() {
        this.#min.innerText = this.#minutos < 10 ? "0" + this.#minutos : this.#minutos;
        this.#sec.innerText = this.#segundos < 10 ? "0" + this.#segundos : this.#segundos;
    };

    #endTimer() {
        clearInterval(this.#interval);
        this.#play = false;
        this.#interval = null;

        //melhorar esse alerta de descanso
        alert("Tempo finalizado, VAI DESCANSAR!");
    }
}

window.Pomodoro = Pomodoro;   