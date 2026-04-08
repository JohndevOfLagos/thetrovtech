import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-neutral-900">Contact Support</h1>
        <div className="grid md:grid-cols-2 gap-12 mt-10">
          <div className="space-y-8">
            <p className="text-lg text-neutral-700 leading-relaxed">
              We're here to help. Reach out to us through any of the following channels or visit a store near you.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-neutral-800">
                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-800">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-neutral-600">1-800-XFINITY (1-800-934-6489)</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-neutral-800">
                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-800">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Email Support</p>
                  <p className="text-neutral-600">support@xfinity.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-neutral-800">
                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-800">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Visit a Store</p>
                  <p className="text-neutral-600">Find a store near you using our locator tool.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200">
            <h2 className="text-xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input type="text" className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-violet-800 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-violet-800 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-violet-800 focus:outline-none"></textarea>
              </div>
              <button type="button" className="w-full bg-violet-800 text-white font-semibold py-3 rounded-lg hover:bg-violet-900 transition shadow-md">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
