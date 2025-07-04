'use client';

import { useEffect, useState } from "react";
import { LogoSection } from "@/_components/atoms/logo/LogoSection";
import { Navbar } from "@/_components/atoms/navbar/Navbar";
import { PrimaryButton } from "@/_components/atoms/buttons/Buttons";
import { ClerkButtons } from "@/_components/atoms/buttons/ClerkButtons";

export const MainHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   let ticking = false;

  //   const handleScroll = () => {
  //     if (!ticking) {
  //       window.requestAnimationFrame(() => {
  //         setScrolled(window.scrollY > 50);
  //         ticking = false;
  //       });
  //       ticking = true;
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const baseClass = "fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 py-2 will-change-transform border-b-[1px] border-gray-100 border-opacity-0 backdrop-blur-[24px] bg-black/10 z-10 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.2),_0px_2px_8px_0px_rgba(0,0,0,0.16)]";
  const widthClass = scrolled ? "w-[50%]" : "w-[100%]";
  const effectClass = scrolled
  ? "px-[30px] backdrop-blur-[24px] rounded-[40px] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.2),_0px_2px_8px_0px_rgba(0,0,0,0.16)] origin-center scale-[1.02] transform-gpu opacity-100"
  : "transform-gpu opacity-90";

  return (
    <header className={`${baseClass} ${widthClass} ${effectClass}`}>
      <div className="container flex justify-between gap-4 items-center">
        <LogoSection />
        <div className="menusec"><Navbar /></div>
        <div className="clearkbtns min-w-36">
          <ClerkButtons />
        </div>
      </div>
    </header>
  );
};
