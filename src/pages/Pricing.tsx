
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoEmbed from '@/components/VideoEmbed';
import PricingHero from '@/components/pricing/PricingHero';
import ServicesIncluded from '@/components/pricing/ServicesIncluded';
import PackageCards from '@/components/pricing/PackageCards';
import CustomizableSection from '@/components/pricing/CustomizableSection';
import PersonalTouch from '@/components/pricing/PersonalTouch';
import NextStepsSection from '@/components/pricing/NextStepsSection';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const handlePricingCalculatorClick = () => {
    // Small delay to allow navigation to complete before scrolling
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <PricingHero />

      <ServicesIncluded />

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

      <PackageCards />

      {/* Pricing Calculator Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
            Need a Custom Quote?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Use our Pricing Calculator to customize your own quote based on your specific needs and preferences. 
            Get an instant estimate tailored to your wedding day vision.
          </p>
          <Link to="/price-calculator" onClick={handlePricingCalculatorClick}>
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg">
              <Calculator className="w-5 h-5 mr-2" />
              Use Pricing Calculator
            </Button>
          </Link>
        </div>
      </section>

      {/* Ceremony Sample Video */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <VideoEmbed title="12-minute Highlight Samples" videoId="873857580" platform="vimeo" />
          <VideoEmbed title="Highlight Sample" videoId="737991237" platform="vimeo" />
          <VideoEmbed title="Ceremony Samples" videoId="1092532920" platform="vimeo" />
          <VideoEmbed title="Ceremony Sample" videoId="1092526756" platform="vimeo" />
        </div>
      </section>

      <CustomizableSection />

      <PersonalTouch />

      <NextStepsSection />

      <Footer />
    </div>
  );
};

export default Pricing;
