"use client"
import Image from "next/image";
import Navbar from "@/components/nav";
import { Jacques_Francois_Shadow, Indie_Flower, Kranky } from 'next/font/google';

const jacquesFrancois = Jacques_Francois_Shadow({
  weight: '400',
  subsets: ['latin'],
});

const indieFlower = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
});

const kranky = Kranky({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FCFDF8] px-[66px]">
      <Navbar />

      {/* Hero Section */}
      <section className="flex justify-center items-center min-h-screen">
        <div className="flex gap-8 items-center max-w-7xl">
          <div className="max-w-[546px]">
            <h1 className={`${jacquesFrancois.className} text-8xl mb-2`}>Hi</h1>
            <div className={`${jacquesFrancois.className} text-5xl`}>I'm</div>
            <div className={`${jacquesFrancois.className} text-5xl mb-4`}>
              Thiraphat Chonlathep
            </div>
            <div className={`${indieFlower.className} text-xl mb-2`}>
              Welcome to My Website!
            </div>
            <p className={`${indieFlower.className} text-lg`}>
              I'm thrilled to have you here to explore my work and projects.
              Feel free to dive in, and I hope you enjoy the journey as much
              as I've enjoyed creating it. Wishing you success and inspiration,
              today and beyond!
            </p>
          </div>
          <div>
            <Image
              src="/ProfilePic.png"
              alt="Profile picture"
              width={265}
              height={368}
              className="w-[265px] h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="flex justify-center items-center min-h-screen">
        <div className="flex gap-8 items-center max-w-7xl">
          <div>
            <Image
              src="/ProfilePicThree.png"
              alt="Profile picture"
              width={275}
              height={368}
              className="w-[275px] h-auto"
              priority
            />
          </div>
          <div className="max-w-2xl">
            <h2 className={`${kranky.className} text-5xl mb-4`}>About Me</h2>
            <p className={`${indieFlower.className} text-xl mb-8`}>
              <span className="text-2xl text-[#DEC800]">Thiraphat Chonlathep</span> is
              a Computer Engineering student at Rajamangala University of Technology Isan,
              Khon Kaen Campus. He is passionate about UI/UX design and frontend development,
              with hands-on experience in related tools and technologies. Thiraphat aims to
              create creative and high-quality web development work.
            </p>

            <h2 className={`${kranky.className} text-5xl mb-4`}>Skills&Tools</h2>
            <div className="space-y-2">
              <div className={`${indieFlower.className} text-lg`}>
                <span className="text-2xl text-[#DEC800]">UI/UX Design</span> -
                Figma, Adobe XD, Canva
              </div>
              <div className={`${indieFlower.className} text-lg`}>
                <span className="text-2xl text-[#DEC800]">Frontend Development</span> -
                HTML, CSS, JavaScript, React.js, Next.js
              </div>
              <div className={`${indieFlower.className} text-lg`}>
                <span className="text-2xl text-[#DEC800]">Backend Development</span> -
                Node.js, Express.js, MongoDB
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="flex flex-col justify-center items-center min-h-screen py-16">
        <div className="max-w-7xl w-full">
          <h2 className={`${kranky.className} text-5xl mb-12 text-center`}>Portfolio</h2>
          <p className={`${indieFlower.className} text-lg mb-4 text-center`}>
            Here is a collection of all my work. I hope you enjoy exploring and find inspiration in what I've created.</p>
          {/* Latest Project */}
          <div className="mb-16">
            <h3 className={`${indieFlower.className} text-3xl text-[#DEC800] mb-8`}>Latest Project</h3>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <Image
                  src="/js.png"
                  alt="Latest Project"
                  width={500}
                  height={300}
                  className="rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h4 className={`${indieFlower.className} text-2xl mb-4`}>Project Name</h4>
                  <p className={`${indieFlower.className} text-lg mb-6`}>
                    Detailed description of your latest project. Include the key features,
                    technologies used, and your role in the project.
                  </p>
                  <div className="flex gap-4 mb-6">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">React</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Next.js</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Tailwind</span>
                  </div>
                  <a
                    href="#"
                    className="inline-block bg-[#DEC800] text-white px-6 py-2 rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className={`${indieFlower.className} text-3xl text-[#DEC800] mb-8`}>Other Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card 1 */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <Image
                  src="/js.png"
                  alt="Project 1"
                  width={320}
                  height={200}
                  className="rounded-lg mb-4 w-full object-cover"
                />
                <h4 className={`${indieFlower.className} text-xl mb-3`}>Project Name 1</h4>
                <p className={`${indieFlower.className} text-gray-600 mb-4`}>
                  Brief description of the project and its main features.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="bg-gray-100 px-2 py-1 rounded-full text-sm">React</span>
                  <span className="bg-gray-100 px-2 py-1 rounded-full text-sm">Node.js</span>
                </div>
                <a
                  href="#"
                  className="text-[#DEC800] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more →
                </a>
              </div>

              {/* Project Card 2 */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <Image
                  src="/html.png"
                  alt="Project 2"
                  width={320}
                  height={200}
                  className="rounded-lg mb-4 w-full object-cover"
                />
                <h4 className={`${indieFlower.className} text-xl mb-3`}>Project Name 2</h4>
                <p className={`${indieFlower.className} text-gray-600 mb-4`}>
                  Brief description of the project and its main features.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="bg-gray-100 px-2 py-1 rounded-full text-sm">Next.js</span>
                  <span className="bg-gray-100 px-2 py-1 rounded-full text-sm">MongoDB</span>
                </div>
                <a
                  href="#"
                  className="text-[#DEC800] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more →
                </a>
              </div>

              {/* Project Card 3 */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <Image
                  src="/css.png"
                  alt="Project 3"
                  width={320}
                  height={200}
                  className="rounded-lg mb-4 w-full object-cover"
                />
                <h4 className={`${indieFlower.className} text-xl mb-3`}>Project Name 3</h4>
                <p className={`${indieFlower.className} text-gray-600 mb-4`}>
                  Brief description of the project and its main features.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="bg-gray-100 px-2 py-1 rounded-full text-sm">UI/UX</span>
                  <span className="bg-gray-100 px-2 py-1 rounded-full text-sm">Figma</span>
                </div>
                <a
                  href="#"
                  className="text-[#DEC800] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service section */}
      <section className="flex justify-center items-center min-h-screen">
        <div className="flex gap-8 items-center max-w-7xl">
          <h2 className={`${kranky.className} text-5xl mb-4 pr-4`}>Service</h2>
          <div className={`${indieFlower.className} text-4xl mb-8`}>
            <span className={`${indieFlower.className} transition-all ease-in-out duration-500 hover:text-[#DEC800] hover:text-5xl hover:text-shadow-lg/30 cursor-pointer`}>
              Full-Stack Web Development ,
            </span>
            <span className={`${indieFlower.className} transition-all ease-in-out duration-500 hover:text-[#DEC800] hover:text-5xl hover:text-shadow-lg/30 cursor-pointer`}>
              Frontend Development ,
            </span>
            <span className={`${indieFlower.className} transition-all ease-in-out duration-500 hover:text-[#DEC800] hover:text-5xl hover:text-shadow-lg/30 cursor-pointer`}>
              Backend Development ,
            </span>
            <span className={`${indieFlower.className} transition-all ease-in-out duration-500 hover:text-[#DEC800] hover:text-5xl hover:text-shadow-lg/30 cursor-pointer`}>
              Booking & Admin Systems ,
            </span>
            <span className={`${indieFlower.className} transition-all ease-in-out duration-500 hover:text-[#DEC800] hover:text-5xl hover:text-shadow-lg/30 cursor-pointer`}>
              E-commerce Development ,
            </span>
            <span className={`${indieFlower.className} transition-all ease-in-out duration-500 hover:text-[#DEC800] hover:text-5xl hover:text-shadow-lg/30 cursor-pointer`}>
              SEO & Performance Optimization ,
            </span>
            <span className={`${indieFlower.className} transition-all ease-in-out duration-500 hover:text-[#DEC800] hover:text-5xl hover:text-shadow-lg/30 cursor-pointer`}>
              Web Hosting & Deployment ,
            </span>
            <span className={`${indieFlower.className} transition-all ease-in-out duration-500 hover:text-[#DEC800] hover:text-5xl hover:text-shadow-lg/30 cursor-pointer`}>
              1-on-1 Tutoring & Web Consulting ,
            </span>
            <span className={`${indieFlower.className} transition-all ease-in-out duration-500 hover:text-[#DEC800] hover:text-5xl hover:text-shadow-lg/30 cursor-pointer`}>
              Website Maintenance & Updates
            </span>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="flex justify-center items-center min-h-screen">
        <div className="max-w-7xl w-full">
          <h2 className={`${kranky.className} text-5xl mb-8 text-center`}>Contact Me</h2>
          <div className=" rounded-xl  p-8">
            <div className="flex flex-col md:flex-row gap-12">
              {/* Contact Info */}
              <div className="flex-1">
                <h3 className={`${indieFlower.className} text-3xl text-[#DEC800] mb-6`}>Let's Connect!</h3>
                <p className={`${indieFlower.className} text-lg mb-8`}>
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <svg className="w-6 h-6 text-[#DEC800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:your.email@example.com" className={`${indieFlower.className} text-lg hover:text-[#DEC800]`}>
                      your.email@example.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg className="w-6 h-6 text-[#DEC800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className={`${indieFlower.className} text-lg`}>
                      Khon Kaen, Thailand
                    </span>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="mt-8 flex gap-4">
                  <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-[#DEC800] hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-[#DEC800] hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="flex-1">
                <form className="space-y-6">
                  <div>
                    <label className={`${indieFlower.className} block text-lg mb-2`}>Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#DEC800]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className={`${indieFlower.className} block text-lg mb-2`}>Email</label>
                    <input 
                      type="email" 
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#DEC800]"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className={`${indieFlower.className} block text-lg mb-2`}>Message</label>
                    <textarea 
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#DEC800] min-h-[150px]"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="bg-[#DEC800] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
