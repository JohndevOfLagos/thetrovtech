import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import { 
  LayoutDashboard, 
  Settings, 
  CreditCard, 
  Bell, 
  HelpCircle, 
  LogOut,
  User,
  Shield,
  Wifi,
  Tv,
  Smartphone
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <Navbar />
      
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 bg-white border-r border-neutral-200 p-6">
          <nav className="flex-1 space-y-1">
            <button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-semibold text-violet-800 bg-violet-50 rounded-lg">
              <LayoutDashboard className="h-4 w-4" />
              Overview
            </button>
            <button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition">
              <CreditCard className="h-4 w-4" />
              Billing
            </button>
            <button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition">
              <Shield className="h-4 w-4" />
              Security
            </button>
            <button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition">
              <Settings className="h-4 w-4" />
              Settings
            </button>
          </nav>
          
          <div className="pt-6 border-t border-neutral-100">
            <button 
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <header className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-neutral-900">Welcome back!</h1>
              <p className="text-neutral-500">Here's what's happening with your Xfinity account today.</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-neutral-500 hover:bg-neutral-100 rounded-full transition relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <div className="w-10 h-10 rounded-full bg-violet-800 flex items-center justify-center text-white font-bold">
                JD
              </div>
            </div>
          </header>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                  <Wifi className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold">Xfinity Internet</h3>
                  <p className="text-sm text-neutral-500">Status: Active</p>
                </div>
              </div>
              <p className="text-2xl font-bold mb-1">1.2 Gbps</p>
              <p className="text-xs text-neutral-400">Next billing date: May 12, 2026</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-red-50 text-red-600 rounded-lg">
                  <Tv className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold">Xfinity TV</h3>
                  <p className="text-sm text-neutral-500">Status: Active</p>
                </div>
              </div>
              <p className="text-2xl font-bold mb-1">140+ Channels</p>
              <p className="text-xs text-neutral-400">Popular: Sports Package</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-50 text-green-600 rounded-lg">
                  <Smartphone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold">Xfinity Mobile</h3>
                  <p className="text-sm text-neutral-500">Status: Active</p>
                </div>
              </div>
              <p className="text-2xl font-bold mb-1">Unlimited Data</p>
              <p className="text-xs text-neutral-400">Lines: 2 Active</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200">
              <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
              <div className="space-y-6">
                {[
                  { title: "Monthly Payment", date: "Apr 05, 2026", amount: "-$124.99" },
                  { title: "Plan Upgrade", date: "Mar 28, 2026", amount: "No Charge" },
                  { title: "Support Ticket #4928", date: "Mar 15, 2026", amount: "Resolved" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-neutral-100 pb-4 last:border-0">
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-neutral-500">{item.date}</p>
                    </div>
                    <span className="font-bold text-neutral-700">{item.amount}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 text-violet-800 font-semibold text-sm hover:underline">
                View All Activity
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold mb-2">Need Help?</h2>
                <p className="text-neutral-500 mb-6">Our support team is available 24/7 to assist you with any questions or technical issues.</p>
                <div className="space-y-4">
                  <button className="w-full flex items-center justify-between p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition">
                    <span className="font-medium">Live Chat Support</span>
                    <HelpCircle className="h-4 w-4 text-violet-800" />
                  </button>
                  <button className="w-full flex items-center justify-between p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition">
                    <span className="font-medium">Browse Help Center</span>
                    <HelpCircle className="h-4 w-4 text-violet-800" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
