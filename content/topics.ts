// Topic content schema for Absorbers, Emitters, Multi-QWs
export type TopicContent = {
  slug: string;
  title: string;
  subtitle: string;
  themeColor: string;
  heroFigure: {
    src: string;
    alt: string;
    captionWhat: string;
    captionWhy: string;
  };
  whyItMatters: string[];
  whatWeBuild: { title: string; description: string; figure?: string }[];
  knobs: { title: string; description: string }[];
  metrics: { title: string; description: string }[];
  projects: { title: string; claim: string; mechanism: string; consequence: string }[];
  figures: { src: string; alt: string; captionWhat: string; captionWhy: string }[];
  publicationTags: string[];
  ctaJoin: { title: string; description: string };
  ctaCollaborate: { title: string; description: string };
};

export const absorbers: TopicContent = {
  slug: "absorbers",
  title: "Absorbers",
  subtitle: "Turning light into charge: precision-engineered perovskite absorbers for solar cells and detectors.",
  themeColor: "lime",
  heroFigure: {
    src: "/pvk.png",
    alt: "Absorber schematic",
    captionWhat: "Device stack schematic",
    captionWhy: "Shows the engineered layers for optimal absorption."
  },
  whyItMatters: [
    "Solar cells need high absorption and low recombination.",
    "Large-area uniformity is a bottleneck for scaling.",
    "We design interfaces and compositions for robust performance."
  ],
  whatWeBuild: [
    { title: "Single-junction solar cell", description: "Co-evaporated perovskite stack for high Voc." },
    { title: "Mini-module", description: "Patterned interconnects for scalable power output." },
    { title: "Photodetector", description: "Optimized for fast, sensitive light detection." }
  ],
  knobs: [
    { title: "Composition", description: "Bandgap tuning by co-evaporation." },
    { title: "Thickness", description: "Precise control for optimal absorption." },
    { title: "Interfaces", description: "Engineered for low recombination." },
    { title: "Dimensionality", description: "Single vs. multi-layer stacks." },
    { title: "Patterning", description: "Mini-module layout and interconnects." },
    { title: "Stability", description: "Materials and processing for long-term operation." }
  ],
  metrics: [
    { title: "JV Curve", description: "Measures current-voltage performance." },
    { title: "EQE", description: "External quantum efficiency across spectrum." },
    { title: "PL", description: "Photoluminescence for defect analysis." },
    { title: "TRPL", description: "Time-resolved PL for carrier lifetime." },
    { title: "GIWAXS", description: "Structural analysis of films." },
    { title: "Stability", description: "Long-term device operation tests." }
  ],
  projects: [
    { title: "Voltage-first interface design", claim: "We reduce interfacial recombination.", mechanism: "Engineering transport-layer alignment.", consequence: "Higher Voc at scalable thickness." },
    { title: "Large-area composition control", claim: "Uniformity across modules.", mechanism: "Co-evaporation with process windows.", consequence: "Scalable mini-modules." },
    { title: "Mini-module layout", claim: "Efficient interconnects.", mechanism: "Patterned electrodes and stacks.", consequence: "Higher power output." }
  ],
  figures: [
    { src: "/pvk.png", alt: "Stack schematic", captionWhat: "Device stack schematic", captionWhy: "Shows engineered layers." },
    { src: "/Circle1.png", alt: "JV curve", captionWhat: "JV curve", captionWhy: "Demonstrates high Voc." },
    { src: "/Circle.svg", alt: "EQE curve", captionWhat: "EQE curve", captionWhy: "Shows spectral response." },
    { src: "/border.png", alt: "Uniformity heatmap", captionWhat: "Uniformity heatmap", captionWhy: "Visualizes large-area control." },
    { src: "/pvk.png", alt: "Stability curve", captionWhat: "Stability curve", captionWhy: "Shows device lifetime." },
    { src: "/pvk.png", alt: "Module photo", captionWhat: "Module photo", captionWhy: "Real device example." }
  ],
  publicationTags: ["absorber", "solar cell", "co-evaporation"],
  ctaJoin: { title: "Join if you like...", description: "Building and testing new absorber stacks." },
  ctaCollaborate: { title: "Collaborate if you have...", description: "Ideas for new materials or device architectures." }
};

