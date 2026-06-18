"use client";

import * as React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  IconButton,
  Stack
} from "@mui/material";
import { IframeModal } from "../components/iframeModal";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslations } from "next-intl";
import { WaterLevelModal } from "../components/waterlevelModal";
import PlayIcon from '@mui/icons-material/PlayArrow';
import { BackButton } from "../sections/backbutton";
import WebAssetIcon from '@mui/icons-material/WebAsset';

function FeatureContent({ title, body, imgSrc }) {
  return (
    <>
      <Box
        sx={{
          overflow: "hidden",
          height: "40%",
          borderRadius: "4px 4px 0 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <img
          src={imgSrc}
          style={{
            width: "100%",
            maxHeight: "250px",
            objectFit: "cover"
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

function Feature({ title, body, href, imgSrc, onOpen }: { 
  title: string; 
  body: React.ReactNode; 
  href: string; 
  imgSrc: string; 
  onOpen?: (href: string, title: string) => void;
}) {
  const isMobile = useMediaQuery("(max-width:1000px)");
  const showModal = onOpen && !isMobile;

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
      <IconButton
        onClick={showModal ? () => onOpen(href, title) : undefined}
        href={showModal ? undefined : href}
        sx={{ boxShadow: 1, borderRadius: "50%", width: 44, height: 44, m: 2, ml: "auto" }}>
        <PlayIcon />
      </IconButton>
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
  const singlePage = window.location.pathname.toLocaleLowerCase().endsWith("/showroom");

  return (
    <Box sx={{ bgcolor: "background.defaultDark" }} id={id}>
      <BackButton title={"Showroom"} disabled={!singlePage} />
      <Container  maxWidth="lg" sx={{ py: singlePage ? 2 : 5 }}>     
        {!singlePage && 
          <Stack direction={"row"} alignItems={"center"}  justifyContent={"space-between"}>
            <Typography variant="h4" component="h1" gutterBottom>
              Showroom
            </Typography>
            <IconButton title="Fullscreen" href={"/showroom"} aria-label="Fullscreen" size="small">
              <WebAssetIcon />
            </IconButton>
          </Stack>
        }
        <Typography variant="body2" color="text.secondary">
          {t("showroomHead")}
        </Typography>

        <Grid container spacing={2} sx={{ mb: 3, mt: 6 }}>
          <Grid item xs={12} sm={4} md={3} >
            <Feature
              title="Satellites"
              body={t.rich("satellitesDescription")}
              href='/satellites/index.html'
              imgSrc={"/thumbSat.png"}
              onOpen={openIframe}
            />
          </Grid>

          <Grid item xs={12} sm={4} md={3} >
            <Feature
              title="Orbit Sandbox"
              body={t.rich("orbitSandboxDescription")}
              href='/orbitSandbox/index.html'
              imgSrc={"/orbitSandbox.jpg"}
              onOpen={openIframe}
            />
          </Grid>

          <Grid item xs={12} sm={4} md={3} >
            <Feature
              title="Cube Puzzle"
              body={t.rich("cubePuzzleDescription")}
              href='/cubeGame/index.html'
              imgSrc={"/thumbCube.png"}
              onOpen={openIframe}
            />
          </Grid>

          <Grid item xs={12} sm={4} md={3} >
            <Feature
              title="Shop-App Tempate"
              body={t.rich("flutterDescription")}
              href="https://github.com/KarlUweMartin/WebApi-Flutter-Template"
              imgSrc={"/thumbFlutter.png"}
            />
          </Grid>

          <Grid item xs={12} sm={4} md={3} >
            <Feature
              title="Drone Simulator"
              body={t.rich("droneSimDescription")}
              href='/droneSim/index.html'
              imgSrc={"/thumbDrone.png"}
              onOpen={openIframe}
            />
          </Grid>

          <Grid item xs={12} sm={4} md={3} >
            <Feature
              title="Water Levels"
              body={t.rich("waterlevelHead")}
              href="/waterlevelPage"
              imgSrc={"/thumbWaterlevels.png"}
              onOpen={openWaterLevel}
            />
          </Grid>
        </Grid>
      </Container>
      <IframeModal open={iframeOpen} url={iframeUrl} title={iframeTitle} onClose={closeIframe} />
      <WaterLevelModal open={waterOpen} title={"Water Levels - Rhein/Neckar"} onClose={closeWaterLevel} />
    </Box>
  );
}
