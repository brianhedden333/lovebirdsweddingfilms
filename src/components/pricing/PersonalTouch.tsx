
const PersonalTouch = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/lovable-uploads/a9a29b16-6975-4627-a6f6-a78bff1b4219.png" 
              alt="Brian filming a wedding" 
              className="w-full h-96 object-cover rounded-lg shadow-lg" 
            />
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
  );
};

export default PersonalTouch;
