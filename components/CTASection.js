// components/CTASection.js
"use client"; // Required for using framer-motion in Next.js 13+
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      <motion.div
        className="max-w-4xl mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Decorative elements */}
        <motion.div
          className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Main content */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          variants={itemVariants}
        >
          Ready to Start Your Coding Journey?
        </motion.h2>

        <motion.p
          className="text-xl text-blue-100 mb-8"
          variants={itemVariants}
        >
          Join thousands of students who have already transformed their careers
          through our courses.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              href="/get-started"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Get Started Now
            </Link>
          </motion.div>

          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              href="/view-courses"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              View Courses
            </Link>
          </motion.div>
        </motion.div>

        {/* Social proof */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2">
            <motion.div className="text-white" whileHover={{ scale: 1.1 }}>
              ⭐⭐⭐⭐⭐
            </motion.div>
            <span className="text-blue-100">4.9/5 Average Rating</span>
          </div>
          <div className="text-blue-100">
            <span className="font-bold text-white">10,000+</span> Students
            Enrolled
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
