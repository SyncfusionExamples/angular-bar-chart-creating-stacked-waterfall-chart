import { render } from 'react-dom';
import './index.css';
/**
 * Sample for stackingBar series
 */
import * as React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingBarSeries,
  Tooltip,
  ChartAnnotation,
  AnnotationsDirective,
  AnnotationDirective,
} from '@syncfusion/ej2-react-charts';
export let data = [
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
  },
];
const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
    }`;
export class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="control-pane">
        <style>{SAMPLE_CSS}</style>
        <div className="control-section">
          <ChartComponent
            id="charts"
            primaryXAxis={{
              valueType: 'Category',
              majorGridLines: { width: 0 },
              lineStyle: { width: 0 },
              majorTickLines: { width: 0 },
            }}
            primaryYAxis={{
              majorGridLines: { width: 0 },
              lineStyle: { width: 0 },
              majorTickLines: { width: 0 },
            }}
            title="Variacion Absoluta"
            loaded={this.onChartLoad.bind(this)}
          >
            <Inject
              services={[
                StackingBarSeries,
                Category,
                Legend,
                Tooltip,
                ChartAnnotation,
              ]}
            />
            <AnnotationsDirective>
              <AnnotationDirective
                content="202"
                coordinateUnits="Point"
                x="Total"
                y={205}
              ></AnnotationDirective>
              <AnnotationDirective
                content="21"
                coordinateUnits="Point"
                x="Otros"
                y={205}
              ></AnnotationDirective>
              <AnnotationDirective
                content="-31"
                coordinateUnits="Point"
                x="Expert Monitoring"
                y={176}
              ></AnnotationDirective>
              <AnnotationDirective
                content="16"
                coordinateUnits="Point"
                x="Liquidacion Nacional"
                y={213}
              ></AnnotationDirective>
              <AnnotationDirective
                content="17"
                coordinateUnits="Point"
                x="Autorizacion Nacional"
                y={198}
              ></AnnotationDirective>
              <AnnotationDirective
                content="23"
                coordinateUnits="Point"
                x="Cuentas & Tarjetas"
                y={180}
              ></AnnotationDirective>
              <AnnotationDirective
                content="39"
                coordinateUnits="Point"
                x="Decision Intelligence"
                y={158}
              ></AnnotationDirective>
              <AnnotationDirective
                content="116"
                coordinateUnits="Point"
                x="Ventas"
                y={120}
              ></AnnotationDirective>
            </AnnotationsDirective>
            <SeriesCollectionDirective>
              <SeriesDirective
                dataSource={data}
                xName="x"
                yName="baseline"
                fill="#FFFFFF"
                type="StackingBar"
              ></SeriesDirective>
              <SeriesDirective
                dataSource={data}
                xName="x"
                yName="y1"
                fill="#fa4a00"
                type="StackingBar"
              ></SeriesDirective>
              <SeriesDirective
                dataSource={data}
                xName="x"
                yName="y2"
                fill="#000095"
                type="StackingBar"
              ></SeriesDirective>
            </SeriesCollectionDirective>
          </ChartComponent>
        </div>
      </div>
    );
  }
  onChartLoad(args: any) {
    let chart: any = document.getElementById('charts');
    chart.setAttribute('title', '');
  }
}

render(<App />, document.getElementById('root'));
