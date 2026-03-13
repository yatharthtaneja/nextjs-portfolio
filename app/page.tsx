import Image from "next/image";
import ProductCard from "./components/ProductCard";
import FloatingImage from './components/FloatingImage';
import InteractiveName from './components/InteractiveName';
import OverlappingTitle from "./components/OverlappingTitle";
import RotatingTagline from "./components/Rotatingtagline";
export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center purplebackground p-8">
    {/* <div className="absolute inset-0  border-4 border-purple-700 z-0" />
    <div className="absolute inset-2  border-4 border-[#AB4967] z-10" /> */}
      {/* This container acts as our canvas for absolute positioning */}
      <div className="relative w-full max-w-5xl h-[600px] bg-[#E6E6FA] custom-black  double-border ">
        {/* --- The Name --- */}
        <div className="absolute top-2/12 right-4 z-10">
          {/* <div className="text-center text-lg tracking-wider maroontext font-family-hover-three">CS + Design</di> */}
          <div className="text-8xl leading-19">
            <InteractiveName name="YATH" />
            <InteractiveName name="ARTH"   
            colorIndexes={{
                  0: "purplebackground", // A
                  1: "purplebackground", // R
                  2: "purplebackground", // T
                }} 
              />
          </div>
          <div className="text-center text-4xl tracking-wider maroontext font-family-hover-three">
            UX Researcher
          </div>
        </div>
          <OverlappingTitle
            text="CS + Design"
            sizeClass="text-3xl"
            positionClass="left-11/12 top-[16%]"
            rotationClass="rotate-[8deg]"
          />
          <OverlappingTitle
            text="Gen-AI"
            sizeClass="text-3xl"
            positionClass="right-2/12 top-[18%]"
            rotationClass="rotate-[-8deg]"
          />

        {/* --- The Floating Images --- */}
        {/* Adjust top/left/right/bottom and width (w-XX) values to match your design */}
        <FloatingImage
          imageUrl="/images/stamp-me.png"
          alt="My face"
          // annotation="About Me"
          className="bottom-6 right-5  w-55"
          animationDelay={0.1}
          initialRotation={-5}
        />
        <FloatingImage
          imageUrl="/images/stamp-starry-night.svg"
          alt="Starry Night"
          // annotation="Art & Hobbies"
          className="top-3 left-11 w-36"
          animationDelay={0.2}
          initialRotation={0}
        />
        <FloatingImage
          imageUrl="/images/stamp-delhi.svg"
          alt="India Gate"
          // annotation="From New Delhi"
          className="top-4 left-45 w-35"
          animationDelay={0.6}
          initialRotation={-3}
        />
        <RotatingTagline />

      </div>
    </main>
  );
}
