import { Indie_Flower } from 'next/font/google';
import { TypeAnimation } from 'react-type-animation';

const indieFlower = Indie_Flower({
    weight: '400',
    subsets: ['latin'],
});

export default function Navbar() {
    return (
        <nav className="flex justify-between w-full px-[66px] py-[47px] bg-[#fcfdf8a5] backdrop-blur-sm fixed top-0 left-0  z-50 ">
            <a href="#" className={`${indieFlower.className} hover:underline`}>
            <div>
  <TypeAnimation
    preRenderFirstString={true}
    sequence={[
      1000,
      'Famwork', // initially rendered starting point
      2000,
      'Famwork.dev',
      10000,
        'Thiraphat Chonlathep',
      4000,
    ]}
    speed={70}
    repeat={Infinity}
  />
</div>
            </a>
            {/* <a href="#" className={`${indieFlower.className} hover:underline`}>Famwork.dev</a> */}
            <a href="#" className={`${indieFlower.className} hover:underline`}>Welcome</a>
        </nav>
    );
}