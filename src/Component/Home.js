import React from 'react';
import Home1 from './Home1.jpg';  
import courseimg3new from './courseimg3new.jpeg';  
import Courseimg4 from './Courseimg4.jpeg';  
import courseimg1 from './courseimg1.jpeg';  
import Courseimg2 from './Courseimg2.webp'; 
import AppDev1 from './AppDev1.jpeg'; 
import Webdev from './Webdev.jpeg'; 
import seo1 from './seo1.jpeg'; 
import GameDev from './GameDev.jpeg'; 

import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi'; 

const Home = () => (
  <div className="bg-white text-gray-800 overflow-x-hidden">
    
    {/* Hero Section */}
    <section className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-20 py-16 md:py-20">
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#016fbe]">
          Empower Your Business with Cutting‑Edge Solutions
        </h1>
        <p className="text-lg font-semibold uppercase text-[#016fbe]">
          Your Complete IT Partner
        </p>
        <p className="text-gray-700">
          We specialize in delivering customized digital solutions through a versatile and hybrid working model — from idea to launch.
        </p>
        <button className="mt-4 bg-[#016fbe] text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition">
          Explore Our Services
        </button>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0">
        <img src={Home1} alt="Hero" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
    </section>

    {/* Courses Section */}
<section className="py-16 px-4 sm:px-6 md:px-20 bg-gray-100">
  <h2 className="text-3xl font-bold text-center text-[#016fbe] mb-10">Our Courses</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
    {/* Course 1 */}
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition text-center flex flex-col h-full">
      <img src={courseimg1} alt="Frontend" className="mb-4 rounded h-40 w-full object-cover" />
      <h3 className="text-lg font-semibold text-[#016fbe] mb-2">Frontend Development</h3>
      <p className="text-gray-700 text-sm">
        Learn HTML, CSS, and React to build professional websites with responsive UI.
      </p>
    </div>

    {/* Course 2 */}
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition text-center flex flex-col h-full">
      <img src={Courseimg2} alt="Backend" className="mb-4 rounded h-40 w-full object-cover" />
      <h3 className="text-lg font-semibold text-[#016fbe] mb-2">Backend Development</h3>
      <p className="text-gray-700 text-sm">
        Master Node.js, APIs, and databases to create secure and scalable systems.
      </p>
    </div>

    {/* Course 3 */}
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition text-center flex flex-col h-full">
      <img src={courseimg3new} alt="Full Stack" className="mb-4 rounded h-40 w-full object-cover" />
      <h3 className="text-lg font-semibold text-[#016fbe] mb-2">Full Stack Development</h3>
      <p className="text-gray-700 text-sm">
        Combine frontend and backend skills to become a complete web developer.
      </p>
    </div>

    {/* Course 4 */}
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition text-center flex flex-col h-full">
      <img src={Courseimg4} alt="SEO" className="mb-4 rounded h-40 w-full object-cover" />
      <h3 className="text-lg font-semibold text-[#016fbe] mb-2">SEO & Google Ads</h3>
      <p className="text-gray-700 text-sm">
        Optimize search visibility and run effective ad campaigns for online growth.
      </p>
    </div>
  </div>
</section>


    {/* Services Section */}
    {/* Services Section */}
<section className="bg-gray-100 py-16 px-4 sm:px-6 md:px-20">
  <h2 className="text-3xl font-bold text-center text-[#016fbe] mb-10">Our Services</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

    {/* Service 1 */}
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition text-center flex flex-col h-full">
      <img src={Webdev} alt="Web Development" className="h-40 w-full object-cover rounded mb-4" />
      <h3 className="text-lg font-semibold text-[#016fbe] mb-2">Web Development</h3>
      <p className="text-gray-700 text-sm">
        Custom websites with responsive design, SEO optimization, and modern UI/UX.
      </p>
    </div>

    {/* Service 2 */}
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition text-center flex flex-col h-full">
      <img src={AppDev1} alt="App Development" className="h-40 w-full object-cover rounded mb-4" />
      <h3 className="text-lg font-semibold text-[#016fbe] mb-2">App Development</h3>
      <p className="text-gray-700 text-sm">
        Build Android and iOS apps with seamless performance and cross-platform support.
      </p>
    </div>

    {/* Service 3 */}
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition text-center flex flex-col h-full">
      <img src={GameDev} alt="Game Development" className="h-40 w-full object-cover rounded mb-4" />
      <h3 className="text-lg font-semibold text-[#016fbe] mb-2">Game Development</h3>
      <p className="text-gray-700 text-sm">
        We create 2D/3D mobile and desktop games using Unity and interactive design tools.
      </p>
    </div>

    {/* Service 4 */}
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition text-center flex flex-col h-full">
      <img src={seo1} alt="SEO & Google Ads" className="h-40 w-full object-cover rounded mb-4" />
      <h3 className="text-lg font-semibold text-[#016fbe] mb-2">SEO & Google Ads</h3>
      <p className="text-gray-700 text-sm">
        Increase traffic and conversions with targeted keywords and ad campaigns.
      </p>
    </div>

  </div>
</section>


    {/* Why Choose Section */}
    <section className="bg-white py-16 px-4 sm:px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center text-[#016fbe] mb-8">Why Partner With NextIn?</h2>
      <ul className="max-w-4xl mx-auto space-y-4 list-disc list-inside text-gray-700">
        {[
          'Flexible hiring — from individuals to full teams.',
          'Pay hourly or per project, no long contracts.',
          'Post-launch support with 45-day warranty.',
          'Full-stack dev for web, mobile, IT support.',
          'Dedicated project manager from start to end.'
        ].map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </section>

    {/* Register Now Section */}
    <section className="py-16 px-4 sm:px-6 md:px-20 bg-gradient-to-r from-white to-[#016fbe]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-gray-800">
          <h2 className="text-4xl font-bold text-[#016fbe]">Register Now</h2>
          <p className="text-lg">
            Enroll in our industry-ready courses and launch your tech career. We’ll contact you after registration!
          </p>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li>Live classes with expert instructors</li>
            <li>Real-world projects & training</li>
            <li>Internship and career assistance</li>
          </ul>
        </div>

        <form className="bg-white p-8 rounded-lg shadow-md space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" placeholder="Your Name" className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#016fbe]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" placeholder="you@example.com" className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#016fbe]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" placeholder="+92 300 1234567" className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#016fbe]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Select Course</label>
            <select className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#016fbe]">
              <option>Frontend Development</option>
              <option>Backend Development</option>
              <option>Full Stack Development</option>
              <option>SEO & Google Ads</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-[#016fbe] text-white py-2 rounded hover:bg-blue-700 transition">
            Submit Registration
          </button>
        </form>
      </div>
    </section>
  </div>
);

export default Home;
