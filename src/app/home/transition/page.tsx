"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

function TimeVortex() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Array<{x: number, y: number, speed: number, radius: number}>>([]);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      particles.current = Array.from({ length: 200 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 3 + 2,
        radius: Math.random() * 2 + 1
      }));
    };
    initParticles();

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      // Create time tunnel effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update particles
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(performance.now() * 0.0001);

      particles.current.forEach(particle => {
        // Move particles in a spiral pattern
        const angle = Math.atan2(particle.y - canvas.height / 2, particle.x - canvas.width / 2);
        const distance = Math.sqrt(
          Math.pow(particle.x - canvas.width / 2, 2) + 
          Math.pow(particle.y - canvas.height / 2, 2)
        );

        particle.x += Math.cos(angle) * particle.speed;
        particle.y += Math.sin(angle) * particle.speed;

        // Reset particles that go off screen
        if (distance > Math.max(canvas.width, canvas.height) / 1.5) {
          particle.x = canvas.width / 2 + Math.random() * 100 - 50;
          particle.y = canvas.height / 2 + Math.random() * 100 - 50;
        }

        // Draw particle with trail
        const gradient = ctx.createRadialGradient(
          particle.x - canvas.width / 2, particle.y - canvas.height / 2, 0,
          particle.x - canvas.width / 2, particle.y - canvas.height / 2, particle.radius * 2
        );
        gradient.addColorStop(0, '#ffa94d');
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(
          particle.x - canvas.width / 2,
          particle.y - canvas.height / 2,
          particle.radius,
          0,
          Math.PI * 2
        );
        ctx.fill();
      });

      ctx.restore();
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
    />
  );
}

export default function Transition() {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        router.push('/home');
      }, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key="transition"
        className="h-[100svh] w-full overflow-hidden relative bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <TimeVortex />
        <motion.div 
          className="absolute inset-0 flex items-center justify-center text-[#EFE7D1] font-mono text-4xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 1.5] }}
          transition={{ 
            duration: 2.5,
            times: [0, 0.2, 0.8, 1],
          }}
        >
          INITIATING TEMPORAL JUMP TO 2025
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 