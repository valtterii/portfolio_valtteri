import React, { useEffect } from 'react';
import './App.css';
import './responsiveness.css'
import Info from './components/info';
import Skills from './components/skills';
import Projects from './components/projects';
import Footer from './components/footer';
import Navbar from './components/nav'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Particle from './components/Particle';

function App() {
  /* 
  https://github.com/michalsnik/aos#animations
  TODO:
  - add contact section
  - add english option?
  - add header & text to projects
  - FIX refresh anim bug <<<<<<<<<<<
  */
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation durations all set to 1 second
    });
    AOS.refresh();
  }, []);

  const isFirefox = typeof InstallTrigger !== 'undefined';
  // ^^ if browser is firefox, the animation offset will remain at 0 (default)
  // otherwise we'll set it to something like -900 in order for the animations to work properly on other browsers

  const content = {
    info: {
      title: "Moro!",
      paragraph1: "Olen 18-vuotias juniori-tason ohjelmistokehittäjä. Aloitin tieto- ja viestintätekniikan opinnot OSAO:lla tekniikan yksikössä 5.8.2020 ja valmistun keväällä 2023. Harrastan koodauksen ohella myös maastopyöräilyä, pingistä ja tykkään ulkoilla. Minun tavoitteena on kehittyä paremmaksi ohjelmoijaksi ja kehittyä alan huippuosaajaksi.",
      paragraph2: "Kokemusta minulla on eniten front-end puolesta. Tuttuja kieliä minulle on HTML, CSS, Javascript (React) ja Python. Tykkään front-endin lisäksi myös testauksesta ja automatisaatiosta. Olen aina valmis sukeltamaan uusiin haasteisiin, sekä tutustumaan uusiin ohjelmistoihin, kieliin ja ihmisiin!",
    },
    skills: {
      title: "Taidot",
    },
    projects: {
      title: "Projektit",
    },
  }
  return (
    <>
    <Particle />
    <Navbar />
    <section data-aos="zoom-out-up" data-aos-offset="0" id='info'>
        <Info title={content.info.title} paragraph1={content.info.paragraph1} paragraph2={content.info.paragraph2} />
    </section>
    <section id='skills'>
      <Skills title={content.skills.title} offset={isFirefox ? "0" : "-900"} />
    </section>
    <section id='projects'>
      <Projects title={content.projects.title} offset={isFirefox ? "0" : "-900"} />
    </section>
    <Footer />
    </>
  );
}

export default App;
