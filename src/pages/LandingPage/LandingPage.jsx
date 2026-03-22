import AboutSection from "../../components/AboutSection/AboutSection";
import CertificationSection from "../../components/CertificationSection/CertificationSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import Navigation from "../../components/NavigationBar/NavBar";
import ProjectSection from '../../components/ProjectSection/ProjectSection'
import ServicesSection from '../../components/ServicesSection/ServicesSection'
import SkillSection from "../../components/SkillsSection/SkillSection";
import TestimonialSection from "../../components/TestimonialSection/TestimonialSection";
import {Routes, Route} from 'react-router-dom';
function LandingPage() {
  return (
    <>
      <Navigation/>
      <HeroSection/>
      <AboutSection/>
      <ProjectSection/>
      <ServicesSection/>
      <SkillSection/>
      <CertificationSection/>
      <TestimonialSection/>
      <ContactSection/>
      <Footer/>
    </>
  );
}

export default LandingPage;
