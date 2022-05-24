import { Component, OnInit, ViewEncapsulation } from '@angular/core';

/**
 * Sample for  Stacked water fall chart
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit  {
  
    public primaryXAxis: object | undefined;
    public primaryYAxis: object | undefined;
    public chartData: Array<any> | undefined;
    public title: string | undefined;
    public subtitle: string | undefined;
  
    constructor() { }
  
    ngOnInit() {
  
      this.chartData = [
        { baseline: 0, x: "Total", y1: 190, y2: 12, labelText: "202", yLabelText: 202 }
        ,{ baseline: 180, x: "Otros", y1: 11, y2: 10, labelText: "21", yLabelText: 201 }
        ,{ baseline: 180, x: "Expert Monitoring", y1: 31, y2: 0, labelText: "-31", yLabelText: 165 }
        ,{ baseline: 195, x: "Liquidacion Nacional", y1: 16, y2: 0, labelText: "16", yLabelText: 211 }
        ,{ baseline: 178, x: "Autorizacion Nacional", y1: 17, y2: 0, labelText: "17", yLabelText: 195 }
        ,{ baseline: 155, x: "Cuentas & Tarjetas", y1: 23, y2: 0, labelText: "23", yLabelText: 178 }
        ,{ baseline: 116, x: "Decision Intelligence", y1: 39, y2: 0, labelText: "39", yLabelText: 155 }
        ,{ baseline: 0, x: "Ventas", y1: 100, y2: 16, labelText: "116", yLabelText: 116 }
      ];
  
      this.primaryXAxis = {
        valueType: 'Category',
        majorGridLines: { width: 0 },
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 }
      };
  
      this.primaryYAxis = {
        majorGridLines: { width: 0 },
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 }
      };
  
      this.title = 'Variacion Absoluta';
      this.subtitle = 'BRL Millones';
    }
  }