
const CustomizableSection = () => {
  return (
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
  );
};

export default CustomizableSection;
