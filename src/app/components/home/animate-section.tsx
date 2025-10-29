"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimateSectionProps {
  children: ReactNode;
  delay?: number;
}

export const AnimateSection = ({ children, delay = 0 }: AnimateSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.25, 0, 1] }}
    >
      {children}
    </motion.div>
  );
};

export const AnimateFade = ({ children, delay = 0 }: AnimateSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

