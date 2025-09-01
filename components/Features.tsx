// "use client";

// import { useState } from "react";
// import Image from "next/image";

// const featuresData = [
//   {
//     id: 1,
//     title: "Computer lab and Internet",
//     content:
//       "The college runs professional business programs based on efficient learning modules. Most BA-HM (BHM), MBA, and BCA curricula require computer support. To meet this need, the college has ensured the availability of a sophisticated computer lab equipped with branded computers, all connected to the Internet through a dedicated 100/100 Mbps lease line serving the needs of 400 students at a time.",
//     imgSrc: "Smart-Lab-of-the-Future-Powered-by-IoT-min.jpg",
//   },
//   {
//     id: 2,
//     title: "Classrooms and surroundings",
//     content:
//       "The classrooms of Yeti College have an in-built multi-media facility, audio-visual, and computer access. CCTV surveillance covers all the classrooms and most college areas ensuring a safe and secure learning environment.",
//     imgSrc: "classroom.jpeg",
//   },
// ];

// export default function Features() {
//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <section
//       id="features"
//       className="features section py-16"
//       style={{
//         background: "url('/assets/images/ui/bg.png')",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center center",
//       }}>
//       <div
//         className="container mx-auto px-4 section-title text-center mb-12"
//         data-aos="fade-up">
//         <h2 className="text-3xl font-bold">Features</h2>
//       </div>

//       <div className="container mx-auto px-4">
//         {/* Tabs */}
//         <div
//           className="flex justify-center mb-8"
//           data-aos="fade-up"
//           data-aos-delay="100">
//           <ul className="flex space-x-4 border-b">
//             {featuresData.map((feature, index) => (
//               <li key={feature.id} className="nav-item">
//                 <button
//                   onClick={() => setActiveTab(index)}
//                   className={`py-2 px-4 font-semibold ${
//                     activeTab === index
//                       ? "border-b-2 border-[#B21237] text-[#B21237]"
//                       : "text-gray-600 hover:text-[#B21237]"
//                   }`}>
//                   {feature.title}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Tab content */}
//         <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
//           {featuresData.map((feature, index) => (
//             <div
//               key={feature.id}
//               className={`tab-pane fade ${
//                 activeTab === index ? "block" : "hidden"
//               }`}>
//               <div className="flex flex-col lg:flex-row items-center gap-8">
//                 <div className="lg:w-1/2 order-2 lg:order-1 flex flex-col justify-center">
//                   <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
//                   <p className="italic text-gray-700">{feature.content}</p>
//                 </div>
//                 <div className="lg:w-1/2 order-1 lg:order-2 text-center">
//                   <Image
//                     src={feature.imgSrc}
//                     alt={feature.title}
//                     width={600}
//                     height={400}
//                     className="rounded-lg object-cover w-full h-auto"
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";

const featuresData = [
  {
    id: 1,
    title: "Computer lab and Internet",
    content:
      "The college runs professional business programs based on efficient learning modules. Most BA-HM (BHM), MBA, and BCA curricula require computer support. To meet this need, the college has ensured the availability of a sophisticated computer lab equipped with branded computers, all connected to the Internet through a dedicated 100/100 Mbps lease line serving the needs of 400 students at a time.",
    imgSrc: "Smart-Lab-of-the-Future-Powered-by-IoT-min.jpg",
  },
  {
    id: 2,
    title: "Classrooms and surroundings",
    content:
      "The classrooms of Yeti College have an in-built multi-media facility, audio-visual, and computer access. CCTV surveillance covers all the classrooms and most college areas ensuring a safe and secure learning environment.",
    imgSrc: "classroom.jpeg",
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="features"
      className="py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/ui/bg.png')" }}>
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl font-bold">Features</h2>
      </div>

      {/* Tabs */}
      <div className="container mx-auto px-4 flex justify-center mb-8">
        <ul className="flex space-x-4">
          {featuresData.map((feature, index) => (
            <li key={feature.id}>
              <button
                onClick={() => setActiveTab(index)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300
                  ${
                    activeTab === index
                      ? "bg-[#B21237] text-white"
                      : "bg-white text-gray-700 hover:bg-[#B21237] hover:text-white"
                  }`}>
                {feature.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto px-4">
        {featuresData.map((feature, index) => (
          <div
            key={feature.id}
            className={`${
              activeTab === index ? "block" : "hidden"
            } transition duration-500`}>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Text */}
              <div className="lg:w-1/2 order-2 lg:order-1 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 relative inline-block pb-2">
                  {feature.title}
                  <span className="absolute bottom-0 left-0 w-16 h-1 bg-[#B21237] rounded-full"></span>
                </h3>
                <p className="italic text-gray-700">{feature.content}</p>
              </div>

              {/* Image */}
              <div className="lg:w-1/2 order-1 lg:order-2 text-center">
                <Image
                  src={feature.imgSrc}
                  alt={feature.title}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
