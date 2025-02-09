const Footer = () => {
  return (
    <footer id="footer" className="bg-neutral-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-[#FFB30F] mb-4">
              AgriRent Solutions
            </h4>
            <p className="text-neutral-300">
              Your trusted partner in agricultural and construction machinery rentals.
            </p>
            <p className="text-neutral-300">
              మీ నమ్మకమైన వ్యవసాయ మరియు నిర్మాణ యంత్రాల అద్దె భాగస్వామి.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links / త్వరిత లింక్‌లు</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-neutral-300 hover:text-[#FFB30F] transition-colors duration-200"
                >
                  Home / హోమ్
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-neutral-300 hover:text-[#FFB30F] transition-colors duration-200"
                >
                  About / గురించి
                </a>
              </li>
              <li>
                <a
                  href="#machinery"
                  className="text-neutral-300 hover:text-[#FFB30F] transition-colors duration-200"
                >
                  Machinery / యంత్రాలు
                </a>
              </li>
              <li>
                <a
                  href="#granite"
                  className="text-neutral-300 hover:text-[#FFB30F] transition-colors duration-200"
                >
                  Granite / గ్రానైట్
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-neutral-300 hover:text-[#FFB30F] transition-colors duration-200"
                >
                  Contact / సంప్రదించండి
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us / సంప్రదించండి</h4>
            <ul className="space-y-2">
              <li className="text-neutral-300">📍 Haridapur, Sangareddy, Telangana</li>
              <li className="text-neutral-300">✉️ nenavathshekar23@gmail.com</li>
              <li className="text-neutral-300">📞 +91 9440977892,9550537228,7095453352</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-6 text-center">
          <p className="text-neutral-400">
            © 2024 Bhavani Machineries and Granite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
