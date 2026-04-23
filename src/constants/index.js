import { vehicle, claim, estimate, repair, web, mobile, backend } from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "photo", title: "Work Gallery" },   // was Testimonials
  { id: "work", title: "Process" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "We Work With All Insurance Providers", icon: web },
  { title: "Certified, Experienced Technicians", icon: mobile },
  { title: "Lifetime Warranty", icon: backend },
  // Removed: Rental car claim (client said it’s not offered)
];

const services2 = [
  {
    title: "Hassle-Free Experience",
    description:
      "We turn a stressful situation into a smooth, guided repair process.",
  },
  {
    title: "Skilled PDR Specialists",
    description:
      "Our technicians are trained in paintless dent repair (PDR) techniques.",
  },
  {
    title: "Restore Your Vehicle’s Finish",
    description:
      "Remove hail dents while preserving your factory paint whenever possible.",
  },
  {
    title: "Fast Turnaround",
    description:
      "Most repairs are completed within 24–72 hours (damage severity varies).",
  },
];

const experiences = [
  {
    title: "File a Claim With Your Insurance",
    company_name: "",
    icon: claim,
    iconBg: "#111111",
    date: "Step 1",
    points: [
      "Contact your insurance provider as soon as hail damage occurs.",
      "Quick reporting helps speed up the claims process.",
      "We can guide you through the claim steps if needed.",
    ],
  },
  {
    title: "Contact Us for a Free Estimate",
    company_name: "",
    icon: estimate,
    iconBg: "#111111",
    date: "Step 2",
    points: [
      "Reach out to schedule an estimate.",
      "Send photos of the damage (WhatsApp works great) for a quick pre-estimate.",
      "Bring your vehicle in for an in-person inspection if needed.",
    ],
  },
  {
    title: "Repair Timeline: 1–7 Days",
    company_name: "",
    icon: repair,
    iconBg: "#111111",
    date: "Step 3",
    points: [
      "We start repairs as soon as your estimate is approved.",
      "Timeline depends on the severity and panel count.",
      "We keep you updated throughout the process.",
    ],
  },
  {
    title: "Pick Up Your Vehicle — Clean & Restored",
    company_name: "",
    icon: vehicle,
    iconBg: "#111111",
    date: "Step 4",
    points: [
      "Pick up your vehicle restored as close to pre-hail condition as possible.",
      "We return it clean and professionally finished.",
      "Your repair is backed by our lifetime warranty.",
    ],
  },
];

export { services, services2, experiences };