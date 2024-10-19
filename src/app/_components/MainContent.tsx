import React from "react";
import Image from "next/image";

const MainContentSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Form Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4">
          Comprehensive Training and Consulting Solutions Tailored to Your Needs
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Work Email"
            className="border p-2 rounded"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Company"
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Job Title"
            className="border p-2 rounded"
          />
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 md:col-span-2">
            Get Started
          </button>
        </form>
      </div>

      {/* Professional Development Programs */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          Professional Development Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <Image
              src="https://via.placeholder.com/64" // Ganti dengan gambar relevan
              width={64}
              height={64}
              alt="Leadership icon"
              className="mr-4"
            />
            <div>
              <h3 className="font-bold mb-2">Leadership Development</h3>
              <p className="text-gray-600">
                Empower your leaders with essential skills for success in
                today's dynamic business environment.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <Image
              src="https://via.placeholder.com/64" // Ganti dengan gambar relevan
              width={64}
              height={64}
              alt="Communication icon"
              className="mr-4"
            />
            <div>
              <h3 className="font-bold mb-2">Communication Skills</h3>
              <p className="text-gray-600">
                Enhance team collaboration and client relations through
                effective communication techniques.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Programs to Elevate Your Workplace */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          Programs to Elevate Your Workplace
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border p-4 rounded-lg">
            <h3 className="font-bold mb-2">Diversity and Inclusion</h3>
            <p className="text-gray-600">
              Foster a more inclusive workplace culture and leverage diverse
              perspectives for innovation.
            </p>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-bold mb-2">Change Management</h3>
            <p className="text-gray-600">
              Navigate organizational transitions smoothly with proven change
              management strategies.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-gray-100 p-6 rounded-lg mb-12">
        <h2 className="text-2xl font-bold mb-4">
          Driving Excellence Through Training & Consulting
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600">160+</p>
            <p className="text-gray-600">Satisfied Clients</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600">35+</p>
            <p className="text-gray-600">Expert Trainers</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600">95%</p>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Testimonials and Feedback</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
              <div className="flex items-center mb-4">
                <Image
                  src="https://via.placeholder.com/40" // Ganti dengan gambar relevan
                  width={40}
                  height={40}
                  alt={`Testimonial ${index}`}
                  className="rounded-full mr-3"
                />
                <div>
                  <p className="font-bold">John Doe</p>
                  <p className="text-sm text-gray-600">CEO, Company Inc.</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The training program exceeded our expectations. Our team's
                productivity has significantly improved."
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready for Targeted Consulting to Improve Your Team?
        </h2>
        <button className="bg-white text-blue-600 py-2 px-6 rounded-full font-bold hover:bg-gray-100 transition duration-300">
          Schedule Your Consultation
        </button>
      </div>
    </div>
  );
};

export default MainContentSection;
