"use client";

import { Box, Container, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  
  const t = useTranslations("About");

  return (
    <Box>   
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h6" component="h1" gutterBottom>
                 {t("title")}
        </Typography>

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
          p: 2,
          bgcolor: "background.defaultLight",
          border: 1,
          borderColor: "border.secondary",
          borderBottomLeftRadius: 100,
          borderBottomRightRadius: 100,
          borderTopRightRadius: 100 }}>
          <Typography color="text.primary" variant="body1" sx={{ textAlign: "center", fontStyle: "italic"}}>
            " Every <b>THING</b> is an interface! "
          </Typography>
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
