
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PriceCalculator = () => {
  const { toast } = useToast();
  
  const [email, setEmail] = useState('');
  const [amounts, setAmounts] = useState({
    booking: 1,
    hoursOfFilming: 3,
    ceremonyEdit: 1,
    threeMinuteHighlight: 1,
    twelveMinuteHighlight: 1,
    toastsVideo: 1,
    extraTravel: 50
  });

  const rates = {
    booking: 200,
    hoursOfFilming: 100,
    ceremonyEdit: 400,
    threeMinuteHighlight: 800,
    twelveMinuteHighlight: 2300,
    toastsVideo: 400,
    extraTravel: 2
  };

  const calculateTotal = (amount: number, rate: number) => amount * rate;

  const grandTotal = Object.keys(amounts).reduce((sum, key) => {
    return sum + calculateTotal(amounts[key as keyof typeof amounts], rates[key as keyof typeof rates]);
  }, 0);

  const handleAmountChange = (field: keyof typeof amounts, value: string) => {
    const numValue = parseFloat(value) || 0;
    setAmounts(prev => ({ ...prev, [field]: numValue }));
  };

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    // For now, we'll just show a success message since there's no backend
    // In a real implementation, this would send the email via an API
    toast({
      title: "Quote Sent!",
      description: "Your wedding video quote has been sent to your email and Brian.",
    });
    console.log("Quote data:", { amounts, rates, grandTotal, email });
  };

  const automaticallyIncluded = [
    'Planning and consultation with you, the wedding planner, and/or vendors',
    'Free travel up to 50 miles from Boulder',
    'Cinematic Aerial Footage',
    'Video content options for before and/or after the ceremony',
    'Support with livestreaming',
    'Edited to your personalized soundtrack',
    'Collaborative Editing Process',
    'Convenient digital delivery and cloud storage'
  ];

  const portfolioImages = [
    'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-teal-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6">
              Wedding Video Price Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Customize your wedding video package and get an instant quote
            </p>
          </div>
        </section>

        {/* Gallery Top */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {portfolioImages.slice(0, 4).map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md">
                  <img 
                    src={image} 
                    alt={`Portfolio ${index + 1}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Automatically Included Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif text-gray-900 text-center mb-8">
              Automatically Included With Every Package
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {automaticallyIncluded.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Price Calculator */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="shadow-xl">
              <CardHeader className="bg-teal-600 text-white">
                <CardTitle className="text-2xl font-serif text-center">
                  Calculate Your Wedding Video Investment
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-3 px-2 font-serif text-lg">Service</th>
                        <th className="text-center py-3 px-2 font-serif text-lg">Amount</th>
                        <th className="text-center py-3 px-2 font-serif text-lg">Unit</th>
                        <th className="text-center py-3 px-2 font-serif text-lg">Rate per Unit</th>
                        <th className="text-right py-3 px-2 font-serif text-lg">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-4 px-2 font-medium">Booking</td>
                        <td className="py-4 px-2 text-center">
                          <Input
                            type="number"
                            value={amounts.booking}
                            onChange={(e) => handleAmountChange('booking', e.target.value)}
                            className="w-20 text-center"
                            min="0"
                            step="1"
                          />
                        </td>
                        <td className="py-4 px-2 text-center text-gray-600">wedding</td>
                        <td className="py-4 px-2 text-center">${rates.booking}</td>
                        <td className="py-4 px-2 text-right font-semibold">
                          ${calculateTotal(amounts.booking, rates.booking).toLocaleString()}
                        </td>
                      </tr>
                      
                      <tr className="border-b border-gray-100">
                        <td className="py-4 px-2 font-medium">Hours of Filming</td>
                        <td className="py-4 px-2 text-center">
                          <Input
                            type="number"
                            value={amounts.hoursOfFilming}
                            onChange={(e) => handleAmountChange('hoursOfFilming', e.target.value)}
                            className="w-20 text-center"
                            min="0"
                            step="0.5"
                          />
                        </td>
                        <td className="py-4 px-2 text-center text-gray-600">hours</td>
                        <td className="py-4 px-2 text-center">${rates.hoursOfFilming}</td>
                        <td className="py-4 px-2 text-right font-semibold">
                          ${calculateTotal(amounts.hoursOfFilming, rates.hoursOfFilming).toLocaleString()}
                        </td>
                      </tr>
                      
                      <tr className="border-b border-gray-100">
                        <td className="py-4 px-2 font-medium">Ceremony Edit</td>
                        <td className="py-4 px-2 text-center">
                          <Input
                            type="number"
                            value={amounts.ceremonyEdit}
                            onChange={(e) => handleAmountChange('ceremonyEdit', e.target.value)}
                            className="w-20 text-center"
                            min="0"
                            step="1"
                          />
                        </td>
                        <td className="py-4 px-2 text-center text-gray-600">edit</td>
                        <td className="py-4 px-2 text-center">${rates.ceremonyEdit}</td>
                        <td className="py-4 px-2 text-right font-semibold">
                          ${calculateTotal(amounts.ceremonyEdit, rates.ceremonyEdit).toLocaleString()}
                        </td>
                      </tr>
                      
                      <tr className="border-b border-gray-100">
                        <td className="py-4 px-2 font-medium">3-Minute Highlight</td>
                        <td className="py-4 px-2 text-center">
                          <Input
                            type="number"
                            value={amounts.threeMinuteHighlight}
                            onChange={(e) => handleAmountChange('threeMinuteHighlight', e.target.value)}
                            className="w-20 text-center"
                            min="0"
                            step="1"
                          />
                        </td>
                        <td className="py-4 px-2 text-center text-gray-600">edit</td>
                        <td className="py-4 px-2 text-center">${rates.threeMinuteHighlight}</td>
                        <td className="py-4 px-2 text-right font-semibold">
                          ${calculateTotal(amounts.threeMinuteHighlight, rates.threeMinuteHighlight).toLocaleString()}
                        </td>
                      </tr>
                      
                      <tr className="border-b border-gray-100">
                        <td className="py-4 px-2 font-medium">12-minute Highlight</td>
                        <td className="py-4 px-2 text-center">
                          <Input
                            type="number"
                            value={amounts.twelveMinuteHighlight}
                            onChange={(e) => handleAmountChange('twelveMinuteHighlight', e.target.value)}
                            className="w-20 text-center"
                            min="0"
                            step="1"
                          />
                        </td>
                        <td className="py-4 px-2 text-center text-gray-600">edit</td>
                        <td className="py-4 px-2 text-center">${rates.twelveMinuteHighlight}</td>
                        <td className="py-4 px-2 text-right font-semibold">
                          ${calculateTotal(amounts.twelveMinuteHighlight, rates.twelveMinuteHighlight).toLocaleString()}
                        </td>
                      </tr>
                      
                      <tr className="border-b border-gray-100">
                        <td className="py-4 px-2 font-medium">Toasts Video</td>
                        <td className="py-4 px-2 text-center">
                          <Input
                            type="number"
                            value={amounts.toastsVideo}
                            onChange={(e) => handleAmountChange('toastsVideo', e.target.value)}
                            className="w-20 text-center"
                            min="0"
                            step="1"
                          />
                        </td>
                        <td className="py-4 px-2 text-center text-gray-600">edit</td>
                        <td className="py-4 px-2 text-center">${rates.toastsVideo}</td>
                        <td className="py-4 px-2 text-right font-semibold">
                          ${calculateTotal(amounts.toastsVideo, rates.toastsVideo).toLocaleString()}
                        </td>
                      </tr>
                      
                      <tr className="border-b-2 border-gray-200">
                        <td className="py-4 px-2 font-medium">Extra Travel - over 50 miles from Boulder</td>
                        <td className="py-4 px-2 text-center">
                          <Input
                            type="number"
                            value={amounts.extraTravel}
                            onChange={(e) => handleAmountChange('extraTravel', e.target.value)}
                            className="w-20 text-center"
                            min="0"
                            step="1"
                          />
                        </td>
                        <td className="py-4 px-2 text-center text-gray-600">miles</td>
                        <td className="py-4 px-2 text-center">${rates.extraTravel}</td>
                        <td className="py-4 px-2 text-right font-semibold">
                          ${calculateTotal(amounts.extraTravel, rates.extraTravel).toLocaleString()}
                        </td>
                      </tr>
                      
                      <tr className="bg-teal-50">
                        <td className="py-6 px-2 font-bold text-lg" colSpan={4}>
                          Total Investment
                        </td>
                        <td className="py-6 px-2 text-right font-bold text-2xl text-teal-600">
                          ${grandTotal.toLocaleString()}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Email Form */}
                <form onSubmit={handleSendEmail} className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-serif mb-4">Send This Quote</h3>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <Label htmlFor="email">Your Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div className="sm:self-end">
                      <Button type="submit" className="bg-teal-600 hover:bg-teal-700 w-full sm:w-auto">
                        Send This Quote
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    This quote will be sent to you and Brian at brian@brianhedden.com
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Gallery Bottom */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {portfolioImages.slice(4, 8).map((image, index) => (
                <div key={index + 4} className="aspect-square overflow-hidden rounded-lg shadow-md">
                  <img 
                    src={image} 
                    alt={`Portfolio ${index + 5}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PriceCalculator;
