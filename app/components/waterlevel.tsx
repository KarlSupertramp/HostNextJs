import { LineChart } from '@mui/x-charts/LineChart';
import {
  useBrush,
  useDrawingArea,
  useLineSeries,
  useXScale,
} from '@mui/x-charts/hooks';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { Card, Container, Typography } from '@mui/material';

function CustomBrushOverlay() {
  const theme = useTheme();
  const drawingArea = useDrawingArea();
  const brush = useBrush();
  const xScale = useXScale<'point'>();
  const series = useLineSeries('wl');

  if (!brush || !series) {
    return null;
  }

  const { left, top, width, height } = drawingArea;

  // Clamp coordinates to drawing area
  const clampX = (x: number) => Math.max(left, Math.min(left + width, x));
  const clampedStartX = clampX(brush.start.x!);
  const clampedCurrentX = clampX(brush.current.x!);

  const minX = Math.min(clampedStartX, clampedCurrentX);
  const maxX = Math.max(clampedStartX, clampedCurrentX);
  const rectWidth = maxX - minX;

  const color = theme.palette.primary.main;

  if (rectWidth < 1) {
    return null;
  }

  const getIndex = (x: number) =>
    Math.floor(
      (x - Math.min(...xScale.range()) + xScale.step() / 2) / xScale.step(),
    );
  // Calculate the approximate data indices based on x position
  const startIndex = getIndex(clampedStartX);
  const currentIndex = getIndex(clampedCurrentX);

  const startValue = series.data[startIndex]!;
  const currentValue = series.data[currentIndex]!;
  const difference = currentValue - startValue;
  const percentChange = ((difference / startValue) * 100).toFixed(2);

  // Get the date labels
  const startDate = (xScale.domain()[startIndex] as string) || '';
  const currentDate = (xScale.domain()[currentIndex] as string) || '';

  function formatToShortDate(timestamp: string): string {
    const date = new Date(timestamp);
    const formatted = date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit"
                });
  return formatted;
}

  return (
    <g>
      {/* Start line */}
      <line
        x1={clampedStartX}
        y1={top}
        x2={clampedStartX}
        y2={top + height}
        stroke={color}
        strokeWidth={2}
        strokeDasharray="5,5"
        pointerEvents="none"
      />

      {/* Current line */}
      <line
        x1={clampedCurrentX}
        y1={top}
        x2={clampedCurrentX}
        y2={top + height}
        stroke={color}
        strokeWidth={2}
        strokeDasharray="5,5"
        pointerEvents="none"
      />

      {/* Selection rectangle */}
      <rect
        x={minX}
        y={top}
        width={rectWidth}
        height={height}
        fill={color}
        fillOpacity={0.1}
        pointerEvents="none"
      />

      {/* Start label */}
      <g transform={`translate(${clampedStartX}, ${top + 15})`}>
        <rect x={-30} y={0} width={60} height={40} fill={color} rx={4} />
        {/* Date label */}
        <text x={0} y={16} textAnchor="middle" fill="white" fontSize={10}>
          {formatToShortDate(startDate)}
        </text>
        {/* Value label */}
        <text
          x={0}
          y={32}
          textAnchor="middle"
          fill="white"
          fontSize={11}
          fontWeight="bold"
        >
          {startValue.toFixed(2)}
        </text>
      </g>

      {/* End label */}
      <g transform={`translate(${clampedCurrentX}, ${top + 15})`}>
        <rect x={-30} y={0} width={60} height={40} fill={color} rx={4} />
        {/* Date label */}
        <text x={0} y={16} textAnchor="middle" fill="white" fontSize={10}>
          {formatToShortDate(currentDate)}
        </text>
        {/* Value label */}
        <text
          x={0}
          y={32}
          textAnchor="middle"
          fill="white"
          fontSize={11}
          fontWeight="bold"
        >
          {currentValue.toFixed(2)}
        </text>
      </g>

      {/* Difference label in the middle */}
      <g transform={`translate(${(minX + maxX) / 2}, ${top + height - 30})`}>
        <rect
          x={-50}
          y={0}
          width={100}
          height={26}
          fill={
            difference >= 0 ? theme.palette.success.main : theme.palette.error.main
          }
          rx={4}
        />
        <text
          x={0}
          y={17}
          textAnchor="middle"
          fill="white"
          fontSize={12}
          fontWeight="bold"
        >
          {difference >= 0 ? '+' : ''}
          {difference.toFixed(2)} ({percentChange}%)
        </text>
      </g>
    </g>
  );
}


export default function Waterlevel({ timeSpanDays } : { timeSpanDays: number }) {

  type Measurement = {
    timestamp: string;
    value: number | null;
  };

  async function fetchMeasurements(stationId: string): Promise<Measurement[]> {

    try {
      const response = await fetch(
        `https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/${stationId}/W/measurements.json?start=P${timeSpanDays}D`
      );
  
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
  
      const data: Measurement[] = await response.json();
      console.log(data.length)
      return data;
  
    } catch (error) {
      console.error("Failed to fetch measurements:", error);
      return [];
    }
  }  

  const [dataSpeyer, setDataSpeyer] = useState<Measurement[]>([]);
  const [dataHeidelberg, setDataHeidelberg] = useState<Measurement[]>([]);
  useEffect(() => { fetchMeasurements("2cb8ae5b-c5c9-4fa8-bac0-bb724f2754f4").then(setDataSpeyer) }, []);
  useEffect(() => { fetchMeasurements("827b2685-47ec-44df-a90f-980f5e0c1591").then(setDataHeidelberg) }, []);

  return (
      <Card sx={{
        borderRadius: 2,
        p: 1
      }}> 
        <Typography variant="body2" color="text.secondary" m={3}>Knowing the water level of the rivers in my area is crutial for a fisherman like myself:</Typography>
        <LineChart
          height={300}
          series={[
            {
              data: dataSpeyer.map((d) => d.value),
              label: 'Rhein / Speyer',
              showMark: false,
              id: 'speyer',
            },
            {
              data: dataHeidelberg.map((d) => d.value),
              label: 'Neckar / Heidelberg',
              showMark: false,
              id: 'heidelberg',
            },
          ]}
          
          brushConfig={{ enabled: true }}
          xAxis={[
            {
              data: dataSpeyer.map((d) => d.timestamp),
              scaleType: 'point',
              tickInterval: (value: string, index) => value.includes("T00:00"),
              valueFormatter: (value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit"
                });
              },     
            },            
          ]}
          >
          <CustomBrushOverlay />
        </LineChart>
       
      </Card>
  );
}
