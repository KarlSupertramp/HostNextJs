"use client";

import { Box, Container, Typography,  Chip, Stack, Divider, Grid } from "@mui/material";
import { BackButton, urlEndWith } from "../components/backbutton";
import { useEffect, useState } from "react";
import HandymanIcon from '@mui/icons-material/Handyman';
import CodeIcon from '@mui/icons-material/SettingsEthernet';
import BrushIcon from '@mui/icons-material/Brush';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import { useTranslations } from "next-intl";

export default function SkillsPage({ id }: { id?: string }){
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
    <Box sx={{  bgcolor: "background.paper", p: 2, borderRadius: 2 }}>
      <Stack spacing={2} direction="row" alignItems="center" mb={2}>
        {icon}
        <Typography variant="h6">{title}</Typography>
      </Stack>

      <Divider sx={{ my: 2 }} />
      
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        {items.map((item) => (
          <Chip 
            sx={{ boxShadow: 1 ,minWidth: "100px", color: "text.secondary", backgroundColor: "background.default" }} 
            key={item} 
            label={item}  
          />
        ))}
      </Stack>
    </Box>
  );


  
const SkillArticle = ({ title, paragraphs, chips = [] } : {title: string, paragraphs: string[], chips?: string[]}) => (  
  <Box sx={{ mb: 2, bgcolor: "background.paper", p: 2, borderRadius: 2 }}>
    <Typography mb={1} variant="h6">
      {title}
    </Typography>

    {paragraphs.map((paragraph, index) => {
      return (
        <Typography
          key={index}
          component="p"
          variant="body1"
          color="text.secondary"
          sx={{
            mb: 1.5,
            "& b, & strong": { fontWeight: 700, color: "text.primary" },
          }}
        >
          {paragraph}
        </Typography>
      );
    })}

    <Divider sx={{ my: 3 }} />

    <Stack mt={2} direction="row" spacing={1} flexWrap="wrap" useFlexGap>
      {chips.map((item) => (
        <Chip 
          sx={{ boxShadow: 1 ,minWidth: "100px", color: "text.secondary", backgroundColor: "background.default" }} 
          key={item} 
          label={item}  
        />
      ))}
    </Stack>

  </Box>
);
  
  const [isSubPage, setIsSubPage] = useState(false);
  useEffect(() => {
    setIsSubPage(urlEndWith("/skills"));
  });

  const t = useTranslations('Skills');

  return (
    <Box id={id} bgcolor={"background.default"} >      
      {isSubPage && <BackButton />}
      <Container  maxWidth="lg" sx={{ py: 6 }}>         
        <Typography variant="h4" component="h1" mb={2}>
         {t("head")}
        </Typography>

       <SkillArticle
          title="User Experience Design"
          paragraphs={[t("ux1")]}
          chips={["Usability", "Design Thinking", "User Focussed"]}/>

        <SkillArticle
          title="Project Management"         
          paragraphs={[t("management1"), t("management2")]}
          chips={["Product Owner", "Scrum Master"]}/>

        <SkillArticle
          title="Frontend & Mobile Development"
          paragraphs={[t("frontend1"), t("frontend2")]}
          chips={["Cross Platform", "Responsive Layout"]}/>

        <SkillArticle
          title="Unity Development"
          paragraphs={[t("unity1"), t("unity2"), t("unity3")]}
          chips={["Automotive Interfaces", "Mixed Reality", "Realtime 3D", "Data Visualization", "Prototyping" ]}/>

        <Typography mt={6} mb={2} variant="h5" component="h1">
          {t("tools")}
        </Typography>
        <Grid size={12} container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <ChipSection icon={<HandymanIcon />} title={t("devTools")} items={devTools} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <ChipSection icon={<CodeIcon />} title={t("programming")} items={languages} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <ChipSection icon={<DevicesOtherIcon />} title={t("platforms")} items={platforms} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <ChipSection icon={<BrushIcon />} title={t("creativeTools")} items={creativeTools} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
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
