export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white">EduVerse University</h3>
          <p className="mt-3 text-gray-400">
            Building the future of education with technology and innovation.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/courses" className="hover:text-white">Courses</a></li>
            <li><a href="/admission" className="hover:text-white">Admission</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <p className="mt-3">📍 New Delhi, India</p>
          <p>📧 info@eduverse.edu</p>
          <p>📞 +91 98765 43210</p>
        </div>
      </div>
      <p className="text-center text-gray-500 mt-8">
        © {new Date().getFullYear()} EduVerse University. All rights reserved.
      </p>
    </footer>
  );
}
