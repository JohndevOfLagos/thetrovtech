import React from "react";
import { Link } from "react-router-dom";
import {
  ReceiptText,
  FileSearch,
  NotepadText,
  HeartPulse,
  Play,
  BadgeCheck,
  Cookie 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white  pt-8">
      
      {/* Top section */}
      <div className=" mx-auto flex max-w-7xl justify-center pb-4 text-sm text-neutral-500">
        <span>© 2026 Comcast</span>
      </div>

      {/* Links */}
      <div className="mx-auto flex w-full flex-wrap justify-center gap-x-12 gap-y-2 pb-6 text-sm text-neutral-700">
        
        <Link to="#" className="flex items-center gap-2">
          <ReceiptText className="h-4 w-4" />
          <span>Web Terms Of Service</span>
        </Link>

        <Link to="#" className="flex items-center gap-2">
          <NotepadText className="h-4 w-4" />
          <span>CA Notice at Collection</span>
        </Link>

        <Link to="#" className="flex items-center gap-2">
          <FileSearch className="h-4 w-4" />
          <span>Privacy Policy</span>
        </Link>

        <Link to="#" className="flex items-center gap-2">
          <BadgeCheck className="h-4 w-4" />
          <span>Your Privacy Choices</span>
        </Link>

        <Link to="#" className="flex items-center gap-2">
          <HeartPulse className="h-4 w-4" />
          <span>Health Privacy Notice</span>
        </Link>

        <Link to="#" className="flex items-center gap-2">
          <Play className="h-4 w-4" />
          <span>Ad Choices</span>
        </Link>

      </div>

       <Link to='' className=" bg-black flex w-full justify-center py-3 gap-2 text-sm text-white">
        <Cookie className="h-4 w-4"/>
        <span>Cookie Preferences</span>
      </Link>


      
    </footer>
  );
};

export default Footer;