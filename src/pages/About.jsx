import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Coffee, Star, Heart, Smile, Leaf, Sparkles, IndianRupee, Camera } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Top section animation
      gsap.from('.about-content', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });

      gsap.from('.about-image', {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      // Story section animation
      const sections = gsap.utils.toArray('.gsap-section');
      sections.forEach((section) => {
        gsap.from(section, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-20">
      {/* Hero / Main About Section */}
      <section className="py-20 lg:py-28 bg-dora-blue text-white overflow-hidden relative flex items-center">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 text-6xl rotate-12">🥞</div>
          <div className="absolute bottom-20 right-20 text-6xl -rotate-12">🧇</div>
          <div className="absolute top-40 right-40 text-6xl rotate-45">🧋</div>
          <div className="absolute bottom-40 left-40 text-6xl -rotate-45">🍓</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 about-image relative">
              <div className="absolute inset-0 bg-yellow-400 rounded-3xl transform -rotate-3 scale-105"></div>
              <img
                src="/images/image2.png"
                alt="Cafe Interior"
                className="w-full h-auto rounded-3xl shadow-2xl relative z-10 object-cover border-4 border-white"
              />
            </div>

            <div className="flex-1">
              <h2 className="about-content text-4xl md:text-5xl font-extrabold mb-6 text-white">
                More Than Just <br /> <span className="text-yellow-300">Pancakes!</span>
              </h2>
              <p className="about-content text-xl text-blue-100 mb-6 leading-relaxed">
                Step into Dora Pancakes & Waffles and experience a fun, vibrant, and cozy cafe vibe right in the heart of Noida.
              </p>
              <p className="about-content text-lg text-blue-100 mb-8 leading-relaxed">
                Whether you're craving our signature mini pancakes, loaded bowl waffles, or the perfect boba drink, we make everything fresh with premium ingredients. Our blue-themed interior is perfect for your next Instagram post!
              </p>

              <div className="about-content grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/20">
                  <div className="bg-yellow-400 p-3 rounded-full text-blue-900">
                    <Coffee size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Freshly Made</h4>
                    <p className="text-blue-200 text-xs">Made to order, always hot</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/20">
                  <div className="bg-yellow-400 p-3 rounded-full text-blue-900">
                    <Star size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Premium Quality</h4>
                    <p className="text-blue-200 text-xs">Best ingredients in town</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/20">
                  <div className="bg-yellow-400 p-3 rounded-full text-blue-900">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Made with Love</h4>
                    <p className="text-blue-200 text-xs">Crafted for dessert lovers</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/20">
                  <div className="bg-yellow-400 p-3 rounded-full text-blue-900">
                    <Smile size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Magical Vibe</h4>
                    <p className="text-blue-200 text-xs">Aesthetically pleasing interior</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 gsap-section">
            <h2 className="text-4xl font-extrabold text-dora-blue mb-4">Our Sweet Story</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              It all started with a simple love for desserts and a dream to bring the most magical, fluffy pancakes and crispy waffles to Noida.
              We wanted to create a place that wasn't just a cafe, but an experience. A place where you can dive into a plate of decadent chocolate pancakes,
              sip on a refreshing fruit boba, and make sweet memories with your loved ones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 gsap-section">
            <div className="bg-blue-50 p-8 rounded-3xl text-center border border-blue-100 hover:shadow-lg transition-shadow">
              <h3 className="text-5xl font-extrabold text-dora-red mb-2">50+</h3>
              <p className="font-bold text-slate-700 text-lg">Menu Items</p>
              <p className="text-sm text-slate-500 mt-2">Endless sweet choices to satisfy every craving.</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-3xl text-center border border-blue-100 hover:shadow-lg transition-shadow">
              <h3 className="text-5xl font-extrabold text-dora-red mb-2">100%</h3>
              <p className="font-bold text-slate-700 text-lg">Vegetarian</p>
              <p className="text-sm text-slate-500 mt-2">All our desserts and drinks are completely eggless and vegetarian.</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-3xl text-center border border-blue-100 hover:shadow-lg transition-shadow">
              <h3 className="text-5xl font-extrabold text-dora-red mb-2">1k+</h3>
              <p className="font-bold text-slate-700 text-lg">Smiles Delivered</p>
              <p className="text-sm text-slate-500 mt-2">We measure our success by the smiles on our customers' faces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-blue-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-dora-blue/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 gsap-section">
            <h2 className="text-4xl font-extrabold text-dora-blue mb-4">Why Choose Us?</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600">What makes Dora Pancakes & Waffles the sweetest spot in town.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gsap-section">
            <div className="bg-white p-8 rounded-3xl text-center border border-blue-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-green-100 text-green-500 rounded-2xl flex items-center justify-center mb-6 transform -rotate-6">
                <Leaf size={32} />
              </div>
              <h3 className="font-bold text-xl text-slate-800 mb-3">Fresh Ingredients</h3>
              <p className="text-slate-600 text-sm">We use only the highest quality, fresh ingredients to make every bite perfect.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl text-center border border-blue-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-blue-100 text-dora-blue rounded-2xl flex items-center justify-center mb-6 transform rotate-6">
                <Sparkles size={32} />
              </div>
              <h3 className="font-bold text-xl text-slate-800 mb-3">Doraemon Theme</h3>
              <p className="text-slate-600 text-sm">Step into a magical, nostalgic world with our fun and vibrant blue cafe theme.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl text-center border border-blue-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center mb-6 transform -rotate-6">
                <IndianRupee size={32} />
              </div>
              <h3 className="font-bold text-xl text-slate-800 mb-3">Affordable Prices</h3>
              <p className="text-slate-600 text-sm">Premium taste that doesn't break the bank. Great portions at great prices.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl text-center border border-blue-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-pink-100 text-pink-500 rounded-2xl flex items-center justify-center mb-6 transform rotate-6">
                <Camera size={32} />
              </div>
              <h3 className="font-bold text-xl text-slate-800 mb-3">Perfect for Instagram</h3>
              <p className="text-slate-600 text-sm">Every corner, pancake, and boba cup is designed to be picture-perfect!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 gsap-section">
            <h2 className="text-4xl font-extrabold text-dora-blue mb-4">Meet Our Team</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600">The friendly faces behind your favorite desserts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto gsap-section">
            <div className="bg-blue-50/50 p-8 rounded-3xl text-center border border-blue-100 hover:border-dora-blue transition-colors group">
              <div className="w-24 h-24 mx-auto bg-white rounded-full shadow-md flex items-center justify-center text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                👨‍🍳
              </div>
              <h3 className="font-bold text-xl text-slate-800">Rahul</h3>
              <p className="text-dora-blue font-medium mb-2">Head Chef</p>
              <p className="text-slate-500 text-sm">Master of fluffy pancakes and crispy waffles.</p>
            </div>

            <div className="bg-blue-50/50 p-8 rounded-3xl text-center border border-blue-100 hover:border-dora-blue transition-colors group">
              <div className="w-24 h-24 mx-auto bg-white rounded-full shadow-md flex items-center justify-center text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                👩‍💼
              </div>
              <h3 className="font-bold text-xl text-slate-800">Priya</h3>
              <p className="text-dora-blue font-medium mb-2">Cafe Manager</p>
              <p className="text-slate-500 text-sm">Ensures every customer leaves with a smile.</p>
            </div>

            <div className="bg-blue-50/50 p-8 rounded-3xl text-center border border-blue-100 hover:border-dora-blue transition-colors group">
              <div className="w-24 h-24 mx-auto bg-white rounded-full shadow-md flex items-center justify-center text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🧑‍🍳
              </div>
              <h3 className="font-bold text-xl text-slate-800">Aman</h3>
              <p className="text-dora-blue font-medium mb-2">Boba Expert</p>
              <p className="text-slate-500 text-sm">Crafts the most refreshing and aesthetic drinks.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
