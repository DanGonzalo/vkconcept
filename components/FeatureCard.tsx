// components/FeatureCard.tsx
"use client";
import Link from "next/link";
import React from "react";

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  link: string;
}

export default function FeatureCard({ icon, title, link }: FeatureCardProps) {
  return (
    <Link href={link} className="group block rounded-lg bg-white/10 p-6 text-center transition hover:-translate-y-2 hover:bg-white/20">
      <div className="mb-4 text-4xl">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
      <span className="text-sm text-blue-400 group-hover:underline">En savoir plus</span>
    </Link>
  );
}
