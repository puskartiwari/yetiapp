"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Contact Info Data
  const contactInfo = [
    {
      title: "Our Location",
      icon: <MapPin size={18} />,
      content: ["Buddhanagar-10, New Baneshwor, Kathmandu"],
    },
    {
      title: "Phone Number",
      icon: <Phone size={18} />,
      content: ["+977-14792063", "9851314471", "9803323042"],
    },
    {
      title: "Email",
      icon: <Mail size={18} />,
      content: ["info@yeticollege.edu.np"],
    },
  ];

  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Contact</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <div className="flex flex-col gap-2 text-gray-700">
                  {item.content.map((line, i) => (
                    <div key={i} className="flex items-center gap-2">
                      {i === 0 && item.icon} {line}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form
            className="bg-white p-6 rounded-2xl shadow-lg space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Form Submitted:", formData);
            }}>
            <h3 className="font-semibold text-lg mb-3">Get In Touch</h3>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg p-3"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg p-3"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border rounded-lg p-3"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              required
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full border rounded-lg p-3"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
