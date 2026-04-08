import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-neutral-900">Privacy Policy</h1>
        <div className="prose prose-neutral max-w-none space-y-6 text-neutral-700 leading-relaxed bg-white p-10 rounded-xl shadow-sm border border-neutral-200">
          <p className="text-sm text-neutral-500 mb-6">Last Updated: April 2026</p>
          <h2 className="text-2xl font-bold text-neutral-900 mt-10">Information We Collect</h2>
          <p>
            When you use our services, we collect information that helps us provide you with the best experience. This includes personal information you provide directly, as well as information collected automatically during your use of our platforms.
          </p>
          <h2 className="text-2xl font-bold text-neutral-900 mt-10">How We Use Your Data</h2>
          <p>
            Your data is used to provide and improve our services, communicate with you about your account, and personalize your experience. We do not sell your personal information to third parties.
          </p>
          <h2 className="text-2xl font-bold text-neutral-900 mt-10">Data Security</h2>
          <p>
            We take the security of your information seriously. We use industry-standard security measures to protect your data from unauthorized access, disclosure, or destruction.
          </p>
          <h2 className="text-2xl font-bold text-neutral-900 mt-10">Your Choices</h2>
          <p>
            You have choices regarding how we collect and use your information. You can manage your privacy settings through your account dashboard at any time.
          </p>
          <p>
            If you have questions about our privacy policy, please contact our privacy office.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
