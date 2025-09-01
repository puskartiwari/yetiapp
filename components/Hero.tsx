// import Image from "next/image";
// import Button from "./Button";

// const Hero = () => {
//   return (
//     <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
//       <div className="hero-map" />

//       <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
//         <Image
//           src="/camp.svg"
//           alt="camp"
//           width={50}
//           height={50}
//           className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
//         />
//         <h1 className="bold-52 lg:bold-88">Putuk Truno Camp Area</h1>
//         <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
//           We want to be on each of your journeys seeking the satisfaction of
//           seeing the incorruptible beauty of nature. We can help you on an
//           adventure around the world in just one app
//         </p>

//         <div className="my-11 flex flex-wrap gap-5">
//           <div className="flex items-center gap-2">
//             {Array(5)
//               .fill(1)
//               .map((_, index) => (
//                 <Image
//                   src="/star.svg"
//                   key={index}
//                   alt="star"
//                   width={24}
//                   height={24}
//                 />
//               ))}
//           </div>

//           <p className="bold-16 lg:bold-20 text-blue-70">
//             198k
//             <span className="regular-16 lg:regular-20 ml-1">
//               Excellent Reviews
//             </span>
//           </p>
//         </div>

//         <div className="flex flex-col w-full gap-3 sm:flex-row">
//           <Button type="button" title="Download App" variant="btn_green" />
//           <Button
//             type="button"
//             title="How we work?"
//             icon="/play.svg"
//             variant="btn_white_text"
//           />
//         </div>
//       </div>

//       <div className="relative flex flex-1 items-start">
//         <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
//           <div className="flex flex-col">
//             <div className="flexBetween">
//               <p className="regular-16 text-gray-20">Location</p>
//               <Image src="/close.svg" alt="close" width={24} height={24} />
//             </div>
//             <p className="bold-20 text-white">Aguas Calientes</p>
//           </div>

//           <div className="flexBetween">
//             <div className="flex flex-col">
//               <p className="regular-16 block text-gray-20">Distance</p>
//               <p className="bold-20 text-white">173.28 mi</p>
//             </div>
//             <div className="flex flex-col">
//               <p className="regular-16 block text-gray-20">Elevation</p>
//               <p className="bold-20 text-white">2.040 km</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const heroSlides = [
  {
    title: (
      <>
        Empowering <span className="text-red-600">Future Unleashing</span>{" "}
        Innovation...
      </>
    ),
    description:
      "We are committed to shaping future leaders through quality education and hands-on learning. Our programs in IT, Business, Hospitality, and Management foster creativity, critical thinking, and innovation, empowering students to thrive in a rapidly evolving world.",
  },
  {
    title: (
      <>
        Your <span className="text-red-600">Journey</span> to{" "}
        <span className="text-red-600">Success</span> Begins Here
      </>
    ),
    description:
      "Discover industry-relevant programs in IT, Business, Hospitality, and Management designed to equip you with the knowledge and skills for a successful career.",
  },
  {
    title: (
      <>
        <span className="text-red-600">Education</span> That Prepares You for
        the Real <span className="text-red-600">World</span>
      </>
    ),
    description:
      "From practical training to global exposure, our diverse courses like ABM, BCA, BHM, BBA, and MBA help you become career-ready and future-focused.",
  },
];

const heroImages = [
  "/hero-image3.png",
  "/hero-imagered.png",
  // Add more images if needed
];

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  // Automatic slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero section bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Column: Slide Text */}
          <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">
              {heroSlides[slideIndex].title}
            </h1>
            <p className="text-gray-300">
              {heroSlides[slideIndex].description}
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="?page=get-started"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition">
                Get Started
              </a>
              <a
                href="https://www.youtube.com/watch?v=KKVNhm7afvo"
                className="flex items-center space-x-2 border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
                <i className="bi bi-play-circle"></i>
                <span>Watch Video</span>
              </a>
            </div>
          </div>

          {/* Right Column: Image Slider */}
          <div className="lg:w-1/2 relative w-full h-80 lg:h-[400px]">
            {heroImages.map((img, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                  index === slideIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}>
                <Image
                  src={img}
                  alt={`Hero ${index}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
