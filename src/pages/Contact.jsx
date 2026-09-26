import React, { useEffect } from 'react';
import gsap from 'gsap';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact = () => {
  const waLink = "https://wa.me/919999999999?text=Hi%2C%20I%20would%20like%20to%20order%20from%20Dora%20Pancakes%20%26%20Waffles";
  const addressQuery = encodeURIComponent("Shop no. 14, Amarpali Princely Estate, Sector 76, Noida, Uttar Pradesh 201316");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-header', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      gsap.from('.contact-card', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.2,
        ease: 'power3.out'
      });

      gsap.from('.map-container', {
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out'
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="pt-28 pb-20 bg-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 contact-header">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dora-blue mb-4">Get In Touch</h2>
          <p className="text-lg text-slate-600">We'd love to see you at our cafe! Drop by for some amazing pancakes or order online.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Info Cards */}
          <div className="contact-card bg-white p-8 rounded-3xl shadow-xl shadow-blue-900/5 border border-blue-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-dora-blue mb-6">
              <MapPin size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Our Location</h3>
            <p className="text-slate-600 leading-relaxed">
              Shop no. 14, Amarpali Princely Estate, <br />
              Amrapali Princely Estate, Sector 76, <br />
              Noida, Uttar Pradesh 201316
            </p>
          </div>

          <div className="contact-card bg-white p-8 rounded-3xl shadow-xl shadow-blue-900/5 border border-blue-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-dora-blue mb-6">
              <Clock size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Opening Hours</h3>
            <p className="text-slate-600 leading-relaxed">
              Monday - Sunday <br />
              1 PM – 5:30 AM Midnight <br />
              <span className="text-green-500 font-semibold mt-2 inline-block">Open all days</span>
            </p>
          </div>

          <div className="contact-card bg-white p-8 rounded-3xl shadow-xl shadow-blue-900/5 border border-blue-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-dora-blue mb-6">
              <Phone size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Contact Us</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Have questions or want to place an order?
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-bold transition-transform hover:-translate-y-1 w-full flex items-center justify-center gap-2"
            >
              <Phone size={18} /> WhatsApp Us
            </a>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-container bg-white p-4 rounded-3xl shadow-xl shadow-blue-900/5 border border-blue-100 overflow-hidden">
          <iframe
            title="Dora Pancakes & Waffles Location"
            src={`https://www.google.com/maps?q=${addressQuery}&output=embed`}
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '1rem' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
