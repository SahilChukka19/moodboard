// Tags are designed so each persona wins clearly for its intended selection.
//
// Tag → Persona mapping:
//  "cozy"       → Cozy Systems Designer (primary)
//  "romantic"   → Cozy Systems Designer (primary)
//  "sweet"      → Cozy Systems Designer (primary)
//  "literary"   → Cozy Systems Designer / Nostalgic Modernist
//  "nostalgic"  → Nostalgic Modernist (primary) / Cozy Systems Designer
//  "artistic"   → Creative Multidisciplinary Mind (primary)
//  "cinematic"  → Creative Multidisciplinary Mind (primary)
//  "explorer"   → Indie Explorer Designer (primary)
//  "wanderer"   → Indie Explorer Designer / Nostalgic Modernist
//  "mixed"      → Playful Structured Thinker (fallback - broad triggers)

export const ELEMENTS = [
  {
    id: "iced_coffee",
    label: "Iced Coffee",
    image: "/icons/0e90c5f5a457ba6e56531e377025de3f.png",
    tag: "nostalgic",
    alt: "Iced coffee mug",
  },
  {
    id: "cupcake",
    label: "Cupcake",
    image: "/icons/1da1b61f9502715114a02449440e1a0e.png",
    tag: "sweet",
    alt: "Strawberry cupcake",
  },
  {
    id: "guitar",
    label: "Guitar",
    image: "/icons/2ec2dec01395535afa705b932da5134f.png",
    tag: "artistic",
    alt: "Red electric guitar",
  },
  {
    id: "books",
    label: "Books",
    image: "/icons/05f3dc1effff48ec2d971494fd696602.png",
    tag: "literary",
    alt: "Stack of books",
  },
  {
    id: "main_character",
    label: "Main Character",
    image: "/icons/5af009f7720a3497df338808b23b4987.png",
    tag: "cinematic",
    alt: "Main character clapperboard",
  },
  {
    id: "tent",
    label: "Camp Tent",
    image: "/icons/9ccf8b2a4f519db64e2a3c090be1b27e.png",
    tag: "explorer",
    alt: "Camping tent",
  },
  {
    id: "chai_biscuit",
    label: "Chai Biscuit",
    image: "/icons/53addc6ee236f79d4a6ce4ae2e3f6dfd.png",
    tag: "nostalgic",
    alt: "Plant pot and Parle-G biscuits",
  },
  {
    id: "coconut",
    label: "Coconut Sip",
    image: "/icons/89fc268d3a5ae2d03d5725047ffaa389.png",
    tag: "sweet",
    alt: "Coconut drink with hibiscus flower",
  },
  {
    id: "jeep",
    label: "Off-road Jeep",
    image: "/icons/90cdf3e5d8d128814b939195a0d07e49.png",
    tag: "explorer",
    alt: "Green off-road SUV",
  },
  {
    id: "roses",
    label: "Roses",
    image: "/icons/606f2e4e4a6664c8c9d4a9500c5b7098.png",
    tag: "romantic",
    alt: "Red roses bouquet",
  },
  {
    id: "mountain",
    label: "Mountain",
    image: "/icons/642ea44b803dd595fd5361c9e4fb9ec9.png",
    tag: "explorer",
    alt: "Snowy mountain peak",
  },
  {
    id: "headphones",
    label: "Headphones",
    image: "/icons/859b9734cb69abdd805778ac2f4d96b7.png",
    tag: "artistic",
    alt: "Star-shaped headphones",
  },
  {
    id: "bookshelf",
    label: "Bookshelf",
    image: "/icons/b7720feebe926fa44bac5ffbf845af75.png",
    tag: "literary",
    alt: "Colourful bookshelf",
  },
  {
    id: "pav_bhaji",
    label: "Pav Bhaji",
    image: "/icons/c8eab6fac3b01de7adcd05323821aeb9.png",
    tag: "nostalgic",
    alt: "Pav bhaji comfort food",
  },
  {
    id: "palette",
    label: "Art Palette",
    image: "/icons/c985c96fbcade47fdece54c618e6b934.png",
    tag: "artistic",
    alt: "Paint palette",
  },
  {
    id: "rickshaw",
    label: "Auto Rickshaw",
    image: "/icons/ef0b1627af1e6ec2c39a1b5f5b99892d.png",
    tag: "wanderer",
    alt: "Auto rickshaw",
  },
  {
    id: "green_tea",
    label: "Green Tea",
    image: "/icons/f806412ba5a50bb384dcc74acad3d3dc.png",
    tag: "cozy",
    alt: "Cup of green tea",
  },
];

