import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Home1 from './Home1.jpg'; // Fallback image

const courses = [
  { title: 'Frontend Web Development', desc: 'Learn HTML, CSS, JavaScript, and popular UI libraries. Build responsive, interactive websites. Practice real-world frontend projects.', img: Home1, duration: '3 Months' },
  { title: 'React JS Masterclass', desc: 'Understand React core concepts like hooks, components, props, and state. Build SPAs with routing and API integration. Project-based learning.', img: Home1, duration: '3 Months' },
  { title: 'Next JS Bootcamp', desc: 'Master server-side rendering with Next.js. Learn routing, API routes, dynamic pages. Build production-ready apps using React + Next.js.', img: Home1, duration: '3 Months' },
  { title: 'Angular Framework Essentials', desc: 'Learn Angular structure, components, and services. Use RxJS for state and HTTP handling. Build scalable enterprise-level applications.', img: Home1, duration: '3 Months' },
  { title: 'Backend Development Course', desc: 'Cover Node.js, Express, REST APIs, and authentication. Build server-side logic and connect to databases. Secure backend implementation.', img: Home1, duration: '3 Months' },
  { title: 'PHP Programming Course', desc: 'Understand PHP fundamentals and syntax. Handle forms, sessions, and dynamic content. Integrate PHP with MySQL databases.', img: Home1, duration: '3 Months' },
  { title: 'Database Management', desc: 'Master SQL for MySQL and basics of MongoDB. Learn data modeling, relationships, and database optimization. Build secure data-driven apps.', img: Home1, duration: '2 Months' },
  { title: 'Laravel Framework', desc: 'Work with MVC architecture and Blade templates. Build RESTful APIs and admin dashboards. Learn routing, middleware, and authentication.', img: Home1, duration: '3 Months' },
  { title: 'Symfony Development', desc: 'Explore Symfony bundles, components, and environment. Build structured, testable, and scalable PHP applications. Enterprise-level skills.', img: Home1, duration: '3 Months' },
  { title: 'WordPress Website Design', desc: 'Create websites using WordPress themes and plugins. Customize pages with Elementor. Learn blogging, SEO, and basic eCommerce setup.', img: Home1, duration: '2 Months' },
  { title: 'Graphic Design Fundamentals', desc: 'Use tools like Adobe Photoshop and Illustrator. Design logos, social media posts, and marketing banners. Develop creative skills.', img: Home1, duration: '3 Months' },
  { title: 'SEO & Google Ads', desc: 'Improve website rankings using SEO best practices. Run ad campaigns using Google Ads. Understand targeting, keywords, and analytics.', img: Home1, duration: '3 Months' },
];

const Courses = () => {
  const [current, setCurrent] = useState(0);
  const total = courses.length;

  const nextSlide = () => setCurrent((current + 1) % total);
  const prevSlide = () => setCurrent((current - 1 + total) % total);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto slide every 5 seconds
    return () => clearInterval(interval);
  }, [current]);

  const shortTitle = (title) => title.split(' ').slice(0, 2).join(' ');

  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">

      {/* Hero Section with Split Layout */}
      <section className="relative w-full px-4 md:px-20 py-20 bg-gradient-to-br from-[#016fbe] via-[#0483e4] to-[#025fa0] text-white">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: `url(${Home1})` }}></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left space-y-10 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl font-extrabold leading-tight">Explore Our Courses</h1>
            <p className="text-lg leading-relaxed max-w-xl">
              NextIn offers a wide range of professional courses designed to equip you with cutting-edge tech skills and real-world experience.
            </p>
          </div>

          {/* Slider on Right Side (Content Only) */}
          <div className="relative w-full md:w-1/2">
            <button onClick={prevSlide} className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-[#016fbe] text-white p-2 rounded-full shadow-lg z-20">
              <ChevronLeft size={24} />
            </button>

            <div className="text-white rounded-xl overflow-hidden shadow-lg flex flex-col items-center text-center p-6">
              <h3 className="text-xl font-bold mb-1">{courses[current].title}</h3>
              <span className="text-xs font-medium text-[#016fbe] mb-1">Duration: {courses[current].duration}</span>
              <p className="text-sm leading-relaxed">{courses[current].desc}</p>
            </div>

            <button onClick={nextSlide} className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-[#016fbe] text-white p-2 rounded-full shadow-lg z-20">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Course Cards Grid */}
      <section className="py-16 px-4 md:px-20">
        <h2 className="text-4xl font-bold text-[#016fbe] text-center mb-10">Our Popular Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-transparent hover:border-[#016fbe] shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-6 flex flex-col gap-1">
                <h3 className="text-xl font-bold">{shortTitle(course.title)}</h3>
                <span className="text-xs font-medium text-[#016fbe]">Duration: {course.duration}</span>
                <p className="text-sm leading-relaxed mt-1">{course.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Courses;
