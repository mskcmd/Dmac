import { Youtube, Facebook, Instagram } from "lucide-react";
import React from "react";

export default function Breadcrumb() {
  return (
    <div className="bg-black py-0.5 text-white font-bold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <nav className="flex" aria-label="Breadcrumb"></nav>
          <div className="flex space-x-4">
            <a
              href="https://www.youtube.com/@darulmaarifonlinevaliyora8274"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <Youtube className="h-5 w-5 text-red-500" />
            </a>
            <a
              href="https://www.facebook.com/DarulMaarifValiyora/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <Facebook className="h-5 w-5 text-blue-600" />
            </a>
            <a
              href="https://www.instagram.com/darul_maarif_valiyora?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <Instagram className="h-5 w-5 text-pink-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
