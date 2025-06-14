

import { Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoEmbed from '@/components/VideoEmbed';

const Pricing = () => {
  const services = ['Planning and consultation with you, the wedding planner, and/or vendors', 'Free travel up to 50 miles from Boulder', 'Cinematic Aerial Footage', 'Video content options for before and/or after the ceremony', 'Support with livestreaming', 'Edited to your personalized soundtrack', 'Collaborative Editing Process', 'Convenient digital delivery and cloud storage'];
  const services2 = ['Filming Duration', 'Full Ceremony Video', '3-minute Highlight Edit', '12-minute Highlight Edit', 'Full Toast Video'];
  const portfolioImages = ['https://github.com/brianhedden333/lovebirdsweddingfilms/blob/main/public/lovable-uploads/Alexis.00_00_06_10.Still002.jpg?raw=true', 'https://github.com/brianhedden333/lovebirdsweddingfilms/blob/main/public/lovable-uploads/Arti%20Brandon%20Highlight%20FINAL.00_03_49_08.Still002.jpg?raw=true', 'https://github.com/brianhedden333/lovebirdsweddingfilms/blob/main/public/lovable-uploads/Erica%20and%20Jonathan%20Wedding%20Final.00_06_04_17.Still006.jpg?raw=true', 'https://github.com/brianhedden333/lovebirdsweddingfilms/blob/main/public/lovable-uploads/Austin.00_00_39_16.Still001%20copy.jpg?raw=true'];
  const nextSteps = ['Contact for custom quote based on your specific needs and vision', 'Contract signing and booking process with deposit', 'Pre-wedding consultation and timeline planning', 'Professional wedding day coverage with artistic storytelling', 'Post-production editing and delivery of final film(s)'];
  
  const handleStartJourney = () => {
    window.location.href = '/#contact';
  };

  const handleGetQuote = () => {
    window.location.href = '/#contact';
  };

  return <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
      }} />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 animate-fade-in">
            Pricing Guide
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
            Investment in memories that will last a lifetime
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 text-center mb-16">
            Complete Wedding Coverage
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-serif text-gray-900 mb-8">Automatically Included</h3>
              <ul className="space-y-4">
                {services.map((service, index) => <li key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>)}
              </ul>
              <br></br>
              <br></br>
               <h3 className="text-2xl font-serif text-gray-900 mb-8">Custom Options</h3>
              <ul className="space-y-4">
                {services2.map((service, index) => <li key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>)}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {portfolioImages.map((image, index) => <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md">
                  <img src={`${image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80`} alt={`Portfolio image ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Package Examples Header */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url(/lovable-uploads/e191e074-449c-4a21-b32f-b727657d412f.png)'
      }} />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-serif">Package Examples</h2>
        </div>
      </section>

      {/* Three Package Columns */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Elopement Package */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-serif text-gray-900 mb-4">Ceremony Package</h3>
              <div className="text-4xl font-bold text-teal-600 mb-6">$900</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-teal-600 mr-2" />
                  3 hours of filming
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-teal-600 mr-2" />
                  Scenery, Aerials, First Look, and Bridal Party
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-teal-600 mr-2" />
                  Complete Ceremony Coverage
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-teal-600 mr-2" />
                  An elegantly edited film of your ceremony.
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-teal-600 mr-2" />
                  Online Delivery within 4 Weeks
                </li>
                
              </ul>


              <button 
                onClick={handleGetQuote}
                className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors"
              >

                Get a Quote
              </button>
            </div>

            {/* Ceremony Package */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-2 border-teal-600">
              <div className="bg-teal-600 text-white px-4 py-1 rounded-full text-sm mb-4 inline-block">
                Most Popular
              </div>
              <h3 className="text-2xl font-serif text-gray-900 mb-4">Highlight Package</h3>
              <div className="text-4xl font-bold text-teal-600 mb-6">$1,900</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-teal-600 mr-2" />
                  5 hours of filming
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-teal-600 mr-2" />
                  Scenery, Aerials, First Look, and Bridal Party
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-teal-600 mr-2" />
                  Ceremony + Reception Coverage
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-teal-600 mr-2" />
                  A 3-minute Highlight Video and Full Ceremony Video
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-teal-600 mr-2" />
                  Online Delivery within 4 Weeks
                </li>
              </ul>

              <button 
                onClick={handleGetQuote}
                className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors"
              >

                Get a Quote
              </button>
            </div>

            {/* Full Celebration */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-serif text-gray-900 mb-4">Full Celebration</h3>
              <div className="text-4xl font-bold text-teal-600 mb-6">$3,900</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-teal-600 mr-2" />
                  6 hours of filming
                </li>
                <li className="flex items-center"> 
                  <Check className="w-4 h-4 text-teal-600 mr-2" />
                  Wedding preparation, Scenery, Full Ceremony + Reception
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-teal-600 mr-2" />
                  A 12-minute Highlight Video and Full Ceremony Video
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-teal-600 mr-2" />
                  Full Toasts Video
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-teal-600 mr-2" />
                  Bridal portraits included
                </li>
              </ul>

              <button 
                onClick={handleGetQuote}
                className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors"
              >
                Get a Quote
              </button>
            </div>
          </div>

          {/* Ceremony Sample Video */}
         
           <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
         <VideoEmbed title="12-minute Highlight Samples" videoId="873857580" platform="vimeo" />
         
         <VideoEmbed videoId="737991237" platform="vimeo" />
          
         <VideoEmbed title="Ceremony Samples" videoId="1092532920" platform="vimeo" />
          <VideoEmbed  videoId="1092526756" platform="vimeo" />
          
          
        </div>
      </section>
        </div>
      </section>

      {/* Fully Customizable */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
      }} />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-serif mb-6">Fully Customizable</h2>
          <h3 className="text-2xl md:text-3xl font-light mb-8">
            All packages are fully customizable based on your personal desires, needs, and budget.
          </h3>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Every wedding is unique, and your photography package should be too. Whether you need 
            additional hours, extra locations, engagement sessions, or special add-ons, I work with 
            each couple to create a custom package that perfectly fits their vision and budget.
          </p>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/lovable-uploads/a9a29b16-6975-4627-a6f6-a78bff1b4219.png" alt="Brian filming a wedding" className="w-full h-96 object-cover rounded-lg shadow-lg" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
                A Personal Touch
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I believe in building genuine relationships with my couples. From our first consultation 
                to the delivery of your final gallery, I'm here to support you every step of the way. 
                My goal is not just to be your videographer, but to be someone you trust completely 
                on your wedding day.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I offer flexible scheduling, destination coverage, and accommodations for special 
                requests. Your comfort and vision are my priority, and I'm committed to making your 
                experience as seamless and enjoyable as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Header */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url(/lovable-uploads/85c03a0a-4dc5-482a-9347-4974109c3d9a.png)'
      }} />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-serif">Next Steps</h2>
        </div>
      </section>

      {/* Next Steps Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-serif text-gray-900 mb-8">Your Journey with Brian</h3>
              <ol className="space-y-6">
                {nextSteps.map((step, index) => <li key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 text-lg">{step}</span>
                  </li>)}
              </ol>
              <div className="mt-8">
                <button 
                  onClick={handleStartJourney}
                  className="bg-teal-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors duration-200"
                >
                  Start Your Journey
                </button>
              </div>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Wedding party celebration" className="w-full h-96 object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};

export default Pricing;
