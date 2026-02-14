'use client';

import { Box, Container, Typography, Stack, Chip } from '@mui/material';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { BackButton, urlEndWith } from "../components/backbutton";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const socials = [
  {
    href: "https://github.com/KarlSupertramp/",
    icon: GitHubIcon,
    label: "github.com/KarlSupertramp",
    ariaLabel: "GitHub"
  },
  {
    href: "https://www.linkedin.com/in/karl-martin-b95981183/",
    icon: LinkedInIcon,
    label: "linkedin.com/in/karl-martin-b95981183",
    ariaLabel: "LinkedIn"
  },
  {
    href: "mailto:KarlUweMartin@gmail.com",
    icon: EmailIcon,
    label: "KarlUweMartin@gmail.com",
    ariaLabel: "Email"
  }
];

export default function ContactPage({ id }: { id?: string }) {

  const [isSubPage, setIsSubPage] = useState(false);
  useEffect(() => {
    setIsSubPage(urlEndWith("/contact"));
  });

  const t = useTranslations('Contact');

  return (
      <Box id={id}>      
      {isSubPage && <BackButton />}
      <Container maxWidth="lg" sx={{ py: 6 }}>
          <Box sx={{ mb: 4 }}>
              <Typography variant="h4" sx={{ mb: 2 }}>
                  {t("title")}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                  {t("head")}
              </Typography>
          </Box>
          <Box sx={{ mb: 2, bgcolor: "background.paper", p: 2, borderRadius: 2 }}>
              <Stack spacing={2}  gap={1}>
                  {socials.map((social) => ( 
                    <Chip
                      key={social.label}
                      icon={<social.icon color="primary" />}
                      label={social.label}
                      onClick={() => window.open(social.href, '_blank')}
                      clickable
                      sx={{
                        backgroundColor: "background.default",
                        color: "text.secondary",
                        boxShadow: 1,
                        ":hover": {
                          backgroundColor: "primary.hover",
                        },
                      }}       
                    />           
                  ))}
              </Stack>
          </Box>       
      </Container>
    </Box>
  );
}