// Structured persona copy for the ResultModal.
// copy.hook    → opening poetic line (serif, large)
// copy.body    → short punchy lines (rendered as stacked <p> tags)
// copy.context → one or two connector sentences
// copy.traits  → ✨ bullet points shown as pills
export const RESULTS = [
  {
    id: "cozy_systems",
    title: "The Cozy Systems Designer",
    triggerTags: ["cozy", "romantic", "sweet", "literary", "nostalgic"],
    emoji: "☕",
    gradient: "linear-gradient(135deg, #FDF0EC 0%, #F5E0E8 100%)",
    copy: {
      hook: "You design like a Sunday morning.",
      body: ["Warm.", "Inviting.", "Thoughtful."],
      context:
        "You believe UI should feel human. Soft visuals, clean hierarchy, emotional clarity. You don't just solve problems — you make people feel safe while using the product.",
      traits: ["Calm layouts", "Generous spacing", "Emotional microcopy"],
    },
  },
  {
    id: "creative_multi",
    title: "The Creative Multidisciplinary Mind",
    triggerTags: ["artistic", "cinematic"],
    emoji: "🎨",
    gradient: "linear-gradient(135deg, #EDE8F5 0%, #F5E8ED 100%)",
    copy: {
      hook: "Designer by profession. Artist by instinct.",
      body: ["You think in mood, rhythm, and composition.", "You don't see screens.", "You see scenes."],
      context:
        "Your interfaces have pacing. Your case studies have storytelling. Your layouts have flow. You treat UX like art direction.",
      traits: ["Pacing & rhythm", "Cinematic UX", "Mood-driven design"],
    },
  },
  {
    id: "indie_explorer",
    title: "The Indie Explorer Designer",
    triggerTags: ["explorer", "wanderer"],
    emoji: "🧭",
    gradient: "linear-gradient(135deg, #E8F0E8 0%, #E8EEF5 100%)",
    copy: {
      hook: "You design like you travel.",
      body: ["Curious.", "Adaptive.", "Observant."],
      context:
        "You're not afraid of complexity. You explore systems deeply before building them. You enjoy solving real-world friction.",
      traits: ["Prototype boldly", "Question defaults", "Build with purpose"],
    },
  },
  {
    id: "nostalgic_modernist",
    title: "The Nostalgic Modernist",
    triggerTags: ["nostalgic", "wanderer", "literary"],
    emoji: "🛺",
    gradient: "linear-gradient(135deg, #F5EFE0 0%, #EDE0D4 100%)",
    copy: {
      hook: "You romanticize everyday life.",
      body: ["Local textures.", "Familiar details.", "Cultural warmth."],
      context:
        "But you package it in modern structure. You blend memory with minimalism, culture with clean UI. Your work feels personal — not generic.",
      traits: ["Memory × Minimalism", "Culture × Clean UI", "Feels personal"],
    },
  },
  {
    id: "playful_thinker",
    title: "The Playful Structured Thinker",
    triggerTags: ["sweet", "artistic", "cozy", "nostalgic", "romantic"],
    emoji: "💿",
    gradient: "linear-gradient(135deg, #E8F0F5 0%, #F0F5E8 100%)",
    copy: {
      hook: "Engineer brain. Designer heart. Zine soul.",
      body: ["Fun visuals.", "Clear hierarchy.", "Strong systems."],
      context:
        "You like playful UI — but everything has logic underneath. You design for delight AND usability. Every hover state is considered. Every transition is intentional.",
      traits: ["Playful UI", "Systems thinking", "Delight + usability"],
    },
  },
];
