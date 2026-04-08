import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-neutral-900">Terms of Service</h1>
        <div className="prose prose-neutral max-w-none space-y-6 text-neutral-700 leading-relaxed bg-white p-10 rounded-xl shadow-sm border border-neutral-200">
          <p className="text-sm text-neutral-500 mb-6">Last Updated: April 2026</p>
          <h2 className="text-2xl font-bold text-neutral-900 mt-10">1. Acceptance of Terms</h2>
          <p>
            By accessing and using our services, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
          <h2 className="text-2xl font-bold text-neutral-900 mt-10">2. Account Responsibility</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account information, including your password. You agree to notify us immediately of any unauthorized use of your account.
          </p>
          <h2 className="text-2xl font-bold text-neutral-900 mt-10">3. Use of Services</h2>
          <p>
            You agree to use our services only for lawful purposes and in accordance with these terms. Any unauthorized use of our services is strictly prohibited.
          </p>
          <h2 className="text-2xl font-bold text-neutral-900 mt-10">4. Modifications to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Your continued use of our services following any such changes constitutes your acceptance of the new terms.
          </p>
          <h2 className="text-2xl font-bold text-neutral-900 mt-10">5. Limitation of Liability</h2>
          <p>
            Xfinity shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of or inability to use our services.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
