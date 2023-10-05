//  IMPORTS
//-------------------------------------------------------//

// React Import
import React from 'react'

// ECharts
import ReactEcharts from "echarts-for-react";


//  UTILITY
//-------------------------------------------------------//

const option = {
  series: [
    {
      type: 'treemap',
      roam: 'move',
      nodeClick: false,      
      data: [
        {
          name: 'nodeA',
          value: 10,
          children: [
            {
              name: 'nodeAa',
              value: 4
            },
            {
              name: 'nodeAb',
              value: 6
            }
          ]
        },
        {
          name: 'nodeB',
          value: 20,
          children: [
            {
              name: 'nodeBa',
              value: 20,
              children: [
                {
                  name: 'nodeBa1',
                  value: 20
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};


//  MAIN FUNCTION
//-------------------------------------------------------//

const TreechartEChartsExample = () => {
  
  return <ReactEcharts option={option}/>
}


//  EXPORTS 
//-------------------------------------------------------//

export default TreechartEChartsExample