import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Brain, 
  Layers, 
  Network, 
  Cpu, 
  Settings, 
  Database, 
  Search, 
  Code2, 
  Gauge, 
  Server, 
  Image as ImageIcon, 
  Sparkles,
  GraduationCap,
  Rocket,
  BookOpen,
  Lightbulb,
  FileText,
  Trophy,
  Book
} from "lucide-react"
import NextImage from "next/image"

interface Lecture {
  id: string
  title: string
  description: string
  topics: string[]
  lecturer?: string
  icon?: React.ReactNode
  techLogos?: string[]
  level?: "beginner" | "intermediate" | "advanced"
}

// Pre-materials content
const preMaterials = {
  id: "pre-materials",
  title: "Pre-Course Materials",
  description: "Essential resources to prepare you for the technical curriculum ahead.",
  topics: [
    "Advanced Python with focus on data structures and functions",
    "Introduction to mathematical concepts (linear algebra, calculus, probability)",
    "Basic machine learning concepts and terminology",
    "Setting up your development environment (Git, Python, Jupyter, VS Code)",
    "Introduction to neural networks and deep learning",
    "Basic PyTorch and TensorFlow tutorials",
    "Reading list of foundational AI papers and resources",
  ],
  resources: [
    {
      name: "Mathematics for Machine Learning",
      description: "Review of essential mathematical concepts for AI",
      url: "https://mml-book.github.io/"
    },
    {
      name: "Fast.ai Practical Deep Learning",
      description: "Hands-on deep learning for coders",
      url: "https://course.fast.ai/"
    },
    {
      name: "Deep Learning Book",
      description: "Comprehensive deep learning theory and practice",
      url: "https://www.deeplearningbook.org/"
    },
    {
      name: "Hugging Face Courses",
      description: "NLP and transformers practical introduction",
      url: "https://huggingface.co/course/"
    }
  ],
  icon: <Book className="w-6 h-6" />,
  level: "beginner",
  techLogos: [
    "https://cdn.brandfetch.io/python.org/w/400/h/400?c=1idjQoo38323pC02ZXr",
    "https://cdn.brandfetch.io/pytorch.org/w/400/h/400?c=1idjQoo38323pC02ZXr",
    "https://cdn.brandfetch.io/tensorflow.org/w/400/h/400?c=1idjQoo38323pC02ZXr",
  ]
}

