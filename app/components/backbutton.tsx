import { Button } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export const urlEndWith = (substring) =>
{
  var href = window.location.href
  return href.endsWith(substring);
}

export function BackButton() 
{ 
  return (
    <Button href={"/"} sx={{ mb: 4 }} variant="contained">
      <ChevronLeftIcon />
    </Button>   
  );
}