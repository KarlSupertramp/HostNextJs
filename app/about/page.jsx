"use client";

import { Box, Container, Typography } from "@mui/material";
import { BackButton, urlEndWith } from "../components/backbutton";
import { useEffect, useState } from "react";

export default function AboutPage() {

  const [isSubPage, setIsSubPage] = useState(false);
  useEffect(() => {
    setIsSubPage(urlEndWith("/about"));
  });

  return (
    <Box>      
      {isSubPage && <BackButton />}
      <Container maxWidth="lg" sx={{ py: 6 }}>

        <Typography variant="h3" component="h1" gutterBottom>
          About Me
        </Typography>
 
          <Typography variant="body1" color="text.secondary" paragraph sx={{ mt: 0 }}>
            As a hybrid between developer and designer, I am always exploring new techniques
            to refine my skills. With a background in both <b>Software Development</b> and <b>User Experience Design</b>, I bridge the gap between functionality and aesthetics.
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph sx={{ mt: 0 }}>
            UX Design for me means to make complex systems not only intuitive but also a
            pleasure to use. This not only means having a good eye for visual quality but also
            a very good understanding of the structure any system. Being a software
            developer enables me to go deeper into a systems core functionality to workout
            bottlenecks, handicaps for the user and also the developers creating it. A big part of my
            work is to help navigate complex discussions between designers, developers and
            managers. Understanding goals and complications of both worlds can greatly
            accelerate the problem solving at all stages of a project.
        </Typography>


        <Box sx={{ my: 4, p: 2, bgcolor: "background.paper", borderLeft: "2px solid", borderColor: "border.main" }}>
          <Typography sx={{ textAlign: "center", fontStyle: "italic", fontWeight: "bold" }}>
            "Every <b>THING</b> is an interface!"
          </Typography>
        </Box>

        <Typography variant="body1" color="text.secondary" paragraph>
          I am convinced that every object, whether created by humans or naturally formed,
          is an interface. Consciously or unconsciously used, every object has its own
          language to communicate its use to its "user." The better this language, the
          easier and more successfully the object can be used for its purpose.
        </Typography>

        <Typography variant="body1" color="text.secondary" paragraph>
          The majority of the projects I worked on in recent years are <b>Mixed Reality</b> projects. I developed several applications for the Microsoft HoloLens since the
          very day the first iteration of this device was availabe in Germany and even
          took part in an exclusive developer preview, where I spend a week in the Microsoft
          office in Berlin to get to know the HoloLens 2, before its official release.
        </Typography>

        <Typography variant="body1" color="text.secondary" paragraph>
          I also worked on several <b>Virtual Reality</b> projects. Most of them were prototypes that some way or another were adopted in
          a VR-Learning platform that I also directly contributed to as a Unity developer (<Typography component="span" sx={{ fontWeight: "bold" }}>3spin Learning</Typography>).
        </Typography>
      </Container>
    </Box>
  );
}
