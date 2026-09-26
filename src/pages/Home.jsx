import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight, Phone, Star, StarHalf, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const waLink = "https://wa.me/919999999999?text=Hi%2C%20I%20would%20like%20to%20order%20from%20Dora%20Pancakes%20%26%20Waffles";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      gsap.from('.hero-text', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });

      gsap.from('.hero-image', {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: 'back.out(1.7)',
        delay: 0.4,
      });

      // Scroll Animations for sections
      const sections = gsap.utils.toArray('.gsap-section');
      sections.forEach((section) => {
        gsap.from(section, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const highlightMenu = [
    {
      category: "Pancakes",
      icon: "🥞",
      items: [
        { name: "Dark Chocolate", price: 200 },
        { name: "Nutella & White Choco", price: 240 },
        { name: "Blueberry", price: 260 },
        { name: "Red Velvet", price: 260 },
      ]
    },
    {
      category: "Waffles",
      icon: "🧇",
      items: [
        { name: "Dark Chocolate Waffle", price: 180 },
        { name: "Oreo Waffle", price: 220 },
        { name: "Kitkat Waffle", price: 220 },
        { name: "Lotus Biscoff", price: 250 },
      ]
    },
    {
      category: "Boba Drinks",
      icon: "🧋",
      items: [
        { name: "Passion Fruit Boba", price: 150 },
        { name: "Blueberry Boba", price: 150 },
        { name: "Mango Boba", price: 150 },
        { name: "Chocolate Boba", price: 180 },
      ]
    }
  ];

  const reviews = [
    { name: "Priya Sharma", text: "Best pancakes in Noida! The Dora theme is so cute and the food is absolutely delicious. Highly recommend the Nutella Mini Pancakes.", rating: 5 },
    { name: "Rahul Verma", text: "Amazing boba and waffles. The ambiance is great and the staff is very polite. A perfect place to hang out with friends.", rating: 5 },
    { name: "Sneha Gupta", text: "Loved the Blueberry Boba and the Chocolate Waffle! Portions are great for the price. Definitely coming back soon.", rating: 4 },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 min-h-[85vh]">
        <div className="flex-1 text-center md:text-left">
          <div className="hero-text inline-block mb-4 px-4 py-1.5 bg-yellow-100 text-yellow-700 font-semibold rounded-full text-sm tracking-wide shadow-sm border border-yellow-200">
            ✨ Welcome to the sweetest spot
          </div>
          <h1 className="hero-text text-5xl md:text-6xl lg:text-7xl font-extrabold text-dora-blue leading-tight mb-6">
            Dora Pancakes <br />
            <span className="text-dora-red">& Waffles</span>
          </h1>
          <p className="hero-text text-xl text-slate-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Experience the Best Pancakes & Waffles in Noida. Treat yourself to our delicious creations, magical vibes, and amazing boba drinks!
          </p>
          <div className="hero-text flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/menu"
              className="bg-dora-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:-translate-y-1 hover:shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
            >
              View Full Menu <ChevronRight size={20} />
            </Link>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="bg-white border-2 border-green-500 text-green-600 hover:bg-green-50 px-8 py-4 rounded-full font-bold text-lg transition-transform hover:-translate-y-1 hover:shadow-lg shadow-green-500/20 flex items-center justify-center gap-2"
            >
              <Phone size={20} /> Order on WhatsApp
            </a>
          </div>
        </div>
        <div className="flex-1 w-full max-w-lg mx-auto relative hero-image mt-8 md:mt-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-dora-blue/20 to-dora-red/20 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
          <img
            src="/images/image1.png"
            alt="Dora Pancakes & Waffles Shop"
            className="w-full h-auto rounded-3xl shadow-2xl object-cover border-4 border-white transform -rotate-2 hover:rotate-0 transition-transform duration-500"
          />

          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce border border-blue-100">
            <div className="bg-yellow-100 p-2 rounded-full text-yellow-600">
              <Star size={24} fill="currentColor" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">Top Rated</p>
              <p className="text-xs text-slate-500">in Noida Sector 76</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlight Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 gsap-section">
            <h2 className="text-4xl md:text-5xl font-extrabold text-dora-blue mb-4">Our Favorites</h2>
            <p className="text-lg text-slate-600">A sneak peek at our most loved treats. Sweet, fresh, and totally irresistible!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gsap-section">
            {highlightMenu.map((category, idx) => (
              <div key={idx} className="bg-blue-50/50 border border-blue-100 rounded-3xl p-8 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-5xl bg-white p-3 rounded-2xl shadow-sm border border-blue-100">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-slate-800">{category.category}</h3>
                </div>
                <ul className="space-y-4">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex justify-between items-center group">
                      <span className="font-semibold text-slate-700">{item.name}</span>
                      <div className="flex-1 border-b-2 border-dotted border-slate-300 mx-4 opacity-50"></div>
                      <span className="font-bold text-dora-red">₹{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center gsap-section">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-dora-blue hover:text-blue-800 font-bold text-lg transition-colors underline underline-offset-4 decoration-2"
            >
              See All Items <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-dora-blue/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-dora-red/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 gsap-section">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <Star className="text-yellow-400" fill="currentColor" size={28} />
              <Star className="text-yellow-400" fill="currentColor" size={28} />
              <Star className="text-yellow-400" fill="currentColor" size={28} />
              <Star className="text-yellow-400" fill="currentColor" size={28} />
              <StarHalf className="text-yellow-400" fill="currentColor" size={28} />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-dora-blue mb-6">Loved by Everyone</h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 bg-white inline-flex px-8 py-4 rounded-full shadow-lg border border-blue-100">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-800 text-2xl">4.8</span>
                <span className="text-slate-500 font-medium text-sm">/ 5.0 Rating</span>
              </div>
              <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white z-30 flex items-center justify-center text-xs font-bold text-dora-blue">P</div>
                  <div className="w-8 h-8 rounded-full bg-red-100 border-2 border-white z-20 flex items-center justify-center text-xs font-bold text-dora-red">R</div>
                  <div className="w-8 h-8 rounded-full bg-yellow-100 border-2 border-white z-10 flex items-center justify-center text-xs font-bold text-yellow-600">S</div>
                </div>
                <span className="font-bold text-dora-blue text-lg ml-2">218+ Reviews</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gsap-section">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-xl shadow-blue-900/5 border border-blue-100 flex flex-col h-full relative transform hover:-translate-y-2 transition-all duration-300">
                <div className="absolute -top-5 left-8 bg-dora-blue text-white p-3 rounded-full shadow-lg">
                  <Quote size={20} className="transform rotate-180" />
                </div>

                <div className="flex items-center gap-4 mb-6 mt-4 border-b border-slate-100 pb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-dora-blue to-blue-400 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-lg">{review.name}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-xs bg-slate-100 px-2 py-0.5 rounded-full font-semibold text-slate-600 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span> Verified
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} fill="currentColor" size={20} />
                  ))}
                </div>

                <p className="text-slate-700 font-medium text-lg leading-relaxed flex-grow">
                  "{review.text}"
                </p>

                <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-xs text-slate-400 font-medium">Google Review</span>
                  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" className="opacity-80 grayscale group-hover:grayscale-0 transition-all duration-300">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 gsap-section">
            <h2 className="text-4xl md:text-5xl font-extrabold text-dora-blue mb-4">Sweet Moments</h2>
            <p className="text-lg text-slate-600">A glimpse into our cafe and our mouth-watering creations.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 gsap-section">
            {[2, 3, 4, 5, 6, 7].map((num) => (
              <div key={num} className="aspect-square rounded-2xl overflow-hidden shadow-sm group">
                <img
                  src={`/images/image${num}.png`}
                  alt={`Cafe Moment ${num}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                  onError={(e) => {
                    // Fallback to image1 if image doesn't exist
                    e.target.src = '/images/image1.png';
                  }}
                />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center gsap-section">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-dora-red hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:-translate-y-1 hover:shadow-lg shadow-red-500/30"
            >
              Order Now <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