export const emitters: TopicContent = {
  slug: "emitters",
  title: "Emitters",
  subtitle: "Perovskite light emission: from LEDs to quantum emitters, engineered for color and efficiency.",
  themeColor: "rose",
  heroFigure: {
    src: "/pvk.png",
    alt: "Emitter schematic",
    captionWhat: "LED device schematic",
    captionWhy: "Shows engineered emission layers."
  },
  whyItMatters: [
    "Efficient light emission is key for LEDs and displays.",
    "Color purity and stability are bottlenecks.",
    "We tune composition and interfaces for robust emission."
  ],
  whatWeBuild: [
    { title: "Perovskite LED", description: "Engineered for high brightness and color purity." },
    { title: "Quantum emitter", description: "Single-photon emission for quantum tech." },
    { title: "Light-emitting transistor", description: "Combines charge transport and emission." }
  ],
  knobs: [
    { title: "Composition", description: "Bandgap and color tuning." },
    { title: "Dimensionality", description: "Quantum wells and mixed stacks." },
    { title: "Interfaces", description: "Optimized for emission efficiency." },
    { title: "Stability", description: "Materials for long-term operation." },
    { title: "Patterning", description: "Pixel and device layout." },
    { title: "Encapsulation", description: "Protects emission layers." }
  ],
  metrics: [
    { title: "EL", description: "Electroluminescence for device performance." },
    { title: "PL", description: "Photoluminescence for emission quality." },
    { title: "TRPL", description: "Carrier lifetime analysis." },
    { title: "Color purity", description: "Spectral analysis." },
    { title: "Stability", description: "Operational lifetime tests." },
    { title: "Efficiency", description: "Light output per input." }
  ],
  projects: [
    { title: "Stable EL devices", claim: "We achieve stable electroluminescence.", mechanism: "Encapsulation and interface engineering.", consequence: "Long-lived LEDs." },
    { title: "Quantum emitter tuning", claim: "Single-photon emission.", mechanism: "Dimensionality and composition control.", consequence: "Quantum-ready devices." },
    { title: "Color purity enhancement", claim: "High color purity.", mechanism: "Bandgap engineering.", consequence: "Better displays and sensors." }
  ],
  figures: [
    { src: "/pvk.png", alt: "LED schematic", captionWhat: "LED schematic", captionWhy: "Shows emission layers." },
    { src: "/Circle1.png", alt: "EL curve", captionWhat: "EL curve", captionWhy: "Demonstrates device performance." },
    { src: "/Circle.svg", alt: "PL curve", captionWhat: "PL curve", captionWhy: "Shows emission quality." },
    { src: "/border.png", alt: "Color spectrum", captionWhat: "Color spectrum", captionWhy: "Visualizes color purity." },
    { src: "/pvk.png", alt: "Stability curve", captionWhat: "Stability curve", captionWhy: "Shows device lifetime." },
    { src: "/pvk.png", alt: "Device photo", captionWhat: "Device photo", captionWhy: "Real LED example." }
  ],
  publicationTags: ["emitter", "LED", "quantum"],
  ctaJoin: { title: "Join if you like...", description: "Exploring new emission mechanisms." },
  ctaCollaborate: { title: "Collaborate if you have...", description: "Ideas for quantum devices or color tuning." }
};

export const multiqws: TopicContent = {
  slug: "multiqws",
  title: "Multi-QWs",
  subtitle: "Stacked quantum wells: engineered dimensionality for advanced optoelectronic devices.",
  themeColor: "cyan",
  heroFigure: {
    src: "/pvk.png",
    alt: "Multi-QW schematic",
    captionWhat: "Quantum well stack schematic",
    captionWhy: "Shows engineered dimensionality."
  },
  whyItMatters: [
    "Quantum wells enable new device physics.",
    "Dimensionality control is a bottleneck.",
    "We build stacked structures for advanced function."
  ],
  whatWeBuild: [
    { title: "Multi-QW photodetector", description: "Stacked wells for enhanced detection." },
    { title: "Multi-QW solar cell", description: "Engineered for high efficiency." },
    { title: "Multi-QW LED", description: "Combines emission and transport." }
  ],
  knobs: [
    { title: "Dimensionality", description: "Stacking and layer control." },
    { title: "Composition", description: "Bandgap tuning in wells." },
    { title: "Interfaces", description: "Engineered for carrier transport." },
    { title: "Patterning", description: "Device layout and interconnects." },
    { title: "Stability", description: "Materials for robust operation." },
    { title: "Spectroscopy", description: "Probing quantum effects." }
  ],
  metrics: [
    { title: "PL", description: "Photoluminescence for quantum effects." },
    { title: "TRPL", description: "Carrier lifetime in wells." },
    { title: "JV", description: "Current-voltage for device performance." },
    { title: "EQE", description: "Quantum efficiency across wells." },
    { title: "GIWAXS", description: "Structural analysis of stacks." },
    { title: "Stability", description: "Operational lifetime tests." }
  ],
  projects: [
    { title: "Stacked QW photodetector", claim: "Enhanced detection via stacking.", mechanism: "Quantum well engineering.", consequence: "Higher sensitivity." },
    { title: "Multi-QW solar cell", claim: "Efficiency boost from dimensionality.", mechanism: "Layer and composition control.", consequence: "Better power output." },
    { title: "Multi-QW LED", claim: "Combined emission and transport.", mechanism: "Stacked wells and interfaces.", consequence: "Advanced optoelectronic function." }
  ],
  figures: [
    { src: "/pvk.png", alt: "QW schematic", captionWhat: "QW schematic", captionWhy: "Shows stacked wells." },
    { src: "/Circle1.png", alt: "PL curve", captionWhat: "PL curve", captionWhy: "Demonstrates quantum effects." },
    { src: "/Circle.svg", alt: "JV curve", captionWhat: "JV curve", captionWhy: "Shows device performance." },
    { src: "/border.png", alt: "EQE curve", captionWhat: "EQE curve", captionWhy: "Visualizes quantum efficiency." },
    { src: "/pvk.png", alt: "Stability curve", captionWhat: "Stability curve", captionWhy: "Shows device lifetime." },
    { src: "/pvk.png", alt: "Device photo", captionWhat: "Device photo", captionWhy: "Real stacked device example." }
  ],
  publicationTags: ["multi-qw", "quantum well", "stack"],
  ctaJoin: { title: "Join if you like...", description: "Building and testing quantum well stacks." },
  ctaCollaborate: { title: "Collaborate if you have...", description: "Ideas for new quantum architectures." }
};
