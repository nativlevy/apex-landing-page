"use client";

import { useEffect, useState } from "react";
import { ArrowDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AIRankingSection() {
  const [animate, setAnimate] = useState(false);
  
  // Toggle animation state every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="ai-ranking" className="relative py-20 overflow-hidden bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Alert Bar */}
        <div className={`absolute top-0 left-0 right-0 bg-red-600 text-white py-2 px-4 flex items-center justify-center ${animate ? 'opacity-100' : 'opacity-90'} transition-opacity duration-1000`}>
          <span className="text-sm md:text-base font-semibold tracking-wide">
            Israel's global AI position at risk
          </span>
        </div>
        
        <div className="flex flex-col items-center text-center mb-10 pt-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Israel's Position in Global AI Ranking
          </h2>
          <p className="max-w-3xl text-muted-foreground">
            Urgent action needed to reverse Israel's decline in the Global AI Index
          </p>
        </div>
        
        {/* Ranking Visualization */}
        <div className="flex justify-center mb-16">
          <div className="relative grid grid-cols-2 gap-x-16 md:gap-x-36">
            {/* Previous Ranking */}
            <div className="flex flex-col items-center">
              <span className="text-lg md:text-xl font-medium mb-2">Previous Ranking</span>
              <div className="relative w-36 h-36 md:w-44 md:h-44 flex items-center justify-center rounded-full border-8 border-primary bg-muted">
                <span className="text-5xl md:text-6xl font-bold text-primary">5</span>
                <span className="absolute bottom-0 right-0 text-sm bg-primary text-primary-foreground px-2 py-1 rounded-full">2022</span>
              </div>
            </div>
            
            {/* Current Ranking */}
            <div className="flex flex-col items-center">
              <span className="text-lg md:text-xl font-medium mb-2">Current Ranking</span>
              <div className={`relative w-36 h-36 md:w-44 md:h-44 flex items-center justify-center rounded-full border-8 border-red-600 bg-muted ${animate ? 'shadow-[0_0_15px_5px_rgba(220,38,38,0.5)]' : ''} transition-shadow duration-1000`}>
                <span className="text-5xl md:text-6xl font-bold text-red-600">9</span>
                <span className="absolute bottom-0 right-0 text-sm bg-red-600 text-white px-2 py-1 rounded-full">2024</span>
              </div>
            </div>
            
            {/* Arrow */}
            {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-red-100 flex items-center justify-center ${animate ? 'scale-110' : 'scale-100'} transition-transform duration-1000`}>
                <ArrowDownIcon className={`h-12 w-12 text-red-600 ${animate ? 'animate-bounce' : ''}`} />
              </div>
              <span className="mt-2 font-bold text-red-600 text-xl">-4</span>
            </div> */}
          </div>
        </div>
        
        {/* Context and Call to Action */}
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Why This Matters</h3>
          <p className="mb-6 text-muted-foreground">
            Israel's slide from 5th to 9th place in the Global AI Index is a critical indicator that our AI leadership is at risk. 
            Without immediate intervention, we stand to lose our competitive edge in one of the most transformative technologies of our era.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/apply">Join the Solution</Link>
            </Button>
          </div>
          <div className="mt-6 text-sm text-muted-foreground">
            Source: <Link href="https://www.tortoisemedia.com/data/global-ai#rankings" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">Tortoise Global AI Index</Link>
          </div>
        </div>
      </div>
    </section>
  );
} 