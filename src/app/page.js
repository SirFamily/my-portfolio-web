import Image from "next/image";
import Navbar from "@/components/nav";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-[#FCFDF8] ">
      <Navbar />
      <div className="flex gap-[10px] items-center justify-center min-h-screen"> 
        <div className="flex flex-col items-center">1</div>
        <div className="flex flex-col items-center">2</div>
         </div>

    </div>
  );
}
