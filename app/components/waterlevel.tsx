import { LineChart } from '@mui/x-charts/LineChart';
import { useEffect, useState } from 'react';
import {  Card, Checkbox, FormControlLabel, Link, MenuItem, Select, SelectChangeEvent, Stack, Typography, useTheme } from '@mui/material';
import { useTranslations } from 'next-intl';

export default function Waterlevel() {
  const t = useTranslations('Showroom');
  
  type Measurement = {
    timestamp: string;
    value: number | null;
  };

  const theme = useTheme();
  const [dataSpeyer, setDataSpeyer] = useState<Measurement[]>([]);
  const [dataHeidelberg, setDataHeidelberg] = useState<Measurement[]>([]);

  const [days, setDays] = useState("14");
  const handleChange = (event: SelectChangeEvent) => {
    setDays(event.target.value);
  };

  const [showRhein, setShowRhein] = useState(true);
  const [showNeckar, setShowNeckar] = useState(true);

  useEffect(() => {
    async function loadData() {
      const [speyer, heidelberg] = await Promise.all([
        fetchMeasurements("2cb8ae5b-c5c9-4fa8-bac0-bb724f2754f4", days),
        fetchMeasurements("827b2685-47ec-44df-a90f-980f5e0c1591", days),
      ]);

      setDataSpeyer(speyer);
      setDataHeidelberg(heidelberg);
    }

    loadData();
  }, [days]);
    
  async function fetchMeasurements(stationId: string, days: string): Promise<Measurement[]> {
    try {
      const response = await fetch(
        `https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/${stationId}/W/measurements.json?start=P${days}D`
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

  const series = [
    showRhein && {
      data: dataSpeyer.map((d) => d.value),
      label: "Rhein / Speyer",
      showMark: false,
      id: "speyer",
    },
    showNeckar && {
      data: dataHeidelberg.map((d) => d.value),
      label: "Neckar / Heidelberg",
      showMark: false,
      id: "heidelberg",
    },
  ].filter(Boolean);

  return (    
      <Card sx={{
        borderRadius: 2,
        p: 1
      }}> 
        <Typography variant="body2" color="text.secondary" m={3}>{t("waterlevelHead")}</Typography>
        <Stack gap={1} mx={3} direction={{ xs: "column", sm: "row" }}>   

          <FormControlLabel
            label={t("days")}
            control={ 
            <Select             
              size="small"                      
              id="daysSelect"
              value={days}
              onChange={handleChange}
              sx={{ mr: 1, border:0, backgroundColor: "background.defaultLight"}}
              >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={14}>14</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>   
          }/>

          <FormControlLabel
            label="Rhein"
            control={
              <Checkbox
                checked={showRhein}
                onChange={(e) => setShowRhein(e.target.checked)}
              />
            }
          />

          <FormControlLabel
            label="Neckar"
            control={
              <Checkbox
                checked={showNeckar}
                onChange={(e) => setShowNeckar(e.target.checked)}
              />
            }
          />

        </Stack>        
        <LineChart   
          height={180}
          sx={{
             "& .MuiChartsAxis-line": {
              stroke: theme.palette.border.main,
           },
           "& .MuiChartsAxis-tick": {
              stroke: theme.palette.border.main,
            },
            "& .MuiChartsAxis-tickLabel": {
              fill: theme.palette.border.main,
            }
          }}
          colors={[ theme.palette.data.cyan, theme.palette.data.blue ]}
          series={series}
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
        <Link href={"https://www.pegelonline.wsv.de"} fontSize={"0.8em"} variant="body2"  mx={3}>API: pegelonline.wsv.de</Link>
      </Card>
  );
}
