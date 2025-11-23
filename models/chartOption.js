class Option {
    #option
    #date
    #dates
    #today

    constructor() {

        this.#date = getToday.today();
        this.#dates = [];
        this.#today = getToday.shortToday();


        this.#option = {
            xAxis: {
                type: 'category',
                data: []
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [], // vazio por padrão taaa
                    type: 'line'
                }
            ]
        };
    };

    setOption(temp) {
        const seriesData = this.#option.series[0].data;
        const xAxisData = this.#option.xAxis.data;

        const todayStr = getToday.shortToday();
        if (!this.#dates.includes(getToday.today())) {
            this.#dates.push(getToday.today());  //mud
        }
        // Caso já tenha um pomodoro nesse dia, ele irá apenas somar
        if (xAxisData.includes(this.#today) && this.#today === todayStr) {
            const idx = xAxisData.indexOf(this.#today);
            seriesData[idx] += temp;
        } else {
            seriesData.push(temp);
            xAxisData.push(todayStr);
        }


        return this.#option;
    }


    getOption() {
        const newOption = {
            dates: this.#dates,
            option: this.#option
        };

        return JSON.stringify(newOption)
    }
}

window.Option = Option;