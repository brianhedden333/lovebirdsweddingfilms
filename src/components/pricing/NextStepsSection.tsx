
const NextStepsSection = () => {
  const nextSteps = [
    'Contact for custom quote based on your specific needs and vision',
    'Contract signing and booking process with deposit',
    'Pre-wedding consultation and timeline planning',
    'Professional wedding day coverage with artistic storytelling',
    'Post-production editing and delivery of final film(s)'
  ];

  const handleStartJourney = () => {
    window.location.href = '/#contact';
  };

  return (
    <>
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
                {nextSteps.map((step, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 text-lg">{step}</span>
                  </li>
                ))}
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
              <img 
                src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Wedding party celebration" 
                className="w-full h-96 object-cover rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NextStepsSection;
