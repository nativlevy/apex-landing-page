'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FounderQASection() {
  return (
    <section id="founder-qa" className="w-full py-16 md:py-24 lg:py-32 bg-muted scroll-mt-16">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Founders Q&A
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border-b border-border/40">
            <AccordionTrigger className="text-xl font-semibold text-left hover:no-underline">
              What kind of founders are we looking for?
            </AccordionTrigger>
            <AccordionContent className="pt-2 space-y-4">
              <div>
                <h4 className="font-medium text-foreground mb-2">Ideal Candidate Profile:</h4>
                <ul className="list-disc list-outside space-y-1 pl-6 text-muted-foreground text-base">
                  <li>Aspiring founders ready to build the next AI/data-driven venture</li>
                  <li>Committed to starting a company in the next 12 months</li>
                  <li>Clear vision or problem space in mind (or hungry to find one)</li>
                  <li>Technical or product background is a strong plus</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Who We Back:</h4>
                <p className="text-muted-foreground text-base">
                  If you're building in the next year—AI, data, or deep tech—and have no playbook, this is for you. We back sharp, fast-moving technical teams: engineers, researchers, product minds, domain experts, even dropouts. We're already working with founders like Roy (Jounce), Shalev (Dream Security), Victor (Databand), Ori (Oz), Ayal Baron, and Elad Levy—and we're looking for more like them.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-b border-border/40">
            <AccordionTrigger className="text-xl font-semibold text-left hover:no-underline">
              I just got started/haven't incorporated/don't have a cofounder. Am I too early to apply?
            </AccordionTrigger>
            <AccordionContent className="pt-2">
              <p className="text-muted-foreground text-base mb-2">
                No! We're excited to work with folks from very early on in their journey.
              </p>
              <p className="text-muted-foreground text-base">
                If you're a solo founder or actively looking for a cofounder, fill out the Apex application and check the box for looking for a cofounder or email us at <a href="mailto:embed@apex.org" className="text-primary hover:underline">embed@apex.org</a>. We'll be actively helping match participants from our network and our architect-tech track.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-b border-border/40">
            <AccordionTrigger className="text-xl font-semibold text-left hover:no-underline">
              I've already raised some money. Am I too late to apply?
            </AccordionTrigger>
            <AccordionContent className="pt-2">
              <p className="text-muted-foreground text-base">
                Not necessarily. APEX is designed for founders in the ideation or validation stage. If you've raised less than $500K and believe the program can truly help, we're open to discussing on a case-by-case basis. Our focus is building a tight-knit community of exceptional early teams—where founders support, motivate, and learn from one another.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-b-0">
            <AccordionTrigger className="text-xl font-semibold text-left hover:no-underline">
              How can you as a founder give back?
            </AccordionTrigger>
            <AccordionContent className="pt-2">
              <h4 className="font-semibold text-foreground mb-2">🚀 Founder Give-Back Loop:</h4>
              <ul className="list-disc list-outside space-y-1 pl-6 text-muted-foreground text-base">
                <li>Founders donate <span className="font-medium text-foreground">equity/options</span> to APEX after success</li>
                <li>Liquidity cycles back into future cohorts</li>
                <li>One success funds <span className="font-medium text-foreground">ten more</span></li>
                <li>Help future Apex fellows</li>
              </ul>
              <p className="text-muted-foreground text-base mt-4">
                This makes APEX <span className="font-semibold text-foreground">economically self-sustaining</span>, long-term.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
} 