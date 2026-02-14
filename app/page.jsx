'use client';

import ShowroomPage from './showroom/page';
import AboutPage from './about/page';
import ContactPage from './contact/page';
import Head from './head/page';
import SkillsPage from './skills/page';


export default function Home() {
  return (
    <>
      <Head/>
      <ShowroomPage id={"showroom-section"}/>
      <SkillsPage id={"skills-section"} />
      {/*<AboutPage />*/}
      <ContactPage id={"contact-section"} />
    </>
  );
}
