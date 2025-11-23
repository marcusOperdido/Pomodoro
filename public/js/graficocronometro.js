// Inicializando o gráfico ECharts
const chartDom = document.getElementById("main");
const myChart = echarts.init(chartDom);

// Dados de exemplo para o gráfico
const dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
const valores = [5, 10, 15, 20, 25, 30, 35];

// Configuração e exibição do gráfico
myChart.setOption({
  title: { text: "Contagem Semanal" },
  xAxis: {
    type: "category",
    data: dias, // Usando as datas como rótulos
  },
  yAxis: { type: "value" },
  series: [
    {
      data: valores, // Usando os valores
      type: "line",
      smooth: true
    }
  ]
});
