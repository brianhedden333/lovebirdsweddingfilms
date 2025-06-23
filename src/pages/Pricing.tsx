
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoEmbed from '@/components/VideoEmbed';
import PricingHero from '@/components/pricing/PricingHero';
import ServicesIncluded from '@/components/pricing/ServicesIncluded';
import PackageCards from '@/components/pricing/PackageCards';
import CustomizableSection from '@/components/pricing/CustomizableSection';
import PersonalTouch from '@/components/pricing/PersonalTouch';
import NextStepsSection from '@/components/pricing/NextStepsSection';

const Pricing = () => {
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
