import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is DevFest?",
      answer:
        "DevFest is a global event organized by Google Developer Groups (GDGs) to connect developers, share knowledge, and learn from each other.",
    },
    {
      question: "What are GDGs?",
      answer:
        "GDGs (Google Developer Groups) are communities of developers who share a passion for Google technology and meet regularly to collaborate and learn.",
    },
    {
      question: "Who can register for DevFest?",
      answer:
        "Anyone with an interest in technology and development can register for DevFest, regardless of skill level.",
    },
    {
      question: "Is it mandatory to register to participate in the event?",
      answer:
        "Yes, registration is required to ensure your spot at the event and to receive updates.",
    },
    {
      question: "I’m a beginner in programming. Can I still register?",
      answer:
        "Absolutely! DevFest welcomes participants of all levels, including beginners.",
    },
    {
      question: "What will attendees get by participating in the event?",
      answer:
        "Attendees will gain knowledge, network with peers, and may have access to workshops, speaker sessions, and more.",
    },
    {
      question: "How can I become a member of GDG?",
      answer:
        "You can join a local GDG chapter in your area. Visit the official GDG website to find your nearest community.",
    },
    {
      question: "How can I communicate my queries?",
      answer:
        "You can reach out via email or through the event’s official contact channels.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto text-center p-4">
      <h2 className="text-4xl font-bold">Frequently asked questions</h2>
      <p className="mt-2">Need Answers? Everything you need to know</p>
      <div className="mt-6 space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              className="w-full flex justify-between items-center bg-gray-100 text-black py-4 px-4 text-left text-lg cursor-pointer transition-all duration-300 hover:bg-blue-600 hover:text-white"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{activeIndex === index ? "-" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className="px-4 py-3 text-left bg-gray-100">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
