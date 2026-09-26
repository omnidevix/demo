import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight, Filter } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const menuData = [
  {
    id: "dora-pancakes",
    category: "Dora Pancakes & Waffles",
    icon: "🥞",
    gradient: "from-blue-400 to-blue-600",
    shadow: "shadow-blue-500/20",
    items: [
      { name: "Dark Chocolate", price: 200 },
      { name: "Dark & White Chocolate", price: 240 },
      { name: "Nutella & White Chocolate", price: 240 },
      { name: "Nutella", price: 240 },
      { name: "Blueberry", price: 260 },
      { name: "Red Velvet", price: 260 },
    ]
  },
  {
    id: "mini-pancakes",
    category: "Mini Pancakes",
    icon: "🥞",
    gradient: "from-cyan-400 to-cyan-600",
    shadow: "shadow-cyan-500/20",
    items: [
      { name: "Dark Chocolate", price: 180 },
      { name: "Dark & White Chocolate", price: 180 },
      { name: "Nutella & White Chocolate", price: 180 },
      { name: "Nutella", price: 180 },
      { name: "White Chocolate", price: 190 },
      { name: "Blueberry", price: 220 },
      { name: "Red Velvet", price: 220 },
      { name: "Lotus Biscoff", price: 250 },
      { name: "Cookie N Creme", price: 250 },
    ]
  },
  {
    id: "waffles",
    category: "Waffle With Ice Cream",
    icon: "🧇",
    gradient: "from-orange-400 to-orange-600",
    shadow: "shadow-orange-500/20",
    items: [
      { name: "Dark Chocolate Waffle", price: 180 },
      { name: "Dark & White Waffle", price: 180 },
      { name: "Nutella Waffle", price: 180 },
      { name: "Triple Chocolate Waffle", price: 180 },
      { name: "Nutella & White Choco", price: 190 },
      { name: "Oreo Waffle", price: 220 },
      { name: "Blueberry Waffle", price: 220 },
      { name: "Kitkat Waffle", price: 220 },
      { name: "Red Velvet Waffle", price: 220 },
      { name: "Lotus Biscoff", price: 250 },
      { name: "Cookie N Creme Waffle", price: 250 },
    ]
  },
  {
    id: "bowl-waffles",
    category: "Bowl Waffle",
    icon: "🥣",
    gradient: "from-pink-400 to-pink-600",
    shadow: "shadow-pink-500/20",
    items: [
      { name: "Mango Bowl Waffle", price: 350 },
      { name: "Strawberry Bowl Waffle", price: 300 },
      { name: "Brownie Bowl Waffle", price: 300 },
      { name: "Nutella Bowl Waffle", price: 300 },
      { name: "Banana Bowl Waffle", price: 300 },
      { name: "Red Velvet Bowl Waffle", price: 320 },
    ]
  },
  {
    id: "shakes",
    category: "Drinks & Shakes",
    icon: "🥤",
    gradient: "from-purple-400 to-purple-600",
    shadow: "shadow-purple-500/20",
    items: [
      { name: "Cold Coffee", price: 120 },
      { name: "Cold Coffee with Ice Cream", price: 140 },
      { name: "Hazelnut Coffee", price: 140 },
      { name: "Irish Coffee", price: 140 },
      { name: "Chocolate Ice Cream Shake", price: 140 },
      { name: "Butterscotch Ice Cream Shake", price: 150 },
      { name: "Black Currant Ice Cream Shake", price: 150 },
      { name: "Oreo Ice Cream Shake", price: 150 },
      { name: "KitKat Ice Cream Shake", price: 160 },
      { name: "Choco Brownie Shake", price: 160 },
    ]
  },
  {
    id: "mocktails",
    category: "Mocktails",
    icon: "🍹",
    gradient: "from-green-400 to-green-600",
    shadow: "shadow-green-500/20",
    items: [
      { name: "Passion Fruit", price: 120 },
      { name: "Mint Mojito", price: 120 },
      { name: "Blueberry Blast", price: 120 },
      { name: "Watermelon Splash", price: 120 },
      { name: "Mango Magic", price: 120 },
      { name: "Lychee Spark", price: 120 },
      { name: "Lemon Iced Tea", price: 120 },
      { name: "Peach Iced Tea", price: 120 },
    ]
  },
  {
    id: "boba",
    category: "Boba Drinks",
    icon: "🧋",
    gradient: "from-rose-400 to-rose-600",
    shadow: "shadow-rose-500/20",
    items: [
      { name: "Passion Fruit Boba", price: 150 },
      { name: "Blueberry Boba", price: 150 },
      { name: "Mango Boba", price: 150 },
      { name: "Watermelon Boba", price: 150 },
      { name: "Lychee Boba", price: 150 },
      { name: "Cold Coffee Boba", price: 160 },
      { name: "Chocolate Boba", price: 180 },
    ]
  },
  {
    id: "premium",
    category: "Premium & More",
    icon: "✨",
    gradient: "from-indigo-400 to-indigo-600",
    shadow: "shadow-indigo-500/20",
    items: [
      { name: "Vietnamese Iced Coffee Latte", price: 220 },
      { name: "Nutella Iced Coffee Latte", price: 220 },
      { name: "Caramel Iced Coffee Latte", price: 220 },
      { name: "Strawberry Matcha Latte", price: 240 },
      { name: "Mango Matcha Latte", price: 240 },
      { name: "Blueberry Matcha Latte", price: 260 },
      { name: "Mini Cookie with Chocolate", price: 280 },
      { name: "Mango Chocolate Bomb", price: 300 },
      { name: "Choco Brownie w/ Ice Cream", price: 150 },
      { name: "Biscoff Brownie w/ Ice Cream", price: 180 },
    ]
  }
];

