import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Home1 from './Home1.jpg';
import Angular from './Angular.jpg';
import Frontend from './Frontend.jpg';
import ReactImg from './ReactImg.jpg';
import nextjs from './nextjs.jpg';
import Backend from './Backend.jpg';
import php2 from './php2.jpg';
import DB1 from './DB1.jpg';
import Symfony from './Symfony.jpg';
import laravel from './laravel.jpg';
import SEOImage from './SEOImage.jpg';
import wordpress from './wordpress.png';
import GraphicDesign from './GraphicDesign.jpg';
import digitalMarketing from './digitalMarketing.webp';
import MobileApp from './MobileApp.jpg';
import WebHosting from './WebHosting.jpg';


// ✅ Course list
const courses = [
  {
    title: 'Frontend Web Development',
    desc: 'Learn HTML, CSS, JavaScript, and popular UI libraries. Build responsive, interactive websites. Practice real-world frontend projects.',
    img: Frontend,
    duration: '3 Months',
  },
  {
    title: 'React JS Masterclass',
    desc: 'Understand React core concepts like hooks, components, props, and state. Build SPAs with routing and API integration. Project-based learning.',
    img: ReactImg,
    duration: '3 Months',
  },
  {
    title: 'Next JS Bootcamp',
    desc: 'Master server-side rendering with Next.js. Learn routing, API routes, dynamic pages. Build production-ready apps using React + Next.js.',
    img: nextjs,
    duration: '3 Months',
  },
  {
    title: 'Angular Framework Essentials',
    desc: 'Learn Angular structure, components, and services. Use RxJS for state and HTTP handling. Build scalable enterprise-level applications.',
    img: Angular,
    duration: '3 Months',
  },
  {
    title: 'Backend Development Course',
    desc: 'Cover Node.js, Express, REST APIs, and authentication. Build server-side logic and connect to databases. Secure backend implementation.',
    img: Backend,
    duration: '3 Months',
  },
  {
    title: 'PHP Programming Course',
    desc: 'Understand PHP fundamentals and syntax. Handle forms, sessions, and dynamic content. Integrate PHP with MySQL databases.',
    img: php2,
    duration: '3 Months',
  },
  {
    title: 'Database Management',
    desc: 'Master SQL for MySQL and basics of MongoDB. Learn data modeling, relationships, and database optimization. Build secure data-driven apps.',
    img: DB1,
    duration: '2 Months',
  },
  {
    title: 'Laravel Framework',
    desc: 'Work with MVC architecture and Blade templates. Build RESTful APIs and admin dashboards. Learn routing, middleware, and authentication.',
    img: laravel,
    duration: '3 Months',
  },
  {
    title: 'Symfony Development',
    desc: 'Explore Symfony bundles, components, and environment. Build structured, testable, and scalable PHP applications. Enterprise-level skills.',
    img: Symfony,
    duration: '3 Months',
  },
  {
    title: 'WordPress Website Design',
    desc: 'Create websites using WordPress themes and plugins. Customize pages with Elementor. Learn blogging, SEO, and basic eCommerce setup.',
    img: wordpress,
    duration: '2 Months',
  },
  {
    title: 'Graphic Design Fundamentals',
    desc: 'Use tools like Adobe Photoshop and Illustrator. Design logos, social media posts, and marketing banners. Develop creative skills.',
    img: GraphicDesign,
    duration: '3 Months',
  },
  {
    title: 'SEO & Google Ads',
    desc: 'Improve website rankings using SEO best practices. Run ad campaigns using Google Ads. Understand targeting, keywords, and analytics.',
    img: SEOImage,
    duration: '3 Months',
  },
  {
    title: 'Web Hosting ',
    desc: 'Learn domain registration, DNS setup, and cPanel essentials. Host static and dynamic websites with FTP and file manager. Manage databases, emails, and SSL certificates.',
    img: WebHosting,
    duration: '2 Months',
  },
  {
    title: 'Digital Marketing Mastery',
    desc: 'Master social media marketing, email campaigns, and content strategy. Learn tools like Google Analytics and Meta Ads Manager. Plan, execute, and optimize marketing funnels.',
    img: digitalMarketing,
    duration: '2 Months',
  },
  {
    title: 'Mobile App Development',
    desc: 'Build Android and iOS apps using React Native or Flutter. Learn UI design, navigation, API integration, and deployment. Gain full-stack mobile development experience.',
    img: MobileApp,
    duration: '3 Months',
  },
];

// ✅ Helper function
const getFirstThreeWords = (title) => {
  const words = title.trim().split(/\s+/);
  return words.length > 3 ? words.slice(0, 3).join(' ') + '...' : title;
};

const Courses = () => {
  const [current, setCurrent] = useState(0);
  const total = courses.length;

  const nextSlide = () => setCurrent((current + 1) % total);
  const prevSlide = () => setCurrent((current - 1 + total) % total);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full px-4 md:px-20 py-20 bg-gradient-to-br from-[#016fbe] via-[#0483e4] to-[#025fa0] text-white">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${Home1})` }}
        ></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left space-y-10 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl font-extrabold leading-tight">Explore Our Courses</h1>
            <p className="text-lg leading-relaxed max-w-xl">
              NextIn offers a wide range of professional courses designed to equip you with cutting-edge tech skills and real-world experience.
            </p>
          </div>

          {/* Slider Section */}
          <div className="relative w-full md:w-1/2">
            <button
              onClick={prevSlide}
              className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-[#016fbe] text-white p-2 rounded-full shadow-lg z-20"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="text-white rounded-xl overflow-hidden shadow-lg flex flex-col items-center text-center p-6">
              <h3 className="text-xl font-bold mb-1">{courses[current].title}</h3>
              <span className="text-xs font-medium text-white mb-1">Duration: {courses[current].duration}</span>
              <p className="text-sm leading-relaxed">{courses[current].desc}</p>
            </div>

            <button
              onClick={nextSlide}
              className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-[#016fbe] text-white p-2 rounded-full shadow-lg z-20"
            >
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
              className="bg-white rounded-xl border border-transparent hover:border-[#016fbe] shadow-md hover:shadow-xl transition-all transform hover:scale-105"
            >
              <img
                src={course.img}
                alt={course.title}
                loading="lazy"
                onError={(e) => (e.target.src = Home1)}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-6 flex flex-col gap-2 text-left">
                <h3 className="text-lg font-bold">{getFirstThreeWords(course.title)}</h3>
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
