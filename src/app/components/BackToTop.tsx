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
      className={`fixed bottom-0 right-0 bg-green-950 text-green-300 bg-opacity-75 rounded  mr-4 mb-11 z-50 items-center text-xs flex gap-2 ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <ChevronUp size={40} />
    </button>
  )
}