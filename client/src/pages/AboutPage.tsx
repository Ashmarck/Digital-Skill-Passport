import { MainLayout } from '../components/MainLayout';
import { Card, CardContent } from '../components/ui/card';
import { Target, Eye, Heart, TrendingUp, Users, Globe } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Verified Workers' },
    { icon: Globe, value: '25+', label: 'Cities Covered' },
    { icon: TrendingUp, value: '50,000+', label: 'Jobs Completed' },
    { icon: Heart, value: '98%', label: 'Satisfaction Rate' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To create verified digital identities for blue-collar workers, enabling them to showcase their skills and connect with trusted employment opportunities.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description:
        'A world where every skilled worker has access to dignified employment through transparent verification and equal opportunities.',
    },
    {
      icon: Heart,
      title: 'Social Impact',
      description:
        'Empowering marginalized workers with digital tools, reducing unemployment, and fostering economic inclusion through technology.',
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">About Digital Skill Passport</h1>
            <p className="text-xl text-blue-100">
              Building bridges between skilled workers and opportunities through verified
              digital identities and transparent job matching.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Impact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-2">
                  <CardContent className="pt-6">
                    <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-600">
              Making a difference in the lives of workers and employers
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index}>
                  <CardContent className="pt-6 text-center">
                    <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="text-blue-600 mb-2">{stat.value}</div>
                    <p className="text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Digital Skill Passport was born from a simple observation: millions of
                  skilled blue-collar workers struggle to prove their expertise and connect
                  with reliable employers, while businesses face challenges finding and
                  verifying qualified workers.
                </p>
                <p>
                  We recognized that in an increasingly digital world, blue-collar workers
                  were being left behind. Traditional hiring methods relied on word-of-mouth
                  and paper documents that were easily lost or forged. Workers had no way to
                  build a portable, verifiable record of their skills and experience.
                </p>
                <p>
                  Our platform bridges this gap by providing verified digital identities for
                  workers, transparent job verification through QR codes, and a reputation
                  system that rewards quality work. We're not just connecting workers with
                  jobs – we're building trust, dignity, and opportunity.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 lg:p-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Identify the Problem</h3>
                    <p className="text-gray-600">
                      Recognized the verification gap in blue-collar employment
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Build the Solution</h3>
                    <p className="text-gray-600">
                      Created a digital platform with QR verification and skill tracking
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Scale the Impact</h3>
                    <p className="text-gray-600">
                      Expanding to serve thousands of workers and employers nationwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-blue-100">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Trust',
                description: 'Building verified, transparent relationships between all parties',
              },
              {
                title: 'Inclusion',
                description: 'Creating opportunities accessible to all skilled workers',
              },
              {
                title: 'Dignity',
                description: 'Respecting and valuing the work of every individual',
              },
              {
                title: 'Innovation',
                description: 'Using technology to solve real-world employment challenges',
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-white mb-3">{value.title}</h3>
                  <p className="text-blue-100">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
