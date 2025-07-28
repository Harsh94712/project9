import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, Home, FileText, DollarSign, MessageSquare, Wrench, Shield, FileCheck, RotateCcw, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Promote Section - Made bigger */}
          <div className="lg:col-span-1">
            <div className="bg-footer-card p-8 rounded-lg h-full">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-footer-accent rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 relative">
                    <div className="absolute inset-0 bg-footer-accent-foreground rounded-full"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-footer-foreground">Promote</h3>
              </div>

              {/* Illustration - Made bigger */}
              <div className="flex justify-center mb-8">
                <div className="w-32 h-20 relative">
                  <div className="absolute inset-0 bg-blue-500 rounded-full opacity-80"></div>
                  <div className="absolute top-3 right-3 w-10 h-16 bg-footer-accent rounded transform rotate-12"></div>
                  <div className="absolute bottom-2 left-2 w-5 h-5 bg-green-500 rounded-full"></div>
                </div>
              </div>

              {/* Subscribe Content - Made bigger */}
              <h4 className="text-xl font-semibold mb-3 text-footer-foreground">Subscribe now</h4>
              <p className="text-footer-muted text-base mb-6">
                Industry's standard from dummy and make a type book.
              </p>

              {/* Email Input and Button - Side by side, bigger */}
              <div className="flex gap-3">
                <Input 
                  placeholder="Enter Your Email..."
                  className="bg-footer-input border-footer-border text-footer-foreground placeholder:text-footer-muted h-14 text-base flex-1"
                />
                <Button className="bg-footer-accent text-footer-accent-foreground hover:bg-footer-accent/90 font-medium h-14 text-base px-8">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Info & Location Section - Positioned higher */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Get in touch section */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-footer-foreground">Get in touch with</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-green-400" />
                    <div className="bg-footer-card text-footer-accent font-bold px-4 py-2 inline-block rounded">
                      +1 917 000 1212
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span className="text-footer-foreground">nextlevel@marketing.com</span>
                  </div>
                </div>
              </div>

              {/* Location section */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-footer-foreground">Location</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-yellow-400 mt-1" />
                    <div>
                      <div className="text-footer-foreground">
                        10 Suna House 65 Rivington Street London EC2A 3QQ
                      </div>
                      <a href="#" className="text-footer-accent hover:underline text-sm">location</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Break Line */}
        <hr className="border-t border-gray-600 my-8" />

        {/* Pages, Utility Pages, and Follow Us Section - At bottom of Get in touch */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-footer-muted text-sm mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-6 h-6 text-red-400" />
              <h5 className="font-semibold text-red-400 text-lg">Pages</h5>
            </div>
            <ul className="space-y-3">
              <li className="hover:text-footer-foreground cursor-pointer text-base">Home</li>
              <li className="hover:text-footer-foreground cursor-pointer text-base">About</li>
              <li className="hover:text-footer-foreground cursor-pointer text-base">Blog</li>
              <li className="hover:text-footer-foreground cursor-pointer text-base">Pricing Single</li>
              <li className="hover:text-footer-foreground cursor-pointer text-base">Contact</li>
              <li className="hover:text-footer-foreground cursor-pointer text-base">Services</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="w-5 h-5 text-blue-400" />
              <h5 className="font-semibold text-blue-400">Utility Pages</h5>
            </div>
            <ul className="space-y-2">
              <li className="hover:text-footer-foreground cursor-pointer">Styleguide</li>
              <li className="hover:text-footer-foreground cursor-pointer">404 Not Found</li>
              <li className="hover:text-footer-foreground cursor-pointer">Password Protected</li>
              <li className="hover:text-footer-foreground cursor-pointer">Licenses</li>
              <li className="hover:text-footer-foreground cursor-pointer">Changelog</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-5 h-5 text-green-400" />
              <h5 className="font-semibold text-green-400">Follow Us</h5>
            </div>
            <ul className="space-y-2">
              <li className="hover:text-footer-foreground cursor-pointer">Facebook</li>
              <li className="hover:text-footer-foreground cursor-pointer">Twitter</li>
              <li className="hover:text-footer-foreground cursor-pointer">Instagram</li>
              <li className="hover:text-footer-foreground cursor-pointer">LinkedIn</li>
            </ul>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-footer-border pt-6">
          <div className="text-center text-footer-muted text-sm">
            Copyright © Nextlevel | Designed by VictorFlow - Powered by Webflow
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;