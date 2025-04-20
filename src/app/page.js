import Image from "next/image";
import Navbar from "@/components/nav";
import { Jacques_Francois_Shadow, Indie_Flower } from 'next/font/google';

const jacquesFrancois = Jacques_Francois_Shadow({
  weight: '400',
  subsets: ['latin'],
});

const indieFlower = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-[#FCFDF8] px-4 md:px-6 lg:px-8">
      <Navbar />
      <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-10 items-center justify-center min-h-screen w-full max-w-7xl">
        <div className="flex flex-col w-full md:w-[546px] space-y-3 text-center md:text-left">
          <div className={`${jacquesFrancois.className} text-6xl md:text-7xl lg:text-8xl`}>
            Hi
          </div>
          <div className={`${jacquesFrancois.className} text-4xl md:text-5xl`}>
            I'm
          </div>
          <div className={`${jacquesFrancois.className} text-4xl md:text-5xl mb-4`}>
            Thiraphat Chonlathep
          </div>
          <div className={`${indieFlower.className} text-lg md:text-xl`}>
            Welcome to My Website!
          </div>
          <div className={`${indieFlower.className} text-base md:text-lg`}>
            I'm thrilled to have you here to explore my work and projects. Feel free to dive in, and I hope you enjoy the journey as much as I've enjoyed creating it. Wishing you success and inspiration, today and beyond!
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/Dark Grey Simple Taped Photo Morning Couple Instagram Story.png"
            alt="Profile picture"
            width={265}
            height={368}
            className="w-[200px] md:w-[265px] mt-[140px] md:mt-0 h-auto rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
}
