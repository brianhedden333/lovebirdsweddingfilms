
import { Check } from 'lucide-react';

const PackageCards = () => {
  const handleGetQuote = () => {
    window.location.href = '/#contact';
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Ceremony Package */}
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

          {/* Highlight Package */}
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
      </div>
    </section>
  );
};

export default PackageCards;
