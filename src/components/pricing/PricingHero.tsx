
const PricingHero = () => {
  return (
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
  );
};

export default PricingHero;
