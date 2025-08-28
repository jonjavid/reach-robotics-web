
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Users, Trophy, Heart, Mail, Phone, MapPin, Wrench, Lightbulb, Target, Star, ArrowRight, Play } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-robotics-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-robotics-blue-500" />
              <span className="text-xl font-bold text-robotics-blue-800">Reach for Robotics</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-robotics-blue-700 hover:text-robotics-blue-500 transition-colors">About</a>
              <a href="#programs" className="text-robotics-blue-700 hover:text-robotics-blue-500 transition-colors">Programs</a>
              <a href="#impact" className="text-robotics-blue-700 hover:text-robotics-blue-500 transition-colors">Impact</a>
              <a href="#get-involved" className="text-robotics-blue-700 hover:text-robotics-blue-500 transition-colors">Get Involved</a>
              <a href="#contact" className="text-robotics-blue-700 hover:text-robotics-blue-500 transition-colors">Contact</a>
            </div>
            <Button className="bg-robotics-blue-500 hover:bg-robotics-blue-600 text-white">
              Donate Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-robotics-blue-500 via-robotics-blue-400 to-robotics-blue-300 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Inspiring the Next Generation of 
                <span className="bg-gradient-to-r from-robotics-blue-100 to-white bg-clip-text text-transparent"> Innovators</span>
              </h1>
              <p className="text-xl text-robotics-blue-100 mb-8 leading-relaxed">
                Through hands-on robotics education, we're building tomorrow's problem solvers, engineers, and leaders. Join us in making STEM accessible to every child.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
              </div>
            </div>
            <div className="relative">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 animate-float">
                <Bot className="h-32 w-32 text-white mx-auto mb-4" />
                <div className="text-center">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-robotics-blue-800 mb-4">About Reach for Robotics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe every child deserves the opportunity to explore and create through robotics and STEM education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-robotics-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Target className="h-12 w-12 text-robotics-blue-500 mx-auto mb-4" />
                <CardTitle className="text-robotics-blue-800">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Provide resources and hands on workshops for communities to learn about and attain a passion for STEM and robotics
                </p>
              </CardContent>
            </Card>

            <Card className="border-robotics-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Lightbulb className="h-12 w-12 text-robotics-blue-500 mx-auto mb-4" />
                <CardTitle className="text-robotics-blue-800">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Our biggest aim and vision for the future is to create a world where robotics and STEM are accessible for all communities, regardless of circumstance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-robotics-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 text-robotics-blue-500 mx-auto mb-4" />
                <CardTitle className="text-robotics-blue-800">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Our programs are created with the intent to foster a sense of curiosity and collaboration within everyone involved.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gradient-to-br from-robotics-blue-50 to-robotics-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-robotics-blue-800 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From beginner to intermediate and advanced workshops, we offer comprehensive robotics education for all skill levels.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            <Card className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Bot className="h-10 w-10 text-robotics-blue-500" />
                  <Badge className="bg-robotics-blue-100 text-robotics-blue-700">Ages 6-10</Badge>
                </div>
                <CardTitle className="text-robotics-blue-800">Robot Explorers</CardTitle>
                <CardDescription>
                  Introduction to robotics through fun, hands-on activities and basic programming concepts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Basic robot assembly</li>
                  <li>• Visual programming</li>
                  <li>• Problem-solving games</li>
                  <li>• Team collaboration</li>
                </ul>
                <Button className="w-full mt-4 bg-robotics-blue-500 hover:bg-robotics-blue-600">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Wrench className="h-10 w-10 text-robotics-blue-400" />
                  <Badge className="bg-robotics-blue-100 text-robotics-blue-700">Ages 11-14</Badge>
                </div>
                <CardTitle className="text-robotics-blue-800">Tech Builders</CardTitle>
                <CardDescription>
                  Advanced robotics programming and engineering design challenges for middle school students.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Arduino programming</li>
                  <li>• Sensor integration</li>
                  <li>• Design thinking</li>
                  <li>• Competition prep</li>
                </ul>
                <Button className="w-full mt-4 bg-robotics-blue-400 hover:bg-robotics-blue-500">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Trophy className="h-10 w-10 text-robotics-blue-300" />
                  <Badge className="bg-robotics-blue-100 text-robotics-blue-700">Ages 15-18</Badge>
                </div>
                <CardTitle className="text-robotics-blue-800">Innovation League</CardTitle>
                <CardDescription>
                  Competitive robotics teams focusing on real-world challenges and advanced engineering.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Advanced programming</li>
                  <li>• CAD design</li>
                  <li>• Project management</li>
                  <li>• Mentorship opportunities</li>
                </ul>
                <Button className="w-full mt-4 bg-robotics-blue-300 hover:bg-robotics-blue-400">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    

      {/* Get Involved Section */}
      <section id="get-involved" className="py-20 bg-gradient-to-br from-robotics-blue-50 to-robotics-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-robotics-blue-800 mb-4">Get Involved</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our mission to make robotics education accessible to every child. There are many ways to support our cause.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 text-robotics-blue-500 mx-auto mb-4" />
                <CardTitle className="text-robotics-blue-800">Volunteer</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Share your skills and passion for technology with the next generation of innovators.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-robotics-blue-500 mx-auto mb-4" />
                <CardTitle className="text-robotics-blue-800">Partner</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Partner with us to bring robotics education to underserved communities and schools.
                </p>

              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Star className="h-12 w-12 text-robotics-blue-500 mx-auto mb-4" />
                <CardTitle className="text-robotics-blue-800">Donate</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Your donation helps us provide robotics kits, training, and programs to students in need.
                </p>

              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-robotics-blue-800 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to get started or have questions? We'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-robotics-blue-200">
              <CardHeader className="text-center">
                <Mail className="h-8 w-8 text-robotics-blue-500 mx-auto mb-2" />
                <CardTitle className="text-robotics-blue-800">Email Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">info@reachforrobotics.org</p>
                <p className="text-gray-600">programs@reachforrobotics.org</p>
              </CardContent>
            </Card>

      {/* Footer */}
      <footer className="bg-robotics-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Bot className="h-8 w-8" />
                <span className="text-xl font-bold">Reach for Robotics</span>
              </div>
              <p className="text-robotics-blue-100">
                Inspiring the next generation of innovators through hands-on robotics education.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-robotics-blue-100">
                <li>Robot Explorers</li>
                <li>Tech Builders</li>
                <li>Innovation League</li>
                <li>Summer Camps</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Get Involved</h4>
              <ul className="space-y-2 text-robotics-blue-100">
                <li>Volunteer</li>
                <li>Partner with Us</li>
                <li>Donate</li>
                <li>Sponsor</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-robotics-blue-100">
                <li>Newsletter</li>
                <li>Social Media</li>
                <li>Events</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-robotics-blue-700 mt-8 pt-8 text-center text-robotics-blue-100">
            <p>&copy; 2024 Reach for Robotics. All rights reserved. | Non-profit 501(c)(3) Organization</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
