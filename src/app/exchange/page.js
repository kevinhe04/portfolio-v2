"use client";

import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { flights, locations } from "@/data/flights";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { ChevronLeft, ChevronRight, Plane } from "lucide-react";

const GlobeView = dynamic(() => import("@/components/globeView"), { ssr: false });

export default function ExchangePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [globeSize, setGlobeSize] = useState(550);

  const currentFlight = flights[currentIndex];
  const from = locations[currentFlight.from];
  const to = locations[currentFlight.to];

  const centerLat = (from.lat + to.lat) / 2;
  const centerLng = (from.lng + to.lng) / 2;

  const visitedCities = new Set();
  for (let i = 0; i <= currentIndex; i++) {
    visitedCities.add(flights[i].from);
    visitedCities.add(flights[i].to);
  }

  const prev = useCallback(() => setCurrentIndex((i) => Math.max(0, i - 1)), []);
  const next = useCallback(() => setCurrentIndex((i) => Math.min(flights.length - 1, i + 1)), []);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowLeft") {
        prev();

      }
      if (e.key === "ArrowRight") {
        next();

      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next]);

useEffect(() => {
    const updateSize = () => {
      const vh = window.innerHeight;
      const vw = window.innerWidth;
      const available = Math.min(vw * 0.7, vh * 0.55);
      setGlobeSize(Math.max(300, Math.min(650, available)));
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="bg-white h-screen flex flex-col overflow-hidden">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full z-50 bg-white/80 backdrop-blur-md border-b border-blue-100/50"
      >
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center relative">
          <a href="/" className="text-sm text-gray-400 hover:text-blue-500 transition-colors duration-300">
            ← back
          </a>
          <span className="absolute left-1/2 -translate-x-1/2 text-xs tracking-[0.2em] uppercase text-gray-800 font-medium">
            Exchange 2026
          </span>
          <div className="ml-auto hidden sm:flex items-center gap-3 text-[11px] text-gray-400 tracking-wider">
            <span>{visitedCities.size} cities</span>
            <span className="w-px h-3 bg-blue-200/50" />
            <span>
              {currentIndex + 1} / {flights.length}
            </span>
          </div>
        </div>
      </motion.nav>

      <div className="flex-1 flex flex-col items-center justify-center relative min-h-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center gap-1 mb-2"
          >
            <div className="flex items-center justify-center gap-5">
              <div className="text-right min-w-[100px]">
                <p className="text-base font-semibold text-gray-800">{from.name}</p>
                <p className="text-[10px] text-gray-400 tracking-[0.15em] mt-0.5">{currentFlight.from}</p>
              </div>
              <div className="flex items-center gap-2.5 flex-shrink-0">
                <div className="w-6 h-px bg-gradient-to-r from-transparent to-blue-300" />
                <Plane size={13} className="text-blue-500" />
                <div className="w-6 h-px bg-gradient-to-r from-blue-300 to-transparent" />
              </div>
              <div className="text-left min-w-[100px]">
                <p className="text-base font-semibold text-gray-800">{to.name}</p>
                <p className="text-[10px] text-gray-400 tracking-[0.15em] mt-0.5">{currentFlight.to}</p>
              </div>
            </div>
            {currentFlight.connection && (
              <span className="text-[10px] text-blue-400 tracking-[0.1em]">Connection flight</span>
            )}
          </motion.div>
        </AnimatePresence>

        <p className="text-sm text-gray-700 font-medium tracking-[0.15em] uppercase mb-1">{currentFlight.label}</p>

        <div className="relative" style={{ width: globeSize, height: globeSize }}>
          <div
            className="transition-opacity duration-700 ease-in-out"
            style={{ opacity: currentFlight.video ? 0 : 1 }}
          >
            <GlobeView currentIndex={currentIndex} centerLat={centerLat} centerLng={centerLng} size={globeSize} />
          </div>

          <AnimatePresence mode="wait">
            {currentFlight.video && (
              <motion.div
                key={currentFlight.video}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-blue-200/40 bg-black">
                  <video
                    src={currentFlight.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    style={{ height: globeSize * 0.7 }}
                    className="w-auto object-cover"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          onClick={() => {
            prev();
    
          }}
          disabled={currentIndex === 0}
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full
            border border-blue-200/50 items-center justify-center text-gray-400 hover:text-blue-500
            hover:border-blue-300 hover:shadow-sm transition-all duration-300
            disabled:opacity-20 disabled:cursor-not-allowed bg-white/80 backdrop-blur-sm"
        >
          <ChevronLeft size={18} />
        </motion.button>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          onClick={() => {
            next();
    
          }}
          disabled={currentIndex === flights.length - 1}
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full
            border border-blue-200/50 items-center justify-center text-gray-400 hover:text-blue-500
            hover:border-blue-300 hover:shadow-sm transition-all duration-300
            disabled:opacity-20 disabled:cursor-not-allowed bg-white/80 backdrop-blur-sm"
        >
          <ChevronRight size={18} />
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
        className="w-full bg-white border-t border-blue-100/50 shadow-[0_-4px_30px_rgba(59,130,246,0.04)]"
      >
        <div className="max-w-xl mx-auto px-6 py-5">
          <AnimatePresence mode="wait">
            {currentFlight.video && (
              <motion.div
                key={currentFlight.video + "-m"}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="lg:hidden overflow-hidden flex justify-center mb-5"
              >
                <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-blue-200/40">
                  <video
                    src={currentFlight.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="h-[180px] md:h-[220px] w-auto object-cover"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative mb-3">
            <div className="relative h-8 flex items-center">
              <div className="absolute inset-x-0 h-px bg-gray-200 top-1/2" />
              <div
                className="absolute h-px top-1/2 left-0 transition-all duration-500"
                style={{
                  width: `${(currentIndex / (flights.length - 1)) * 100}%`,
                  background: "linear-gradient(to right, #60a5fa, #3b82f6)",
                }}
              />
              <div className="relative w-full flex justify-between items-center">
                {flights.map((flight, i) => (
                  <button
                    key={flight.id}
                    onClick={() => {
                      setCurrentIndex(i);
              
                    }}
                    className="relative group flex items-center justify-center w-4 h-8"
                    title={`${locations[flight.from].name} → ${locations[flight.to].name}`}
                  >
                    <div
                      className={`rounded-full transition-all duration-300 ${
                        i === currentIndex
                          ? "w-2.5 h-2.5 bg-blue-500"
                          : i < currentIndex
                            ? "w-1.5 h-1.5 bg-blue-400 group-hover:bg-blue-500 group-hover:scale-150"
                            : "w-1.5 h-1.5 bg-gray-200 group-hover:bg-gray-400 group-hover:scale-150"
                      }`}
                    />
                    {i === currentIndex && (
                      <motion.div
                        layoutId="active-dot"
                        className="absolute w-5 h-5 rounded-full border border-blue-400/30"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center mt-0.5">
              <span className="text-[10px] text-gray-400 tracking-wider">Dec 2025</span>
              <span className="text-[10px] text-gray-400 tracking-wider">Apr 2026</span>
            </div>
          </div>

          <p className="text-center text-[10px] text-gray-300 tracking-[0.15em]">
            ← → keys · drag to rotate
          </p>
        </div>
      </motion.div>
    </div>
  );
}
