// components/FAQSection.js
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// FAQ Data
const faqs = [
  {
    question: "What programming languages will I learn?",
    answer:
      "Our courses cover popular languages including JavaScript, Python, React, and Node.js. Each course is designed to take you from basics to advanced concepts with practical projects.",
  },
  {
    question: "Do I need prior coding experience?",
    answer:
      "No prior experience is needed for our beginner courses. We have courses for all skill levels, from complete beginners to advanced developers looking to expand their skills.",
  },
  {
    question: "How long does each course take to complete?",
    answer:
      "Course duration varies, but most courses can be completed in 8-12 weeks with 5-10 hours of study per week. You can learn at your own pace, and lifetime access means you can revisit content anytime.",
  },
  {
    question: "Is there a certificate upon completion?",
    answer:
      "Yes, you'll receive a verified certificate of completion for each course you finish. Our certificates are recognized by many employers and can be shared on LinkedIn.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We provide comprehensive support including 24/7 access to our community forum, weekly live Q&A sessions, and direct messaging with course instructors.",
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div className="border-b border-blue-100" initial={false}>
      <motion.button
        className="w-full py-6 flex justify-between items-center gap-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-left text-lg font-semibold">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <svg
            className="w-6 h-6 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <motion.div
              className="pb-6 text-gray-600"
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {answer}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQSection() {
  return (
    <section className="py-20 bg-gray-50">
      <motion.div
        className="max-w-3xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our coding courses
          </p>
        </motion.div>

        <motion.div
          className="space-y-0 divide-y divide-blue-100 border-t border-blue-100"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <FAQItem question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
