import './App.css';
import './responsiveness.css'
import Info from './components/info';
import Skills from './components/skills';
import Projects from './components/projects';
import Footer from './components/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init({
    duration: 1000,
  });

  const content = {
    info: {
      title: "Moro.",
      text: "Olen Valtteri Karppinen, 18-vuotias ohjelmistokehitystä opiskeleva nuori OSAO:lta. Minun tavoitteena on kehittyä paremmaksi ohjelmoijaksi ja kehittyä alan huippuosaajaksi.",
    },
    skills: {
      title: "Taidot",
    },
    projects: {
      title: "Projektit",
    },
  }
  /* 

  https://github.com/michalsnik/aos#animations

  TODO:
  navbar palkki alhaalla, josta napit osioihin?
  navbar?
  expand skills section?
  banner section with my image?
  FIX project hover effect
  */
  return (
    <>
    <section data-aos="zoom-out-up" data-aos-mirror="true" data-aos-once="false" id='info'>
        <Info title={content.info.title} text={content.info.text} />
      </section>
      <section data-aos="zoom-out-up" data-aos-mirror="true" data-aos-once="false" id='skills'>
        <Skills title={content.skills.title} />
      </section>
      <section data-aos="zoom-in-down" data-aos-offset="400" data-aos-mirror="true" data-aos-once="false" id='projects'>
        <Projects title={content.projects.title} />
      </section>
      <Footer />
    </>
  );
}

export default App;
