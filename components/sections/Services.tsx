"use client";

import Card from "../ui/Card";
import {
  Code2,
  Brain,
  BarChart3,
  Cloud,
  Headset,
  MonitorSmartphone,
} from "lucide-react";

const services = [
  {
    title: "Software Development",
    icon: Code2,
  },
  {
    title: "AI Solutions",
    icon: Brain,
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
  },
  {
    title: "Cloud Services",
    icon: Cloud,
  },
  {
    title: "IT Solutions & Consultation",
    icon: Headset,
  },
  {
    title: "UI/UX Designs",
    icon: MonitorSmartphone,
  },
];

export default function Services() {
  return (
    <section className="relative py-28 bg-[#0A0A0A] overflow-hidden" id="services">
      
      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-500 blur-[120px] opacity-20"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-orange-500 blur-[120px] opacity-20"></div>

      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-20">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return <Card key={index} title={service.title} Icon={Icon} />;
          })}
        </div>
      </div>
    </section>
  );
}