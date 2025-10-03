"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export default function AutoPlayAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showNotice, setShowNotice] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const tryPlay = () => {
      const audio = audioRef.current;
      if (audio) {
        audio.muted = false;
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              console.log("Audio played");
            })
            .catch((error) => {
              console.warn("Autoplay blocked:", error);
            });
        }
      }
    };

    const handleUserInteraction = () => {
      tryPlay();
      setShowNotice(false);
      document.removeEventListener("click", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/music.mp3"
        autoPlay
        muted
        loop
        preload="auto"
      />

      {/* Floating Play/Pause Button (Dark Mode) */}
      <button
        onClick={togglePlay}
        className="fixed bottom-4 right-4 z-50 bg-gray-900 shadow-md hover:bg-gray-800 transition-colors border border-gray-700 p-3 rounded-full"
        aria-label="Toggle Music"
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-gray-200" />
        ) : (
          <Play className="w-5 h-5 text-gray-200" />
        )}
      </button>

      {/* Simple fade-in animation */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
