import React from 'react';

const Hero = () => {
  return (
    <section className="relative">
      <img loading="lazy" src="frontend/src/components/Homepage/Hero/Hero.png" alt="Hero background" className="object-contain w-full aspect-[1.77] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:max-w-full" />
    </section>
  );
};

export default Hero;