// components/WhyUs.tsx
"use client";

import Image from "next/image";

interface WhyUsItem {
  title: string;
  description: string;
  image: string;
}

const whyUsData: WhyUsItem[] = [
  {
    title: "Choose Excellence",
    description:
      "Our expert faculty, modern facilities, and industry-aligned courses ensure you receive top-tier education that leads to real success.",
    image: "/assets/images/ui/choose-excellence.png",
  },
  {
    title: "Your Future Starts Here",
    description:
      "With diverse programs like ABM, BHM, BTTM, BCA, and MBA, we help you turn your passion into a rewarding profession.",
    image: "/assets/images/ui/start-your-journey.png",
  },
  {
    title: "Start Strong with Us",
    description:
      "Begin your journey with programs that focus on skills, innovation, and global opportunities from day one.",
    image: "/assets/images/ui/be-strong.png",
  },
  {
    title: "The Right Choice",
    description:
      "We prepare you for today’s competitive world with a perfect blend of theory, practice, and personality development.",
    image: "/assets/images/ui/right-choice.png",
  },
];

const WhyUs = () => {
  return (
    <section
      id="services"
      className="services section py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/ui/bg.png')" }}>
      {/* Section Title */}
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Because we combine quality education, practical training, and a
          supportive environment to shape confident, career-ready graduates.
        </p>
      </div>

      {/* Content */}
      <div className="container mx-auto grid md:grid-cols-3 gap-8 items-center">
        {/* Left two items */}
        <div className="flex flex-col gap-10">
          {whyUsData.slice(0, 2).map((item, idx) => (
            <div key={idx} className="text-center md:text-right">
              <Image
                src={item.image}
                alt={item.title}
                width={120}
                height={120}
                className="rounded-full mx-auto md:ml-auto mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="hidden md:flex justify-center">
          <Image
            src="/assets/images/ui/why-us.png"
            alt="Why Us"
            width={250}
            height={250}
            className="rounded-full"
          />
        </div>

        {/* Right two items */}
        <div className="flex flex-col gap-10">
          {whyUsData.slice(2).map((item, idx) => (
            <div key={idx} className="text-center md:text-left">
              <Image
                src={item.image}
                alt={item.title}
                width={120}
                height={120}
                className="rounded-full mx-auto md:mr-auto mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
