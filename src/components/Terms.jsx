import React from "react";

function Terms() {
  const terms = [
  {
    heading : "General Overview",
    desc:"Oosh! is committed to providing high-quality self-care products to enhance your wellness journey. These Terms apply to all users of the site, including browsers, customers, and contributors of content."
  },
  {
    heading : "Product Information",
    desc:"We strive to ensure that all product descriptions, images, and prices listed on our website are accurate. However, we do not guarantee that the information provided is error-free, complete, or up-to-date. We reserve the right to correct any inaccuracies or omissions, and to update or discontinue products without prior notice."
  },
  {
    heading : "Orders and Payments",
    desc:"By placing an order on Oosh!, you agree to provide accurate, current, and complete information during the checkout process. We reserve the right to refuse or cancel orders at our discretion. Payment must be made in full before your order is processed and shipped. All payments are securely processed through our third-party payment providers."
  },
  {
    heading : "Shipping and Delivery",
    desc:"Oosh! aims to deliver your products in a timely manner. Shipping times may vary depending on your location and the availability of the products. We are not responsible for any delays or damages that occur during the shipping process. You will receive tracking information once your order has been dispatched."
  },
  {
    heading : "Returns and Refunds",
    desc:"We want you to be fully satisfied with your Oosh! purchase. If for any reason you are not happy with your order, please refer to our Returns and Refunds Policy for information on how to return your products. Refunds will be processed once the returned items have been received and inspected."
  },
  {
    heading : "Returns and Refunds",
    desc:"We want you to be fully satisfied with your Oosh! purchase. If for any reason you are not happy with your order, please refer to our Returns and Refunds Policy for information on how to return your products. Refunds will be processed once the returned items have been received and inspected."
  },
  {
    heading : "Privacy and Security",
    desc:"Your privacy is important to us. We collect and process personal information in accordance with our Privacy Policy. By using our site, you consent to the collection and use of your information as outlined in the policy."
  },
  {
    heading : "Intellectual Property",
    desc:"All content on the Oosh! website, including text, images, logos, and designs, is the property of Oosh! and is protected by copyright and trademark laws. You may not use, reproduce, or distribute any content without our express written permission."
  },
  {
    heading : "Changes to Terms",
    desc:"Oosh! is not liable for any damages, losses, or injuries resulting from the use of our website or products. Our liability is limited to the maximum extent permitted by law."
  } 
]
  return (
    <div>
      <div className="relative footer-background h-[500px]">
        <div className="flex flex-col justify-center items-center">
          <div className=" text-4xl mt-32 text-[rgba(255,255,255,1)]">Terms and Conditions</div>
          <div className="w-[784px] text-center mt-5 text-sm">Welcome to our Terms and Conditions page. Here, we outline the guidelines and rules that govern the use of our website, products, and services. By making a purchase or interacting with our site, you agree to these terms. Please take a moment to review them carefully. Our goal is to ensure transparency and protect both our customers and our business. If you have any questions or concerns, feel free to reach out to our support team.</div>
        </div>
        <img className="absolute bottom-0 left-0" src="/images/Maskgroup.png" alt="" />
        <img className="absolute image bottom-0 right-0" src="/images/Mask group (1).png" alt="" />
      </div>
      <div className="container mt-10 mb-14">
        <div className="max-w-[744px] m-auto text-[rgba(38,35,29,1)] my-3">
          <div className="font-bold text-base mb-2">Welcome to Oosh!</div>
          <div className="text-sm">These Terms and Conditions ("Terms") govern your use of the Oosh! website, products, and services. By accessing or making a purchase from Oosh!, you agree to abide by these Terms. Please read them carefully to ensure you understand your rights and responsibilities.!</div>
          {terms.map((term,index)=>(
            <div key={index} className="my-4">
              <div className="font-bold text-base mb-2">{index+1}. {term.heading}</div>
              <div className="text-sm ">{term.desc}</div>
            </div>
            
          ))}
        <div className="text-[rgba(0,0,0,1)] text-sm my-4 ms-auto">Thank you for choosing Oosh! We’re excited to be a part of your self-care journey.</div>
        </div>
      </div>
    </div>
  );
}

export default Terms;
