import React from 'react';

const Footer = () => {
  const socialIcons = [
    "facebook", "instagram", "twitter", "youtube", "pinterest", 
    "linkedin", "reddit", "whatsapp", "snapchat", "tiktok", 
    "wechat", "weibo"
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Logo and Description */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Profast</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle — 
            from personal packages to business shipments, we deliver on time, every time.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {["Services", "Coverage", "About Us", "Pricing", "Blog", "Contact"].map((item) => (
            <a key={item} href="#" className="text-gray-400 hover:text-white transition">
              {item}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-4 pt-8 border-t border-gray-800">
          {socialIcons.map((social) => (
            <a key={social} href="#" className="text-gray-500 hover:text-white transition text-sm">
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;