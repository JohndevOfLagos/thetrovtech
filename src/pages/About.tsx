import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">About Xfinity Services</h1>
        <div className="prose prose-neutral max-w-none space-y-6 text-neutral-700 leading-relaxed">
          <p>
            Xfinity is committed to providing the best connectivity and entertainment experience for millions of people across the country. Our mission is to keep you connected to what matters most.
          </p>
          <p>
            From high-speed internet to cutting-edge home security, we're constantly innovating to make your life easier and more connected. Our account management tools are designed with simplicity and security in mind.
          </p>
          <h2 className="text-2xl font-bold text-neutral-900 mt-10">Our Vision</h2>
          <p>
            We believe that everyone should have access to the digital world. That's why we're dedicated to building a faster, more reliable network every day.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
