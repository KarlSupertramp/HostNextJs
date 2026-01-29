"use client";

import { Box, Container, Typography, Grid, Chip, Stack } from "@mui/material";
import { BackButton, urlEndWith } from "../components/backbutton";
import { useEffect, useState } from "react";
import HandymanIcon from '@mui/icons-material/Handyman';
import CodeIcon from '@mui/icons-material/SettingsEthernet';
import BrushIcon from '@mui/icons-material/Brush';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import { useTranslations } from "next-intl";

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
    "ASP.NET",
    "JavaScript", 
    "TypeScript", 
    "Dart",
    "HTML / CSS", 
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
    "Adobe Illustrator",
    "Adobe Premiere",
    "Adobe After Effects",
    "Office 365"
  ];

  const devOps = [
    "Git",
    "Azure DevOps",
    "SCRUM / Secure SCRUM",
    "Kubernetes",
    "Docker"
  ];
  
  const ChipSection = ({ title, items, icon }) => (
    <Box sx={{ mb: 2, boxShadow: 3, bgcolor: "background.paper", p: 2, borderRadius: 2 }}>
      <Stack spacing={2} direction="row" alignItems="center" mb={2}>
        {icon}
        <Typography variant="h6">{title}</Typography>
      </Stack>
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


  
const SkillArticle = ({ title, body } : {title: string, body: string}) => (
  <Box sx={{ mb: 4, boxShadow: 3, bgcolor: "background.paper", p: 2, borderRadius: 2 }}>
    <Typography mb={1} variant="h6">
      {title}
    </Typography>

    <Typography
      component="div"
      variant="body1"
      color="text.secondary"
      sx={{
        mt: 0,
        "& p": { margin: 0, marginBottom: "0.75rem" },
        "& b, & strong": { fontWeight: 700, color: "text.primary" },
      }}
      dangerouslySetInnerHTML={{ __html: body }}
    />
  </Box>
);
  
  const [isSubPage, setIsSubPage] = useState(false);
  useEffect(() => {
    setIsSubPage(urlEndWith("/skills"));
  });

  const t = useTranslations('Skills');

  return (
    <Box>      
      {isSubPage && <BackButton />}
      <Container maxWidth="lg" sx={{ py: 6 }}>         
        <Typography variant="h3" component="h1" gutterBottom>
          Skills
        </Typography>

       <SkillArticle
        title="User Experience Design"
        body={t("ux1")}/>

      <SkillArticle
          title="Project Management"
          body={`<p>${t("management1")}</p>
                    ${t("management2")}`}/>
        <SkillArticle
          title="Frontend & Mobile Development"
          body={`<p>${t("frontend1")}</p>
                    ${t("frontend2")}`}/>

        <SkillArticle
          title="Unity Development (Realtime 3D)"
          body={ `${t("unity1")}`}/>    

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <ChipSection icon={<HandymanIcon />} title={t("devTools")} items={devTools} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ChipSection icon={<CodeIcon />} title={t("programming")} items={languages} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ChipSection icon={<DevicesOtherIcon />} title={t("platforms")} items={platforms} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ChipSection icon={<BrushIcon />} title={t("creativeTools")} items={creativeTools} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ChipSection icon={<CloudSyncIcon />} title="DevOps" items={devOps} />
          </Grid>
        </Grid>

        <Box sx={{ my: 4 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            {t("fluentLanguages")}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            🇩🇪 {t("de")}<br />
            🇬🇧 {t("en")}
          </Typography>
        </Box>      
      </Container>
    </Box>
  );
}
