import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <div className="relative footer-background">
        <div className="flex flex-wrap py-8 lg:py-16 justify-center gap-10 lg:-ml-[55px]">
          <div className="flex flex-col">
            <div className="mb-3 w-[272px] lg:w-[400px]">
              <h1 className="text-[32px] lg:text-[40px]">
                Get in touch with us
              </h1>
              <p className="text-[12px] lg:text-[14px] text-[rgba(255,255,255,0.8)] mt-3">
                Got a question or need help? Reach out via our contact form,
                email, or phone. We’ll respond promptly—your satisfaction is our
                priority at Oosh!
              </p>
              <p className="hidden lg:block text-[14px] text-[rgba(255,255,255,0.8)] mt-3">
                info@oosh.com
              </p>
              <p className="hidden lg:block text-[12px] lg:text-[14px] text-[rgba(255,255,255,0.8)] mt-3">
                321-221-231
              </p>
              <Link className="text:[14px] underline mt-3 hidden">
               
                Customer Support
              </Link>
            </div>
            <div className="hidden lg:flex justify-center gap-5 w-[600px] mt-6">
              <div className="">
                <h1 className="text-sm">Customer Support</h1>
                <p className="text-sm text-[rgba(255,255,255,0.6)]">Our support team is available around the clock to address any concerns or queries you may have.</p>
              </div>
              <div className="">
                <h1 className="text-sm">Feedback & Suggestions</h1>
                <p className="text-sm text-[rgba(255,255,255,0.6)]">We value your feeback and are continuously working to improve our products. Your feature is crucial in doing so.</p>
              </div>
              <div className="">
                <h1 className="text-sm">Promotion & Sponsorships</h1>
                <p className="text-sm text-[rgba(255,255,255,0.6)]">For sponsorship related questions, please contact us at sponsors@oosh.com</p>
              </div>
              
            </div>
          </div>
          <div className="w-[440px]  opacity-[1] flex flex-col justify-between gap-1 mx-4 my-2 rounded bg-[rgba(255,255,255,0.05)] z-10">
            <form className="flex flex-wrap flex-col p-5" action="">
              <div className="mb-[10px] ml-[52px] lg:ml-1">
                <h1 className="text-[20px] font-bold lg:text-[24px]">
                  Contact us
                </h1>
                <h1 className="text-[10px] lg:text-[12px] text-[rgba(255,255,255,1)]">
                  Reach out to us anytime
                </h1>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mb-3">
                <div>
                  <h1 htmlFor="name" className="text-[12px] lg:text-sm mb-1">
                    First Name
                  </h1>
                  <input
                    type="text"
                    className="border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] rounded pl-4 h-[40px] lg:w-[192px]"
                  />
                </div>
                <div>
                  <h1 htmlFor="emil" className="text-[12px] lg:text-sm mb-1">
                    Last Name
                  </h1>
                  <input
                    type="text"
                    className="border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] rounded pl-4  w-[200px] h-[40px] lg:w-[192px]"
                  />
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mb-3">
                <div>
                  <h1 htmlFor="name" className="text-[12px] lg:text-sm mb-1">
                    Email
                  </h1>
                  <input
                    type="text"
                    className="border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] rounded pl-4 h-[40px] lg:w-[192px]"
                  />
                </div>
                <div>
                  <h1 htmlFor="emil" className="text-[12px] lg:text-sm mb-1">
                    Phone no
                  </h1>
                  <input
                    type="text"
                    className="border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] rounded pl-4  w-[200px] h-[40px] lg:w-[192px]"
                  />
                </div>
              </div>
              <div className="mx-auto">
                <h1 htmlFor="name" className="text-[12px] lg:text-sm mb-1">
                  Message
                </h1>
                <textarea
                  className="border w-[200px] border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] rounded pl-4  lg:w-[400px]"
                  rows={4}
                />
              </div>
              <div className="w-[200px] mx-auto lg:w-[400px]">
                <button
                  className="mt-5 w-full flex justify-center btnShadow buynowBtn rounded px-5 py-3 text-[14px] font-bold text-[rgba(38,35,29,1)]"
                  value="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <img
          className="absolute hidden bottom-0 left-0 sm:inline w-[245px] md:w-[300px]"
          src="/images/Maskgroup.png"
          alt=""
        />
        <img
          className="z-0 absolute hidden image bottom-0 right-0 sm:inline w-[150px] md:w-[240px] lg:w-[400px] "
          src="/images/Mask group (1).png"
          alt=""
        />
        <img
          src="/images/Mask group (2).png"
          className="w-[445px] h-[130px] sm:hidden absolute bottom-0 right-0 md:hidden"
          alt=""
        />
      </div>
    </div>
  );
}

export default Contact;
