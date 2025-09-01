"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react"; // or use Heroicons if you prefer

// FAQ Data
const faqData = [
  {
    id: 1,
    question: "What programs and courses does the college offer?",
    answer:
      "Our college offers undergraduate, postgraduate, and diploma programs across various fields, including arts, science, commerce, engineering, management, and more. Visit the [Programs page] for a complete list.",
  },
  {
    id: 2,
    question: "What are the eligibility criteria for admission?",
    answer:
      "Eligibility criteria vary depending on the program. Generally, undergraduate programs require completion of high school, while postgraduate programs require a bachelor's degree in a relevant field. Check the [Admissions page] for detailed requirements.",
  },
  {
    id: 3,
    question: "Does the college offer scholarships or financial aid?",
    answer:
      "Yes, we provide scholarships based on academic performance, financial need, and other criteria. Learn more about eligibility and application procedures on the [Scholarships page].",
  },
  {
    id: 4,
    question: "How can I apply for admission?",
    answer:
      "You can apply online through our [Admission Portal] or submit a physical application form at the college's admission office. Visit the [Admissions Process page] for step-by-step guidance.",
  },
  {
    id: 5,
    question: "What are the campus facilities available?",
    answer:
      "Our campus includes a library, laboratories, sports facilities, hostels, a cafeteria, and student recreation areas. Explore the [Campus Facilities page] for a virtual tour.",
  },
];

export default function FaqSection() {
  const [activeId, setActiveId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Section */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold mb-4">
              Have a question? Check out the FAQ
            </h2>
            <p className="text-gray-600">
              Here are some commonly asked questions and their answers to help
              you out.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {faqData.map((faq) => (
                <div
                  key={faq.id}
                  className={`border rounded-lg p-4 cursor-pointer transition ${
                    activeId === faq.id ? "bg-white shadow-md" : "bg-gray-100"
                  }`}
                  onClick={() => toggleFaq(faq.id)}>
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">{faq.question}</h3>
                    <ChevronRight
                      className={`w-5 h-5 transform transition-transform ${
                        activeId === faq.id ? "rotate-90 text-[#B21237]" : ""
                      }`}
                    />
                  </div>
                  {activeId === faq.id && (
                    <div className="mt-2 text-gray-700">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
