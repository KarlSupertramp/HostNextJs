"use client";

import * as React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Button
} from "@mui/material";
import { IframeModal } from "../components/iframeModal";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslations } from "next-intl";
import Waterlevel from "../components/waterlevel";
import { WaterLevelModal } from "../components/waterlevelModal";

function FeatureContent({title, body, imgSrc})
{
  return(
  <>
    <Box
        sx={{
          overflow: "hidden",
          height: "40%",
          borderRadius: "4px 4px 0 0",
        }}
      >
        <img
          src={imgSrc}
          style={{
            width: "100%",
            maxHeight: "250px",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>
      <Box sx={{ p: 2, flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </Box>
    </>
  );
}

function FeatureModal({ title, body, href, imgSrc, onOpen = (href: string, title: string) => void {} }) {

  const isMobile = useMediaQuery("(max-width:1000px)");

  return (
    <Card
      sx={{
        boxShadow: 0,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        height: { xs: "auto", sm: "100%" }
      }}
    >
      <FeatureContent body={body} title={title} imgSrc={imgSrc} />
      {!isMobile ? 
        <Button
          onClick={() => onOpen(href, title)} 
          sx={{ borderRadius: 2, width: "auto", m: 2 }} 
          variant="contained">
          Start
        </Button> 
        : 
        <Button 
          href={href}
          sx={{ borderRadius: 2, width: "auto", m: 2 }} 
          variant="contained">
          Start
        </Button> 
      }
    </Card>
  );
}

function FeatureLink({ title, body, href, imgSrc }) {
  return (
    <Card
      sx={{
        boxShadow: 0,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        height: { xs: "auto", sm: "100%" }
      }}
    >
      <FeatureContent body={body} title={title} imgSrc={imgSrc} />
      <Button 
        href={href} 
        sx={{ borderRadius: 2, width: "auto", m: 2 }}
        variant="contained">
        Visit
      </Button>    
    </Card>
  );
}


export default function ShowroomPage({ id }: { id?: string }) {

  const [iframeOpen, setIframeOpen] = React.useState(false);
  const [iframeUrl, setIframeUrl] = React.useState<string | null>(null);
  const [iframeTitle, setIframeTitle] = React.useState<string | undefined>(undefined);

  const openIframe = (url: string, title?: string) => {
    setIframeTitle(title);
    setIframeUrl(url);
    setIframeOpen(true);
  };

  const [waterOpen, setWaterOpen] = React.useState(false);
  const [waterTitle, setWaterTitle] = React.useState<string | undefined>(undefined);

  const openWaterLevel = (title?: string) => {
    setWaterTitle(title);
    setWaterOpen(true);
  };

  const closeIframe = () => setIframeOpen(false);
  const closeWaterLevel = () => setWaterOpen(false);
  const t = useTranslations('Showroom');

  return (
    <Box sx={{bgcolor: "background.defaultDark"}} id={id}>
      <Container maxWidth="lg" sx={{ py: 6 }}>        
        <Typography variant="h4" component="h1" gutterBottom>
          Showroom
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t("showroomHead")}
        </Typography>         

        <Grid container spacing={2} sx={{ mb: 3, mt: 6 }}>
          <Grid item xs={12} sm={4} md={3} >
            <FeatureModal
              title="Satellites"
              body={t.rich("satellitesDescription")}
              href='/satellites/index.html'
              imgSrc={"/thumbSat.png"}
              onOpen = {openIframe}
            />              
          </Grid>

          <Grid item xs={12} sm={4} md={3} >
            <FeatureModal
              title="Orbit Sandbox"
              body={t.rich("orbitSandboxDescription")}
              href='/orbitSandbox/index.html'
              imgSrc={"/orbitSandbox.jpg"}
              onOpen = {openIframe}
            />              
          </Grid>

          <Grid item xs={12} sm={4} md={3} >
            <FeatureModal
              title="Cube Puzzle"
              body={t.rich("cubePuzzleDescription")}
              href='/cubeGame/index.html'
              imgSrc = {"/thumbCube.png"}
              onOpen = {openIframe}
            />              
          </Grid>

          <Grid item xs={12} sm={4} md={3} >
            <FeatureLink
              title="Shop-App Tempate"
              body={t.rich("flutterDescription")}
              href="https://github.com/KarlSupertramp/WebApi-Flutter-Template"
              imgSrc={"/thumbFlutter.png"}
            />              
          </Grid>

          <Grid item xs={12} sm={4} md={3} >
            <FeatureModal
              title="Drone Simulator"
              body={t.rich("droneSimDescription")}
              href='/droneSim/index.html'
              imgSrc={"/thumbDrone.png"}
              onOpen = {openIframe}
            />              
          </Grid>

          <Grid item xs={12} sm={4} md={3} >
            <FeatureModal
              title="Water Levels"
              body={t.rich("waterlevelHead")}
              href="/waterlevelPage"
              imgSrc={"/thumbWaterlevels.png"}
              onOpen = {openWaterLevel}
            />              
          </Grid>
        </Grid>        
      </Container>
      <IframeModal open={iframeOpen} url={iframeUrl} title={iframeTitle} onClose={closeIframe} />
      <WaterLevelModal open={waterOpen} title={"Water Levels - Rhein/Neckar"} onClose={closeWaterLevel} />
    </Box>
  );
}
