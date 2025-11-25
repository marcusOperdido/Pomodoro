let dadosCache = []
 
async function carregarDados() {
  const resposta = await fetch("/pomodoro/contador/dados");
  const dados = await resposta.json();
  console.log(dados, "dados carregados no front")
  return dados;
}

async function inicializarDados() {
  dadosCache = await carregarDados();
  console.log("dados carregados:", dadosCache);





if(dadosCache && dadosCache.length > 0){


console.log("cache carregou", dadosCache)

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;
var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

 



function getVirtualData(year) {



  const date = +echarts.time.parse(year + '-01-01');
  const end = +echarts.time.parse(+year + 1 + '-01-01');
  const dayTime = 3600 * 24 * 1000;
  const data = [];


  for (let time = date; time < end; time += dayTime) {
    if(2<1){
      console.log("1,2,3")
    
    }else{
    
      data.push([
      echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
      Math.floor(Math.random() * 10000)
    
    ]);
  }
}
  return data;
}

option = {
  title: {
    top: 30,
    left: 'center',
    text: 'Grafico anual de minutos :)',
    textStyle: {
      fontSize: 40
    }
  },
  tooltip: {},
  visualMap: {
    min: 0,
    max: 400,
    type: 'piecewise',
    orient: 'horizontal',
    left: 'center',
    top: 65
  },
  calendar: {
    top: 120,
    left: 30,
    right: 90,
    cellSize: ['', 40],
    range: '2025',
    itemStyle: {
      borderWidth: 0.5
    },
    yearLabel: { show: false }
  },
  series: {
    type: 'heatmap',
    coordinateSystem: 'calendar',
    data: getVirtualData('2025') 
  }
};
option && myChart.setOption(option);


}else{
  console.log("NAO CARREGOU O CACHE")
  }
}
  inicializarDados()


//aqui eu puxo e os dados do back

