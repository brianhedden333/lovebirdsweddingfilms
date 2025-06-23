
import { Check } from 'lucide-react';

const ServicesIncluded = () => {
  const services = [
    'Planning and consultation with you, the wedding planner, and/or vendors',
    'Free travel up to 50 miles from Boulder',
    'Cinematic Aerial Footage',
    'Video content options for before and/or after the ceremony',
    'Support with livestreaming',
    'Edited to your personalized soundtrack',
    'Collaborative Editing Process',
    'Convenient digital delivery and cloud storage'
  ];
  
  const services2 = [
    'Filming Duration',
    'Full Ceremony Video',
    '3-minute Highlight Edit',
    '12-minute Highlight Edit',
    'Full Toast Video'
  ];
  
  const portfolioImages = [
    'https://github.com/brianhedden333/lovebirdsweddingfilms/blob/main/public/lovable-uploads/Alexis.00_00_06_10.Still002.jpg?raw=true',
    'https://github.com/brianhedden333/lovebirdsweddingfilms/blob/main/public/lovable-uploads/Arti%20Brandon%20Highlight%20FINAL.00_03_49_08.Still002.jpg?raw=true',
    'https://github.com/brianhedden333/lovebirdsweddingfilms/blob/main/public/lovable-uploads/Erica%20and%20Jonathan%20Wedding%20Final.00_06_04_17.Still006.jpg?raw=true',
    'https://github.com/brianhedden333/lovebirdsweddingfilms/blob/main/public/lovable-uploads/Austin.00_00_39_16.Still001%20copy.jpg?raw=true'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 text-center mb-16">
          Complete Wedding Coverage
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-serif text-gray-900 mb-8">Automatically Included</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
            <br></br>
            <br></br>
            <h3 className="text-2xl font-serif text-gray-900 mb-8">Custom Options</h3>
            <ul className="space-y-4">
              {services2.map((service, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {portfolioImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md">
                <img 
                  src={`${image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80`} 
                  alt={`Portfolio image ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesIncluded;
