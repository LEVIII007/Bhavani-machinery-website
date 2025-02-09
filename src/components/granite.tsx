import Image from 'next/image';

const GraniteSection = () => {
  return (
    <section id="granite" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F2D] mb-3 animate__animated animate__fadeIn">
            Premium Granite Stones
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#97BC62] mb-6 animate__animated animate__fadeIn">
            ప్రీమియం గ్రానైట్ రాళ్లు
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column: Delivery Info & Extra Image */}
          <div className="space-y-6 animate__animated animate__fadeInLeft">
            {/* Delivery Information */}
            <div className="bg-white p-6 rounded-lg shadow-md text-black">
              <h4 className="text-xl font-bold text-[#2C5F2D] mb-4">
                Delivery Information / డెలివరీ సమాచారం
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">✅ Free delivery within 20km radius</li>
                <li className="flex items-center gap-2">✅ Installation service available</li>
                <li className="flex items-center gap-2">✅ Quick delivery within 24 hours</li>
              </ul>
            </div>

            {/* Extra Image Block */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/22.jpeg"
                alt="Granite Sample"
                width={500}
                height={500}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Contact Options */}
            <div className="flex flex-col gap-4">
              <a
                href="tel:+919440977892"
                className="w-full text-center bg-[#2C5F2D] hover:bg-[#234b24] text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-300 flex items-center justify-center gap-2"
              >
                📞 Call for Inquiry / వివరాలకు కాల్ చేయండి
              </a>

              <a
                href="https://wa.me/919440977892"
                className="w-full text-center bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-300 flex items-center justify-center gap-2"
              >
                💬 WhatsApp Inquiry / వాట్సాప్ ద్వారా సంప్రదించండి
              </a>
            </div>
          </div>

          {/* Right Column: Image Grid */}
          <div className="bg-white p-6 rounded-lg shadow-md animate__animated animate__fadeInRight">
            <div className="grid grid-cols-1 gap-4">
              {/* Large Image on Top */}
              <Image
                src="/21.jpeg"
                alt="Granite 2"
                width={800}
                height={300}
                className="h-[300px] w-full object-cover rounded-lg"
              />

              {/* Two Smaller Images Below */}
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/20.jpeg"
                  alt="Granite 1"
                  width={400}
                  height={500}
                  className="h-[500px] w-full object-cover rounded-lg"
                />
                <Image
                  src="/23.jpeg"
                  alt="Granite 3"
                  width={400}
                  height={500}
                  className="h-[500px] w-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraniteSection;
