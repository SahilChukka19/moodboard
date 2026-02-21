// Each element now has a `tags` array — multiple dimensions per item.
// Tag dimensions: cozy | structured | nostalgic | creative | playful | explorer
//
// These drive the priority-ordered scoring in calculateVibe.js

export const ELEMENTS = [
  {
    id: "iced_coffee",
    label: "Iced Latte",
    image: "/icons/0e90c5f5a457ba6e56531e377025de3f.png",
    tags: ["cozy", "playful"],
    alt: "Iced coffee latte mug",
  },
  {
    id: "cupcake",
    label: "Cupcake",
    image: "/icons/1da1b61f9502715114a02449440e1a0e.png",
    tags: ["cozy", "playful"],
    alt: "Strawberry cupcake",
  },
  {
    id: "guitar",
    label: "Guitar",
    image: "/icons/2ec2dec01395535afa705b932da5134f.png",
    tags: ["creative"],
    alt: "Red electric guitar",
  },
  {
    id: "books",
    label: "Books",
    image: "/icons/05f3dc1effff48ec2d971494fd696602.png",
    tags: ["structured", "nostalgic"],
    alt: "Stack of books",
  },
  {
    id: "main_character",
    label: "Main Character",
    image: "/icons/5af009f7720a3497df338808b23b4987.png",
    tags: ["creative"],
    alt: "Main character clapperboard",
  },
  {
    id: "tent",
    label: "Camp Tent",
    image: "/icons/9ccf8b2a4f519db64e2a3c090be1b27e.png",
    tags: ["explorer"],
    alt: "Camping tent",
  },
  {
    id: "chai_biscuit",
    label: "Chai & Biscuit",
    image: "/icons/53addc6ee236f79d4a6ce4ae2e3f6dfd.png",
    tags: ["cozy", "nostalgic"],
    alt: "Plant pot and Parle-G biscuits",
  },
  {
    id: "coconut",
    label: "Coconut Sip",
    image: "/icons/89fc268d3a5ae2d03d5725047ffaa389.png",
    tags: ["playful", "cozy"],
    alt: "Coconut drink with hibiscus flower",
  },
  {
    id: "jeep",
    label: "Off-road Jeep",
    image: "/icons/90cdf3e5d8d128814b939195a0d07e49.png",
    tags: ["explorer"],
    alt: "Green off-road SUV",
  },
  {
    id: "roses",
    label: "Roses",
    image: "/icons/606f2e4e4a6664c8c9d4a9500c5b7098.png",
    tags: ["cozy"],
    alt: "Red roses bouquet",
  },
  {
    id: "mountain",
    label: "Mountain",
    image: "/icons/642ea44b803dd595fd5361c9e4fb9ec9.png",
    tags: ["explorer"],
    alt: "Snowy mountain peak",
  },
  {
    id: "headphones",
    label: "Headphones",
    image: "/icons/859b9734cb69abdd805778ac2f4d96b7.png",
    tags: ["creative", "structured"],
    alt: "Star-shaped headphones",
  },
  {
    id: "bookshelf",
    label: "Bookshelf",
    image: "/icons/b7720feebe926fa44bac5ffbf845af75.png",
    tags: ["structured"],
    alt: "Colourful bookshelf",
  },
  {
    id: "pav_bhaji",
    label: "Pav Bhaji",
    image: "/icons/c8eab6fac3b01de7adcd05323821aeb9.png",
    tags: ["nostalgic"],
    alt: "Pav bhaji comfort food",
  },
  {
    id: "palette",
    label: "Art Palette",
    image: "/icons/c985c96fbcade47fdece54c618e6b934.png",
    tags: ["creative", "playful"],
    alt: "Paint palette",
  },
  {
    id: "rickshaw",
    label: "Auto Rickshaw",
    image: "/icons/ef0b1627af1e6ec2c39a1b5f5b99892d.png",
    tags: ["nostalgic", "explorer"],
    alt: "Auto rickshaw",
  },
  {
    id: "green_tea",
    label: "Green Tea",
    image: "/icons/f806412ba5a50bb384dcc74acad3d3dc.png",
    tags: ["cozy", "structured"],
    alt: "Cup of green tea",
  },
];

