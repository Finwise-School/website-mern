import React, { useEffect } from "react";
import topImg from "../assets/images/top.png";
import { Link } from "react-router-dom";
import customer1 from "../assets/images/customers/customer-1.jpg";
import customer2 from "../assets/images/customers/customer-2.jpg";
import customer3 from "../assets/images/customers/customer-3.jpg";
import customer4 from "../assets/images/customers/customer-4.jpg";
import customer5 from "../assets/images/customers/customer-5.jpg";
import customer6 from "../assets/images/customers/customer-6.jpg";
import appScreen1 from "../assets/images/app/app-screen-1.png";
import appScreen2 from "../assets/images/app/app-screen-2.png";
import appScreen3 from "../assets/images/app/app-screen-3.png";
import dave from "../assets/images/customers/dave.jpg";
import steve from "../assets/images/customers/steve.jpg";
import hannah from "../assets/images/customers/hannah.jpg";
import ben from "../assets/images/customers/ben.jpg";
import gallery1 from "../assets/images/gallery/gallery-1.jpg";
import gallery2 from "../assets/images/gallery/gallery-2.jpg";
import gallery3 from "../assets/images/gallery/gallery-3.jpg";
import gallery4 from "../assets/images/gallery/gallery-4.jpg";
import gallery5 from "../assets/images/gallery/gallery-5.jpg";
import gallery6 from "../assets/images/gallery/gallery-6.jpg";
import gallery7 from "../assets/images/gallery/gallery-7.jpg";
import gallery8 from "../assets/images/gallery/gallery-8.jpg";
import gallery9 from "../assets/images/gallery/gallery-9.jpg";
import gallery10 from "../assets/images/gallery/gallery-10.jpg";
import gallery11 from "../assets/images/gallery/gallery-11.jpg";
import gallery12 from "../assets/images/gallery/gallery-12.jpg";

