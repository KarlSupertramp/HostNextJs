"use client";

import { Box, Container, Typography,  Chip, Stack, Divider, Grid, IconButton } from "@mui/material";
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
import Image from "next/image";
import UnityLogo from "../../public/UnityLogo_White.svg";
import { BackButton } from "../sections/backbutton";
import WebAssetIcon from '@mui/icons-material/WebAsset';

export default function SkillsPage({ id }: { id?: string }){
  const devTools = [
    { name: "Unity", url: "https://unity.com/" },
    { name: "Visual Studio / VS Code", url: "https://code.visualstudio.com/" },
    { name: "Mixed Reality Toolkit", url: "https://learn.microsoft.com/en-us/windows/mixed-reality/mrtk-unity/mrtk3-overview/" },
    { name: "React", url: "https://react.dev/" },
    { name: "React Native", url: "https://reactnative.dev/" },
    { name: "Flutter", url: "https://flutter.dev/" },
    { name: "Next.js", url: "https://nextjs.org/" },
    { name: "Figma", url: "https://www.figma.com/" },
    { name: "Framer", url: "https://www.framer.com/" },
  ];

  const languages = [
    { name: "C# / .NET / ASP.NET", url: "https://dotnet.microsoft.com/" }, 
    { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/" }, 
    { name: "TypeScript", url: "https://www.typescriptlang.org/" }, 
    { name: "Dart", url: "https://dart.dev/" },
    { name: "HTML / CSS", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/" }, 
  ];

  const platforms = [
    { name: "Windows", url: "https://www.microsoft.com/en-us/windows" },
    { name: "Universal Windows Platform", url: "https://learn.microsoft.com/en-us/windows/uwp/" },
    { name: "HoloLens 1, 2", url: "https://www.microsoft.com/en-us/hololens/" },
    { name: "Magic Leap 2", url: "https://www.magicleap.com/" },
    { name: "Android", url: "https://www.android.com/" },
    { name: "iOS", url: "https://www.apple.com/ios/" },
    { name: "Android VR", url: "https://developer.android.com/distribute/play-services/play-vr" },
    { name: "Web", url: "https://www.w3.org/" },
  ];

  const creativeTools = [
    { name: "Cinema 4D", url: "https://www.maxon.net/en/cinema-4d" },
    { name: "Blender", url: "https://www.blender.org/" },
    { name: "Adobe Photoshop", url: "https://www.adobe.com/products/photoshop.html" },
    { name: "Adobe Illustrator", url: "https://www.adobe.com/products/illustrator.html" },
    { name: "Adobe Premiere", url: "https://www.adobe.com/products/premiere.html" },
    { name: "Adobe After Effects", url: "https://www.adobe.com/products/aftereffects.html" },
    { name: "Office 365", url: "https://www.microsoft.com/en-us/microsoft-365/" }
  ];

  const devOps = [
    { name: "Git", url: "https://git-scm.com/" },
    { name: "Azure DevOps", url: "https://azure.microsoft.com/en-us/products/devops/" },
    { name: "SCRUM / Secure SCRUM", url: "https://www.scrum.org/" },
    { name: "Kubernetes", url: "https://kubernetes.io/" },
    { name: "Docker", url: "https://www.docker.com/" }
  ];
  
  const ChipSection = ({ title, items, icon }) => (
    <Box sx={{ bgcolor: "background.defaultLight", p: 3, borderRadius: 2 }}>
      <Stack spacing={2} direction="row" alignItems="center" mb={2}>
        {icon}
        <Typography variant="h6">{title}</Typography>
      </Stack>

      <Divider sx={{ my: 2, borderColor: "border.secondary"}} />
      
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        {items.map((item) => {
          const itemName = typeof item === 'string' ? item : item.name;
          const itemUrl = typeof item === 'string' ? null : item.url;
          
          return (
            <Chip           
              key={itemName} 
              label={itemName}
              onClick={() => itemUrl && window.open(itemUrl, '_blank')}
              sx={{
                cursor: itemUrl ? 'pointer' : 'default',
                transition: 'all 0.2s ease',
                ...(itemUrl && {
                  '&:hover': {
         
                    bgcolor: "#eda916",  
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  }
                })
              }}
            />
          );
        })}
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
  const singlePage = window.location.pathname.toLocaleLowerCase().endsWith("/skills");

  return (
    <Box id={id} bgcolor={"background.default"} >      
      <BackButton title={"Skills"} disabled={!singlePage} />
      <Container  maxWidth="lg" sx={{ py: singlePage ? 2 : 5 }}>         
          {!singlePage && 
          <Stack mb={2} direction={"row"} alignItems={"center"}  justifyContent={"space-between"}>
            <Typography variant="h4" component="h1" gutterBottom>
              Skills
            </Typography>
            <IconButton title="Fullscreen" href={"/skills"} aria-label="Fullscreen" size="small">
              <WebAssetIcon />
            </IconButton>
          </Stack>
        }
        <SkillArticle
          bgIcon={<AssignmentIcon sx={{ color:"white", fontSize: 220 }} />}
          title="Project Management"         
          paragraphs={[t("management1"), t("management2")]}
          chips={["Product Owner", "Scrum Master"]}
        />

       <SkillArticle
          bgIcon={<DrawIcon sx={{ color:"white", fontSize: 220 }} />}
          title="User Experience Design"
          paragraphs={[t("ux1")]}
          chips={["Usability", "Design Thinking", "User Focussed"]}
        />

        <SkillArticle  
          bgIcon={<PhonelinkIcon sx={{ color:"white", fontSize: 220 }} />}
          title="Frontend & Mobile Development"
          paragraphs={[t("frontend1"), t("frontend2")]}
          chips={["Cross Platform", "Responsive Layout"]}
        />

        <SkillArticle
          bgIcon={<Image width={250} src={UnityLogo} alt={"unity"}/>}
          title="Unity Development"
          paragraphs={[t("unity1"), t("unity2"), t("unity3")]}
          chips={["Automotive Interfaces", "Mixed Reality", "Realtime 3D", "Data Visualization", "Prototyping"]}
        />
        
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