// Updated lectures array (condensed to 10)
const lectures: Lecture[] = [
  {
    id: "lecture-1",
    title: "AI History & Fundamentals",
    description: "An overview of AI's evolution, progress, fundamental building blocks, and future directions.",
    topics: [
      "The history of AI", 
      "AI's scaling laws", 
      "Where AI is heading",
      "NN layers: Fully connected, convolution layer, recurrent layer",
      "Backprop & feedforward",
      "Training parameters and methodologies",
      "Training problems (vanishing gradients, etc.)",
    ],
    lecturer: "Expert Lecturers",
    icon: <Brain className="w-6 h-6" />,
    level: "beginner",
    techLogos: [
      "https://cdn.brandfetch.io/openai.com/w/400/h/400?c=1idjQoo38323pC02ZXr",
      "https://cdn.brandfetch.io/anthropic.com/w/400/h/400?c=1idjQoo38323pC02ZXr",
      "https://cdn.brandfetch.io/pytorch.org/w/400/h/400?c=1idjQoo38323pC02ZXr",
      "https://cdn.brandfetch.io/tensorflow.org/w/400/h/400?c=1idjQoo38323pC02ZXr"
    ]
  },
  {
    id: "lecture-2", // Renumbered from 3
    title: "Mastering Transformer Architectures",
    description: "A deep-dive lecture about the leading model architecture in the modern age",
    topics: [
      "Encoder-decoder structures",
      "Positional encoding & embeddings",
      "Multi-head attention (MHA) & QKV matrices",
      "Model architecture example: GPT-3",
    ],
    lecturer: "Roy Nisism",
    icon: <Network className="w-6 h-6" />,
    level: "intermediate",
    techLogos: [
      "https://cdn.brandfetch.io/huggingface.co/w/400/h/400?c=1idjQoo38323pC02ZXr",
    ]
  },
  {
    id: "lecture-3", // Renumbered from 4
    title: "Advanced Architectures",
    description: "A deep-dive lecture about emerging model architectures beyond Transformers",
    topics: [
      "Sparse attention (Transformer-XL, RMT, Bert-RMT)",
      "RWKV, Hyena, Mamba and SSM",
      "Model architecture example: Jamba",
    ],
    lecturer: "AI21 Labs expert",
    icon: <Cpu className="w-6 h-6" />,
    level: "advanced",
    techLogos: [
      "https://cdn.brandfetch.io/ai21.com/w/400/h/400?c=1idjQoo38323pC02ZXr",
      "https://cdn.brandfetch.io/mistral.ai/w/400/h/400?c=1idjQoo38323pC02ZXr"
    ]
  },
  {
    id: "lecture-4", // Renumbered from 5
    title: "Model Customization & Tuning",
    description: "A technical lecture on the various techniques for customizing and tuning AI models",
    topics: ["Fine-tuning techniques", "RL-based approaches: RLHF, RLAIF", "Distillation and quantization"],
    lecturer: "Ohad Amosi",
    icon: <Settings className="w-6 h-6" />,
    level: "intermediate",
    techLogos: [
    ]
  },
  {
    id: "lecture-5", // Renumbered from 6
    title: "Building Foundation Models",
    description: "An E2E walkthrough on how to train a foundation model + main challenges",
    topics: [
      "Data collection and curation",
      "Hardware setup and checkpointing",
      "Supervised vs unsupervised methods",
      "Real examples with numbers",
    ],
    lecturer: "Tal Fialkow, VP of AI at Dream Security",
    icon: <Rocket className="w-6 h-6" />,
    level: "advanced",
    techLogos: [
      "https://cdn.brandfetch.io/nvidia.com/w/400/h/400?c=1idjQoo38323pC02ZXr",
      "https://cdn.brandfetch.io/aws.amazon.com/w/400/h/400?c=1idjQoo38323pC02ZXr"
    ]
  },
  {
    id: "lecture-6", // Renumbered from 7
    title: "Performance Optimization Techniques",
    description: "A technical lecture on various performance optimization techniques",
    topics: [
      "Batching strategies",
      "Attention optimization",
      "Token prefill optimization",
      "Pruning and quantization techniques",
    ],
    lecturer: "Roy Nissim",
    icon: <Gauge className="w-6 h-6" />, // Kept Gauge icon
    level: "advanced",
    techLogos: [
      "https://cdn.brandfetch.io/onnx.ai/w/400/h/400?c=1idjQoo38323pC02ZXr",
      "https://cdn.brandfetch.io/tensorrt.com/w/400/h/400?c=1idjQoo38323pC02ZXr"
    ]
  },
  {
    id: "lecture-7", // Merged 8 & 9
    title: "Embeddings, Search & RAG",
    description: "Understanding vector representations, search techniques, data preparation, and RAG best practices.",
    topics: [
      "Embeddings fundamentals & frameworks",
      "Keywords-based vs. vector-based search",
      "Vector databases & retrieval techniques",
      "Preparing data for AI: quality, relevance, and scale",
      "RAG best practices: indexing, optimizing recall/precision",
      "RAG evaluation methodologies",
    ],
    lecturer: "Expert Lecturers",
    icon: <Search className="w-6 h-6" />, // Used Search icon
    level: "intermediate",
    techLogos: [
      "https://cdn.brandfetch.io/pinecone.io/w/400/h/400?c=1idjQoo38323pC02ZXr",
      "https://cdn.brandfetch.io/weaviate.io/w/400/h/400?c=1idjQoo38323pC02ZXr",
      "https://cdn.brandfetch.io/langchain.com/w/400/h/400?c=1idjQoo38323pC02ZXr",
      "https://cdn.brandfetch.io/llamaindex.ai/w/400/h/400?c=1idjQoo38323pC02ZXr"
    ]
  },
  {
    id: "lecture-8", // Merged 10 & 11
    title: "Compound AI Systems & Evaluation",
    description: "Building complex AI systems using agents and frameworks, and evaluating their performance.",
    topics: [
      "AI agents and orchestrators",
      "Tools, routers, chains and workflows",
      "Prompt engineering best practices",
      "Performance metrics (FLOPs, IO, utilization)",
      "Accuracy metrics & benchmarks",
      "Leaderboards",
    ],
    lecturer: "Expert Lecturers",
    icon: <Code2 className="w-6 h-6" />, // Used Code2 icon
    level: "intermediate",
    techLogos: [
      "https://cdn.brandfetch.io/autogen.com/w/400/h/400?c=1idjQoo38323pC02ZXr",
      "https://cdn.brandfetch.io/crewai.com/w/400/h/400?c=1idjQoo38323pC02ZXr",
      "https://cdn.brandfetch.io/mlcommons.org/w/400/h/400?c=1idjQoo38323pC02ZXr",
      "https://cdn.brandfetch.io/benchmark.com/w/400/h/400?c=1idjQoo38323pC02ZXr"
    ]
  },
  {
    id: "lecture-9", // Renumbered from 12
    title: "AI DevOps & Deployment",
    description: "Managing infrastructure and deployment for AI systems",
    topics: [
      "Kubernetes (K8s)",
      "Workflow orchestration",
      "Continuous integration/deployment (CI/CD)",
      "Infrastructure management",
      "Scalability considerations",
      "Resource allocation and auto-scaling strategies",
    ],
    icon: <Server className="w-6 h-6" />,
    level: "intermediate",
    techLogos: [
      "https://cdn.brandfetch.io/kubernetes.io/w/400/h/400?c=1idjQoo38323pC02ZXr",
      "https://cdn.brandfetch.io/docker.com/w/400/h/400?c=1idjQoo38323pC02ZXr"
    ]
  },
  {
    id: "lecture-10", // Renumbered from 13-14
    title: "State of the Art in AI & Final Challenge",
    description: "Exploring cutting-edge developments in AI and applying knowledge to real-world problems",
    topics: [
      "State of Image / Video generation",
      "Latest advancements in multimodal AI",
      "Emerging applications and use cases",
      "Final Challenge: Solving real-world AI challenges from industry partners",
      "Team-based project work with mentorship from industry experts",
      "Final presentations and evaluation"
    ],
    lecturer: "Industry experts",
    icon: <Sparkles className="w-6 h-6" />,
    level: "advanced",
    techLogos: [
      "https://cdn.brandfetch.io/midjourney.com/w/400/h/400?c=1idjQoo38323pC02ZXr",
      "https://cdn.brandfetch.io/runwayml.com/w/400/h/400?c=1idjQoo38323pC02ZXr"
    ]
  },
]

