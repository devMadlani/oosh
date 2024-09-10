import React from "react";

function Policy() {
  const terms = [
    {
      heading: "Information We Collect",
      desc: "When you interact with Oosh!, we may collect the following types of information:",
      b1:{heading:"Personal Information",desc:"Includes your name, email address, phone number, shipping and billing addresses, and payment details when you make a purchase."},
    },
    {
      heading: "How We Use Your Information",
      desc: "We use the information we collect to:",
      b1:{heading:"hello",desc:"gegege"},
    },
    {
      heading: "Sharing Your Information",
      desc: "By placing an order on Oosh!, you agree to provide accurate, current, and complete information during the checkout process. We reserve the right to refuse or cancel orders at our discretion. Payment must be made in full before your order is processed and shipped. All payments are securely processed through our third-party payment providers.",
      b1:{heading:"hello",desc:"gegege"},
    },
    {
      heading: "Data Security",
      desc: "We implement robust security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. All sensitive data, such as payment information, is encrypted during transmission.",
      b1:{heading:"hello",desc:"gegege"},
    },
    {
      heading: "Your Rights",
      desc: "We want you to be fully satisfied with your Oosh! purchase. If for any reason you are not happy with your order, please refer to our Returns and Refunds Policy for information on how to return your products. Refunds will be processed once the returned items have been received and inspected.",
      b1:{heading:"hello",desc:"gegege"},
    },
    {
      heading: "Cookies and Tracking Technologies",
      desc: "We want you to be fully satisfied with your Oosh! purchase. If for any reason you are not happy with your order, please refer to our Returns and Refunds Policy for information on how to return your products. Refunds will be processed once the returned items have been received and inspected.",
      b1:{heading:"hello",desc:"gegege"},
    },
    {
      heading: "Third-Party Links",
      desc: "Your privacy is important to us. We collect and process personal information in accordance with our Privacy Policy. By using our site, you consent to the collection and use of your information as outlined in the policy.",
      b1:{heading:"hello",desc:"gegege"},
    },
    
    {
      heading: "Changes to This Policy",
      desc: "Oosh! is not liable for any damages, losses, or injuries resulting from the use of our website or products. Our liability is limited to the maximum extent permitted by law.",
      b1:{heading:"hello",desc:"gegege"},
    },
  ];
  console.log(terms[3].b1.heading)
  return (
    <div>
      <div className="relative footer-background h-[500px]">
        <div className="flex flex-col justify-center items-center">
          <div className=" text-4xl mt-32 text-[rgba(255,255,255,1)]">
          Privacy Policy
          </div>
          <div className="w-[744px] text-center mt-5 text-sm">
          At Oosh!, your privacy is our priority. We believe in transparency and want you to feel confident about how we handle your personal information. Our Privacy Policy explains the types of data we collect, how we use it, and the steps we take to protect it. Whether you're browsing our site or making a purchase, rest assured that your information is treated with care and respect. If you have any questions or concerns, we're here to help—just reach out to us. Thank you for trusting Oosh! with your privacy.
          </div>
        </div>
        <img
          className="absolute bottom-0 left-0"
          src="/images/Maskgroup.png"
          alt=""
        />
        <img
          className="absolute image bottom-0 right-0"
          src="/images/Mask group (1).png"
          alt=""
        />
      </div>
      <div className="container mt-10 mb-14">
        <div className="max-w-[744px] m-auto text-[rgba(38,35,29,1)] my-3">
          <div className="font-bold text-base mb-2">Your Privacy Matters to Us</div>
          <div className="text-sm">
          At Oosh!, we are committed to protecting your personal information and respecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or make a purchase. By using our site, you agree to the practices described in this policy. Please take a moment to review the details below.
          </div>
          {terms.map((term, index) => (
            <div key={index} className="my-4">
              <div className="font-bold text-base mb-2">
                {index + 1}. {term.heading}
              </div>
              <div className="text-sm ">{term.desc}</div>
              <div>{term.b1.heading} : {term.b1.desc}</div>
            </div>
          ))}
          <div className="text-[rgba(0,0,0,1)] text-sm my-4 ms-auto">
            Thank you for choosing Oosh! We’re excited to be a part of your
            self-care journey.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Policy;
