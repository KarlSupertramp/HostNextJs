"use client";

import { Box, Container, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  
  const t = useTranslations("About");

  return (
    <Box>      
      <Container maxWidth="lg" sx={{ py: 2 }}> 

        <Typography variant="body2" color="text.secondary" paragraph sx={{ mt: 0 }}>
          {t("about0")}
        </Typography>

        <Typography variant="body2" color="text.secondary" paragraph sx={{ mt: 0 }}>
          {t("about1")}
        </Typography>

        <Typography variant="body2" color="text.secondary" paragraph sx={{ mt: 0 }}>
          {t("about2")}
        </Typography>

        <Box sx={{      
          width: "70%", 
          mx: "auto",
          mb: 2, 
          p: 1,
          bgcolor: "background.blue",
          border: 1,
          borderColor: "border.secondary",
          borderBottomLeftRadius: 100,
          borderBottomRightRadius: 100,
          borderTopRightRadius: 100 }}>
          <Typography sx={{ textAlign: "center", fontStyle: "italic"}}>
            "Every <b>THING</b> is an interface!"
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary" paragraph>
        {t("about3")}
        </Typography>       
      </Container>
    </Box>
  );
}
