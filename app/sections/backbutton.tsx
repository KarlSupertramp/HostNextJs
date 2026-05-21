import { Box, Button, Container, Stack } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { LocaleSwitcher } from "../components/localeSwitcher";

export function BackButton() 
{ 
  return (
    <Box sx={{ display: "flex" }}>
      <Container
        maxWidth="lg"
        sx={{
          px: 5,
          py: 2,
          bgcolor: "background.defaultLight",
          borderBottomRightRadius: 32,
          borderBottomLeftRadius: 32,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}>        
        <Stack justifyContent={"space-between"} direction={"row"} gap={1}>          
          <Button href={"/"}
          sx={{
            boxShadow: 2,
            borderRadius: 2,
            maxWidth: "50px",
            fontWeight: "bold"            
            }}>
            <ChevronLeftIcon />
          </Button>   
          <LocaleSwitcher/>
        </Stack>
      </Container>
    </Box>
  );
}