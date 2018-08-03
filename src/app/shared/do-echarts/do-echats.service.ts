import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DoEchartsService {

  private _assetsPath = 'assets/map/';
  private _themePath = 'assets/theme/';

  constructor(private httpClient: HttpClient) { }

  public getMapJSON(mapName: string): Observable<Object> {
    return this.httpClient.get(this._assetsPath + mapName + '.json');
  }

  public getTheme() {
    return {
      // tslint:disable-next-line:max-line-length
      'color': ['#00b2ff', '#cd4b4b', '#6f4ce8', '#e3ae05', '#296FDD', '#65feca', '#e3ae05', '#e33f2e', '#6f4ce8'],
      'backgroundColor': 'rgba(91,92,110,0)',
      'textStyle': {},
      'title': {
        'show': true,
        'left': 'center',
        'top': 5,
        'textStyle': {
          'color': '#D9DADC',
        },
        'subtextStyle': {
          'color': '#D9DADC',
        },
      },
      'line': {
        'itemStyle': {
          'normal': {
            'borderWidth': '2',
          },
        },
        'lineStyle': {
          'normal': {
            'width': '3',
          },
        },
        'symbolSize': '7',
        'symbol': 'circle',
        'smooth': false,
        'label': {
          'normal': {
            'show': false,
            'color': '#D9DADC',
          },
        },
      },
      'radar': {
        'axisLine': {
          'lineStyle': {
            'opacity': 0.2,
          },
        },
        'splitLine': {
          'lineStyle': {
            'opacity': 0.2,
          },
        },
        'name': {
          'textStyle': {
            'color': '#D9DADC',
            'fontSize': 12,
            // 'fontWeight': 'bold',
          },
        },
        'symbolSize': '7',
        'symbol': 'circle',
        'smooth': true,
        'splitArea': {
          'show': false,
          'areaStyle': {
            'color': ['rgba(250,250,250,0.1)', 'rgba(100,100,100,0.1)'],
          },
        },
      },
      'bar': {
        'itemStyle': {
          'normal': {
            'barBorderWidth': 0,
            'barBorderColor': '#D9DADC',
          },
          'emphasis': {
            'barBorderWidth': 0,
            'barBorderColor': '#D9DADC',
          },
        },
        'label': {
          'normal': {
            'show': true,
          },
        },
      },
      'pie': {
        'label': {
          'normal': {
            'show': true,
            'fontSize': 12,
            'fontWeight': 'bold',
            'color': '#D9DADC',
          },
          'emphasis': {
            'show': true,
          },
        },
        'itemStyle': {
          'normal': {
            'borderWidth': 0,
            'borderColor': '#D9DADC',
          },
          'emphasis': {
            'borderWidth': 0,
            'borderColor': '#D9DADC',
          },
        },
      },
      'scatter': {
        'itemStyle': {
          'normal': {
            'color': '#E33F2E',
            'borderWidth': 0,
            'borderColor': '#D9DADC',
          },
          'emphasis': {
            'borderWidth': 0,
            'borderColor': '#D9DADC',
          },
        },
      },
      'boxplot': {
        'itemStyle': {
          'normal': {
            'borderWidth': 0,
            'borderColor': '#D9DADC',
          },
          'emphasis': {
            'borderWidth': 0,
            'borderColor': '#D9DADC',
          },
        },
      },
      'parallel': {
        'itemStyle': {
          'normal': {
            'borderWidth': 0,
            'borderColor': '#D9DADC',
          },
          'emphasis': {
            'borderWidth': 0,
            'borderColor': '#D9DADC',
          },
        },
      },
      'sankey': {
        'itemStyle': {
          'normal': {
            'borderWidth': 0,
            'borderColor': '#D9DADC',
          },
          'emphasis': {
            'borderWidth': 0,
            'borderColor': '#D9DADC',
          },
        },
      },
      'funnel': {
        'itemStyle': {
          'normal': {
            'borderWidth': 0,
            'borderColor': '#D9DADC',
          },
          'emphasis': {
            'borderWidth': 0,
            'borderColor': '#D9DADC',
          },
        },
      },
      'gauge': {
        'itemStyle': {
          'normal': {
            'borderWidth': 0,
            'borderColor': '#D9DADC',
          },
          'emphasis': {
            'borderWidth': 0,
            'borderColor': '#D9DADC',
          },
        },
      },
      'candlestick': {
        'itemStyle': {
          'normal': {
            'color': '#e098c7',
            'color0': 'transparent',
            'borderColor': '#e098c7',
            'borderColor0': '#8fd3e8',
            'borderWidth': '2',
          },
        },
      },
      'graph': {
        'itemStyle': {
          'normal': {
            'borderWidth': 0,
            'borderColor': '#D9DADC',
          },
        },
        'lineStyle': {
          'normal': {
            'width': 1,
            'color': '#aaa',
          },
        },
        'symbolSize': '7',
        'symbol': 'circle',
        'smooth': true,
        'color': [
          '#9b8bba',
          '#e098c7',
          '#8fd3e8',
          '#71669e',
          '#cc70af',
          '#7cb4cc',
        ],
        'label': {
          'normal': {
            'textStyle': {
              'color': '#D9DADC',
            },
          },
        },
      },
      'map': {
        'itemStyle': {
          'normal': {
            'areaColor': '#f1faff',
            'borderColor': '#ccc',
            'borderWidth': 2,
          },
          'emphasis': {
            'areaColor': '#fd6a02',
            'borderColor': '#ccc',
            'borderWidth': 3,
          },
        },
        'label': {
          'normal': {
            'color': '#333',
          },
          'emphasis': {
            'color': '#333',
          },
        },
      },
      'geo': {
        'itemStyle': {
          'normal': {
            'areaColor': '#f1faff',
            'borderColor': '#ccc',
            'borderWidth': 2,
          },
          'emphasis': {
            'areaColor': '#fd6a02',
            'borderColor': '#ccc',
            'borderWidth': 3,
          },
        },
        'label': {
          'normal': {
            'color': '#333',
          },
          'emphasis': {
            'color': '#333',
          },
        },
      },
      'categoryAxis': {
        'axisLabel': {
          'rotate': 0,
          'showMinLabel': true,
          'showMaxLabel': true,
          'textStyle': {
            'color': '#D9DADC',
            'fontSize': 12,
            // 'fontWeight': 'bold',
          },
        },
        'axisLine': {
          'lineStyle': {
            'color': '#2D3F4C',
          },
        },
        'splitLine': {
          'show': false,
        },
        'splitArea': {
          'show': false,
        },
      },
      'valueAxis': {
        'nameTextStyle': {
          'fontSize': 12,
        },
        'axisLabel': {
          'showMinLabel': true,
          'showMaxLabel': true,
          'textStyle': {
            'color': '#D9DADC',
            'fontSize': 12,
            // 'fontWeight': 'bold',
          },
        },
        'axisLine': {
          'lineStyle': {
            'color': '#2D3F4C',
          },
        },
        'splitLine': {
          'show': false,
        },
        'splitArea': {
          'show': false,
        },
      },
      'logAxis': {
        'axisLabel': {
          'showMinLabel': true,
          'showMaxLabel': true,
          'textStyle': {
            'color': '#D9DADC',
            'fontSize': 12,
            'fontWeight': 'bold',
          },
        },
        'axisLine': {
          'lineStyle': {
            'color': '#2D3F4C',
          },
        },
        'splitLine': {
          'show': false,
        },
        'splitArea': {
          'show': false,
        },
      },
      'timeAxis': {
        'axisLabel': {
          'showMinLabel': true,
          'showMaxLabel': true,
          'textStyle': {
            'color': '#D9DADC',
            'fontSize': 12,
            'fontWeight': 'bold',
          },
        },
        'axisLine': {
          'lineStyle': {
            'color': '#2D3F4C',
          },
        },
        'splitLine': {
          'show': false,
        },
        'splitArea': {
          'show': false,
        },
      },
      'toolbox': {
        'iconStyle': {
          'normal': {
            'borderColor': '#999',
          },
          'emphasis': {
            'borderColor': '#666',
          },
        },
      },
      'legend': {
        'textStyle': {
          'color': '#D9DADC',
          'fontSize': 12,
          // 'fontWeight': 'bold',
          // 'fontWeight': 'bold',
        },
        'left': 'center',
        'top': 'bottom',
      },
      'tooltip': {
        'axisPointer': {
          'lineStyle': {
            'color': '#D9DADC',
            'width': 1,
          },
          'crossStyle': {
            'color': '#D9DADC',
            'width': 1,
          },
        },
      },
      'timeline': {
        'axisType': 'category',
        'autoPlay': false,
        'playInterval': 1500,
        'left': '18%',
        'right': '18%',
        'bottom': '10',
        'lineStyle': {
          'color': '#8fd3e8',
          'width': 1,
        },
        'itemStyle': {
          'normal': {
            'color': '#8fd3e8',
            'borderWidth': 1,
          },
          'emphasis': {
            'color': '#8fd3e8',
          },
        },
        'controlStyle': {
          'normal': {
            'color': '#8fd3e8',
            'borderColor': '#8fd3e8',
            'borderWidth': 0.5,
          },
          'emphasis': {
            'color': '#8fd3e8',
            'borderColor': '#8fd3e8',
            'borderWidth': 0.5,
          },
        },
        'checkpointStyle': {
          'color': '#8fd3e8',
          'borderColor': 'rgba(138,124,168,0.37)',
        },
        'label': {
          'normal': {
            'textStyle': {
              'color': '#8fd3e8',
              'fontSize': 12,
              'fontWeight': 'bold',
            },
          },
          'emphasis': {
            'textStyle': {
              'color': '#8fd3e8',
              'fontSize': 12,
              'fontWeight': 'bold',
            },
          },
        },
        'tooltip': {
          'show': false,
        },
      },
      'visualMap': {
        'inRange': {
          'color': [
            '#15b7ff',
            '#05314f',
          ],
        },
      },
      'dataZoom': {
        'backgroundColor': 'rgba(0,0,0,0)',
        'dataBackgroundColor': 'rgba(255,255,255,0.3)',
        'fillerColor': 'rgba(167,183,204,0.4)',
        'handleColor': '#a7b7cc',
        'handleSize': '100%',
        'textStyle': {
          'color': '#333',
        },
      },
      'markPoint': {
        'label': {
          'normal': {
            'textStyle': {
              'color': '#D9DADC',
            },
          },
          'emphasis': {
            'textStyle': {
              'color': '#D9DADC',
            },
          },
        },
      },
    };
  }

}
