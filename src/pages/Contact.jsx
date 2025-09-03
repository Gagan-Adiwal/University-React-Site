import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been submitted successfully!");
    // Here you can integrate with backend or email service like EmailJS
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-blue-700 text-center">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
          Have questions? We’d love to hear from you. Get in touch with us via
          the form below or through our contact details.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-2xl p-8">
            <form className="grid gap-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-2 w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter subject"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="mt-2 w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center bg-white shadow-md rounded-2xl p-8 space-y-6">
            <div className="flex items-center gap-4">
              <MapPin className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold">Address</h3>
                <p className="text-gray-600">New Delhi, India</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="w-8 h-8 text-green-600" />
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="w-8 h-8 text-red-600" />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-600">info@eduverse.edu</p>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="mt-6">
              <iframe
                title="EduVerse Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.938257745049!2d77.21672131492184!3d28.64480098241188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd4d6f57dbeb%3A0x9d46f1c8b4c6c9e!2sNew%20Delhi!5e0!3m2!1sen!2sin!4v1675257850077!5m2!1sen!2sin"
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
                className="rounded-xl border"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
