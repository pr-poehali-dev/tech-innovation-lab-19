import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/d7284bbd-1d35-4022-9158-720e8d52c1e9/files/3b794455-2087-4945-a8f8-e88ab2c4d603.jpg"
          alt="Аудитория психологии"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/40 z-[1]" />

      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          ПСИХОЛОГИЯ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Университетская дисциплина, которая открывает законы человеческого разума, поведения и внутреннего мира
        </p>
      </div>
    </div>
  );
}