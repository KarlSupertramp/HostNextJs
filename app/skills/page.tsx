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
        <Typography variant="body1" color="text.secondary" paragraph sx={{ mt: 0 }}>
          {body}
        </Typography>
      </Box>
  );
  
  const [isSubPage, setIsSubPage] = useState(false);
  useEffect(() => {
    setIsSubPage(urlEndWith("/skills"));
  });

  return (
    <Box sx={{ py: 3 }}>
      
      {isSubPage && <BackButton />}

      <Container maxWidth="lg" sx={{ py: 3 }}>         
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
        body="In my role as a UX Designer, I also act as Product Owner and Scrum Master to ensure user needs and 
        project goals stay aligned. As Product Owner, I translate research and stakeholder input into clear 
        requirements, prioritize the backlog, and define product goals that create real value. As Scrum Master,
        I organize agile ceremonies, remove blockers, and support the team in working efficiently and collaboratively.
        By combining these responsibilities, I connect design decisions with development planning, enabling faster 
        feedback cycles and a smoother delivery of user-centered software solutions.">
      </SkillArticle>

      <SkillArticle
        title="Frontend Development"
        body="In frontend development, I build clean and responsive user interfaces that feel fast and intuitive to use.
        I turn designs into reusable components, focus on clear structure and maintainable code, and pay close attention
        to details like spacing, typography, and interaction states. I also make sure the UI behaves reliably by handling
        edge cases, validating inputs, and providing helpful feedback to users. My goal is to deliver interfaces that look great,
        work smoothly across devices, and are easy to extend as the product evolves.">
      </SkillArticle>

      <SkillArticle
        title="Cross-Platform Mobile Development"
        body="When developing cross-platform mobile apps, I aim to deliver a consistent experience on both Android and iOS
        without sacrificing performance or usability. I structure the app in a scalable way, reuse shared logic where it makes sense,
        and adapt the UI to match platform-specific expectations. I also focus on offline behavior, navigation, and responsive layouts
        to ensure the app feels natural in everyday use. By balancing shared code with smart platform adjustments, I can ship features
        efficiently while keeping the user experience polished and reliable.">
      </SkillArticle>

      <SkillArticle
        title="Mixed Reality Development"
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