const Menu = () => {
  const [activeSection, setActiveSection] = useState("");
  const waLink = "https://wa.me/919999999999?text=Hi%2C%20I%20would%20like%20to%20order%20from%20Dora%20Pancakes%20%26%20Waffles";

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 150; // Offset for sticky header
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.menu-header-anim', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });

      const categories = gsap.utils.toArray('.category-section');
      categories.forEach((cat) => {
        gsap.from(cat, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: cat,
            start: 'top 85%',
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#f8faff] min-h-screen relative pb-20 overflow-x-hidden">
      {/* Playful Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" style={{ backgroundImage: 'radial-gradient(#0096e6 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>

      {/* Hero Header */}
      <section className="pt-32 pb-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left menu-header-anim">
            <span className="inline-block py-1.5 px-4 bg-blue-100 text-dora-blue font-bold rounded-full mb-4 shadow-sm border border-blue-200">
              Discover the Magic 🪄
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-800 mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Sweet</span> Menu
            </h1>
            <p className="text-lg text-slate-600 max-w-xl mx-auto md:mx-0">
              Explore a magical world of fluffy pancakes, crispy waffles, and refreshing boba. Perfect for your sweet tooth!
            </p>
          </div>
          <div className="flex-1 w-full max-w-md menu-header-anim relative">
            <div className="absolute inset-0 bg-yellow-400 rounded-3xl transform rotate-3 scale-105 z-0"></div>
            <img src="/images/image1.png" alt="Doraemon Shop" className="rounded-3xl shadow-2xl relative z-10 border-4 border-white object-cover w-full h-64 md:h-80" />

            {/* Floating Emojis */}
            <div className="absolute -top-6 -left-6 text-5xl animate-bounce z-20 drop-shadow-md">🥞</div>
            <div className="absolute -bottom-6 -right-6 text-5xl animate-bounce z-20 drop-shadow-md" style={{ animationDelay: '0.5s' }}>🧋</div>
          </div>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-lg border-y border-blue-100 shadow-sm py-4 mb-12">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-3 overflow-x-auto hide-scrollbar">
          <div className="flex items-center gap-2 text-slate-400 font-bold px-4 border-r border-slate-200 flex-shrink-0">
            <Filter size={18} /> Filters
          </div>
          <div className="flex gap-2 flex-nowrap pr-4">
            {menuData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToSection(cat.id)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm border ${activeSection === cat.id
                    ? 'bg-dora-blue text-white border-dora-blue shadow-blue-500/30'
                    : 'bg-white text-slate-600 border-blue-100 hover:bg-blue-50 hover:text-dora-blue hover:border-blue-300'
                  }`}
              >
                {cat.icon} {cat.category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        {menuData.map((category) => (
          <div key={category.id} id={category.id} className="category-section scroll-mt-36">

            {/* Category Header */}
            <div className={`bg-gradient-to-r ${category.gradient} rounded-3xl p-8 mb-8 text-white shadow-xl ${category.shadow} flex flex-col md:flex-row items-center gap-6 transform hover:scale-[1.01] transition-transform`}>
              <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm border border-white/30 shadow-inner">
                <span className="text-6xl md:text-7xl drop-shadow-lg">{category.icon}</span>
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2">{category.category}</h2>
                <p className="text-white/80 font-medium text-lg">Delicious, fresh, and magical!</p>
              </div>
            </div>

            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white p-6 rounded-2xl border-2 border-transparent hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300 flex justify-between items-center cursor-pointer hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl ${category.gradient}"></div>
                  <div className="pr-4 z-10 pl-2">
                    <h3 className="font-bold text-slate-800 text-lg group-hover:text-dora-blue transition-colors">{item.name}</h3>
                  </div>
                  <div className="z-10 bg-red-50 px-4 py-2 rounded-xl border border-red-100 group-hover:bg-red-500 group-hover:border-red-500 transition-colors">
                    <span className="font-black text-dora-red group-hover:text-white text-xl transition-colors">₹{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Footer */}
      <div className="max-w-4xl mx-auto px-4 mt-24 text-center relative z-10 gsap-section">
        <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-blue-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full blur-[80px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          <h3 className="text-3xl font-extrabold text-dora-blue mb-4">Craving Something Sweet?</h3>
          <p className="text-slate-600 mb-8 text-lg">Send us a WhatsApp message and we'll get your order ready instantly!</p>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full font-black text-xl transition-transform hover:-translate-y-2 hover:shadow-2xl shadow-green-500/30"
          >
            Order Now 🚀
          </a>
        </div>
      </div>

      {/* Global styles for hide-scrollbar */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
};

export default Menu;
