"use client";

import { Box, Container, Typography,  Chip, Stack, Divider, Grid } from "@mui/material";
import HandymanIcon from '@mui/icons-material/Handyman';
import CodeIcon from '@mui/icons-material/SettingsEthernet';
import BrushIcon from '@mui/icons-material/Brush';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import { useTranslations } from "next-intl";
import { ReactElement } from "react";

import DrawIcon from '@mui/icons-material/Draw';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';

import Image from "next/image";
import UnityLogo from "../../public/UnityLogo_White.svg";


export default function SkillsPage({ id }: { id?: string }){
  const devTools = [
    "Unity",
    "Visual Studio / VS Code",
    "Mixed Reality Toolkit",
    "React",
    "React Native",
    "Flutter",
    "Next.js",
    "Figma",
    "Framer",
  ];

  const languages = [
    "C# / .NET / ASP.NET", 
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
    <Box sx={{ bgcolor: "background.defaultLight", p: 3, borderRadius: 2 }}>
      <Stack spacing={2} direction="row" alignItems="center" mb={2}>
        {icon}
        <Typography variant="h6">{title}</Typography>
      </Stack>

      <Divider sx={{ my: 2, borderColor: "border.secondary"}} />
      
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        {items.map((item) => (
          <Chip           
            key={item} 
            label={item}  
          />
        ))}
      </Stack>
    </Box>
  );
  
  const SkillArticle = ({
    title,
    paragraphs,
    chips = [],
    bgIcon
  }: {
    title: string;
    paragraphs: string[];
    chips?: string[];
    bgIcon?: ReactElement
  }) => (
    <Box
      sx={{
        mb: 2,
        bgcolor: "background.defaultLight",
        p: 3,
        borderRadius: 2,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {bgIcon && 
        <Box
        sx={{
          position: "absolute",
          right: 25,
          top: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
          opacity: 0.1       
        }}
        >         
          {bgIcon}
        </Box>
      }

      <Typography mb={1} variant="h6">
        {title}
      </Typography>

      {paragraphs.map((paragraph, index) => {
        return (
          <Typography
            key={index}
            component="p"
            variant="body2"
            color="text.secondary"    
            sx={{
              mb: 1.5,
              "& b, & strong": {
                fontWeight: 700,
                color: "text.primary",
              },
            }}
          >
            {paragraph}
          </Typography>
        );
      })}

      <Divider  sx={{ my: 3, borderColor: "border.secondary" }} />

      <Stack mt={2} direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        {chips.map((item) => (
          <Chip          
            key={item}
            label={item}
          />
        ))}
      </Stack>
    </Box>
  );

  const t = useTranslations('Skills');

  return (
    <Box id={id} bgcolor={"background.default"} >      
      <Container  maxWidth="lg" sx={{ py: 15 }}>         
        <Typography variant="h4" component="h1" mb={2}>
         {t("head")}
        </Typography>

       <SkillArticle
          bgIcon={<DrawIcon sx={{ color:"white", fontSize: 220 }} />}
          title="User Experience Design"
          paragraphs={[t("ux1")]}
          chips={["Usability", "Design Thinking", "User Focussed"]}/>

        <SkillArticle
          bgIcon={<AssignmentIcon sx={{ color:"white", fontSize: 220 }} />}
          title="Project Management"         
          paragraphs={[t("management1"), t("management2")]}
          chips={["Product Owner", "Scrum Master"]}/>

        <SkillArticle  
          bgIcon={<PhonelinkIcon sx={{ color:"white", fontSize: 220 }} />}
          title="Frontend & Mobile Development"
          paragraphs={[t("frontend1"), t("frontend2")]}
          chips={["Cross Platform", "Responsive Layout"]}/>

        <SkillArticle
          bgIcon={<Image width={250} src={UnityLogo} alt={"unity"}/>}
          title="Unity Development"
          paragraphs={[t("unity1"), t("unity2"), t("unity3")]}
          chips={["Automotive Interfaces", "Mixed Reality", "Realtime 3D", "Data Visualization", "Prototyping" ]}/>

        <Typography mt={6} mb={2} variant="h5" component="h1">
          {t("tools")}
        </Typography>
        
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <ChipSection icon={<HandymanIcon sx={{color: "white"}}  />} title={t("devTools")} items={devTools} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ChipSection icon={<CodeIcon sx={{color: "white"}} />} title={t("programming")} items={languages} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ChipSection icon={<DevicesOtherIcon sx={{color: "white"}}  />} title={t("platforms")} items={platforms} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ChipSection icon={<BrushIcon sx={{color: "white"}}  />} title={t("creativeTools")} items={creativeTools} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ChipSection icon={<CloudSyncIcon sx={{color: "white"}}  />} title="DevOps" items={devOps} />
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
