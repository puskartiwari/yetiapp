"use client";

import Image from "next/image";

interface MessageData {
  id: number;
  title: string;
  highlight: string;
  studenthighlight: string;
  message: string;
  author: string;
  designation: string;
  image?: string;
}

const messages: MessageData[] = [
  {
    id: 1,
    title: "MESSAGE FROM",
    highlight: "CEO ",
    studenthighlight: " Dear Students,",
    message: `
     
      It is my immense pleasure to welcome you as the best of the best students to Yeti College,
      which is affiliated to the Sripatum University of Thailand; approved and recognized by the
      Ministry of Education, Science and Technology (MOEST), Nepal, where the knowledge and
      skills are simultaneously imparted to make the students capable of standing on their own
      feet in this competitive world of professionals. 

      The educational environment in YETI is unique in comparison to other colleges in Nepal
      in terms of its teaching-learning which has made it possible to produce many achievers.
      Earning while learning has been its strongest educational process that helps its students
      to become financially self-dependent towards their profession at the end of courses.
      
      Our dedicated, passionate, professionally educated and trained faculty members leave no
      stone unturned to educate and train our students to the best of their knowledge to achieve
      their educational and professional objectives.

      I, on behalf of YETI, warmly welcome the parents to visit our college and meet our trained
      counselors for facilitating you to make the appropriate decision for the bright future of
      your children.
      
      Wishing you all the best for a bright and successful career ahead.
    `,
    author: "Sanjay Kumar Jha",
    designation: "Founder, CEO, Yeti Int'l College",
    image: "/principal.jpg", // replace with actual path or keep empty
  },
];

export default function MessageCeo() {
  return (
    <section
      id="services"
      className="relative py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/ui/bg.png')" }}>
      <div className="container mx-auto px-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="grid md:grid-cols-2 gap-10 items-start bg-white/70 rounded-2xl p-8 shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100">
            {/* Left: Message */}
            <div>
              <h1 className="text-2xl font-bold mb-2">
                {msg.title}{" "}
                <span className="text-red-600">{msg.highlight}</span>
              </h1>

              <span className="text-red-600">{msg.studenthighlight}</span>
              <p className="text-gray-700 text-sm   leading-relaxed">
                {msg.message}
              </p>
              <p className="mt-6 font-semibold">
                <span>{msg.author}</span> <br />
                <span className="text-gray-600">{msg.designation}</span>
              </p>
            </div>

            {/* Right: Image */}
            <div className="flex flex-col items-center">
              {msg.image ? (
                <Image
                  src={msg.image}
                  alt={msg.author}
                  width={400}
                  height={400}
                  className="rounded-xl shadow-md object-cover"
                />
              ) : (
                <h1 className="text-xl font-bold text-gray-500">
                  Coming soon...
                </h1>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
