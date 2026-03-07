'use client';

import ShowroomPage from './showroom/showroom';
import AboutPage from './about/page';
import ContactPage from './contact/page';
import Head from './head/page';
import SkillsPage from './skills/page';
import Footer from "./footer/page"
import Waterlevel from "./components/waterlevel"

export default function Home() {
  return (
    <>
      <Head id={"head-section"}/>
      <AboutPage/>
      <ShowroomPage id={"showroom-section"}/>
      <SkillsPage id={"skills-section"} />
      {/*<AboutPage />*/}
      <ContactPage id={"contact-section"} />
      <Footer />
    </>
  );
}
