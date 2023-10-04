//-------------------------------------------------------//
//  File Name: MyD3Chart.jsx
//  Description: Test for D3 Line Chart
//
//  Parents:
//      - Reports.jsx
//
//  Requirements:
//      - Input Data
//
//  Returns:
//      - D3 Line Chart (given data)
//
// Created By: Corey Yang-Smith
// Date: September 25th, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import
import {useRef, useEffect} from "react";

// D3 Import
import * as d3 from "d3";


//  MAIN FUNCTION
//-------------------------------------------------------//

export default function MyD3Chart({
  data,
  width = 640,
  height = 500,
  marginTop = 40,
  marginRight = 40,
  marginBottom = 40,
  marginLeft = 40
}) {
  const gx = useRef();
  const gy = useRef();
  const x = d3.scaleLinear([0, data.length - 1], [marginLeft, width - marginRight]);
  const y = d3.scaleLinear(d3.extent(data), [height - marginBottom, marginTop]);
  const line = d3.line((d, i) => x(i), y);
  useEffect(() => void d3.select(gx.current).call(d3.axisBottom(x)), [gx, x]);
  useEffect(() => void d3.select(gy.current).call(d3.axisLeft(y)), [gy, y]);
  return (
    <svg width={width} height={height}>
      <g ref={gx} transform={`translate(0,${height - marginBottom})`} />
      <g ref={gy} transform={`translate(${marginLeft},0)`} />
      <path fill="none" stroke="currentColor" strokeWidth="1.5" d={line(data)} />
      <g fill="white" stroke="currentColor" strokeWidth="1.5">
        {data.map((d, i) => (<circle key={i} cx={x(i)} cy={y(d)} r="2.5" />))}
      </g>
    </svg>
  );
}