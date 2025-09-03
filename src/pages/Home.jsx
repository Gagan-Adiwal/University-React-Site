import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Laptop, CreditCard } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-0"> {/* Padding top so content is not hidden under navbar */}
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center">
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Welcome to EduVerse University
            </motion.h1>
            <p className="mt-6 text-lg md:text-xl text-gray-200">
              Empowering students with world-class education, online admissions, and seamless learning experiences.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#admission"
                className="px-6 py-3 bg-white text-blue-700 rounded-2xl font-semibold shadow-md hover:bg-gray-100"
              >
                Apply Now
              </a>
              <a
                href="/courses"
                className="px-6 py-3 border border-white rounded-2xl font-semibold hover:bg-white hover:text-blue-700"
              >
                Explore Courses
              </a>
            </div>
          </div>
          <motion.img
            src="https://img.freepik.com/free-photo/low-angle-cheerful-team-students-passed-test-by-preparing-all-together_496169-2336.jpg"
            alt="University Illustration"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 mt-12 md:mt-0 max-h-[400px] object-contain"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose EduVerse?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our university offers top-notch education programs, expert faculty, modern infrastructure, and a global community to help you achieve your dreams.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow rounded-2xl">
              <GraduationCap className="w-12 h-12 text-blue-600 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Expert Faculty</h3>
              <p className="mt-2 text-gray-600">Learn from experienced professors and industry leaders.</p>
            </div>
            <div className="p-6 bg-white shadow rounded-2xl">
              <Laptop className="w-12 h-12 text-indigo-600 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Online Learning</h3>
              <p className="mt-2 text-gray-600">Flexible and interactive online classes for all courses.</p>
            </div>
            <div className="p-6 bg-white shadow rounded-2xl">
              <CreditCard className="w-12 h-12 text-green-600 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Easy Admissions</h3>
              <p className="mt-2 text-gray-600">Apply and pay your admission fees securely with Razorpay.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Our Popular Courses</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Computer Science", "Business Administration", "Data Science"].map(
              (course, index) => (
                <div
                  key={index}
                  className="p-6 border rounded-2xl shadow hover:shadow-lg transition"
                >
                  <BookOpen className="w-12 h-12 text-indigo-600 mx-auto" />
                  <h3 className="mt-4 text-xl font-semibold">{course}</h3>
                  <p className="mt-2 text-gray-600">
                    Learn {course.toLowerCase()} with expert guidance and hands-on projects.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Admission Call to Action */}
      <section
        id="admission"
        className="py-20 bg-gradient-to-r from-indigo-700 to-blue-600 text-white text-center"
      >
        <h2 className="text-3xl font-bold">Admissions Open 2026</h2>
        <p className="mt-4 text-lg text-gray-200">
          Apply online now and secure your spot in our world-class programs.
        </p>
        <a
          href="/admission"
          className="mt-6 inline-block px-8 py-3 bg-white text-blue-700 rounded-2xl font-semibold shadow-md hover:bg-gray-100"
        >
          Start Admission
        </a>
      </section>
    </div>
  );
}
