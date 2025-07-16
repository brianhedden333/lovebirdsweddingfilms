import { Camera, Calendar, Film, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import VideoEmbed from '@/components/VideoEmbed';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import { useEffect } from 'react';

const Index = () => {
  const galleryImages = ['/lovable-uploads/7749a1ce-44a2-4f52-9b63-135147672db0.png', '/lovable-uploads/b3be7fa1-64a2-45a2-a9ab-a52e499d1181.png', '/lovable-uploads/e191e074-449c-4a21-b32f-b727657d412f.png', '/lovable-uploads/d951e5ac-7fc1-4053-a7d2-3b5131f1de71.png', '/lovable-uploads/1ce2b5ba-2869-40d5-aee3-d18a2266df72.png', '/lovable-uploads/0320dc7b-7bdf-432e-826d-89094d7190b3.png', '/lovable-uploads/af471e6f-52a3-44a8-81b1-65913f79dacd.png', '/lovable-uploads/d92965bf-4069-4ab3-a957-459b809fc268.png'];
  
  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // Check if URL has #contact hash and scroll to contact form
    if (window.location.hash === '#contact') {
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({
          behavior: 'smooth'
        });
      }, 100);
    }
  }, []);

  return <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with Vimeo Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <iframe 
            src="https://player.vimeo.com/video/1092546746?autoplay=1&loop=1&muted=1&controls=0&background=1&h=712f8b21df" 
            className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full"
            style={{
              transform: 'translate(-50%, -50%)',
              width: '100vw',
              height: '56.25vw',
              minHeight: '100vh',
              minWidth: '177.78vh'
            }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture" 
            allowFullScreen
            title="Love Birds Wedding Films Background" 
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif mb-6 animate-fade-in font-light">
            Wedding Films <span className="italic font-normal">with Heart</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-light">
            Capturing the timeless beauty of your most precious moments
          </p>
        </div>
      </section>

      {/* Personal Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <img src="/lovable-uploads/90960265-0241-426e-9431-63c851601fad.png" alt="Brian Hedden - Wedding Filmmaker" className="w-64 h-64 rounded-full object-cover mx-auto md:mx-0 shadow-lg" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6 font-light">
                On this most precious occasion...
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                I believe every love story deserves to be told with authenticity, artistry, and heart. 
                Your wedding day is a celebration of your unique journey together, and I'm honored to 
                capture those fleeting moments that become forever memories.
              </p>
              <blockquote className="text-xl font-serif text-teal-600 italic border-l-4 border-teal-200 pl-6 font-medium">"I cry watching our wedding film—it captured every moment so beautifully. It's like reliving the best day of our lives."</blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Capture the Moment */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url(/lovable-uploads/e11d75ef-9d3a-4b20-9b36-c73f19eaa71a.png)'
      }} />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-serif font-light">Capture the Moment</h2>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-12 text-center font-light">Testimonials</h2>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Recent Features Gallery */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 text-center mb-12 font-light">
            Love is in the Air
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <img src={image} alt={`Wedding photo ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>)}
          </div>
        </div>
      </section>

      {/* My Process */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 text-center mb-16 font-light">
            My Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-serif text-gray-900 mb-3 font-light">
                <button onClick={handleContactClick} className="hover:text-teal-600 transition-colors">
                  Contact Me
                </button>
              </h3>
              <p className="text-gray-600 font-light">Initial consultation to understand your vision and style preferences</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-serif text-gray-900 mb-3 font-light">Book It</h3>
              <p className="text-gray-600 font-light">Secure your date with a custom package tailored to your needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Film className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-serif text-gray-900 mb-3 font-light">Film It</h3>
              <p className="text-gray-600 font-light">Professional coverage on your special day with artistic storytelling</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-serif text-gray-900 mb-3 font-light">Love the Result</h3>
              <p className="text-gray-600 font-light">Receive your beautifully edited photos and videos to treasure forever</p>
            </div>
          </div>
        </div>
      </section>

      {/* Samples Section */}
      <section id="samples" className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url(/lovable-uploads/0d1fdcdf-e4a2-4fff-b303-2475f28fa6f1.png)'
      }} />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-serif font-light">Samples</h2>
        </div>
      </section>

      {/* Wedding Video Showcases */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
         <VideoEmbed title="Arti and Brandon" description="A celebration of love in stunning mountain scenery. 12-minute Highlight." videoId="873857580" platform="vimeo" />
         
         <VideoEmbed title="Emily and Michael" description="An elegant country club wedding with timeless romance. 3-minute Highlight." videoId="732245572" platform="vimeo" />
          
         <VideoEmbed title="David and Shanna" description="A beautiful mountainside wedding celebration. Full Ceremony." videoId="1092532920" platform="vimeo" />
          
          
        </div>
      </section>

      {/* Aerial Drone Video */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <VideoEmbed title="Aerial Drone Video" description="Breathtaking aerial perspectives of your special day included in every video" videoId="728224554" platform="vimeo" />
          <p className="text-center text-gray-600 mt-6 font-light">
            Experience your wedding from a whole new perspective with stunning aerial cinematography 
            that captures the grandeur and beauty of your celebration.
          </p>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="relative py-20">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url(/lovable-uploads/20239601-afdc-42b7-a969-083b2abcf684.png)'
      }} />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 font-light">About Me</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <img src="/lovable-uploads/90960265-0241-426e-9431-63c851601fad.png" alt="Brian Hedden" className="w-32 h-32 rounded-full object-cover mx-auto mb-6" />
            <h3 className="text-2xl font-serif mb-4 font-light">Brian Hedden, filmmaker</h3>
            <p className="text-lg leading-relaxed font-light">
              With over a decade of experience in wedding photography and videography, I've had the 
              privilege of documenting love stories across the country. My passion lies in creating 
              authentic, emotional imagery that tells the unique story of each couple. When I'm not 
              behind the camera, you'll find me enjoying nature, exercising, and planning my next documentary project.
            </p>
          </div>
        </div>
      </section>

      {/* Dramatic Silhouette */}
      <section className="h-screen">
        <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url(/lovable-uploads/41b3a597-b702-4335-9a18-7814b9580225.png)'
      }} />
      </section>

      {/* Contact Form */}
      <ContactForm />

      <Footer />
    </div>;
};

export default Index;
