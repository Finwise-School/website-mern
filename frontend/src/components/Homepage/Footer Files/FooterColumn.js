import React from "react";

function FooterColumn({ title, items }) {
  return (
    <div className="flex flex-col">
      <h3 className="text-xl tracking-normal leading-tight text-neutral-400">{title}</h3>
      <nav className="flex flex-col mt-8 text-lg tracking-normal leading-none text-white">
        {items.map((item, index) => (
          <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} key={index} className={index > 0 ? "mt-5" : ""}>
            {item}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default FooterColumn;