const MainContent = () => {
  useEffect(() => {
    const yearEl = document.querySelector(".year");
    if (yearEl) {
      const currentYear = new Date().getFullYear();
      yearEl.textContent = currentYear;
    }

    const btnNavEl = document.querySelector(".btn-mobile-nav");
    const headerEl = document.querySelector(".header");

    if (btnNavEl && headerEl) {
      btnNavEl.addEventListener("click", () => {
        headerEl.classList.toggle("nav-open");
      });
    }

    const allLinks = document.querySelectorAll("a:link");

    allLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");
        if (href === "#") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        if (href !== "#" && href.startsWith("#")) {
          const sectionEl = document.querySelector(href);
          if (sectionEl) {
            sectionEl.scrollIntoView({ behavior: "smooth" });
          }
        }
        if (link.classList.contains("main-nav-link")) {
          headerEl.classList.toggle("nav-open");
        }
      });
    });

    const handleScroll = () => {
      if (window.scrollY >= 720) {
        document.body.classList.add("sticky");
      } else {
        document.body.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (btnNavEl && headerEl) {
        btnNavEl.removeEventListener("click", () => {
          headerEl.classList.toggle("nav-open");
        });
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <section className="section-top bg-white py-12 mt-24">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">
              Your finance buddy right in your hand!
            </h1>
            <p className="text-lg">
              The smart solution to all your financial problems and
              requirements.
            </p>
            <div className="flex space-x-4">
              <Link to="/book" className="btn btn-primary">
                Book a Call
              </Link>
              <a href="#how" className="btn btn-outline">
                Learn more &darr;
              </a>
            </div>
            <div className="flex items-center space-x-4 mt-8">
              <div className="flex space-x-4">
                <img
                  src={customer1}
                  alt="Customer photo"
                  className="w-12 h-12 rounded-full border-4 border-white -mr-4"
                />
                <img
                  src={customer2}
                  alt="Customer photo"
                  className="w-12 h-12 rounded-full border-4 border-white -mr-4"
                />
                <img
                  src={customer3}
                  alt="Customer photo"
                  className="w-12 h-12 rounded-full border-4 border-white -mr-4"
                />
                <img
                  src={customer4}
                  alt="Customer photo"
                  className="w-12 h-12 rounded-full border-4 border-white -mr-4"
                />
                <img
                  src={customer5}
                  alt="Customer photo"
                  className="w-12 h-12 rounded-full border-4 border-white -mr-4"
                />
                <img
                  src={customer6}
                  alt="Customer photo"
                  className="w-12 h-12 rounded-full border-4 border-white"
                />
              </div>
              <p className="text-lg font-semibold">
                250,000+ people guided in 8 months!
              </p>
            </div>
          </div>
          <div className="top-img-box">
            <img src={topImg} className="w-full" alt="images" />
          </div>
        </div>
      </section>

      <section className="section-how py-24 bg-gray-50" id="how">
        <div className="container mx-auto text-center px-6">
          <span className="subheading text-lg uppercase text-gray-500">
            How it works
          </span>
          <h2 className="text-4xl font-bold mb-12">
            Your finance buddy in 3 simple steps
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="step-number text-7xl text-gray-300 mb-4">01</p>
              <h3 className="text-3xl font-bold mb-4">
                Tell us what you like (and what not)
              </h3>
              <p className="text-lg">
                Never again waste time thinking about where to invest! Finwise
                AI will create a 100% personalized plan just for you.
              </p>
            </div>
            <div className="step-img-box relative">
              <img
                src={appScreen1}
                className="w-1/2 mx-auto"
                alt="iPhone app preferences selection screen"
              />
            </div>

            <div className="step-img-box relative">
              <img
                src={appScreen2}
                className="w-1/2 mx-auto"
                alt="iPhone app approving plan screen"
              />
            </div>
            <div>
              <p className="step-number text-7xl text-gray-300 mb-4">02</p>
              <h3 className="text-3xl font-bold mb-4">
                Approve your weekly plan
              </h3>
              <p className="text-lg">
                Once per week, approve the investment plan generated for you by
                Finwise AI. You can change stocks, swap entire holdings, or even
                add your own choices.
              </p>
            </div>

            <div>
              <p className="step-number text-7xl text-gray-300 mb-4">03</p>
              <h3 className="text-3xl font-bold mb-4">
                Purchase holdings at convenient time
              </h3>
              <p className="text-lg">
                You can purchase the stocks and holdings at your convenience
                directly from the app.
              </p>
            </div>
            <div className="step-img-box relative">
              <img
                src={appScreen3}
                className="w-1/2 mx-auto"
                alt="iPhone app delivery screen"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="section-testimonials bg-blue-600 py-24 text-white"
        id="testimonials"
      >
        <div className="container mx-auto text-center px-6">
          <span className="subheading text-lg uppercase">Testimonials</span>
          <h2 className="text-4xl font-bold mb-12">
            Once you try it, you can't go back
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <figure className="flex flex-col items-center">
              <img
                src={dave}
                className="w-16 h-16 rounded-full mb-4"
                alt="Photo of customer Dave Bryson"
              />
              <blockquote className="text-lg mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                eiusmod tempor incidunt ut labore et dolore magna aliqua.
              </blockquote>
              <p className="text-lg font-bold">&mdash; Dave Bryson</p>
            </figure>

            <figure className="flex flex-col items-center">
              <img
                src={steve}
                className="w-16 h-16 rounded-full mb-4"
                alt="Photo of customer Ben Hadley"
              />
              <blockquote className="text-lg mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                eiusmod tempor incidunt ut labore et dolore magna aliqua.
              </blockquote>
              <p className="text-lg font-bold">&mdash; Ben Hadley</p>
            </figure>

            <figure className="flex flex-col items-center">
              <img
                src={hannah}
                className="w-16 h-16 rounded-full mb-4"
                alt="Photo of customer Steve Miller"
              />
              <blockquote className="text-lg mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                eiusmod tempor incidunt ut labore et dolore magna aliqua.
              </blockquote>
              <p className="text-lg font-bold">&mdash; Steve Miller</p>
            </figure>

            <figure className="flex flex-col items-center">
              <img
                src={ben}
                className="w-16 h-16 rounded-full mb-4"
                alt="Photo of customer Hannah Smith"
              />
              <blockquote className="text-lg mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                eiusmod tempor incidunt ut labore et dolore magna aliqua.
              </blockquote>
              <p className="text-lg font-bold">&mdash; Hannah Smith</p>
            </figure>
          </div>
        </div>
      </section>

      <section className="section-gallery py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <figure className="gallery-item">
              <img
                src={gallery1}
                className="w-full hover:scale-110 transition-transform"
                alt="Stocks"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src={gallery2}
                className="w-full hover:scale-110 transition-transform"
                alt="Stocks"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src={gallery3}
                className="w-full hover:scale-110 transition-transform"
                alt="Stocks"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src={gallery4}
                className="w-full hover:scale-110 transition-transform"
                alt="Stocks"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src={gallery5}
                className="w-full hover:scale-110 transition-transform"
                alt="Stocks"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src={gallery6}
                className="w-full hover:scale-110 transition-transform"
                alt="Stocks"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src={gallery7}
                className="w-full hover:scale-110 transition-transform"
                alt="Stocks"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src={gallery8}
                className="w-full hover:scale-110 transition-transform"
                alt="Stocks"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src={gallery9}
                className="w-full hover:scale-110 transition-transform"
                alt="Stocks"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src={gallery10}
                className="w-full hover:scale-110 transition-transform"
                alt="Stocks"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src={gallery11}
                className="w-full hover:scale-110 transition-transform"
                alt="Stocks"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src={gallery12}
                className="w-full hover:scale-110 transition-transform"
                alt="Stocks"
              />
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
