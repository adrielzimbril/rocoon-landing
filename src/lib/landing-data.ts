import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowUpRight,
  BrainCircuit,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Cpu,
  DraftingCompass,
  Eye,
  Home,
  Layers3,
  MessageSquareText,
  Route,
  ScanLine,
  ShieldCheck,
  Sparkles,
  SunMedium,
  Workflow,
} from "lucide-react";

export const brand = {
  name: "Rocoon",
  tagline: "AI Architecture Studio",
  email: "hello@rocoon.studio",
  liveUrl: "https://rocoon-landing.adrielzimbril.com",
  description:
    "Day 16/30 of the AI-Generated Landing Page Challenge. Rocoon is a conceptual AI architecture agency that designs modern smart homes with predictive planning, generative concepts, and connected build intelligence.",
};

export const navItems = [
  { label: "Vision", href: "#vision" },
  { label: "System", href: "#system" },
  { label: "Living AI", href: "#living-ai" },
  { label: "Homes", href: "#homes" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export const heroStats = [
  { value: "12d", label: "concept package" },
  { value: "4.8x", label: "faster iteration" },
  { value: "24/7", label: "site intelligence" },
];

export const trustLogos = [
  "Modulab",
  "Northline",
  "Astra Grid",
  "TerraNest",
  "Lumina Works",
  "Future Habitat",
];

export const diagnosticSteps: Array<{
  icon: LucideIcon;
  label: string;
  title: string;
  text: string;
  points: string[];
}> = [
  {
    icon: ScanLine,
    label: "Site scan",
    title: "The land becomes a living dataset.",
    text: "Rocoon maps solar exposure, privacy corridors, wind, access, slope, and local constraints before a single wall is drawn.",
    points: [
      "Sun-path modeling",
      "Neighbor visibility",
      "Access and slope logic",
    ],
  },
  {
    icon: BrainCircuit,
    label: "AI concepting",
    title: "Generative layouts aligned with how you live.",
    text: "The studio tests plan families, room adjacencies, daylight quality, and energy behavior until the strongest concept emerges.",
    points: [
      "Lifestyle-driven planning",
      "Energy-aware options",
      "Material mood studies",
    ],
  },
  {
    icon: Cpu,
    label: "Build intelligence",
    title: "A smarter handoff from vision to construction.",
    text: "Design decisions are translated into coordinated packages your builder can understand, price, and phase with fewer surprises.",
    points: [
      "Permit-ready narratives",
      "Cost scenario signals",
      "Connected build roadmap",
    ],
  },
];

export const solutionCards: Array<{
  icon: LucideIcon;
  title: string;
  text: string;
}> = [
  {
    icon: DraftingCompass,
    title: "Parametric planning",
    text: "Floor plans respond to light, terrain, program, budget, and future expansion scenarios.",
  },
  {
    icon: SunMedium,
    title: "Climate intelligence",
    text: "Passive comfort, shading, ventilation, and envelope decisions are modeled early.",
  },
  {
    icon: Home,
    title: "Smart living layer",
    text: "Automation zones, security, energy flows, and sensor needs are planned into the architecture.",
  },
  {
    icon: Layers3,
    title: "Material system",
    text: "Exterior and interior palettes are curated around durability, carbon impact, and atmosphere.",
  },
];

export const homeCards = [
  {
    title: "Courtyard Signal House",
    location: "Austin hillside",
    image: "/img/arch/4e76528e-f131-4c04-86c0-9d9d0af7da7c_original.png",
    metric: "31% less cooling load",
  },
  {
    title: "Glassline Retreat",
    location: "Pacific edge lot",
    image: "/img/arch/14422859-2c3e-444b-911b-03aae8342fd5_original.png",
    metric: "6 concept paths",
  },
  {
    title: "Quiet Grid Villa",
    location: "Urban infill",
    image: "/img/arch/67d22ed7-feb5-433a-aba3-2da3070fbbfd_original.png",
    metric: "18 day design sprint",
  },
];

export const processSteps = [
  {
    icon: Eye,
    title: "Read the site",
    text: "We convert context, constraints, lifestyle goals, and environmental behavior into a clear design brief.",
  },
  {
    icon: Workflow,
    title: "Generate the system",
    text: "AI-assisted option sets explore structure, daylight, privacy, circulation, and smart-home readiness.",
  },
  {
    icon: CalendarCheck,
    title: "Align the build",
    text: "The selected concept becomes a buildable package with phasing, priorities, and decision checkpoints.",
  },
];

export const featureRows = [
  { label: "Daylight comfort", value: "Modeled" },
  { label: "Energy behavior", value: "Forecast" },
  { label: "Smart zones", value: "Mapped" },
  { label: "Build phases", value: "Sequenced" },
];

export const testimonials = [
  {
    quote:
      "Rocoon made the design process feel less like guessing and more like watching the right home come into focus.",
    name: "Maya Chen",
    role: "Founder, Studio North",
  },
  {
    quote:
      "The AI options gave our builder a sharper target before the expensive decisions started.",
    name: "Julian Ross",
    role: "Owner, Signal House",
  },
  {
    quote:
      "It feels high-end, but the real advantage is clarity. Every room had a reason before it had a rendering.",
    name: "Nora Bell",
    role: "Property Developer",
  },
];

export const faqs = [
  {
    question: "Does Rocoon replace a traditional architect?",
    answer:
      "No. Rocoon is positioned as an AI-accelerated architecture studio. The AI layer speeds up exploration, analysis, and coordination while the studio keeps design judgment, client alignment, and build logic in control.",
  },
  {
    question: "Can the system handle a real site with constraints?",
    answer:
      "Yes. The workflow starts with the site's actual conditions, including slope, orientation, access, privacy, code signals, and environmental behavior, then uses those inputs to shape the concept options.",
  },
  {
    question: "Is this only for luxury homes?",
    answer:
      "The visual language is premium, but the process is useful anywhere design quality, energy behavior, smart-home planning, and build clarity matter.",
  },
  {
    question: "What do clients receive first?",
    answer:
      "The first package is a concept intelligence deck with site insights, plan directions, mood systems, risk notes, and a recommended path for design development.",
  },
];

export const auditItems = [
  {
    icon: MessageSquareText,
    title: "Lifestyle brief",
    text: "Daily routines, privacy needs, guests, work zones, storage, and future flexibility.",
  },
  {
    icon: Route,
    title: "Build path",
    text: "Key decisions, budget sensitivities, phasing, and contractor coordination risks.",
  },
  {
    icon: ShieldCheck,
    title: "Performance intent",
    text: "Comfort targets, energy priorities, smart-home layers, and resilience expectations.",
  },
];

export const footerLinks = [
  { label: "Vision", href: "#vision" },
  { label: "System", href: "#system" },
  { label: "Living AI", href: "#living-ai" },
  { label: "Homes", href: "#homes" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Start", href: "#contact" },
];

export const homeModes = [
  {
    label: "Morning",
    temperature: 69,
    energy: 42,
    privacy: "Open view",
    scene: "East glazing opens, kitchen warms up, bedrooms stay quiet.",
  },
  {
    label: "Away",
    temperature: 64,
    energy: 18,
    privacy: "Secured",
    scene: "Facade shutters close, sensors arm, battery shifts to reserve.",
  },
  {
    label: "Evening",
    temperature: 72,
    energy: 56,
    privacy: "Courtyard mode",
    scene: "Warm perimeter lighting, spa zone active, media wall dimmed.",
  },
];

export const aiMessages = [
  {
    from: "Owner",
    text: "Can the house prepare for guests without overheating the west rooms?",
  },
  {
    from: "Rocoon AI",
    text: "Guest suite set to 71F. West shades close to 62%. Courtyard lights stage at sunset.",
  },
  {
    from: "Owner",
    text: "Keep the studio bright but private for calls.",
  },
  {
    from: "Rocoon AI",
    text: "Clerestory daylight remains open. Street-facing glass switches to soft privacy.",
  },
];

export const roomControls = [
  { room: "Atrium", value: "72%", label: "Daylight" },
  { room: "Suite", value: "71F", label: "Climate" },
  { room: "Studio", value: "Private", label: "Glass" },
  { room: "Garage", value: "Armed", label: "Security" },
];

export const iconMap = {
  Activity,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Sparkles,
};
