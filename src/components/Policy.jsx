import React from "react";

function Policy() {
  const terms = [
    {
      heading: "Information We Collect",
      desc: "When you interact with Oosh!, we may collect the following types of information:",
      b: [
        {
          heading: "Personal Information",
          desc: "Includes your name, email address, phone number, shipping and billing addresses, and payment details when you make a purchase.",
        },
        {
          heading: "Usage Data",
          desc: "I Information about how you use our website, including your IP address, browser type, and browsing history.",
        },
        {
          heading: "Cookies",
          desc: "We use cookies to enhance your experience on our site, remember your preferences, and track site usage.",
        },
      ],
    },
    {
      heading: "How We Use Your Information",
      desc: "We use the information we collect to:",
      b: [
        {
          heading: "Process and Fulfil Orders",
          desc: "To process payments, arrange shipping, and provide customer support.",
        },
        {
          heading: "Improve Our Services",
          desc: "To understand how you use our site, so we can enhance your shopping experience and offer personalized recommendations.",
        },
        {
          heading: "Communicate with You",
          desc: "To send you order confirmations, updates, and marketing communications if you have opted in to receive them.",
        },
      ],
    },
    {
      heading: "Sharing Your Information",
      desc: "Oosh! does not sell or rent your personal information to third parties. We may share your data with:",
      b: [
        {
          heading: "Service Providers",
          desc: "Trusted third-party companies that help us operate our business, such as payment processors, shipping companies, and marketing agencies.",
        },
        {
          heading: "Legal Requirements",
          desc: "If required by law, we may disclose your information to comply with legal obligations or to protect our rights and safety.",
        },
      ],
    },
    {
      heading: "Data Security",
      desc: "We implement robust security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. All sensitive data, such as payment information, is encrypted during transmission.",
      b: [],
    },
    {
      heading: "Your Rights",
      desc: "You have the right to:",
      b: [
        {
          heading: "Access and Update",
          desc: "View and update your personal information by logging into your account.",
        },
        {
          heading: "Opt-Out",
          desc: 'Unsubscribe from marketing communications at any time by clicking the "unsubscribe" link in our emails.',
        },
        {
          heading: "Request Deletion",
          desc: "Request the deletion of your personal information from our records, subject to certain legal exceptions.",
        },
      ],
    },
    {
      heading: "Cookies and Tracking Technologies",
      desc: "Oosh! uses cookies and similar tracking technologies to enhance your browsing experience. You can control the use of cookies through your browser settings, but disabling cookies may affect the functionality of our website.",
      b: [],
    },
    {
      heading: "Third-Party Links",
      desc: "Our website may contain links to third-party websites. Oosh! is not responsible for the privacy practices or content of these sites. We encourage you to review the privacy policies of any external sites you visit.",
      b: [],
    },

    {
      heading: "Changes to This Policy",
      desc: "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. We will notify you of any significant changes by posting the updated policy on our website. Your continued use of our site after such changes signifies your acceptance of the new terms.",
      b: [],
    },
  ];
  // console.log(terms[1].b[1].heading)
  return (
    <div>
      <div className="relative footer-background h-[500px]">
        <div className="flex flex-col justify-center items-center px-5">
          <div className="text-4xl mt-20 text-[rgba(255,255,255,1)] sm:mt-32">
            Privacy Policy
          </div>
          <div className="max-w-[744px] text-center mt-5 text-sm">
            At Oosh!, your privacy is our priority. We believe in transparency
            and want you to feel confident about how we handle your personal
            information. Our Privacy Policy explains the types of data we
            collect, how we use it, and the steps we take to protect it. Whether
            you're browsing our site or making a purchase, rest assured that
            your information is treated with care and respect. If you have any
            questions or concerns, we're here to help—just reach out to us.
            Thank you for trusting Oosh! with your privacy.
          </div>
        </div>
        <img
          className="absolute hidden bottom-0 left-0 sm:inline w-[245px] md:w-[300px]"
          src="/images/Maskgroup.png"
          alt=""
        />
        <img
          className="absolute hidden image bottom-0 right-0 sm:inline w-[150px] md:w-[240px] lg:w-[400px] "
          src="/images/Mask group (1).png"
          alt=""
        />
        <img src="/images/Mask group (2).png" className="w-[445px] h-[130px] sm:hidden absolute bottom-0 right-0 md:hidden" alt="" />
      </div>
      <div className="container mt-10 mb-14 p-3 ">
        <div className="max-w-[744px] m-auto text-[rgba(38,35,29,1)] my-3">
          <div className="font-bold text-base mb-2">
            Your Privacy Matters to Us
          </div>
          <div className="text-sm">
            At Oosh!, we are committed to protecting your personal information
            and respecting your privacy. This Privacy Policy outlines how we
            collect, use, and safeguard your data when you visit our website or
            make a purchase. By using our site, you agree to the practices
            described in this policy. Please take a moment to review the details
            below.
          </div>
          {terms.map((term, index) => (
            <div key={index} className="my-4">
              <div className="font-bold text-base mb-2">
                {index + 1}. {term.heading}
              </div>
              <div className="text-sm ">{term.desc}</div>
              <ul className="pl-[25px]">
                {term?.b.map((value, index) => (
                  <li key={index} className="font-bold text-sm my-2 list-disc">
                    {value.heading} :
                    <span className=" font-normal">{value.desc}</span>
                  </li>
                ))}
              </ul>
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
