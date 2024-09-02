import React from "react";

import FooterColumn from "./Homepage/Footer Files/FooterColumn";
import SocialIcon from "./Homepage/Footer Files/SocialIcon";
import EmailSubscription from "./Homepage/Footer Files/EmailSubscription";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  const footerColumns = [
    {
      title: "Home",
      items: [
        { name: "Homepage", path: "/" },
        { name: "Features", path: "/features" },
        { name: "Tools", path: "/tools" },
        { name: "Testimonials", path: "/testimonials" },
        { name: "FAQ's", path: "/faqs" }
      ]
    },
    {
      title: "About Us",
      items: [
        { name: "Our Story", path: "/about#our-story" },
        { name: "Our Values", path: "/about#our-values" },
        { name: "How It Works", path: "/about#how-it-works" },
        { name: "Our Supporters", path: "/about#our-supporters" },
        { name: "Our Partner Dashboard", path: "/about#partner-dashboard" }
      ]
    },
    {
      title: "Tools",
      items: [
        { name: "Budget Boss", path: "/tools/budget-boss" },
        { name: "Goal SIP", path: "/tools/goal-sip" },
        { name: "SIP Calculator", path: "/tools/sip-calculator" },
        { name: "F.I.R.E", path: "/tools/fire" },
        { name: "Many more", path: "/tools" }
      ]
    },
    {
      title: "Blogs",
      items: [
        { name: "UK Tax System", path: "/blogs/uk-tax-system" },
        { name: "Debt Management", path: "/blogs/debt-management" },
        { name: "Negotiation Wizardry", path: "/blogs/negotiation-wizardry" },
        { name: "How to Budget", path: "/blogs/how-to-budget" },
        { name: "Investing Yes or No ?", path: "/blogs/investing-yes-or-no" }
      ]
    },
    {
      title: "Contact Us",
      items: [
        { name: "Contact", path: "/contact" },
        { name: "Our Offices", path: "/contact/offices" }
      ]
    }
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, alt: "Facebook" },
    { icon: <FaLinkedinIn />, alt: "LinkedIn" },
    { icon: <FaTwitter />, alt: "Twitter" },
    { icon: <FaYoutube />, alt: "YouTube" }
  ];

  return (
    <footer className="flex flex-col w-full bg-black max-md:max-w-full">
      <div className="flex flex-wrap gap-5 items-start px-20 py-24 w-full max-md:px-2 max-md:max-w-full">
        <EmailSubscription />
        <div className="flex flex-wrap flex-1 shrink gap-5 justify-between items-start font-medium basis-0 min-w-[240px] max-md:max-w-full">
          {footerColumns.map((column, index) => (
            <FooterColumn key={index} title={column.title} items={column.items} />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-5 justify-between items-center px-20 py-4 w-full bg-zinc-900 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 items-start self-stretch py-2.5 my-auto text-lg font-medium tracking-normal leading-none text-white min-w-[240px] max-md:max-w-full">
          <p>@2024 Finwise School All Rights Reserved.</p>
          <a href="#terms">Terms & Conditions</a>
        </div>
        <div className="flex gap-2.5 items-center self-stretch py-2.5 my-auto">
          {socialIcons.map((icon, index) => (
            <SocialIcon key={index} icon={icon.icon} alt={icon.alt} />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
