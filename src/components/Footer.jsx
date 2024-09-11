import React from "react";
import logo from "/images/ooshh.png";
import facebook from "/images/facebook.png";
import instagram from "/images/instagram.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-background px-5  mt-auto">
      <div className="container pt-8 mb-1">
        <div className="flex flex-wrap justify-between gap-7">
          <div className="order-3 sm:order-1">
            <img className="image pb-5" src={logo} alt="" />
            <p className="max-w-96 text-xs">
              Our product was developed by an eye doctor with over 20 years of
              experience treating dry eyes, eye inflammation, and other eye
              disorders. She was dissatisfied with the products on the market
              and developed the wash and the brush
            </p>
            <div className="flex flex-wrap py-4 ">
              <img src={facebook} className="image w-6" alt="" />
              <img src={instagram} className="image w-6" alt="" />
            </div>
          </div>
          <div className="flex justify-between order-1 sm:order-2 mb-5 gap-7">
            <div className="w-16">
              <span>General</span>
              <div className="text-xs flex flex-col pt-2">
                <Link to="/about" className="pt-2">
                  About
                </Link>
                <Link to="/contact" className="pt-2">
                  Contact
                </Link>
                <Link to="/policy" className="pt-2">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="pt-2">
                  Terms & Condition
                </Link>
              </div>
            </div>
            <div className="w-20">
              <span>Products</span>
              <div className="text-xs flex flex-col pt-2">
                <span className="pt-2">Eyelid & Lens Cleanser</span>
                <span className="pt-2">Eyelid Brush</span>
              </div>
            </div>
          </div>

          <div className="order-2 sm:order-3 mb-5">
            <p className="text-lg mb-5">
              Join our community for <br /> exclusive tips, offers, and more
            </p>
            <p className="text-xs max-w-80 pb-4">
              Sign up for our newsletter to receive the latest news on eye care,
              special promotions, and expert advice straight to your inbox. Stay
              informed and keep your eyes healthy with our monthly tips and
              product updates.
            </p>
            <div className="max-w-80">
              <input
                type="text"
                className="px-4 h-10 w-full rounded bg-[rgba(255,255,255,0.2)]"
                placeholder="Email"
              />

              <br />
              <button className="w-full h-10 mt-3 footer-button rounded">
                Join now!
              </button>
            </div>
          </div>
        </div>
        <div className="border-[rgba(255,255,255,0.1)] border-t mt-2  py-2 flex flex-wrap justify-between">
          <div className="text-[10px] pt-2 pb-2">
            © 2024, Oosh! Powered by Shopify
          </div>
          <div className="flex flex-wrap gap-3 ">
            <img src="/images/Paymentmethodicon3.png" alt="" />
            <img src="/images/Paymentmethodicon1.png" alt="" />
            <img src="/images/Paymentmethodicon2.png" alt="" />
            <img src="/images/Paymentmethodicon6.png" alt="" />
            <img src="/images/Paymentmethodicon.png" alt="" />
            <img src="/images/Paymentmethodicon4.png" alt="" />
            <img src="/images/Paymentmethodicon5.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
