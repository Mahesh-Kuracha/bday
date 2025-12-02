"use client";

import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import LoaderScreen from "@/components/screens/LoaderScreen";
import IntroScreen from "@/components/screens/IntroScreen";
import CakeScreen from "@/components/screens/CakeScreen";
import PhotosScreen from "@/components/screens/PhotosScreen";
import MessageScreen from "@/components/screens/MessageScreen";

export default function HomePage() {
  const [currentScreen, setCurrentScreen] = useState(0);

  // ⬇️ MUSIC PLAYER
  const audioRef = useRef(null);

  const startMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/bdaymusic2.mp3");
      audioRef.current.loop = true; // Keeps music playing
      audioRef.current.volume = 0.5; // (optional)
    }
    audioRef.current.play();
  };

  const screens = [
    <LoaderScreen key="loader" onDone={() => setCurrentScreen(1)} />,

    // ⬇️ When user clicks Start, music will play
    <IntroScreen
      key="intro"
      onNext={() => {
        startMusic();      // <-- START MUSIC HERE
        setCurrentScreen(2);
      }}
    />,

    <CakeScreen key="cake" onNext={() => setCurrentScreen(3)} />,
    <PhotosScreen key="photos" onNext={() => setCurrentScreen(4)} />,
    <MessageScreen key="message" onNext={() => setCurrentScreen(5)} />,
  ];

  return (
    <main className="min-h-screen bg-gradient-to-tr from-rose-950/40 via-black to-rose-950/40 overflow-hidden relative">
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4 md:p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            transition={{ duration: 0.8 }}
            className={`w-full ${
              currentScreen === 4 ? "max-w-7xl" : "max-w-3xl md:max-w-4xl"
            }`}
          >
            {screens[currentScreen]}
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="fixed bottom-4 right-4 text-sm text-white/40 pointer-events-none z-50 font-light"
      >
        @mahesh
      </motion.div>
    </main>
  );
}
