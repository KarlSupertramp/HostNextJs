import { Box, Button, Container, Stack } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { LocaleSwitcher } from "./localeSwitcher";

export const urlEndWith = (substring) =>
{
  var href = window.location.href
  return href.endsWith(substring);
}

export function BackButton() 
{ 
  return (
    <Box sx={{ mb: 2, display: "flex", p: 3, bgcolor: "primary.main" }}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}>          
        <Stack direction={"row"} gap={1}>          
          <Button href={"/"}
          sx={{
            boxShadow: 3,
            maxWidth: "50px",
            fontWeight: "bold",
            color: "#eda916",
            backgroundColor: "#282831",
            ":hover": {
              color: "#282831",
              backgroundColor: "#eda916",
              },
            }}>
            <ChevronLeftIcon />
          </Button>   
          <LocaleSwitcher/>
        </Stack>
      </Container>
    </Box>
  );
}