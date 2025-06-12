
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Just a few weeks before our wedding, I was having regrets about not getting a videographer. Really, I only wanted our ceremony to look back on over the years and I wasn't sure a videographer would do that for us. Brian was a fantastic last minute decision. It worked out perfectly! I knew from the video call meeting that Brian was the right personality to work with us and that he really knew what he was doing (I felt completely confident in him and trusted him). We shared exactly what we were looking for and Brian worked with us to make sure we were happy and he was easy to reach if/when we had questions. On the day of, Brian was not only on time but one of the few things I had absolutely no worries about. He coordinated with our DJ and photographer to get our ceremony video perfect. The final video is everything I was hoping for and so, so beautiful! I highly recommend him!",
      author: "Chris & Theresa",
      location: "Boulder, Colorado"
    },
    {
      text: "The team's attention to detail and ability to capture the essence of our love story was incredible. Our wedding film brings tears to our eyes every time we watch it.",
      author: "Emily & James",
      location: "Aspen, Colorado"
    },
    {
      text: "Professional, creative, and so easy to work with. They made us feel comfortable and natural, resulting in the most beautiful wedding memories we could have asked for.",
      author: "Arti & Brandon",
      location: "Vail, Colorado"
    },
    {
      text: "From our engagement session to our wedding day, Love Birds Wedding Films exceeded every expectation. Their cinematic style is absolutely stunning.",
      author: "David & Shanna",
      location: "Denver, Colorado"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-8 text-center">
              <blockquote className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6 italic font-light">
                "{testimonial.text}"
              </blockquote>
              <div className="text-gray-900 font-medium">
                {testimonial.author}
              </div>
              <div className="text-gray-500 text-sm">
                {testimonial.location}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation buttons */}
      <button
        onClick={prevTestimonial}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
      >
        <ChevronLeft className="w-5 h-5 text-gray-600" />
      </button>
      
      <button
        onClick={nextTestimonial}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
      >
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </button>

      {/* Dots indicator */}
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-teal-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
