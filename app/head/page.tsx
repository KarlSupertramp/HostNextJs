import * as React from "react";

import { Typography, Stack, Button, Box, Container } from "@mui/material";
import Link from "next/link";

function NavButton({ href, label }) {
  return (
    <Link href={href}>
      <Button sx={{minWidth: "130px"}} variant="contained" >{label}</Button>
    </Link>
  );
}

export default function Head() {
  return (
    <Box sx={{ display: "flex",  p: 2, bgcolor: "primary.main" }}>
        <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "space-between" }}>  
            <Stack sx={{ display: "flex", flexDirection: "row",  gap: 2 }}>
                <Box 
                    sx={{
                        borderRadius: 1,
                        border: 2,
                        borderColor: "background.default",
                        width: 85,
                        height: 85,
                        overflow: "hidden",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                    }}
                    >
                    <img
                        src="https://avatars.githubusercontent.com/u/12151775?v=4"
                        alt="Profile Picture of Karl Martin"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                </Box>       
                <Stack>         
                    <Typography sx={{ fontWeight: "bold", color: "background.paper", fontSize: { xs: 'h4.fontSize', sm: 'h3.fontSize' } }} variant="h5">
                        Karl Martin
                    </Typography>
                    <Typography sx={{ fontWeight: "bold", color: "background.paper" }}> 
                        UX Technologist / Developer              
                    </Typography>                      
                </Stack>
            </Stack>
            <Stack display={{ xs: "none", sm: "flex" }} direction="column" spacing={1}>
                {NavButton({ href: "/about", label: "About Me" })}
                {NavButton({ href: "/showroom", label: "Showroom" })}
                {NavButton({ href: "/skills", label: "Skills" })}
                {NavButton({ href: "/contact", label: "Contact" })}
            </Stack>  
        </Container>
    </Box>
  );
}
