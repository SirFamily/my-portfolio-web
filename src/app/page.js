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
          <h2 className={`${kranky.className} text-5xl mb-4`}>Service</h2>
          <div className={`${indieFlower.className} text-4xl mb-8`}>
            <span className={`${indieFlower.className} transition-all ease-in-out duration-700 hover:text-[#DEC800] hover:text-5xl cursor-pointer`}>
              Full-Stack Web Development ,
            </span>
            <span className={`${indieFlower.className} transition-all ease-in-out duration-700 hover:text-[#DEC800] hover:text-5xl cursor-pointer`}>
              Frontend Development ,
            </span>
            <span className={`${indieFlower.className} transition-all ease-in-out duration-700 hover:text-[#DEC800] hover:text-5xl cursor-pointer`}>
              Backend Development ,
            </span>
            <span className={`${indieFlower.className} transition-all ease-in-out duration-700 hover:text-[#DEC800] hover:text-5xl cursor-pointer`}>
              Booking & Admin Systems ,
            </span>
            <span className={`${indieFlower.className} transition-all ease-in-out duration-700 hover:text-[#DEC800] hover:text-5xl cursor-pointer`}>
              E-commerce Development ,
            </span>
            <span className={`${indieFlower.className} transition-all ease-in-out duration-700 hover:text-[#DEC800] hover:text-5xl cursor-pointer`}>
              SEO & Performance Optimization ,
            </span>
            <span className={`${indieFlower.className} transition-all ease-in-out duration-700 hover:text-[#DEC800] hover:text-5xl cursor-pointer`}>
              Web Hosting & Deployment ,
            </span>
            <span className={`${indieFlower.className} transition-all ease-in-out duration-700 hover:text-[#DEC800] hover:text-5xl cursor-pointer`}>
              1-on-1 Tutoring & Web Consulting ,
            </span>
            <span className={`${indieFlower.className} transition-all ease-in-out duration-700 hover:text-[#DEC800] hover:text-5xl cursor-pointer`}>
              Website Maintenance & Updates
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
