
import { Camera, Calendar, Film, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import VideoEmbed from '@/components/VideoEmbed';

const Index = () => {
  const galleryImages1 = [
    'https://images.unsplash.com/photo-1519741497674-611481863552',
    'https://images.unsplash.com/photo-1583939003579-730e3918a45a',
    'https://images.unsplash.com/photo-1537633552985-df8429e8048b',
    'https://images.unsplash.com/photo-1606216794074-735e91aa2c92',
    'https://images.unsplash.com/photo-1594736797933-d0e501ba2fe1',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc',
    'https://images.unsplash.com/photo-1525258428355-d5b286c77538',
    'https://images.unsplash.com/photo-1573496267526-249d48c2a06a'
  ];

  const galleryImages2 = [
    'https://images.unsplash.com/photo-1469371670807-013ccf25f16a',
    'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6',
    'https://images.unsplash.com/photo-1543252786-17206bb1d53b',
    'https://images.unsplash.com/photo-1520854221256-17451cc331bf',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486',
    'https://images.unsplash.com/photo-1595462182026-8ef29138ba0a',
    'https://images.unsplash.com/photo-1606800052052-a08af7148866',
    'https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 animate-fade-in">
            Fall in <span className="italic">love</span> with Lisa
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
            Capturing the timeless beauty of your most precious moments
          </p>
        </div>
      </section>

      {/* Personal Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Lisa - Wedding Photographer"
                className="w-64 h-64 rounded-full object-cover mx-auto md:mx-0 shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
                On this most precious occasion...
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I believe every love story deserves to be told with authenticity, artistry, and heart. 
                Your wedding day is a celebration of your unique journey together, and I'm honored to 
                capture those fleeting moments that become forever memories.
              </p>
              <blockquote className="text-xl font-serif text-teal-600 italic border-l-4 border-teal-200 pl-6">
                "To start this day out, I hope you'll want to hear more about my work and process."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Capture the Moment */}
      <section className="relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-serif">Capture the Moment</h2>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8">Testimonials</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            My approach to wedding photography is rooted in storytelling and genuine emotion. I work 
            closely with each couple to understand their vision, style, and the unique elements that 
            make their love story special. From intimate elopements to grand celebrations, I'm passionate 
            about creating images that reflect the authentic joy and connection of your wedding day.
          </p>
        </div>
      </section>

      {/* Recent Features Gallery */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 text-center mb-12">
            Recent Features
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages1.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src={`${image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80`}
                  alt={`Wedding photo ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Love is in the Air Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 text-center mb-12">
            Love is in the Air
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages2.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src={`${image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80`}
                  alt={`Wedding photo ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Process */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 text-center mb-16">
            My Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-serif text-gray-900 mb-3">Service Me</h3>
              <p className="text-gray-600">Initial consultation to understand your vision and style preferences</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-serif text-gray-900 mb-3">Book It</h3>
              <p className="text-gray-600">Secure your date with a custom package tailored to your needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Film className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-serif text-gray-900 mb-3">Film It</h3>
              <p className="text-gray-600">Professional coverage on your special day with artistic storytelling</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-serif text-gray-900 mb-3">Love the Result</h3>
              <p className="text-gray-600">Receive your beautifully edited photos and videos to treasure forever</p>
            </div>
          </div>
        </div>
      </section>

      {/* Samples Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-serif">Samples</h2>
        </div>
      </section>

      {/* Wedding Video Showcases */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <VideoEmbed
            title="David and Shanna"
            description="A beautiful countryside wedding celebration"
          />
          
          <VideoEmbed
            title="Emily and Michael"
            description="An elegant city wedding with timeless romance"
          />
          
          <VideoEmbed
            title="Sarah and James"
            description="Intimate beach ceremony at sunset"
          />
        </div>
      </section>

      {/* Aerial Drone Video */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <VideoEmbed
            title="Aerial Drone Video"
            description="Breathtaking aerial perspectives of your special venues"
          />
          <p className="text-center text-gray-600 mt-6">
            Experience your wedding from a whole new perspective with stunning aerial cinematography 
            that captures the grandeur and beauty of your celebration.
          </p>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-serif mb-8">About Me</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="Briana Hodson"
              className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
            />
            <h3 className="text-2xl font-serif mb-4">Briana Hodson, filmmaker</h3>
            <p className="text-lg leading-relaxed">
              With over a decade of experience in wedding photography and videography, I've had the 
              privilege of documenting love stories across the country. My passion lies in creating 
              authentic, emotional imagery that tells the unique story of each couple. When I'm not 
              behind the camera, you'll find me exploring new locations, studying light, and constantly 
              refining my craft to better serve my couples.
            </p>
          </div>
        </div>
      </section>

      {/* Dramatic Silhouette */}
      <section className="h-screen">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
          }}
        />
      </section>

      {/* Contact Form */}
      <ContactForm />

      <Footer />
    </div>
  );
};

export default Index;