// 8 Personas — checked in priority order inside calculateVibe.js
export const RESULTS = [
  {
    id: "indie_explorer",
    title: "The Indie Explorer",
    emoji: "🚙",
    gradient: "linear-gradient(135deg, #E4EDE4 0%, #D8E8EE 100%)",
    copy: {
      hook: "You approach UX like an expedition.",
      body: ["Curious.", "Adaptive.", "Fearless."],
      context:
        "You question defaults. You test paths. You're comfortable inside complexity. You don't just follow the map — you draw it.",
      traits: ["Prototype boldly", "Question defaults", "Build with purpose"],
    },
  },
  {
    id: "cozy_product",
    title: "The Cozy Product Thinker",
    emoji: "☕",
    gradient: "linear-gradient(135deg, #FDF0EC 0%, #FAE8D4 100%)",
    copy: {
      hook: "You design for comfort and trust.",
      body: ["Soft edges.", "Human tone.", "Thoughtful spacing."],
      context:
        "You prioritize how users feel, not just what they click. Safety is a design decision. Warmth is a feature. You build products people want to come back to.",
      traits: ["Comfort is a feature", "Human-first UX", "Emotional clarity"],
    },
  },
  {
    id: "flow_state",
    title: "The Flow State Designer",
    emoji: "🎧",
    gradient: "linear-gradient(135deg, #E8E4F0 0%, #D8E4EE 100%)",
    copy: {
      hook: "You think in rhythm and alignment.",
      body: ["Interactions matter.", "Pacing matters.", "Micro details matter."],
      context:
        "Your work flows — nothing feels accidental. You obsess over the invisible: easing curves, transition timing, the exact right amount of whitespace.",
      traits: ["Design is timing", "Invisible craft", "Obsessive polish"],
    },
  },
  {
    id: "moodboard_maximalist",
    title: "The Moodboard Maximalist",
    emoji: "🎨",
    gradient: "linear-gradient(135deg, #F0E8F5 0%, #F5E8EC 100%)",
    copy: {
      hook: "You design through feeling first.",
      body: ["Layers.", "Expression.", "Visual richness."],
      context:
        "Nothing flat or boring. You bring personality into every interface. You make design feel alive — layered with intent, rich with character, impossible to mistake for generic.",
      traits: ["If it sparks joy, it belongs", "Personality > polish", "Visual richness"],
    },
  },
  {
    id: "nostalgic_modernist",
    title: "The Nostalgic Modernist",
    emoji: "🛺",
    gradient: "linear-gradient(135deg, #F5EFE0 0%, #EDE0D4 100%)",
    copy: {
      hook: "You romanticize everyday life — but build with precision.",
      body: ["Memory.", "But modern."],
      context:
        "Cultural textures meet clean layout thinking. Your UI feels personal, not generic. You blend local warmth with structured clarity — and make it feel completely natural.",
      traits: ["Memory × Minimalism", "Culture × Clean UI", "Personal, not generic"],
    },
  },
  {
    id: "playful_structured",
    title: "The Playful Structured Thinker",
    emoji: "💿",
    gradient: "linear-gradient(135deg, #E8F0F5 0%, #F5F0E8 100%)",
    copy: {
      hook: "You balance charm with clarity.",
      body: ["Fun.", "But on purpose."],
      context:
        "You enjoy visual delight — but never sacrifice hierarchy. Your work is expressive yet precise. You know exactly when to add a playful detail and when to pull back.",
      traits: ["Expressive + precise", "Hierarchy first", "Delight with structure"],
    },
  },
  {
    id: "soft_systems",
    title: "The Soft Systems Designer",
    emoji: "🌿",
    gradient: "linear-gradient(135deg, #F0F5EC 0%, #EDF5F0 100%)",
    copy: {
      hook: "You design with softness — but think in systems.",
      body: ["Warm surface.", "Solid foundation."],
      context:
        "Your work feels calm, intentional, and emotionally intelligent. You value clarity, breathing space, and thoughtful structure. The warmth you bring is never decoration — it's the architecture.",
      traits: ["Calm layouts", "Generous spacing", "Emotional intelligence"],
    },
  },
  {
    id: "story_driven",
    title: "The Story-Driven Builder",
    emoji: "🎬",
    gradient: "linear-gradient(135deg, #EEE8E4 0%, #E4EAF0 100%)",
    copy: {
      hook: "You don't design screens. You design journeys.",
      body: ["UX is narrative."],
      context:
        "Each interaction has intention and emotional build-up. You think about what came before the click and what comes after. Your work moves people — literally and emotionally.",
      traits: ["Every screen tells a story", "Intentional flow", "Emotional build-up"],
    },
  },
];
