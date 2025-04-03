import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface CurriculumModule {
  id: string;
  title: string;
  content: string;
}

// Updated curriculum modules, removing the co-founder search item
const founderModules: CurriculumModule[] = [
  {
    id: "item-1",
    title: "Israeli Founder Mindset & Ecosystem Navigation",
    content: "Understanding the unique advantages and challenges of building in Israel. Learn how to leverage the local chutzpah culture while addressing the potential pitfalls of the Israeli directness in global markets. Includes mapping of key ecosystem players and how to effectively engage with them."
  },
  {
    id: "item-2",
    title: "Israeli-First vs Global-First Strategy",
    content: "Tactical frameworks for deciding whether to validate locally or go global immediately. We'll analyze case studies of successful Israeli startups that chose different paths and provide decision-making tools based on your specific product and market."
  },
  {
    id: "item-3",
    title: "Military & Intelligence Networks Leverage",
    content: "Practical strategies for ethically and effectively utilizing military connections and intelligence unit alumni networks that are unique to Israel. Learn how to translate unit experience and connections into startup advantages without crossing ethical lines."
  },
  {
    id: "item-4",
    title: "Overcoming 'Israeli Bubble' Validation Biases",
    content: "Hands-on methods to validate your product beyond the supportive but small Israeli market. Includes techniques for getting honest feedback from international users and avoiding the echo chamber effect when testing with local connections."
  },
  {
    id: "item-5",
    title: "US Market Entry: The Israeli Advantage",
    content: "Leveraging Israeli-American connections and the unique positioning as an Israeli startup when entering the US market. Includes practical sessions with Israeli founders who successfully expanded to the US, and access to networks in key US tech hubs."
  },
  {
    id: "item-6",
    title: "Rapid GTM Execution for Israeli Startups",
    content: "Tactical playbooks for Israeli founders to quickly execute go-to-market strategies with limited resources. Features hands-on workshops on creating distribution partnerships, leveraging existing Israeli company networks, and penetrating international markets from day one."
  },
  // Removed: "Building Effective Co-Founding Teams in Israel" (item-7)
  {
    id: "item-7", // Renumbered from item-8
    title: "Israeli Investor Psychology & Fundraising",
    content: "Understanding the specific expectations and decision-making processes of Israeli VCs and angels compared to international investors. Features direct interaction with active Israeli investors and tactical preparation for effective local fundraising conversations."
  },
  {
    id: "item-8", // Renumbered from item-9
    title: "Navigating Government Resources & Grants",
    content: "Practical walkthrough of Israel Innovation Authority grants, tax benefits, and other government resources available specifically to Israeli founders. Includes hands-on application workshops and connections to successful grant recipients."
  },
  {
    id: "item-9", // Renumbered from item-10
    title: "Scaling Teams in Israel's Competitive Talent Market",
    content: "Effective strategies for attracting and retaining top talent in Israel's competitive tech ecosystem. Learn practical approaches to compete with multinational R&D centers, leverage military talent pipelines, and build distributed teams combining Israeli innovation with global execution."
  },
  {
    id: "item-10", // Renumbered from item-11
    title: "Global Positioning: The Israeli Brand Advantage",
    content: "Tactical frameworks for leveraging Israel's reputation for innovation while mitigating potential political complications. Includes communications training for effectively presenting your Israeli identity to different global markets and stakeholders."
  },
]

export function FounderCurriculum() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {founderModules.map((module) => (
        <AccordionItem key={module.id} value={module.id}>
          <AccordionTrigger>{module.title}</AccordionTrigger>
          <AccordionContent>{module.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
} 