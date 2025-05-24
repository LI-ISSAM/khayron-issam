"use client"
import Nav from "@/Components/Navbar";
import Button from "@/Components/Button";
import { useState } from "react";

export default function Home() {
  const [activeButton, setActiveButton] = useState("right");
  const steps = [
    {
      id: "خ",
      title: "Oscillatory Logic",
      text: "enabling self-correcting, cyclical reasoning patterns.",
    },
    {
      id: "ي",
      title: "Fractal Memory",
      text: "a context-sensitive memory that adapts with every interaction.",
    },
    {
      id: "ر",
      title: "Full Arabic Intelligence",
      text: "supports diacritics, script, and native semantic depth.",
    },
  ];
  const features = [
    {
      img: "/image/image1.png",
      text: "Retrieve relevant verses using semantic vector search.",
    },
    {
      img: "/image/image2.png",
      text: "Generate a multi-step chain of thought for structured reasoning.",
    },
    {
      img: "/image/image3.png",
      text: "Converge to a final, stable, and rational output.",
    },
  ];
  const roadmap = [
    {
      img: "/image/image4.png",
      title: "Second Quarter",
      text: "Annotation tools and prompt tuning",
    },
    {
      img: "/image/image5.png",
      title: "Third Quarter",
      text: "LoRA-based fine-tuning for efficiency",
    },
    {
      img: "/image/image6.png",
      title: "Fourth Quarter",
      text: "Public beta rollout",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[url('/image/bg.png')] md:bg-[url('/image/bg.png')] bg-cover bg-top flex flex-col gap-17 overflow-auto scrollbar-hide">
      <Nav />
      <div className="max-w-full mx-auto px-8 flex flex-col gap-10">
        {/*First Page*/}
        <div className="w-full flex flex-col items-center justify-center gap-3 mt-6 lg:mb-65">
          {/*Title*/}
          <p className="text-center font-['Sansation'] bg-gradient-to-r from-[#D5871A] to-[#FFFFFF] bg-clip-text text-transparent text-[30px] md:text-[48px] lg:text-[64px]">
            The Arabic AI That Thinks, <br className="hidden md:block" />
            Not Just Predicts
          </p>
          <p className="text-[16px] md:text-[32px] lg:text-[32px] font-['Average'] text-[#D9D9D9] text-center">
            Experience Oscillatory Logic & <br className="hidden md:block" />
            Fractal Memory in Every Query
          </p>
          <div className="flex gap-4 mt-4">
            <Button className="bg-[#3B6F70] font-['Average'] rounded-[7px] text-white ">Get Your API</Button>
            <Button className="bg-[#EE951B] font-['Average'] rounded-[7px] text-white">Learn More</Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 w-full lg:mb-65 ">
          {/* Easy Steps Section*/}
          <div className="flex flex-col max-w-full ">
            {/* Title */}
            <div className="text-[25px] md:text-[42px] text-white font-['Sansation'] mb-10 lg:mb-5">
              <p>Easy Steps</p>
            </div>
            {/* Steps List */}
            <div className="flex flex-col max-w-full">
              {steps.map((step, index) => {
                const circleColors = ["#C8591F", "#D5871A", "#3D7474"];
                const circleColor = circleColors[index % circleColors.length]; // Loop colors if more steps

                return (
                  <div key={step.id} className="flex items-start gap-5 relative">
                    {/* Circle and Line */}
                    <div className="flex flex-col items-center relative">
                      {/* Circle */}
                      <div
                        className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-white font-regular z-10"
                        style={{ backgroundColor: circleColor }}
                      >
                        {step.id}
                      </div>

                      {/* Connecting Line (Only shown if not the last step) */}
                      {index !== steps.length - 1 && (
                        <div className="w-[2px] flex-1 min-h-[60px] sm:min-h-[80px] md:min-h-[100px] lg:min-h-[120px] bg-[#B3B3B3]"></div>
                      )}
                    </div>

                    {/* Step Text */}
                    <div className="text-white flex flex-col max-w-full">
                      <p className="text-[20px] md:text-[32px] font-['Average']">{step.title}</p>
                      <p className="text-[16px] md:text-[24px] font-['Average'] opacity-80">
                        {step.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Images (only visible on PC) */}
          {/* Top Left Image */}
          <img src="/image/pictures.png" alt="Oscillatory" className=" hidden lg:inline w-[35%] xl:w-[27%] " />
        </div>
        <div className="lg:mb-65">
          {/* Step-by-Step Section */}
          <div className="text-[20px] md:text-[42px] text-white font-['Sansation'] lg:text-center lg:text-[64px] mb-10">
            <p>Step-by-Step Intelligence</p>
          </div>

          {/* Mobile layout: vertical steps */}
          <div className="flex flex-col gap-10 lg:hidden">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-5">
                <div className="w-[80px] h-[80px] rounded-md overflow-hidden flex-shrink-0">
                  <img src={feature.img} className="w-full h-full object-cover" />
                </div>
                <div className="text-white text-sm md:text-[32px] flex flex-col max-w-full">
                  <p className="font-['Average'] opacity-80">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* PC layout: horizontal with vertical lines and bigger images & text */}
          <div className="hidden lg:flex justify-center items-start gap-20">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center relative px-6">
                {/* Image - Bigger on PC */}
                <div className="w-[208px] h-[208px] rounded-md overflow-hidden flex-shrink-0 mb-4">
                  <img src={feature.img} className="w-full h-full object-cover" />
                </div>

                {/* Bigger Text on PC */}
                <div className="text-white text-center max-w-[180px]">
                  <p className="text-base lg:text-[20px] font-['Average'] opacity-80">
                    {feature.text}
                  </p>
                </div>

                {/* Vertical line between steps */}
                {index !== features.length - 1 && (
                  <div className="absolute top-[20%] right-[-40px] w-[2px] h-[120px] bg-white opacity-30"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:mb-65">
          <div className="w-full flex flex-col items-center justify-center gap-3 mt-6 lg:flex-row lg:justify-between lg:items-center">
            {/* Title + Text */}
            <div className="flex flex-col items-center text-center px-4 mb-0 lg:mb-0 lg:items-start lg:text-left lg:max-w-[45%] lg:gap-6 order-1 lg:order-1">
              <p className="text-[25px] md:text-[42px] text-white font-['Sansation'] mb-2 lg:text-[64px] lg:leading-tight">
                Live Demo
              </p>
              <p className="text-[15px] md:text-[20px] lg:text-[30px] font-['Average'] text-[#FFFEFE] opacity-80 mb-3  lg:leading-relaxed ">
                Try Khayron instantly by embedding the <br className="hidden md:inline lg:hidden" />live demo into your platform:
              </p>

              {/* Button under text (desktop), after image on mobile */}
              <div className="hidden lg:flex">
                <Button className="bg-[#EE951B] font-['Average'] text-black px-15 py-3 rounded-[12px]">
                  Try Demo
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="w-full max-w-[600px] rounded-lg shadow-lg mb-3 order-2 lg:order-2 lg:max-w-[50%] lg:mt-0">
              <img
                src="/image/livedemopc.png"
                alt="Live Demo PC"
                className="w-full rounded-lg"
              />
            </div>

            {/* Button (mobile only) */}
            <div className="order-3 flex justify-center lg:hidden px-4">
              <Button className="bg-[#EE951B] font-['Average'] text-black px-7 py-2 rounded-[12px]">
                Try Demo
              </Button>
            </div>

          </div>
        </div>


        <div className="lg:mb-65">
          {/* RoadMap Section Title */}
          <div className="text-[20px] md:text-[42px] lg:text-[64px] text-white font-['Sansation'] flex flex-col max-w-full lg:items-center mb-10">
            <p>RoadMap of the year</p>
          </div>

          {/* Mobile layout (default: vertical) */}
          <div className="flex flex-col gap-10 lg:hidden">
            {roadmap.map((feature, index) => (
              <div key={index} className="flex items-center gap-5">
                <img src={feature.img} alt={feature.title} className="w-[80px] h-[80px] rounded-md object-cover" />

                <div className="text-white">
                  <p className="md:text-[32px] font-['Average']">{feature.title}</p>
                  <p className="text-sm md:text-[20px] font-['Average'] text-[#FFFAFA] opacity-80">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* PC-only layout (horizontal row) */}
          <div className="hidden lg:flex justify-between flex-wrap mt-12 px-8 max-w-[1280px] mx-auto">
            {roadmap.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-6 w-[30%] min-w-[280px] max-w-[400px]"
              >
                {/* Image */}
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-[100px] h-[100px] xl:w-[150px] xl:h-[150px] rounded-md object-cover flex-shrink-0"
                />

                {/* Title + Text */}
                <div className="text-white">
                  <p className="text-[18px] xl:text-[28px] font-['Average'] mb-1">
                    {feature.title}
                  </p>
                  <p className="text-[14px] xl:text-[20px] font-['Average'] text-[#FFFAFA] opacity-80">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className="lg:mb-65">
          {/*Pricing Section*/}
          <div className="w-full flex flex-col items-center justify-center gap-3 mt-6">
            <p className="text-[20px] md:text-[42px] text-center text-white font-['Sansation'] gap-3">Pricing & Get Started</p>

            <div className="relative w-[220px] h-[50px] rounded-md mt-4 flex items-center px-1">
              {/* Sliding background */}
              <div
                className={`absolute top-1 left-1 h-[42px] w-[104px] rounded-md bg-[#EE951B] transition-all duration-200 ${activeButton === "right" ? "translate-x-[104px]" : "translate-x-0"
                  }`}
              ></div>

              {/* Monthly button */}
              <button
                onClick={() => setActiveButton("left")}
                className={`z-10 w-1/2 h-full rounded-[8px] cursor-pointer text-sm font-['Average'] transition-colors duration-200 ${activeButton === "left" ? "text-black" : "text-white"
                  }`}
              >
                Monthly
              </button>

              {/* Annual button */}
              <button
                onClick={() => setActiveButton("right")}
                className={`z-10 w-1/2 h-full rounded-[8px] cursor-pointer text-sm font-['Average'] transition-colors duration-200 ${activeButton === "right" ? "text-black" : "text-white"
                  }`}
              >
                Yearly
              </button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* First Card */}
            <div className="bg-white text-black p-6 lg:p-10 rounded-[8px] flex flex-col justify-between shadow-md">
              <div>
                <div className="text-center">
                  <h3 className="text-xl lg:text-2xl font-['Sansation'] mb-2">Free</h3>
                  <p className="text-2xl lg:text-3xl font-['Inter'] mb-4">$0/mo</p>
                </div>
                <ul className="list-disc pl-5 mb-4 font-['Average'] space-y-1 text-[#757575] text-sm lg:text-base">
                  <li>300 queries / month</li>
                  <li>Static dataset</li>
                  <li>View-only reasoning graph</li>
                </ul>
              </div>
              <Button className="bg-black text-white font-['Average'] text-sm lg:text-base px-10 py-2 lg:px-12 lg:py-3 rounded-[8px] mt-4 self-center">Subscribe</Button>
            </div>

            {/* Middle Card */}
            <div
              className="text-white p-6 lg:p-10 rounded-[8px] flex flex-col justify-between shadow-md"
              style={{
                background: "linear-gradient(to top, rgba(52, 102, 106, 1), rgba(99, 97, 97, 0.5))"
              }}>
              <div>
                <div className="text-center">
                  <h3 className="text-xl lg:text-2xl font-['Sansation'] mb-2">Pro tier</h3>
                  <p className="text-2xl lg:text-3xl font-['Inter'] mb-4">$299/mo</p>
                </div>
                <ul className="list-disc pl-5 mb-4 font-['Average'] space-y-1 text-white text-sm lg:text-base">
                  <li>10 000 queries / month</li>
                  <li>Interactive reasoning graphs</li>
                  <li>Plug-in corpora</li>
                </ul>
              </div>
              <Button className="bg-white text-black font-['Average'] text-sm lg:text-base px-10 py-2 lg:px-12 lg:py-3 rounded-[8px] mt-4 self-center">Subscribe</Button>
            </div>

            {/* Third Card */}
            <div className="bg-white text-black p-6 lg:p-10 rounded-[8px] flex flex-col justify-between shadow-md">
              <div>
                <div className="text-center">
                  <h3 className="text-xl lg:text-2xl font-['Sansation'] mb-2">Enterprise</h3>
                  <p className="text-2xl lg:text-3xl font-['Inter'] mb-4">$2500/mo</p>
                </div>
                <ul className="list-disc pl-5 mb-4 font-['Average'] space-y-1 text-[#757575] text-sm lg:text-base">
                  <li>Dedicated corpora</li>
                  <li>Full pipeline access</li>
                  <li>Secure deployment</li>
                </ul>
              </div>
              <Button className="bg-black text-white font-['Average'] text-sm lg:text-base px-10 py-2 lg:px-12 lg:py-3 rounded-[8px] mt-4 self-center">Subscribe</Button>
            </div>
          </div>

        </div>
        <div className="">
          {/* Footer Section */}
          <div className="text-white py-2 my-12 items-center ">
            {/* Top Container: Reach Out & Subscribe Side by Side on PC */}
            <div className="flex flex-col lg:flex-row  gap-12  justify-between">

              {/* Left: Reach Out Now */}
              <div className="lg:w-1/2  ">
                <div className="flex items-center space-x-2 mb-4">
                  <img src="/image/logo.png" alt="Khayron Logo" className="w-10 h-12 lg:w-14 lg:h-16" />
                  <img src="/image/KHAYRON.png" alt="Khayron Word" className="h-3 lg:h-5" />
                </div>
                <div>
                  <h2 className="text-[#EE951B] font-['Sansation'] mb-4 text-[30px] lg:text-[40px]">
                    Reach Out Now
                  </h2>
                </div>
                <p className="text-[#C3C3C3] font-['Average'] mb-6 text-base lg:text-[20px]">
                  Explore a new paradigm in Arabic AI—one that combines intelligent reasoning with cultural awareness,
                  delivering powerful, context-rich interactions that go well beyond mere pattern recognition.
                </p>

                <div className="flex flex-wrap gap-8">
                  {/* Phone */}
                  <div className="flex flex-col">
                    <h4 className="uppercase text-sm lg:text-base tracking-widest text-white font-['Average'] px-1 py-0.5">
                      Phone:
                    </h4>
                    <p className="text-lg lg:text-xl text-[#C3C3C3] font-['Average'] whitespace-nowrap">
                      +212 08 09 98 76
                    </p>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <h4 className="uppercase text-sm lg:text-base tracking-widest text-white font-['Average'] px-1 py-0.5">
                      Email:
                    </h4>
                    <a
                      href="mailto:hello@khayron.ai"
                      className="text-lg lg:text-xl font-['Average'] underline text-[#C3C3C3] break-all"
                    >
                      hello@khayron.ai
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: Unlock Exclusive Updates */}
              <div className="lg:w-1/2 lg:mt-[76px] flex flex-col items-end"> 
              <div className="flex flex-col">{/* Adjust this value to match the logo height and spacing */}
                <h2 className="text-[#EE951B] text-[25px] lg:text-[36px] font-['Sansation'] mb-1">
                  Unlock Exclusive Updates
                </h2>
                <p className="text-[#C3C3C3] font-['Average'] mb-4 text-base lg:text-lg">
                  Step In Where Arabic Meets Smart
                </p>
                </div>
                {/* Email + Button */}
                <form className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 w-full max-w-md">
                  <input
                    type="email"
                    placeholder="example@domain.com"
                    className="px-4 py-2 lg:px-6 lg:py-3 border border-[#757575] bg-transparent text-white placeholder-gray-400 rounded-md outline-none focus:ring-2 focus:ring-white font-['Average'] text-sm lg:text-base"
                  />
                  <Button
                    type="submit"
                    className="border border-[#757575] text-white rounded-md hover:bg-white hover:text-black font-['Average'] px-4 py-2 lg:px-6 lg:py-3 w-full sm:w-auto text-sm lg:text-base"
                  >
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div >
  );
}