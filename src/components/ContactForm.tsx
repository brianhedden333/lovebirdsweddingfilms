
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    weddingDate: '',
    venue: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. I'll get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      weddingDate: '',
      venue: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            Let's Create Something Beautiful
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to capture your special day? Let's discuss your vision and create memories that will last a lifetime.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="weddingDate" className="block text-sm font-medium text-gray-700 mb-2">
                Wedding Date
              </label>
              <input
                type="date"
                id="weddingDate"
                name="weddingDate"
                value={formData.weddingDate}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="venue" className="block text-sm font-medium text-gray-700 mb-2">
              Venue
            </label>
            <input
              type="text"
              id="venue"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              placeholder="Wedding venue location"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Tell me about your vision *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Share details about your wedding, style preferences, and any special moments you'd like to capture..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors resize-none"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-teal-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
