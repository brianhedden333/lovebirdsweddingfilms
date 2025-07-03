

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
    twelveMinuteHighlight: 0,
    toastsVideo: 1,
    extraTravel: 0
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

    try {
      const quoteData = {
        email: email,
        quote_details: {
          booking: {
            amount: amounts.booking,
            rate: rates.booking,
            total: calculateTotal(amounts.booking, rates.booking)
          },
          hoursOfFilming: {
            amount: amounts.hoursOfFilming,
            rate: rates.hoursOfFilming,
            total: calculateTotal(amounts.hoursOfFilming, rates.hoursOfFilming)
          },
          ceremonyEdit: {
            amount: amounts.ceremonyEdit,
            rate: rates.ceremonyEdit,
            total: calculateTotal(amounts.ceremonyEdit, rates.ceremonyEdit)
          },
          threeMinuteHighlight: {
            amount: amounts.threeMinuteHighlight,
            rate: rates.threeMinuteHighlight,
            total: calculateTotal(amounts.threeMinuteHighlight, rates.threeMinuteHighlight)
          },
          twelveMinuteHighlight: {
            amount: amounts.twelveMinuteHighlight,
            rate: rates.twelveMinuteHighlight,
            total: calculateTotal(amounts.twelveMinuteHighlight, rates.twelveMinuteHighlight)
          },
          toastsVideo: {
            amount: amounts.toastsVideo,
            rate: rates.toastsVideo,
            total: calculateTotal(amounts.toastsVideo, rates.toastsVideo)
          },
          extraTravel: {
            amount: amounts.extraTravel,
            rate: rates.extraTravel,
            total: calculateTotal(amounts.extraTravel, rates.extraTravel)
          }
        },
        grandTotal: grandTotal,
        timestamp: new Date().toISOString()
      };

      console.log("Sending quote data to webhook:", quoteData);
      console.log("Request URL:", 'https://n8n.brianhedden.com/webhook-test/wedding-quote');

      const response = await fetch('https://n8n.brianhedden.com/webhook-test/wedding-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(quoteData),
      });

      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);
      
      const responseText = await response.text();
      console.log("Response body:", responseText);

      if (response.ok) {
        toast({
          title: "Quote Sent!",
          description: "Your wedding film quote has been sent successfully.",
        });
        setEmail('');
      } else {
        console.error("Failed response:", response.status, responseText);
        throw new Error(`Failed to send quote: ${response.status} ${responseText}`);
      }
    } catch (error) {
      console.error("Error sending quote:", error);
      toast({
        title: "Error",
        description: "Failed to send quote. Please try again.",
        variant: "destructive",
      });
    }
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

  const galleryImages = [
    '/lovable-uploads/7749a1ce-44a2-4f52-9b63-135147672db0.png',
    '/lovable-uploads/b3be7fa1-64a2-45a2-a9ab-a52e499d1181.png',
    '/lovable-uploads/e191e074-449c-4a21-b32f-b727657d412f.png',
    '/lovable-uploads/d951e5ac-7fc1-4053-a7d2-3b5131f1de71.png',
    '/lovable-uploads/1ce2b5ba-2869-40d5-aee3-d18a2266df72.png',
    '/lovable-uploads/0320dc7b-7bdf-432e-826d-89094d7190b3.png',
    '/lovable-uploads/af471e6f-52a3-44a8-81b1-65913f79dacd.png',
    '/lovable-uploads/d92965bf-4069-4ab3-a957-459b809fc268.png'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-teal-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6">
              Wedding Film Price Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Customize your wedding film package and get an instant quote
            </p>
          </div>
        </section>

        {/* Gallery Top */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.slice(0, 4).map((image, index) => (
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
                  Calculate Your Wedding Film Investment
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
                          <div className="w-20 text-center bg-gray-100 border border-gray-300 rounded px-3 py-2 mx-auto">
                            {amounts.booking}
                          </div>
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
              {galleryImages.slice(4, 8).map((image, index) => (
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
