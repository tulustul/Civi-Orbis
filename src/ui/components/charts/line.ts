import { DataSeries } from "./types";

export function drawLineChart(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  chart: DataSeries,
  minValue: number,
  maxValue: number
) {
  function getYValue(value: number) {
    return (
      canvas.height -
      ((value - minValue) / (maxValue - minValue)) * canvas.height
    );
  }
  ctx.strokeStyle = chart.color;
  ctx.lineWidth = 3;

  let x = 0;

  ctx.beginPath();
  ctx.moveTo(x, getYValue(chart.data[0]));
  const xStep = canvas.width / chart.data.length;
  for (let i = 1; i < chart.data.length; i++) {
    x += xStep;
    ctx.lineTo(x, getYValue(chart.data[i]));
  }
  ctx.stroke();
}
