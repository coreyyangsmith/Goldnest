//  IMPORTS
//-------------------------------------------------------//

// React Import
import React from 'react'

// ECharts
import ReactEcharts from "echarts-for-react";


//  UTILITY
//-------------------------------------------------------//

const data = [
  {
    name: 'Grandpa',
    children: [
      {
        name: 'Uncle Leo',
        value: 15,
        children: [
          {
            name: 'Cousin Jack',
            value: 2
          },
          {
            name: 'Cousin Mary',
            value: 5,
            children: [
              {
                name: 'Jackson',
                value: 2
              }
            ]
          },
          {
            name: 'Cousin Ben',
            value: 4
          }
        ]
      },
      {
        name: 'Father',
        value: 10,
        children: [
          {
            name: 'Me',
            value: 5
          },
          {
            name: 'Brother Peter',
            value: 1
          }
        ]
      }
    ]
  },
  {
    name: 'Nancy',
    children: [
      {
        name: 'Uncle Nike',
        children: [
          {
            name: 'Cousin Betty',
            value: 1
          },
          {
            name: 'Cousin Jenny',
            value: 2
          }
        ]
      }
    ]
  }
];
const option = {
  series: {
    type: 'sunburst',
    data: data,
    radius: [60, '90%'],
    itemStyle: {
      borderRadius: 7,
      borderWidth: 2
    },
    label: {
      color: '#000',
      textBorderColor: '#fff',
      textBorderWidth: 2,
      formatter: function (param) {
        var depth = param.treePathInfo.length;
        if (depth === 2) {
          return 'radial';
        } else if (depth === 3) {
          return 'tangential';
        } else if (depth === 4) {
          return '0';
        }
        return '';
      }
    },
  }
};


//  MAIN FUNCTION
//-------------------------------------------------------//

const SunburstEChartsExample = () => {
  
  return <ReactEcharts option={option}/>
}


//  EXPORTS 
//-------------------------------------------------------//

export default SunburstEChartsExample