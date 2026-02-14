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
    <Box sx={{ display: "flex", bgcolor: "background.default" }}>
      <Container
        maxWidth="lg"
        sx={{
          px: 5,
          py: 3,
          bgcolor: "primary.main",
          borderBottomRightRadius: 32,
          borderBottomLeftRadius: 32,
          boxShadow: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}>        
        <Stack direction={"row"} gap={1}>          
          <Button href={"/"}
          sx={{
            boxShadow: 2,
            borderRadius: 2,
            maxWidth: "50px",
            fontWeight: "bold",
            color: "primary.main",
            backgroundColor: "primary.dark",
            ":hover": {
              color: "primary.dark",
            backgroundColor: "primary.main",
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