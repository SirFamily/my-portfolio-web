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
              src="/Dark Grey Simple Taped Photo Morning Couple Instagram Story.png"
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
              src="/Beige Grey Retro Polaroid Photo Collage Summer Instagram Story.png"
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
    </main>
  );
}
