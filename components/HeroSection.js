// components/HeroSection.js
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Master Coding with Expert-Led Courses
              </h1>
              <p className="text-lg md:text-xl text-blue-100">
                Learn programming from industry experts through practical,
                project-based courses designed to take your skills to the next
                level.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/courses"
                  className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition duration-300"
                >
                  Explore Courses
                </Link>
                <Link
                  href="/free-tutorial"
                  className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition duration-300"
                >
                  Free Tutorial
                </Link>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8">
                <div>
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-blue-100">Courses</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">10k+</div>
                  <div className="text-blue-100">Students</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-blue-100">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Right Column - Decorative Code Block */}
            <div className="hidden lg:block">
              <div className="bg-black/20 p-6 rounded-xl backdrop-blur-sm">
                <pre className="text-blue-200 font-mono text-sm">
                  <code>{`function LearnToCode() {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Python"
  ];
  
  return skills.map(skill => 
    masterTechnology(skill)
  );
}

// Your journey starts here
LearnToCode();`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
