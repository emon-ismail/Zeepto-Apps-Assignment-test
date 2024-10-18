const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Column 1: About Section */}
          <div className="md:col-span-1 md:text-center">
            <h2 className="text-lg md:text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              About Us
            </h2>
            <p className="text-sm md:text-base text-gray-400">
              We provide quality products and services that suit your style.
              Our mission is to bring the best for our customers.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="text-center">
            <h2 className="text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-bold mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm md:text-base hover:text-purple-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/wishlist" className="text-sm md:text-base hover:text-purple-400 transition-colors">
                  Wishlist
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Section */}
          <div>
            <h2 className="text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-bold mb-4">
              Contact Us
            </h2>
            <ul className="space-y-2">
              <li className="text-sm md:text-base">Email: emonismail44@gmail.com</li>
              <li className="text-sm md:text-base">Phone: 01628692798</li>
              <li className="text-sm md:text-base">Address: Eidgah, Halishahar, Chittagong, Bangladesh</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8"></div>

        {/* Footer Bottom */}
        <div className="text-center mt-4">
          <p className="text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
