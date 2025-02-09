const HeroSection = () => {
    return (
      <section
        id="hero"
        className="bg-neutral-900 text-white relative min-h-[70vh] flex items-center pt-16"
      >
        <div className="absolute inset-0 bg-black/50"></div>
  
        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-[#FFB30F] animate__animated animate__fadeInDown">
              Bhavani Granite and Machinery Rent Service
            </h1>
  
            <div className="text-xl md:text-2xl font-semibold animate__animated animate__fadeInUp">
              <p className="text-white mb-2">
                Reliable Machinery for Your Farming &amp; Construction Needs
              </p>
              <p className="text-[#97BC62]">
                మీ వ్యవసాయం మరియు నిర్మాణ అవసరాలకు విశ్వసనీయమైన యంత్రాలు
              </p>
            </div>
  
            <div className="flex flex-col items-center space-y-4 animate__animated animate__fadeIn">
              <p className="text-xl">Service Provider: Mallesh Nenavath</p>
              <p className="text-3xl md:text-4xl font-bold text-[#FFB30F]">
                +91 9440977892
              </p>
              <p className="text-xl">Service Provider: Nenavath RamChandar</p>
              <p className="text-3xl md:text-4xl font-bold text-[#FFB30F]">
                +91 9550537228
              </p>
            </div>
  
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="tel:+919440977892"
                className="bg-[#FFB30F] hover:bg-[#e6a00e] text-black px-8 py-3 rounded-full text-lg font-bold transition-colors duration-300 animate__animated animate__pulse animate__infinite"
              >
                Call Now / తక్షణమే కాల్ చేయండి
              </a>
  
              <a
                href="https://wa.me/+919440977892"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-3 rounded-full text-lg font-bold transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  