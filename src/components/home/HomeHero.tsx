"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useMotionValue,
  useTransform,
  Variants,
} from "framer-motion";
import dynamic from "next/dynamic";
import Lightning from "@/components/ui/Lightning";
import { Hero3DScene } from "./Hero3DScene";

const ThreeCanvas = dynamic(
  () =>
    import("@/components/3d/ThreeCanvas").then((mod) => mod.ThreeCanvas),
  { ssr: false }
);

const Counter = ({ from, to }: { from: number; to: number }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(from + (to - from) * ease));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [from, to]);

  return <span>{count}</span>;
};

export const HomeHero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section
      className="min-h-[90vh] flex items-center relative overflow-hidden bg-[#F8F9FA]"
      onMouseMove={handleMouseMove}
    >
      {/* Lightning background - primary orange hue #F5731B ≈ 24° */}
      <div className="absolute inset-0 z-0">
        <Lightning
          hue={24}
          xOffset={0}
          speed={0.8}
          intensity={0.7}
          size={1.2}
        />
      </div>

      {/* Light overlay for readability - stronger on left where text lives */}
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(248,249,250,0.92) 0%, rgba(248,249,250,0.6) 40%, rgba(248,249,250,0.2) 70%, transparent 100%)",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Text */}
        <motion.div
          className="lg:col-span-7 relative z-20 space-y-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center space-x-2 bg-[#F5731B]/15 border border-[#F5731B]/25 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#F5731B] animate-pulse" />
            <span className="text-[#F5731B] font-bold text-xs uppercase tracking-widest">
              Architecture of Intelligent Scale
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl lg:text-6xl font-display font-bold leading-tight uppercase tracking-tight text-gray-900"
          >
            AI Automation, Infrastructure & Talent
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-900 via-[#F5731B] to-gray-900">
              Solutions for Scalable Businesses
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 w-full md:w-3/4 border-l-2 border-[#F5731B]/40 pl-6 leading-relaxed"
          >
            ZYNQUOR is an AI-first systems company helping startups, enterprises,
            and global teams scale without chaos — by unifying automation, cloud
            infrastructure, and high-performance talent.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Link href="/contact" className="group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-[#F5731B] text-white px-8 py-4 font-display font-bold uppercase tracking-widest flex items-center justify-center shadow-[0_0_20px_rgba(245,115,27,0.3)] hover:shadow-[0_0_30px_rgba(245,115,27,0.5)] transition-all duration-300 text-center text-sm rounded-full overflow-hidden"
              >
                <span className="relative z-10">Book a Strategic Consultation</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.div>
            </Link>
            <Link href="/services" className="group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative border-2 border-gray-900 text-gray-900 px-8 py-4 font-display font-bold uppercase tracking-widest flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300 text-center text-sm rounded-full"
              >
                <span>Explore Services</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex gap-12 pt-12 border-t border-gray-300/80"
          >
            <div>
              <p className="text-3xl font-display font-bold flex items-center text-gray-900">
                <Counter from={0} to={98} />
                <span className="text-[#F5731B] text-lg">%</span>
              </p>
              <p className="text-xs text-gray-600 uppercase tracking-wider mt-1">
                Efficiency Gain
              </p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold flex items-center text-gray-900">
                <Counter from={0} to={400} />
                <span className="text-[#F5731B] text-lg">+</span>
              </p>
              <p className="text-xs text-gray-600 uppercase tracking-wider mt-1">
                Enterprise Nodes
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right 3D Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="lg:col-span-5 relative h-[500px] lg:h-[600px] flex items-center justify-center"
          style={{
            x: useTransform(mouseX, [-0.5, 0.5], [15, -15]),
            y: useTransform(mouseY, [-0.5, 0.5], [10, -10]),
          }}
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#F5731B]/20 shadow-2xl shadow-[#F5731B]/10">
            <ThreeCanvas
              className="w-full h-full bg-transparent"
              cameraPosition={[0, 0, 4]}
              enableOrbit={false}
              enableBloom={true}
            >
              <Hero3DScene />
            </ThreeCanvas>

            {/* Floating status badges */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 left-6 z-20 flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-[#F5731B] shadow-[0_0_12px_#F5731B] animate-pulse" />
              <div className="bg-white/95 backdrop-blur-md border border-gray-200/80 px-4 py-2 text-xs font-mono uppercase shadow-lg rounded-md text-gray-800">
                [AI Core: Online]
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-1/4 right-6 z-20 flex items-center gap-3 flex-row-reverse"
            >
              <div className="w-2 h-2 rounded-full bg-white border-2 border-[#F5731B]" />
              <div className="bg-white/95 backdrop-blur-md border border-gray-200/80 px-4 py-2 text-xs font-mono uppercase shadow-lg rounded-md text-gray-800">
                [Infrastructure: Scaled]
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-0 left-0 w-full h-16 border-t border-gray-200 flex items-center justify-between px-12 text-xs font-mono text-gray-500 bg-[#F8F9FA]/80 backdrop-blur-sm z-20"
      >
        <span className="hidden lg:block">[SCROLL TO EXPLORE]</span>
        <div className="flex gap-8">
          <span>LAT: 34.0522 N</span>
          <span>LON: 118.2437 W</span>
        </div>
      </motion.div>
    </section>
  );
};
