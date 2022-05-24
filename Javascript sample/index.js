var chartData = [
  { baseline: 0, x: 'Total', y1: 190, y2: 12 },
  { baseline: 180, x: 'Otros', y1: 11, y2: 10 },
  { baseline: 180, x: 'Expert Monitoring', y1: 31, y2: 0 },
  { baseline: 195, x: 'Liquidacion Nacional', y1: 16, y2: 0 },
  { baseline: 178, x: 'Autorizacion Nacional', y1: 17, y2: 0 },
  { baseline: 155, x: 'Cuentas & Tarjetas', y1: 23, y2: 0 },
  { baseline: 116, x: 'Decision Intelligence', y1: 39, y2: 0 },
  { baseline: 0, x: 'Ventas', y1: 100, y2: 16 },
];

var chart = new ej.charts.Chart({
  //Initializing Primary X Axis
  primaryXAxis: {
    valueType: 'Category',
    majorGridLines: { width: 0 },
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
  },
  //Initializing Primary Y Axis
  primaryYAxis: {
    majorGridLines: { width: 0 },
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
  },
  annotations: [
    { content: '202',x: 'Total',y: 205,coordinateUnits: 'Point' },
    { content: '21',x: 'Otros',y: 205,coordinateUnits: 'Point' },
    { content: '-31',x: 'Expert Monitoring',y: 176,coordinateUnits: 'Point' },
    { content: '16',x: 'Liquidacion Nacional',y: 213,coordinateUnits: 'Point' },
    { content: '17',x: 'Autorizacion Nacional',y: 198,coordinateUnits: 'Point' },
    { content: '23',x: 'Cuentas & Tarjetas',y: 180,coordinateUnits: 'Point' },
    { content: '39',x: 'Decision Intelligence',y: 158,coordinateUnits: 'Point' },
    { content: '116',x: 'Ventas',y: 120,coordinateUnits: 'Point'},
  ],
  //Initializing Chart Series
  series: [
    { type: 'StackingBar',dataSource: chartData,xName: 'x',yName: 'baseline',fill: '#FFFFFF'},
    { type: 'StackingBar',dataSource: chartData,xName: 'x',yName: 'y1',fill: '#fa4a00' },
    { type: 'StackingBar',dataSource: chartData,xName: 'x',yName: 'y2',fill: '#000095', },
  ],
 //Initializing Chart Title
  title: 'Variacion Absoluta',
},'#element');