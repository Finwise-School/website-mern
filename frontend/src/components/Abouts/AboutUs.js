import React from "react";
import phone from "../../assets/images/aboutUS/aboutUss.png";
import barclays from "../../assets/images/aboutUS/barclays.png";
import inspire from "../../assets/images/aboutUS/inspire.png";
import univ from "../../assets/images/aboutUS/university.png";
import left from "../../assets/images/aboutUS/left.png";
import right from "../../assets/images/aboutUS/right.png";
const AboutUs = () => {
  return (
    <div>
      {/* Top Container */}
      <div className="flex items-center justify-between p-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-6xl mb-4">About Us</h2>
          <p className="text-lg">
            At FinwiseSchool, we understand that everyone learns differently, so
            we offer personalized learning paths tailored to each user's unique
            financial knowledge, learning style, and goals. When users join,
            they complete a short assessment to gauge their current financial
            understanding and set personal financial goals. Our advanced
            algorithms then customize the learning experience based on the
            user's progress and performance, ensuring that each lesson is
            relevant and appropriately challenging.
          </p>

          <div className="mt-6 lg:mt-0 lg:ml-10">
          <a
            href="#"
            className="inline-block rounded-lg text-[#263871] hover:text-green-500 rounded-lg py-3 px-6 lg:px-8 text-base lg:text-lg min-w-[200px] lg:min-w-[250px] text-center transition-all duration-300"
            style={{
              border: '5px solid',
              borderRadius: '12px',
              borderImage: 'linear-gradient(90deg, #223876 0%, #3CB371 100%) 1',
            }}
          >
            Request Early Access
          </a>
        </div>
        </div>
        <img
          src={phone}
          height={500}
          width={500}
          alt="about-us"
          className="hidden md:block"
        />
      </div>

      {/* Our Values */}
      <div className="p-8 bg-gray-100">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-6xl mb-4">Our Values</h2>
            <p className="text-lg">
              Our journey is one of relentless progress and transformation. We
              began as a passionate group with a vision, dedicated to building
              an educational platform that redefines the boundaries of
              traditional financial learning.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
            <div className="p-4 bg-white shadow-md">
              <h1 className="text-lg font-bold">Trust</h1>
              <p>
                We build lasting relationships through integrity, transparency,
                and trust.
              </p>
            </div>

            <div className="p-4 bg-white shadow-md">
              <h1 className="text-lg font-bold">Excellence</h1>
              <p>
                We strive for excellence in everything we do, ensuring high
                standards and quality.
              </p>
            </div>

            <div className="p-4 bg-white shadow-md">
              <h1 className="text-lg font-bold">Community Focus</h1>
              <p>
                We are committed to fostering a sense of community and support
                among our users.
              </p>
            </div>

            <div className="p-4 bg-white shadow-md">
              <h1 className="text-lg font-bold">Our Commitment</h1>
              <p>
                We are dedicated to our mission and to helping our users achieve
                their financial goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-8">
          <div className="pb-12">
            <h1 className="text-4xl font-bold mb-4">
              Navigating the Finwise School Experience
            </h1>
            <p>
              Navigating the Finwise School process is simple and designed to
              guide you toward financial success. Here's a step-by-step
              overview:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-blue-300 p-5 relative">
              <h2 className="text-xl font-semibold mb-4">Step 01</h2>
              <div className="text-center">
                <h2 className="text-lg font-bold mb-2">
                  Sign Up and Create your Account
                </h2>
                <p className="font-thin">
                  Fill Out Registration Information: Provide your basic details
                  like name, email, and password to create your account.
                </p>
              </div>
              <div className="absolute top-0 left-0 h-full w-1 bg-blue-300 shadow-lg"></div>
            </div>

            <div className="border border-blue-300 p-5 relative">
              <h2 className="text-xl font-semibold mb-4">Step 02</h2>
              <div className="text-center">
                <h2 className="text-lg font-bold mb-2">
                  Complete a Financial Assessment
                </h2>
                <p className="font-thin">
                  Answer Questions About Your Financial Goals: Share your
                  short-term and long-term financial objectives to help tailor
                  your plan.
                </p>
              </div>
              <div className="absolute top-0 left-0 h-full w-1 bg-blue-300 shadow-lg"></div>
            </div>

            <div className="border border-blue-300 p-5 relative">
              <h2 className="text-xl font-semibold mb-4">Step 03</h2>
              <div className="text-center">
                <h2 className="text-lg font-bold mb-2">
                  Start Learning with Financial Modules
                </h2>
                <p className="font-thin">
                  Complete Educational Modules: Work through interactive modules
                  designed to build your financial knowledge and skills.
                </p>
              </div>
              <div className="absolute top-0 left-0 h-full w-1 bg-blue-300 shadow-lg"></div>
            </div>

            <div className="border border-blue-300 p-5 relative">
              <h2 className="text-xl font-semibold mb-4">Step 04</h2>
              <div className="text-center">
                <h2 className="text-lg font-bold mb-2">
                  Utilize Financial Tools and Resources
                </h2>
                <p className="font-thin">
                  Access Financial Tools: Use tools to create and manage a
                  budget, helping you track and control your spending.
                </p>
              </div>
              <div className="absolute top-0 left-0 h-full w-1 bg-blue-300 shadow-lg"></div>
            </div>

            <div className="border border-blue-300 p-5 relative">
              <h2 className="text-xl font-semibold mb-4">Step 05</h2>
              <div className="text-center">
                <h2 className="text-lg font-bold mb-2">
                  Monitor Progress and Get Expert Advice
                </h2>
                <p className="font-thin">
                  Check the Leaderboard: See how you rank against other users by
                  tracking your progress on the leaderboard.
                </p>
              </div>
              <div className="absolute top-0 left-0 h-full w-1 bg-blue-300 shadow-lg"></div>
            </div>

            <div className="border border-blue-300 p-5 relative">
              <h2 className="text-xl font-semibold mb-4">Step 06</h2>
              <div className="text-center">
                <h2 className="text-lg font-bold mb-2">
                  Achieve Goals and Earn Rewards
                </h2>
                <p className="font-thin">
                  Earn Rewards for Completing Modules: Receive rewards for
                  completing modules and achieving milestones, motivating you to
                  stay on track.
                </p>
              </div>
              <div className="absolute top-0 left-0 h-full w-1 bg-blue-300 shadow-lg"></div>
            </div>
          </div>

          

        </div>
      </div>
      <div>
            <div className=" text-center justify-center p-20">
              <h2 className=" text-3xl pb-5">Meet our Supporters</h2>
              <p>
                At Finwise School, our success is fueled by the support and
                expertise of our valued partners.
              </p>
            </div>

           
          </div>

      <div className="flex justify-center items-center">
              <div className="border-2 p-5 border-black mr-10 animate-spin-slow">
                <img src={inspire} height={200} width={200} alt="Inspire" />
              </div>

              <div className="border-2 p-5 border-black mr-10 animate-spin-slow">
                <img src={barclays} height={200} width={200} alt="Barclays" />
              </div>

              <div className="border-2 p-5 border-black mr-10 animate-spin-slow">
                <img src={univ} height={200} width={200} alt="University" />
              </div>
            </div>

      <div className=" justify-center text-center p-20">
        <h1 className=" text-3xl pb-5">Partner Portal</h1>
        <p>
          Our Partner Portal offers customized financial planning solutions
          tailored specifically for corporate clients. Collaborate with Finwise
          School to provide your employees with seamless access to exclusive
          tools and expert advice, empowering them to achieve their financial
          goals.
        </p>
        <div className=" flex p-20">
          <img
            className="image1 pr-9"
            src={left}
            height={500}
            width={500}
            alt="left"
          />
          <img
            className="image1"
            src={right}
            height={200}
            width={400}
            alt="right"
          />
        </div>

        <div className="border-t border-gray-300"></div>
      </div>

     


      <div className=" grid grid-cols-2">
        <div className="">
          <h1 className=" text-3xl pb-5 justify-center text-center">
            Start Your Financial Journey Today
          </h1>
          <p>
            Your path to financial freedom is just a click away. Whether you’re
            aiming to optimize your investments, create a solid savings plan, or
            receive expert financial advice, FinWise is here to guide you every
            step of the way. Take the first step towards achieving your
            financial goals—explore our innovative planning tools or connect
            with our team for personalized support tailored to your needs.
          </p>
        </div>
        <div className="mt-6 lg:mt-0 lg:ml-10">
          <a
            href="#"
            className="inline-block rounded-lg text-[#263871] hover:text-green-500 rounded-lg py-3  text-base lg:text-lg min-w-[200px] lg:min-w-[250px] text-center transition-all duration-300"
            style={{
              border: '5px solid',
              borderRadius: '12px',
              borderImage: 'linear-gradient(90deg, #223876 0%, #3CB371 100%) 1',
            }}
          >
            Request Early Access
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
