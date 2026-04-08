import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import { Link } from "react-router-dom";
import { 
  Wifi, 
  Tv, 
  ShieldCheck, 
  Smartphone, 
  ArrowRight,
  Zap,
  Globe,
  Clock
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center bg-gradient-to-br from-violet-900 via-purple-900 to-violet-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              The Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Home Connectivity
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-xl">
              Experience ultra-fast internet, seamless entertainment, and smart home security all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/login" 
                className="px-8 py-4 bg-white text-violet-900 font-bold rounded-full text-lg hover:bg-purple-50 transition shadow-xl flex items-center justify-center gap-2 group"
              >
                Get Started
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition" />
              </Link>
              <Link 
                to="/about" 
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white/10 transition flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-neutral-900">Services Designed for You</h2>
            <p className="text-xl text-neutral-500 max-w-2xl mx-auto">Explore our suite of premium services built to keep you connected and entertained.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Wifi />, title: "Thetrovtech Internet", desc: "Gig-speed internet for all your devices.", color: "blue" },
              { icon: <Tv />, title: "Thetrovtech TV", desc: "140+ channels and live streaming apps.", color: "red" },
              { icon: <Smartphone />, title: "Thetrovtech Mobile", desc: "Unlimited data on the most reliable network.", color: "green" },
              { icon: <ShieldCheck />, title: "Thetrovtech Home", desc: "Smart security for peace of mind.", color: "purple" }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-xl transition group">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-neutral-50 group-hover:bg-violet-800 group-hover:text-white transition duration-300`}>
                  {React.cloneElement(service.icon as React.ReactElement, { className: "h-7 w-7" })}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl font-bold text-neutral-900 leading-tight">
                Why Choose Thetrovtech for Your <br />Home & Business?
              </h2>
              <div className="space-y-6">
                {[
                  { icon: <Zap />, title: "Blazing Fast Speeds", desc: "Get up to 1200 Mbps for all your heavy-duty tasks." },
                  { icon: <Globe />, title: "Reliable Network", desc: "Our 99.9% network reliability keeps you connected always." },
                  { icon: <Clock />, title: "24/7 Support", desc: "Our team is here to help you whenever you need it." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-100 text-violet-800 flex items-center justify-center">
                      {React.cloneElement(feature.icon as React.ReactElement, { className: "h-6 w-6" })}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                      <p className="text-neutral-500">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute -inset-4 bg-violet-200 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1558522195-e1201b090344?auto=format&fit=crop&q=80" 
                alt="Support team" 
                className="relative rounded-3xl shadow-2xl z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-violet-50">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-neutral-900">Ready to Upgrade Your Experience?</h2>
            <p className="text-xl text-neutral-600">Join millions of satisfied customers today and discover a world of possibilities.</p>
            <div className="flex justify-center pt-4">
              <Link 
                to="/login" 
                className="px-10 py-5 bg-violet-800 text-white font-bold rounded-full text-xl hover:bg-violet-900 transition shadow-lg flex items-center gap-3 group"
              >
                Sign In to Your Account
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
