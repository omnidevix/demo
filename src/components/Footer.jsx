import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const Footer = () => {
  const waLink = "https://wa.me/919999999999?text=Hi%2C%20I%20would%20like%20to%20order%20from%20Dora%20Pancakes%20%26%20Waffles";

  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-slate-700 pb-12 mb-8">

          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-dora-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                D
              </div>
              <span className="font-bold text-2xl text-white tracking-tight">Dora Pancakes & Waffles</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm">
              Serving the best pancakes, waffles, and boba drinks in Noida. Your sweet cravings end here!
            </p>

          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-dora-red flex-shrink-0 mt-1" size={20} />
                <span>
                  <strong>Shop no. 14, Amarpali Princely Estate</strong><br />
                  <span className="text-slate-400 text-sm">Amrapali Princely Estate, Sector 76, Noida, Uttar Pradesh 201316</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-dora-blue flex-shrink-0 mt-1" size={20} />
                <span>
                  <strong>1 PM – 5:30 AM Midnight</strong><br />
                  <span className="text-slate-400 text-sm">Open all days</span>
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Contact</h4>
            <p className="mb-6 text-slate-400">Order online or contact us for any queries.</p>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold transition-transform hover:-translate-y-1 w-full justify-center"
            >
              <Phone size={20} /> Message on WhatsApp
            </a>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Dora Pancakes & Waffles. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for dessert lovers ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
