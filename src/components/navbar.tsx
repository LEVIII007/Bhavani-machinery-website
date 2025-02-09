const Navbar = () => {
    return (
      <nav id="navbar" className="bg-neutral-900 text-white fixed w-full z-50">
        {/* Hidden checkbox used to toggle the mobile menu */}
        <input type="checkbox" id="mobile-menu-toggle" className="hidden" />
  
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-[#FFB30F]">AgriRent</span>
              </div>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#home"
                className="hover:bg-neutral-700 hover:text-[#FFB30F] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:bg-neutral-700 hover:text-[#FFB30F] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#machinery"
                className="hover:bg-neutral-700 hover:text-[#FFB30F] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Machinery
              </a>
              <a
                href="#granite"
                className="hover:bg-neutral-700 hover:text-[#FFB30F] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Granite
              </a>
              <a
                href="#contact"
                className="hover:bg-neutral-700 hover:text-[#FFB30F] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contact
              </a>
              </div>
            </div>
            {/* Mobile Menu Toggle Button */}
            <div className="flex md:hidden">
              <label
                htmlFor="mobile-menu-toggle"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#FFB30F] hover:bg-neutral-700 focus:outline-none cursor-pointer"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
            </div>
          </div>
        </div>
  
        {/* Mobile Menu (hidden by default; revealed via CSS when checkbox is checked) */}
        <div id="mobile-menu" className="hidden md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-neutral-900">
            <a
              href="#home"
              className="block hover:bg-neutral-700 hover:text-[#FFB30F] px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#about"
              className="block hover:bg-neutral-700 hover:text-[#FFB30F] px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#machinery"
              className="block hover:bg-neutral-700 hover:text-[#FFB30F] px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              Machinery
            </a>
            <a
              href="#granite"
              className="block hover:bg-neutral-700 hover:text-[#FFB30F] px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              Granite
            </a>
            <a
              href="#contact"
              className="block hover:bg-neutral-700 hover:text-[#FFB30F] px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
  
        {/* Inline CSS injected as a global style */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* When the hidden checkbox is checked, display the mobile menu */
              #mobile-menu-toggle:checked ~ #mobile-menu {
                display: block;
              }
            `,
          }}
        />
      </nav>
    );
  };
  
  export default Navbar;
  