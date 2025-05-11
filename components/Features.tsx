// components/Features.tsx
"use client";
import React from "react";
import FeatureCard from "./FeatureCard";
import { features } from "../data/features";

export default function Features() {
  return (
    <section
      id="services"
      className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-24 md:py-32"
    >
      {/* grid translucide pour laisser apparaître les particles en fond */}
      <div className="grid w-full max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard
            key={feature.key}
            icon={feature.icon}
            title={feature.title}
            link={feature.link}
          />
        ))}
      </div>
    </section>
  );
}
