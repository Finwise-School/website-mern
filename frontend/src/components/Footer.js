import React from "react";
import FooterColumn from "./Homepage/Footer Files/FooterColumn";
import SocialIcon from "./Homepage/Footer Files/SocialIcon";
import EmailSubscription from "./Homepage/Footer Files/EmailSubscription";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';


function Footer() {
  const footerColumns = [
    {
      title: "Home",
      items: ["Hero Section", "Features", "Financial Tools", "Testimonials", "FAQ's"]
    },
    {
      title: "About Us",
      items: ["Our Story", "Our Values", "How It Works", "Our Supporters", "Our Partner Dashboard"]
    },
    {
      title: "Tools",
      items: ["Budget Boss", "Goal SIP", "SIP Calculator", "F.I.R.E", "Many more"]
    },
    {
      title: "Blogs",
      items: ["UK Tax System", "Debt Management", "Negotiation Wizardry", "How to Budget", "Investing Yes or No ?"]
    },
    {
      title: "Contact Us",
      items: ["Contact Form", "Our Offices"]
    }
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, alt: "Facebook icon" },
    { icon: <FaLinkedinIn />, alt: "LinkedIn icon" },
    { icon: <FaTwitter />, alt: "Twitter icon" },
    { icon: <FaYoutube />, alt: "YouTube icon" }
];


  return (
    <footer className="flex flex-col w-full bg-black max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-start px-40 py-24 w-full max-md:px-5 max-md:max-w-full">
        <EmailSubscription />
        <div className="flex flex-wrap flex-1 shrink gap-10 justify-between items-start font-medium basis-0 min-w-[240px] max-md:max-w-full">
          {footerColumns.map((column, index) => (
            <FooterColumn key={index} title={column.title} items={column.items} />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-between items-center px-40 py-4 w-full bg-zinc-900 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start self-stretch py-2.5 my-auto text-lg font-medium tracking-normal leading-none text-white min-w-[240px] max-md:max-w-full">
          <p>@2024 Finwise School All Rights Reserved.</p>
          <a href="#terms">Terms & Conditions</a>
        </div>
        <div className="flex gap-2.5 items-center self-stretch py-2.5 my-auto">
          {socialIcons.map((icon, index) => (
            <SocialIcon key={index} src={icon.src} alt={icon.alt} />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;