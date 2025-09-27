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

    // meus metodos publicos
    init() {
        if (this.#play) return;

        this.#play = true

        const timeTarget = parseInt(this.#timeElement.value);
        if (isNaN(timeTarget) || timeTarget <= 0) {
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




    // meotdos privados
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
        alert("Tempo finalizado, VAI DESCANSAR!");

        // Atualiza o grafico 
        const option = this.#option.setOption(this.#minutos);
        this.#myChart.setOption(option);

    };
};

window.Pomodoro = Pomodoro;