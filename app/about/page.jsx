"use client";

import { Box, Container, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { SineWaveBox } from "../three/sineWave3d";

export default function AboutPage() {
  
  const t = useTranslations("About");

  return (
    <Box>   
      <Container maxWidth="lg" sx={{ py: 4 }}>

        <Typography variant="body2" color="text.secondary" paragraph sx={{ mt: 0 }}>
          {t("about0")}
        </Typography>

        <Typography variant="body2" color="text.secondary" paragraph>
          {t("about3")}
        </Typography> 

        <Box sx={{      
          width: "70%", 
          mx: "auto",
          my: 3, 
          p: 6,
          bgcolor: "background.defaultDark",
          border: .1,
          borderColor: "border.secondary",   
          borderBottomLeftRadius: 100,
          borderBottomRightRadius: 100,
          borderTopRightRadius: 100,
          position: "relative",
          overflow: "hidden" }}>                          
          <Typography 
              color="text.secondary"
              variant="h6" 
              sx={{ 
                textAlign: "center",
                fontStyle: "italic",
                position: "relative",
                zIndex: 1 
              }}>
            " Every <span style={{ fontWeight: 'bold', color: '#eda916' }}>THING</span> is an interface! "
          </Typography>        
          <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}>
            <SineWaveBox 
              color="#6e95b9"
              xDensity={0.08} 
              yDensity={0.08} 
              xAmount={350}
              yAmount={50}
              timeScale={1.1}
            />
          </Box>
        </Box>

        <Typography variant="body2" color="text.secondary" paragraph sx={{ mt: 0 }}>
          {t("about1")}
        </Typography>

        <Typography variant="body2" color="text.secondary" paragraph sx={{ mt: 0 }}>
          {t("about2")}
        </Typography>

      </Container>
    </Box>
  );
}
