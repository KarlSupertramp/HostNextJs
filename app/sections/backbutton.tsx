import { Box, Container, Link, Stack, Typography } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { LocaleSwitcher } from "../components/localeSwitcher";
import { useEffect, useState } from "react";

interface BackButtonProps {
  title?: string | null;
  disabled?: boolean;
}

export function BackButton({ title, disabled = false }: BackButtonProps) 
{ 
  const [embedded, setEmbedded] = useState(true);

  useEffect(() => {
    const isEmbedded = window.location.search.includes("?embedded");
    setEmbedded(isEmbedded);
  }, []);

  return (
    <Box sx={{ display: (embedded || disabled) ? "none" : "flex" }}>
      <Container
        maxWidth="lg"
        sx={{
          py: 1,
          mb: 2,
          bgcolor: "background.defaultLight",
          borderBottomRightRadius: 32,
          borderBottomLeftRadius: 32,
          display: "flex",
          flexDirection: "column"
        }}>        
        <Stack justifyContent={"space-between"} direction={"row"}>          
          <Link href={"/"}>
            <ChevronLeftIcon />
          </Link>     
          {title && <Typography variant="body1" alignSelf={"center"}>{title}</Typography>}  
          <LocaleSwitcher/>
        </Stack>
      </Container>
    </Box>
  );
}