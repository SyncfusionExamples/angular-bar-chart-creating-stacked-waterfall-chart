
<template>
<div id="app">
     <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :annotations='annotations'>
        <e-series-collection>
            <e-series :dataSource='seriesData' xName="x" yName="baseline" fill="#FFFFFF" type="StackingBar"> </e-series>
            <e-series :dataSource='seriesData' xName="x" yName="y1" fill="#fa4a00" type="StackingBar"> </e-series>
             <e-series :dataSource='seriesData' xName="x" yName="y2" fill="#000095" type="StackingBar"> </e-series>
        </e-series-collection>
    </ejs-chart>
</div>
</template>
<script>
import Vue from "vue";
import { ChartPlugin, LineSeries, Category, StackingBarSeries, ChartAnnotation } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

export default {
  data() {
return {
  seriesData: [
       {
    baseline: 0,
    x: 'Total',
    y1: 190,
    y2: 12,
    labelText: '202',
    yLabelText: 202,
  },
  {
    baseline: 180,
    x: 'Otros',
    y1: 11,
    y2: 10,
    labelText: '21',
    yLabelText: 201,
  },
  {
    baseline: 180,
    x: 'Expert Monitoring',
    y1: 31,
    y2: 0,
    labelText: '-31',
    yLabelText: 165,
  },
  {
    baseline: 195,
    x: 'Liquidacion Nacional',
    y1: 16,
    y2: 0,
    labelText: '16',
    yLabelText: 211,
  },
  {
    baseline: 178,
    x: 'Autorizacion Nacional',
    y1: 17,
    y2: 0,
    labelText: '17',
    yLabelText: 195,
  },
  {
    baseline: 155,
    x: 'Cuentas & Tarjetas',
    y1: 23,
    y2: 0,
    labelText: '23',
    yLabelText: 178,
  },
  {
    baseline: 116,
    x: 'Decision Intelligence',
    y1: 39,
    y2: 0,
    labelText: '39',
    yLabelText: 155,
  },
  {
    baseline: 0,
    x: 'Ventas',
    y1: 100,
    y2: 16,
    labelText: '116',
    yLabelText: 116,
  }
   ],
    annotations:[
      {content: "202",coordinateUnits: 'Point',x: 'Total',y: 205},
      {content: "21",coordinateUnits: 'Point',x: 'Otros',y: 205},
      {content: "-31",coordinateUnits: 'Point',x: 'Expert Monitoring',y: 176},
      {content: "16",coordinateUnits: 'Point',x: 'Liquidacion Nacional',y: 213},
      {content: "17",coordinateUnits: 'Point',x: 'Autorizacion Nacional',y: 198},
      {content: "23",coordinateUnits: 'Point',x: 'Cuentas & Tarjetas',y: 180},
      {content: "39",coordinateUnits: 'Point',x: 'Decision Intelligence',y: 158},
      {content: "116",coordinateUnits: 'Point',x: 'Ventas',y: 120},],
    primaryXAxis: {
        valueType: 'Category',
        majorGridLines: { width: 0 },
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 }
    },
    primaryYAxis:{
         majorGridLines: { width: 0 },
         lineStyle: { width: 0 },
         majorTickLines: { width: 0 }
    },
  title: "Variacion Absoluta"
};
  },
  provide: {
chart: [LineSeries, Category, StackingBarSeries, ChartAnnotation]
  }
};
</script>
<style>
 #container{
   height: 350px;
 }
</style>