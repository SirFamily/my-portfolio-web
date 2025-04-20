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
    <div className="flex flex-col items-center bg-[#FCFDF8] ">
      <Navbar />
      <div className="flex gap-[10px] items-center justify-center min-h-screen">
        <div className="flex flex-col w-[546px]">
          <div className={`${jacquesFrancois.className} text-8xl`}>Hi</div>
          <div className={`${jacquesFrancois.className} text-5xl`}>
            I'm
          </div>
          <div className={`${jacquesFrancois.className} text-5xl mb-4`}>
            Thiraphat Chonlathep
          </div>
          <div className={`${indieFlower.className} text-base`}>
            Welcome to My Website!
          </div>
          <div className={`${indieFlower.className} text-base`}>
            I'm thrilled to have you here to explore my work and projects. Feel free to dive in, and I hope you enjoy the journey as much as I've enjoyed creating it. Wishing you success and inspiration, today and beyond!
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/Dark Grey Simple Taped Photo Morning Couple Instagram Story.png"
            alt="Profile picture"
            width={265}
            height={368}
          />
        </div>
      </div>
    </div>
  );
}
