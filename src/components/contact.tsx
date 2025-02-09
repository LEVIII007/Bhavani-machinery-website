const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F2D] mb-3 animate__animated animate__fadeIn">
            Contact Us
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#97BC62] mb-6 animate__animated animate__fadeIn">
            మమ్మల్ని సంప్రదించండి
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-8 animate__animated animate__fadeInLeft">
            <div className="bg-neutral-100 p-8 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold text-[#2C5F2D] mb-6">
                Business Details / వ్యాపార వివరాలు
              </h4>

              <div className="space-y-6">
                <div>
                  <p className="text-[#2C5F2D] font-medium">
                    Business Name / వ్యాపార నామం
                  </p>
                  <p className="text-xl font-bold text-[#2C5F2D]">
                    AgriRent Solutions
                  </p>
                </div>

                <div>
                  <p className="text-[#2C5F2D] font-medium">
                    Service Provider / సేవా ప్రదాత
                  </p>
                  <p className="text-xl font-bold text-[#2C5F2D]">
                    Nenavth Mallesh
                  </p>
                </div>

                <div>
                  <p className="text-[#2C5F2D] font-medium">
                    Mobile Number / మొబైల్ నంబర్
                  </p>
                  <p className="text-3xl font-bold text-[#FFB30F]">
                    +91 9440977892
                  </p>
                </div>

                <div>
                  <p className="text-[#2C5F2D] font-medium">Location / ప్రాంతం</p>
                  <p className="text-lg font-semibold text-black">
                    Haridaspur, Sangareddy
                    <br />
                    Telangana - 502295
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 bg-[#2C5F2D] hover:bg-[#234b24] text-white px-6 py-4 rounded-lg text-lg font-bold transition-colors duration-300"
              >
                📞 Call Now / ఇప్పుడే కాల్ చేయండి
              </a>

              <a
                href="https://wa.me/919876543210"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-4 rounded-lg text-lg font-bold transition-colors duration-300"
              >
                💬 WhatsApp / వాట్సాప్
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div className="animate__animated animate__fadeInRight">
            <div className="bg-neutral-100 p-8 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold text-[#2C5F2D] mb-6">
                Business Hours / వ్యాపార సమయాలు
              </h4>

              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-400 pb-2">
                  <span className="text-[#2C5F2D] font-semibold">Monday - Saturday</span>
                  <span className="font-bold text-black">6:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-400 pb-2">
                  <span className="text-[#2C5F2D] font-semibold">Sunday</span>
                  <span className="font-bold text-black">6:00 AM - 8:00 PM</span>
                </div>

                <div className="mt-8 p-4 bg-[#2C5F2D] text-white rounded-lg">
                  <p className="text-center font-bold mb-2">
                    24/7 Emergency Service Available
                  </p>
                  <p className="text-center font-bold">
                    24/7 అత్యవసర సేవ అందుబాటులో ఉంది
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
