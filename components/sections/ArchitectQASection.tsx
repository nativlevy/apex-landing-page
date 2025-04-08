'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function ArchitectQASection() {
  return (
    <section id="architect-qa" className="w-full py-16 md:py-24 lg:py-32 bg-background scroll-mt-16">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Architect Track Q&A
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border-b border-border/40">
            <AccordionTrigger className="text-xl font-semibold text-left hover:no-underline">
              Who is an Architect?
            </AccordionTrigger>
            <AccordionContent className="pt-2">
              <p className="text-muted-foreground text-base">
                If you're from a top elite unit or can crush our tech training test - you can apply.
              </p>
              <p className="text-muted-foreground text-base mt-2">
                We're looking for sharp tech minds who want to be among the first AI teams embedded in early-stage startups. You'll help build and scale, while leveling up your AI-native mindset and execution game.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-b-0">
            <AccordionTrigger className="text-xl font-semibold text-left hover:no-underline">
              What are the Application requirements?
            </AccordionTrigger>
            <AccordionContent className="pt-2">
              <p className="text-muted-foreground text-base mb-2">
                For top technologists looking to break into AI-native roles:
              </p>
              <ul className="list-disc list-outside space-y-1 pl-6 text-muted-foreground text-base">
                <li>Pass a technical entry test</li>
                <li>Complete ~20 hours of pre-course reading</li>
                <li>Actively job-seeking in AI/data-driven environments</li>
                <li>Ready to contribute to high-stakes, real-world projects</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
} 