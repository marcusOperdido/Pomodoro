

const chartDom = document.getElementById("main");
const myChart = echarts.init(chartDom);
myChart.setOption({
  title: { text: "Contagem Semanal"},
  xAxis: {
    type: "category",
    data: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
  },
  yAxis: { type: "value" },
 
  series: [{ data: [1,2], 
              type: "line" }],
});
