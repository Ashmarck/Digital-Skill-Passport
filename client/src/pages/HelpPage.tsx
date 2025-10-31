import { useState } from 'react';
import { MainLayout } from '../components/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { MessageCircle, Mail, Phone, HelpCircle, Send } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export default function HelpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const faqs = [
    {
      question: 'How do I create a Digital Skill Passport?',
      answer: 'Sign up as a worker, complete your profile with your skills and experience, and start taking on verified jobs. Each completed job adds to your skill passport automatically.',
    },
    {
      question: 'How does QR code verification work?',
      answer: 'Employers generate a unique QR code for each job. Workers scan it when starting work and again when completing. This creates a verified, tamper-proof record of work completion.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes! We use industry-standard encryption to protect your personal information. Your data is never shared without your explicit consent, and you have full control over your profile visibility.',
    },
    {
      question: 'How do I get verified as a worker?',
      answer: 'Complete your profile with accurate information, verify your email and phone number, and complete your first few jobs successfully. Our system will verify you based on employer feedback and job completion.',
    },
    {
      question: 'What if I have a dispute with an employer/worker?',
      answer: 'Contact our support team immediately through the chat or contact form. We review all disputes fairly and work to resolve them quickly while protecting both parties.',
    },
    {
      question: 'How does the rating system work?',
      answer: 'After each completed job, both employers and workers can rate each other on a 5-star scale with optional comments. Ratings are visible on profiles and help build trust in the community.',
    },
    {
      question: 'Can I use the platform on my mobile phone?',
      answer: 'Absolutely! Our platform is fully responsive and works seamlessly on all devices including smartphones and tablets.',
    },
    {
      question: 'How much does it cost to use?',
      answer: 'Creating an account and building your skill passport is completely free for workers. Employers pay a small fee for job postings and premium features. No hidden charges.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Your message has been sent! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <HelpCircle className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-white mb-4">Help & Support</h1>
            <p className="text-xl text-blue-100">
              We're here to help! Find answers to common questions or contact our support team.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2">
              <CardContent className="pt-6 text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 mb-3">support@digitalskillpassport.com</p>
                <p className="text-sm text-gray-500">Response within 24 hours</p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="pt-6 text-center">
                <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-gray-900 mb-2">Phone Support</h3>
                <p className="text-gray-600 mb-3">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-500">Mon-Fri, 9 AM - 6 PM</p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="pt-6 text-center">
                <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-3">Available 24/7</p>
                <Button variant="outline" size="sm">Start Chat</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find quick answers to common questions</p>
          </div>
          <Card>
            <CardContent className="pt-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Still Need Help?</h2>
            <p className="text-gray-600">Send us a message and we'll get back to you as soon as possible</p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Describe your issue or question..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full gap-2">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </MainLayout>
  );
}
