"use client";

import { Box, Container, Typography, Grid, Chip, Stack } from "@mui/material";
import { BackButton, urlEndWith } from "../components/backbutton";
import { useEffect, useState } from "react";
import HandymanIcon from '@mui/icons-material/Handyman';
import CodeIcon from '@mui/icons-material/SettingsEthernet';
import BrushIcon from '@mui/icons-material/Brush';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import CloudSyncIcon from '@mui/icons-material/CloudSync';

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

const SkillArticle = ({ title, body }) => (
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

  return (
    <Box>      
      {isSubPage && <BackButton />}
      <Container maxWidth="lg" sx={{ py: 6 }}>         
        <Typography variant="h3" component="h1" gutterBottom>
          Skills
        </Typography>

       <SkillArticle
        title="User Experience Design"
        body="User Experience Design (UXD) focuses on creating applications that are intuitive, efficient,
          and enjoyable to use. I connect user needs with technical implementation by turning goals and workflows into
          clear interfaces, consistent interactions, and predictable system behavior. From a programming perspective,
          UXD is not only about visuals - it also includes performance, responsiveness, accessibility, error handling,
          and feedback. By designing and building with the user in mind, I help reduce friction, improve usability,
          and create software that feels reliable and easy to navigate.">
      </SkillArticle>

      <SkillArticle
          title="Project Management"
          body={`
            <p>
              The backbone of successful projects is strong teamwork at every stage of the process. As a <b>Product Owner</b>,
              I translate research and stakeholder input into clear requirements, prioritize the backlog, and define product goals
              and a structured roadmap. Good communication skills and a healthy level of empathy are key to building an efficient team
              that shares common goals.
            </p>
            <p>
              As a <b>Scrum Master</b>, I organize team meetings, remove blockers, and support the team in working efficiently
              and collaboratively. In my view, the conventional Scrum process has its flaws and doesn't apply equally well to every
              team. I have never hesitated to adapt the workflow by introducing my own ideas and adjustments - an approach that has proven
              successful in past projects.
            </p>
          `}
        />

        <SkillArticle
          title="Frontend & Mobile Development"
          body={`
          <p>
            Growing up in the 90s meant grwoing up side-by-side with the internet and all the technologies that came along with it.
             I disovered in various IT classes early on that I have a passion for creating interfaces. Over the years I used plain HTML/CSS, 
             Wordpress, FTP, Typo3 etc. to host websites for schoolclasses, clubs and hobbies. Always staying up to date with the latest 
             libraries and frameworks enabled me to create increasingly good solutions. <br/>
            Since the release of the first smartphones, a brand new need for user friendly interfaces emerged. Screens of all sized and 
            formats needed to be considered. <b>Responsive Layout</b> and <b>Cross Platform</b> deployability became more and more relevant. 
            For me that meant to focus on technologies that can deploy interfaces across all common device types like Flutter, Electron and React.
          </p>
        `}>
        </SkillArticle>

        <SkillArticle
          title="Unity Development (Realtime 3D)"
          body="In mixed reality development, I create interactive experiences that blend digital content with the real world.
          I focus on natural input methods like hand tracking, gestures, and spatial interaction, making sure controls feel comfortable
          and easy to understand. I also pay attention to performance and stability, because frame rate, tracking quality, and latency
          directly affect immersion. By combining solid engineering with user-centered design, I build MR applications that feel responsive,
          intuitive, and practical for real-world use cases.">
        </SkillArticle>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <ChipSection icon={<HandymanIcon />} title="Development Tools" items={devTools} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ChipSection icon={<CodeIcon />} title="Coding" items={languages} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ChipSection icon={<DevicesOtherIcon />} title="Platform Resumé" items={platforms} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ChipSection icon={<BrushIcon />} title="Other Creative Tools" items={creativeTools} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ChipSection icon={<CloudSyncIcon />} title="DevOps" items={devOps} />
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
