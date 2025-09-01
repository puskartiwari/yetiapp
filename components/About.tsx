"use client";

import Image from "next/image";

const aboutData = {
  meta: "MORE ABOUT US",
  title: "Exploring the Top Colleges and Their Impact on Society",
  description: `At Yeti Int'l College, we believe education is the foundation of a successful and fulfilling life. Our college is committed to providing a transformative learning experience that empowers students to excel academically, grow personally, and prepare for a promising future.`,
  features: [
    ["Academic Excellence", "World-Class Facilities", "Vibrant Campus Life"],
    ["Student-Centered Approach", "Global Opportunities"],
  ],
  experience: {
    years: "15+",
    text: "Of experience in education service",
  },
  image: "/about-hero-bg.jpeg", // put inside /public
};

const About = () => {
  return (
    <section
      id="about"
      className="py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.png')" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="text-sm uppercase tracking-wide text-blue-600 font-semibold">
              {aboutData.meta}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              {aboutData.title}
            </h2>
            <p className="text-gray-600 mb-8">{aboutData.description}</p>

            <div className="grid grid-cols-2 gap-6">
              {aboutData.features.map((featureGroup, idx) => (
                <ul key={idx} className="space-y-3">
                  {featureGroup.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-700">
                      <i className="bi bi-check-circle-fill text-blue-600"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={aboutData.image}
                alt="About Us"
                width={600}
                height={400}
                className="rounded-2xl object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-3xl font-bold">
                {aboutData.experience.years}{" "}
                <span className="text-base font-normal">Years</span>
              </h3>
              <p className="text-sm">{aboutData.experience.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