export function TechnicalCurriculum() {
  // Group lectures into sets of 2 for the tabs (5 tabs total)
  const lectureGroups = [
    lectures.slice(0, 2),
    lectures.slice(2, 4),
    lectures.slice(4, 6),
    lectures.slice(6, 8),
    lectures.slice(8, 10),
  ]

  const getLevelColor = (level?: string) => {
    if (!level) return "bg-gray-100 text-gray-800"
    switch (level) {
      case "beginner":
        return "bg-green-100 text-green-800"
      case "intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-8">
      <Tabs defaultValue="pre-materials" className="w-full">
        <TabsList className="grid w-full grid-cols-6 mb-8">
          <TabsTrigger value="pre-materials" className="flex items-center gap-2">
            <FileText className="w-4 h-4" /> Prep
          </TabsTrigger>
          <TabsTrigger value="group-1" className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" /> 1-2
          </TabsTrigger>
          <TabsTrigger value="group-2" className="flex items-center gap-2">
            <Lightbulb className="w-4 h-4" /> 3-4
          </TabsTrigger>
          <TabsTrigger value="group-3" className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4" /> 5-6
          </TabsTrigger>
          <TabsTrigger value="group-4" className="flex items-center gap-2">
            <Cpu className="w-4 h-4" /> 7-8 
          </TabsTrigger>
          <TabsTrigger value="group-5" className="flex items-center gap-2">
            <Rocket className="w-4 h-4" /> 9-10
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pre-materials" className="space-y-6">
          <Card
            className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01]"
          >
            <CardContent className="p-0">
              <div className="grid md:grid-cols-[1fr_2fr] overflow-hidden">
                <div className="bg-primary/5 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {preMaterials.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{preMaterials.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${getLevelColor(preMaterials.level || "")}`}>
                          {preMaterials.level}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{preMaterials.description}</p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    {preMaterials.techLogos?.map((logo, i) => (
                      <div key={i} className="w-8 h-8 relative">
                        <NextImage
                          src={logo}
                          alt="Tech logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6 bg-background">
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">Recommended Preparation</h4>
                  <ul className="space-y-2 mb-6">
                    {preMaterials.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">
                          {i + 1}
                        </span>
                        <span className="text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <h4 className="text-sm font-medium text-muted-foreground mb-3">Key Resources</h4>
                  <div className="grid gap-3 md:grid-cols-2">
                    {preMaterials.resources.map((resource, i) => (
                      <div key={i} className="p-3 border rounded-lg hover:bg-primary/5 transition-colors">
                        <h5 className="font-medium text-sm">{resource.name}</h5>
                        <p className="text-xs text-muted-foreground mb-2">{resource.description}</p>
                        <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
                          Access resource →
                        </a>
                      </div>
                    ))}
                  </div> */}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {lectureGroups.map((group, index) => (
          <TabsContent key={`group-${index + 1}`} value={`group-${index + 1}`} className="space-y-6">
            {group.map((lecture) => (
              <Card
                key={lecture.id}
                className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01]"
              >
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-[1fr_2fr] overflow-hidden">
                    <div className="bg-primary/5 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            {lecture.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold">{lecture.title}</h3>
                            <span className={`text-xs px-2 py-1 rounded-full ${getLevelColor(lecture.level || "")}`}>
                              {lecture.level}
                            </span>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm">{lecture.description}</p>
                      </div>
                      {lecture.lecturer && (
                        <p className="text-sm font-medium mt-4">
                          <span className="text-muted-foreground">Lecturer:</span> {lecture.lecturer}
                        </p>
                      )}
                      {lecture.techLogos && (
                        <div className="flex gap-2 mt-4">
                          {lecture.techLogos.map((logo, i) => (
                            <div key={i} className="w-8 h-8 relative">
                              <NextImage
                                src={logo}
                                alt="Tech logo"
                                fill
                                className="object-contain"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="p-6 bg-background">
                      <h4 className="text-sm font-medium text-muted-foreground mb-3">Topics Covered</h4>
                      <ul className="space-y-2">
                        {lecture.topics.map((topic, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">
                              {i + 1}
                            </span>
                            <span className="text-sm">{topic}</span>
                          </li>
                        ))}
                      </ul>
                      {lecture.id === "lecture-10" && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                          <div className="flex items-center gap-3 mb-2">
                            <Trophy className="h-5 w-5 text-primary" />
                            <h4 className="font-medium">Final Challenge</h4>
                          </div>
                          <p className="text-sm mb-2">
                            Apply everything you've learned to solve real-world AI challenges sourced from our industry partners. 
                            Work in teams with mentorship from industry experts, and present your solutions to a panel of judges.
                          </p>
                          {/* <p className="text-sm font-medium">
                            Past challenges have included:
                          </p>
                          <ul className="mt-2 space-y-1">
                            <li className="text-sm">• Building multimodal AI systems for healthcare diagnosis</li>
                            <li className="text-sm">• Developing privacy-preserving ML pipelines for financial data</li>
                            <li className="text-sm">• Creating adaptive AI tutoring systems for education</li>
                            <li className="text-sm">• Designing AI systems for sustainable energy optimization</li>
                          </ul> */}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

