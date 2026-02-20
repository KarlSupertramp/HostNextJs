import { LineChart } from '@mui/x-charts/LineChart';
import { useEffect, useState } from 'react';
import { Card, Link, Typography } from '@mui/material';


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
        <Typography variant="body2" color="text.secondary" m={3}>Knowing the water level of the rivers in my area is crutial for a fisherman like myself.</Typography>
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
          ]}>
        </LineChart>        
         <Link justifyContent={"right"} href={"https://www.pegelonline.wsv.de"} fontSize={"0.8em"} variant="body2" color="text.primary" mx={3}>API: pegelonline.wsv.de</Link>
      </Card>
  );
}
