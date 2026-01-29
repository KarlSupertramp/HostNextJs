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

import { BackButton, urlEndWith } from "../components/backbutton";
import { useEffect, useState } from "react";
import { IframeModal } from "../components/iframeModal";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslations } from "next-intl";

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

function FeatureWebGL({ title, body, href, imgSrc, onOpenIframe = (href: string, title: string) => void {} }) {

  const isMobile = useMediaQuery("(max-width:1000px)");

  return (
    <Card
      variant="outlined"
      sx={{
        boxShadow: 3,
        color: "inherit",
        display: "flex",
        flexDirection: "column",
        height: { xs: "auto", sm: "100%" }
      }}
    >
      <FeatureContent body={body} title={title} imgSrc={imgSrc} />
      {isMobile ? 
        <Button
          onClick={() => onOpenIframe(href, title)} 
          sx={{ fontWeight: "bold", width: "auto", m: 2 }} 
          variant="contained">
          Play
        </Button> 
        : 
        <Button 
          href={href}
          sx={{ fontWeight: "bold", width: "auto", m: 2 }} 
          variant="contained">
          Play
        </Button> 
      }
    </Card>
  );
}

function FeatureLink({ title, body, href, imgSrc }) {
  return (
    <Card
      variant="outlined"
      sx={{
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        height: { xs: "auto", sm: "100%" }
      }}
    >
      <FeatureContent body={body} title={title} imgSrc={imgSrc} />
      <Button 
        href={href} 
        sx={{ fontWeight: "bold", width: "auto", m: 2 }}
        variant="contained">
        Visit
      </Button>    
    </Card>
  );
}


export default function ShowroomPage() {

  const [isSubPage, setIsSubPage] = useState(false);
  useEffect(() => {
    setIsSubPage(urlEndWith("/showroom"));
  });

  const [iframeOpen, setIframeOpen] = React.useState(false);
  const [iframeUrl, setIframeUrl] = React.useState<string | null>(null);
  const [iframeTitle, setIframeTitle] = React.useState<string | undefined>(undefined);

  const openIframe = (url: string, title?: string) => {
    setIframeTitle(title);
    setIframeUrl(url);
    setIframeOpen(true);
  };

  const closeIframe = () => setIframeOpen(false);
  const t = useTranslations('Showroom');

  return (
    <Box>      
      {isSubPage && <BackButton />}
      <Container maxWidth="lg" sx={{ py: 6 }}>        
        <Typography variant="h3" component="h1" gutterBottom>
          Showroom
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          {t("showroomHead")}
        </Typography>         

        <Grid container spacing={2} sx={{ mt: 6 }}>
          <Grid item xs={12} sm={4} md={3}>
            <FeatureWebGL
              title="Satellites"
              body={t.rich("satellitesDescription")}
              href='/satellites/index.html'
              imgSrc={"/thumbSat.png"}
              onOpenIframe={openIframe}
            />              
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <FeatureWebGL
              title="Orbit Sandbox"
              body={t.rich("orbitSandboxDescription")}
              href='/orbitSandbox/index.html'
              imgSrc={"/orbitSandbox.jpg"}
              onOpenIframe={openIframe}
            />              
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <FeatureWebGL
              title="Cube Puzzle"
              body={t.rich("cubePuzzleDescription")}
              href='/cubeGame/index.html'
              imgSrc={"/thumbCube.png"}
              onOpenIframe={openIframe}
            />              
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <FeatureLink
              title="Shop-App Tempate"
              body={t.rich("flutterDescription")}
              href="https://github.com/KarlSupertramp/WebApi-Flutter-Template"
              imgSrc={"/thumbFlutter.png"}
            />              
          </Grid>
        </Grid>        
      </Container>
      <IframeModal open={iframeOpen} url={iframeUrl} title={iframeTitle} onClose={closeIframe} />
    </Box>
  );
}
