import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import VideoSection from './components/VideoSection.jsx';
import WhereWeStand from './components/WhereWeStand.jsx';
import Villas from './components/Villas.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Amenities from './components/Amenities.jsx';
import Gallery from './components/Gallery.jsx';
import Lightbox from './components/Lightbox.jsx';
import FloorPlan from './components/FloorPlan.jsx';
import Features from './components/Features.jsx';
import Sustainability from './components/Sustainability.jsx';
import SordoMadaleno from './components/SordoMadaleno.jsx';
import Location from './components/Location.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <VideoSection />
      <WhereWeStand />
      <Villas />
      {/* <Experience /> */}
      <Gallery onSelect={setLightboxSrc} />
      <Features />
      <Sustainability />
      <SordoMadaleno />
      <FloorPlan />
      <Amenities onSelect={setLightboxSrc} />
      <Location />
      <Contact />
      <Footer />
      {lightboxSrc && (
        <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
      )}
    </>
  );
}
