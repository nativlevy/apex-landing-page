'use client';

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function QASection() {
  return (
    <section id="qa" className="w-full py-16 md:py-24 lg:py-32 bg-background scroll-mt-16 overflow-hidden">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            General Questions
          </h2>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border-b border-border/40">
              <AccordionTrigger className="text-xl font-semibold text-left hover:no-underline">
                How is APEX different from other AI programs like Stanford's or Karpathy's, OpenAI Academy?
              </AccordionTrigger>
              <AccordionContent className="pt-2">
                <p className="text-muted-foreground text-lg mb-4">
                  <span className="font-semibold text-foreground">APEX isn't just another AI course—it's a selective, mission-driven program building Israel's AI leadership by equipping elite technologists to lead at the frontier.</span>
                </p>
                <ol className="list-decimal list-outside space-y-3 pl-6 text-muted-foreground text-base marker:font-semibold marker:text-primary">
                  <li>
                    <span className="font-semibold text-foreground">Built for Top Talent</span> - Unlike open courses, APEX is designed for Israel's best: top-tier tech alumni and IDF unit grads. The result? A high-trust, high-talent cohort and network.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">From Mastery to Impact</span> - For those who've already mastered the stack, APEX adds real-world velocity, product context, and access to frontier use cases—turning engineers into industry leaders.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Hands-On, High-Stakes AI</span> - It's not about lectures. Participants work with industry leaders to build and deploy AI-first solutions, with deep mentorship and applied learning.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Two Tracks, One Goal</span> - Whether you're a future <span className="font-medium">Architect</span> (deep-tech) or <span className="font-medium">Founder</span> (venture), APEX bridges tech and business to turn innovation into companies.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Fueling Israel's AI Edge</span> – More than a course, APEX is integrated into Israel's AI ecosystem—reinforcing a self-sustaining cycle of talent, tech, and national innovation.
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-border/40">
              <AccordionTrigger className="text-xl font-semibold text-left hover:no-underline">
                How do we ensure APEX fuels broad-based innovation, not just top-tier circles?
              </AccordionTrigger>
              <AccordionContent className="pt-2">
                <p className="text-muted-foreground text-lg mb-4">
                  <span className="font-semibold text-foreground">APEX is elite, but not exclusive.</span> Our mission is to build Israel's AI edge—not just through existing pipelines, but by <span className="font-semibold text-foreground">unlocking hidden talent</span> across the country.
                </p>
                <ol className="list-decimal list-outside space-y-3 pl-6 text-muted-foreground text-base marker:font-semibold marker:text-primary">
                  <li>
                    <span className="font-semibold text-foreground">Open Knowledge</span> - We'll publish core content to the public, creating access and inspiration well beyond our core cohort.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Merit-Based Entry</span> - Anyone can take a technical test. Pass it, and you're in the application process—<span className="font-semibold text-foreground">regardless of background or unit badge</span>.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Expanding the Circle</span> – While we start with top-tier talent to set the bar, our goal is a <span className="font-semibold text-foreground">self-sustaining ecosystem</span> that pushes the entire Israeli tech community forward.
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b-0">
              <AccordionTrigger className="text-xl font-semibold text-left hover:no-underline">
                 Is there a cost to join?
              </AccordionTrigger>
              <AccordionContent className="pt-2">
                 <p className="text-muted-foreground text-base">
                   No. But you need to give back so once accepted to APEX, donate $250 to any social cause of your choice—just confirm the donation and send us a screenshot.
                   If you can't afford it, please write us.
                 </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

        </motion.div>
      </div>
    </section>
  )
} 