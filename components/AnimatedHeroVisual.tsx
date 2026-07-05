"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Activity, CalendarCheck, FileHeart, ShieldCheck, Stethoscope, Video } from "lucide-react";

const pulseTransition = {
  duration: 4,
  repeat: Infinity,
  repeatType: "reverse" as const,
  ease: "easeInOut" as const,
};

export function AnimatedHeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-blue-100 bg-white p-4 shadow-soft [contain:paint]">
      <motion.div
        aria-hidden="true"
        className="absolute -right-16 -top-16 size-48 rounded-full bg-brand-cyan/25 blur-3xl"
        animate={reduceMotion ? undefined : { scale: [1, 1.15, 1], opacity: [0.55, 0.9, 0.55] }}
        transition={pulseTransition}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-20 -left-20 size-60 rounded-full bg-brand-blue/15 blur-3xl"
        animate={reduceMotion ? undefined : { scale: [1, 1.12, 1], opacity: [0.45, 0.8, 0.45] }}
        transition={{ ...pulseTransition, delay: 0.5 }}
      />

      <div className="relative rounded-lg bg-brand-navy p-5 text-white">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-brand-cyan">Live care network</p>
            <h2 className="mt-2 text-2xl font-semibold">Digital clinic dashboard</h2>
          </div>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">Encrypted</span>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {[
            { label: "Consults", value: "24/7", icon: Video },
            { label: "Specialties", value: "16+", icon: Stethoscope },
            { label: "Records", value: "Secure", icon: FileHeart },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} className="rounded-lg bg-white/10 p-4">
              <Icon size={22} className="text-brand-cyan" aria-hidden="true" />
              <p className="mt-4 text-xl font-semibold">{value}</p>
              <p className="text-xs text-blue-100">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-4 grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg bg-brand-ice p-5">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-lg bg-white text-brand-blue">
              <Activity size={23} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-brand-navy">Patient journey</p>
              <p className="text-xs text-slate-500">Book, consult, continue care</p>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            {["Symptoms captured", "Results uploaded", "Provider matched"].map((item, index) => (
              <motion.div
                key={item}
                className="flex items-center gap-3 rounded-lg bg-white p-3 text-sm text-slate-700"
                animate={reduceMotion ? undefined : { opacity: [0.86, 1, 0.92] }}
                transition={{ ...pulseTransition, delay: index * 0.25 }}
              >
                <span className="size-2 rounded-full bg-brand-teal" />
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-blue-100 bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-brand-navy">Provider preview</p>
            <ShieldCheck size={22} className="text-brand-teal" aria-hidden="true" />
          </div>
          <div className="mt-5 space-y-4">
            <div className="rounded-lg bg-slate-50 p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-brand-navy">Available today</span>
                <span className="text-brand-teal">8 slots</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-blue-100">
                <motion.div
                  className="h-2 rounded-full bg-brand-teal"
                  animate={reduceMotion ? undefined : { width: ["48%", "78%", "58%"] }}
                  transition={pulseTransition}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-brand-ice p-4">
                <CalendarCheck size={20} className="text-brand-blue" aria-hidden="true" />
                <p className="mt-3 text-sm font-semibold text-brand-navy">Appointments</p>
              </div>
              <div className="rounded-lg bg-brand-ice p-4">
                <FileHeart size={20} className="text-brand-blue" aria-hidden="true" />
                <p className="mt-3 text-sm font-semibold text-brand-navy">Records</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
