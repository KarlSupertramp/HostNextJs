import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { LocaleSwitcher } from "../components/localeSwitcher";

interface BackButtonProps {
  title?: string | null;
}

export function BackButton({ title }: BackButtonProps) 
{ 
  return (
    <Box sx={{ display: "flex" }}>
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