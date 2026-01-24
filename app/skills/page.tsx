"use client";

import { Box, Container, Typography, Grid, Chip, Stack } from "@mui/material";
import { BackButton, urlEndWith } from "../layout";
import { useEffect, useState } from "react";

export default function SkillsPage() {
  const devTools = [
    "Unity",
    "Visual Studio / VS Code",
    "Mixed Reality Toolkit",
    "React",
    "Flutter",
    "Next.js",
    "Figma",
    "Framer",
  ];

  const languages = [
    "C# / .NET", 
    "JavaScript", 
    "TypeScript", 
    "HTML/CSS", 
    "ASP.NET"
    ];

  const platforms = [
    "Windows",
    "Universal Windows Platform",
    "HoloLens 1, 2",
    "Magic Leap 2",
    "Android",
    "iOS",
    "Android VR",
    "Web",
  ];

  const creativeTools = [
    "Cinema 4D",
    "Blender",
    "Adobe Photoshop",
    "Adobe Premiere",
    "Adobe After Effects",
  ];

  const devOps = ["Git", "Azure DevOps", "SCRUM / Secure SCRUM"];
  
  const ChipSection = ({ title, items }) => (
    <Box sx={{ mb: 2, boxShadow: 3, bgcolor: "background.paper", p: 2, borderRadius: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        {items.map((item) => (
          <Chip 
          sx={{ minWidth: "100px", color: "text.secondary", borderColor: "primary.offset", backgroundColor: "background.default" }} 
          key={item} 
          label={item} 
          variant="outlined"            
          />
        ))}
      </Stack>
    </Box>
  );
  
  const [isSubPage, setIsSubPage] = useState(false);
  useEffect(() => {
    setIsSubPage(urlEndWith("/skills"));
  });

  return (
    <Box sx={{ py: 3 }}>
      <Container maxWidth="lg">      
        {isSubPage && <BackButton />}
        
        <Typography variant="h3" component="h1" gutterBottom>
          Skills
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <ChipSection title="Development Tools & Skills" items={devTools} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ChipSection title="Programming Languages / Coding" items={languages} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ChipSection title="Platform Resumé" items={platforms} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ChipSection title="Other Creative Tools" items={creativeTools} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ChipSection title="DevOps" items={devOps} />
          </Grid>
        </Grid>

        <Box sx={{ my: 4 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Fluent Languages
          </Typography>
          <Typography variant="body1" color="text.secondary">
            🇩🇪 German<br />
            🇬🇧 English
          </Typography>
        </Box>      
      </Container>
    </Box>
  );
}
