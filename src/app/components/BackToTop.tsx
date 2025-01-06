'use client'

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button
      className={`
        fixed bottom-0 shadow-md right-0 bg-green-950 text-green-300 bg-opacity-75 rounded 
        transition-opacity ease-in-out delay-150 duration-300 mr-4 mb-11 z-50 items-center 
        text-xs flex gap-2 ${isVisible ? 'opacity-100 z-50' : 'opacity-0 -z-10'}`
      }
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-live="polite"
    >
      <ChevronUp size={40} />
    </button>
  )
}