import React from 'react';
import Home1 from './Home1.jpg';
// import ImgReact from './img-react.jpg';
// import ImgNext from './img-next.jpg';
// import ImgAngular from './img-angular.jpg';
// import ImgBackend from './img-backend.jpg';
// import ImgPHP from './img-php.jpg';
// import ImgDatabase from './img-db.jpg';
// import ImgLaravel from './img-laravel.jpg';
// import ImgSymfony from './img-symfony.jpg';
// import ImgWP from './img-wp.jpg';
// import ImgGraphic from './img-graphic.jpg';
// import ImgSEO from './img-seo.jpg';

const courses = [
  { title: 'Frontend Web Development', desc: 'Learn HTML, CSS, JavaScript, and popular UI libraries. Build responsive, interactive websites. Practice real-world frontend projects.', img: Home1 },
  { title: 'React JS Masterclass', desc: 'Understand React core concepts like hooks, components, props, and state. Build SPAs with routing and API integration. Project-based learning.', img: Home1 },
  { title: 'Next JS Bootcamp', desc: 'Master server-side rendering with Next.js. Learn routing, API routes, dynamic pages. Build production-ready apps using React + Next.js.', img: Home1 },
  { title: 'Angular Framework Essentials', desc: 'Learn Angular structure, components, and services. Use RxJS for state and HTTP handling. Build scalable enterprise-level applications.', img: Home1 },
  { title: 'Backend Development Course', desc: 'Cover Node.js, Express, REST APIs, and authentication. Build server-side logic and connect to databases. Secure backend implementation.', img: Home1 },
  { title: 'PHP Programming Course', desc: 'Understand PHP fundamentals and syntax. Handle forms, sessions, and dynamic content. Integrate PHP with MySQL databases.', img: Home1 },
  { title: 'Database Management', desc: 'Master SQL for MySQL and basics of MongoDB. Learn data modeling, relationships, and database optimization. Build secure data-driven apps.', img: Home1 },
  { title: 'Laravel Framework', desc: 'Work with MVC architecture and Blade templates. Build RESTful APIs and admin dashboards. Learn routing, middleware, and authentication.', img: Home1 },
  { title: 'Symfony Development', desc: 'Explore Symfony bundles, components, and environment. Build structured, testable, and scalable PHP applications. Enterprise-level skills.', img: Home1 },
  { title: 'WordPress Website Design', desc: 'Create websites using WordPress themes and plugins. Customize pages with Elementor. Learn blogging, SEO, and basic eCommerce setup.', img: Home1 },
  { title: 'Graphic Design Fundamentals', desc: 'Use tools like Adobe Photoshop and Illustrator. Design logos, social media posts, and marketing banners. Develop creative skills.', img: Home1 },
  { title: 'SEO & Google Ads', desc: 'Improve website rankings using SEO best practices. Run ad campaigns using Google Ads. Understand targeting, keywords, and analytics.', img: Home1 },
];

const Courses = () => {
  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative w-full px-4 md:px-20 py-20 bg-gradient-to-br from-[#016fbe] via-[#0483e4] to-[#025fa0] text-white">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${Home1})` }}
        ></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl font-extrabold leading-tight">Explore Our Courses</h1>
            <p className="text-lg leading-relaxed max-w-lg">
              NextIn offers a wide range of professional courses designed to equip you with cutting-edge tech skills and real-world experience.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={Home1} alt="Courses Hero" className="rounded-lg w-full h-auto shadow-lg" />
          </div>
        </div>
      </section>

      {/* Animated Banner */}
      <section className="py-4 bg-[#016fbe] overflow-hidden">
        <div className="whitespace-nowrap animate-marquee text-white font-semibold text-lg">
          {courses.map((course, index) => (
            <span key={index} className="mx-8">
              {course.title.split(' ').slice(0, 2).join(' ')}
            </span>
          ))}
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-16 px-4 md:px-20">
        <h2 className="text-4xl font-bold text-[#016fbe] text-center mb-10">Our Popular Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {courses.map((course, index) => {
            const shortTitle = course.title.split(' ').slice(0, 2).join(' ');
            return (
              <div
                key={index}
                className="bg-white rounded-xl border shadow-md hover:shadow-xl transition-all hover:bg-gradient-to-br hover:from-[#016fbe] hover:to-[#0480e5] hover:text-white"
              >
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{shortTitle}</h3>
                  <p className="text-sm leading-relaxed line-clamp-3">{course.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Courses;
