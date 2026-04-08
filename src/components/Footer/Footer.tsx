import React from "react";
import { Link } from "react-router-dom";
import {
  ReceiptText,
  FileSearch,
  NotepadText,
  HeartPulse,
  Play,
  BadgeCheck,
  Cookie,
  Info,
  Mail
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white pt-12 pb-8 border-t border-neutral-100">
      
      {/* Links Grid */}
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div className="space-y-4">
          <h4 className="font-bold text-neutral-900">Company</h4>
          <ul className="space-y-2 text-sm text-neutral-600">
            <li><Link to="/about" className="hover:text-violet-800 transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-violet-800 transition">Contact</Link></li>
            <li><Link to="#" className="hover:text-violet-800 transition">Careers</Link></li>
            <li><Link to="#" className="hover:text-violet-800 transition">Newsroom</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-neutral-900">Services</h4>
          <ul className="space-y-2 text-sm text-neutral-600">
            <li><Link to="/" className="hover:text-violet-800 transition">Internet</Link></li>
            <li><Link to="/" className="hover:text-violet-800 transition">TV & Streaming</Link></li>
            <li><Link to="/" className="hover:text-violet-800 transition">Mobile</Link></li>
            <li><Link to="/" className="hover:text-violet-800 transition">Security</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-neutral-900">Support</h4>
          <ul className="space-y-2 text-sm text-neutral-600">
            <li><Link to="/contact" className="hover:text-violet-800 transition">Help Center</Link></li>
            <li><Link to="/contact" className="hover:text-violet-800 transition">Community</Link></li>
            <li><Link to="/contact" className="hover:text-violet-800 transition">Store Locator</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-neutral-900">Account</h4>
          <ul className="space-y-2 text-sm text-neutral-600">
            <li><Link to="/box/mail/" className="hover:text-violet-800 transition">Sign In</Link></li>
            <li><Link to="/dashboard" className="hover:text-violet-800 transition">Manage Account</Link></li>
          </ul>
        </div>
      </div>

      {/* Legal Links */}
      <div className="mx-auto flex w-full flex-wrap justify-center gap-x-8 gap-y-4 pb-8 px-6 text-xs text-neutral-500 border-t border-neutral-50 pt-8">
        <Link to="/terms" className="flex items-center gap-2 hover:text-violet-800 transition">
          <ReceiptText className="h-3 w-3" />
          <span>Terms of Service</span>
        </Link>

        <Link to="/privacy" className="flex items-center gap-2 hover:text-violet-800 transition">
          <FileSearch className="h-3 w-3" />
          <span>Privacy Policy</span>
        </Link>

        <Link to="#" className="flex items-center gap-2 hover:text-violet-800 transition">
          <BadgeCheck className="h-3 w-3" />
          <span>Your Privacy Choices</span>
        </Link>

        <Link to="#" className="flex items-center gap-2 hover:text-violet-800 transition">
          <NotepadText className="h-3 w-3" />
          <span>CA Notice</span>
        </Link>

        <Link to="#" className="flex items-center gap-2 hover:text-violet-800 transition">
          <Play className="h-3 w-3" />
          <span>Ad Choices</span>
        </Link>
      </div>

      <div className="mx-auto flex max-w-7xl justify-center pb-8 text-xs text-neutral-400">
        <span>© 2026 Thetrovtech. All rights reserved.</span>
      </div>

      <Link to='' className="bg-neutral-900 flex w-full justify-center py-4 gap-2 text-xs text-white hover:bg-black transition">
        <Cookie className="h-4 w-4"/>
        <span>Cookie Preferences</span>
      </Link>
      
    </footer>
  );
};

export default Footer;
