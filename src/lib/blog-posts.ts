export interface BlogSection {
  type: 'p' | 'h2' | 'h3' | 'ul' | 'ol'
  content: string | string[]
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  category: string
}

export const posts: BlogPost[] = [
  {
    slug: 'house-painting-cost-melbourne-2025',
    title: 'How Much Does It Cost to Paint a House in Melbourne? (2025 Guide)',
    description:
      'A straight-talking breakdown of painting costs for South East Melbourne homes — interior, exterior, and full repaint. What affects the price and how to get an accurate quote.',
    date: '2025-03-10',
    readTime: '6 min read',
    category: 'Pricing',
  },
  {
    slug: 'weatherboard-painting-south-east-melbourne',
    title: 'Weatherboard Painting in South East Melbourne: A Complete Guide',
    description:
      'Everything you need to know about painting weatherboard homes in SE Melbourne — preparation, paint types, how often to repaint, and what to watch out for.',
    date: '2025-02-18',
    readTime: '7 min read',
    category: 'Exterior Painting',
  },
  {
    slug: 'choosing-paint-colours-melbourne-home',
    title: 'How to Choose the Right Paint Colours for Your Melbourne Home',
    description:
      'Practical advice from an SE Melbourne painter on picking colours that work — undertones, natural light, popular palettes, and how to avoid expensive mistakes.',
    date: '2025-01-30',
    readTime: '5 min read',
    category: 'Colour & Design',
  },
  {
    slug: 'interior-vs-exterior-painting-which-first',
    title: 'Interior vs Exterior Painting: Which Should You Do First?',
    description:
      'The right order matters more than most homeowners realise. We break down the practical reasons to sequence your repaint correctly — and when to do both together.',
    date: '2024-12-12',
    readTime: '4 min read',
    category: 'Tips & Advice',
  },
  {
    slug: 'how-to-prepare-home-for-painting',
    title: 'How to Prepare Your Home Before the Painters Arrive',
    description:
      'A simple checklist of what to do — and what NOT to do — before your SE Melbourne painting job starts. Save time and make sure the job goes smoothly.',
    date: '2024-11-20',
    readTime: '4 min read',
    category: 'Tips & Advice',
  },
]

export interface BlogPostFull extends BlogPost {
  content: BlogSection[]
}

export const postContent: Record<string, BlogSection[]> = {
  'house-painting-cost-melbourne-2025': [
    {
      type: 'p',
      content: `One of the most common questions we get at Orbit Painting Melbourne is "how much will it cost?" It's a fair question — and one that deserves a straight answer rather than a vague "it depends." This guide gives you real numbers for South East Melbourne homes, along with the factors that move the price up or down.`,
    },
    {
      type: 'h2',
      content: 'Typical Costs for Interior Painting in Melbourne (2025)',
    },
    {
      type: 'p',
      content: `For a standard interior repaint of a 3–4 bedroom home in SE Melbourne, expect to pay in the range of $3,500–$8,000. That range is wide because prep requirements and room count vary significantly. Here's how it typically breaks down:`,
    },
    {
      type: 'ul',
      content: [
        'Single bedroom: $400–$700',
        'Open-plan living and dining: $900–$1,500',
        'Full 3-bedroom interior (walls only): $3,500–$5,500',
        'Full 3-bedroom interior including ceilings, trim and doors: $5,000–$8,000',
      ],
    },
    {
      type: 'p',
      content:
        'These figures assume a standard repaint with minimal patching. If there are significant repairs — cracks, water damage, or old textured ceilings — add 15–25% for preparation work.',
    },
    {
      type: 'h2',
      content: 'Exterior Painting Costs in South East Melbourne',
    },
    {
      type: 'p',
      content:
        'Exterior painting is generally more expensive than interior, primarily because of the additional preparation required — pressure washing, sanding, filling, and priming. For SE Melbourne homes:',
    },
    {
      type: 'ul',
      content: [
        'Single-storey weatherboard (basic): $4,000–$6,500',
        'Single-storey weatherboard (full prep + prime): $5,500–$8,000',
        'Double-storey home: $7,000–$14,000',
        'Brick render repaint: $3,000–$6,000',
        'Decks and fences (per linear metre): $25–$55/m',
      ],
    },
    {
      type: 'h2',
      content: 'What Affects the Price the Most?',
    },
    {
      type: 'p',
      content:
        'In our experience painting homes across Caulfield, Oakleigh, Cheltenham, and Dandenong, these are the factors that move the price significantly:',
    },
    {
      type: 'ul',
      content: [
        'Surface condition — walls that need filling, sanding, or priming add time and cost',
        'Ceiling height — anything above 2.7m requires more time and scaffolding',
        'Number of colours — feature walls and multi-tone schemes add time',
        'Paint grade — premium Dulux Wash & Wear costs more than builder-grade but lasts far longer',
        'Access — hard-to-reach eaves or second-storey work adds to external jobs',
        'Lead paint — older homes (pre-1970) may require lead-safe preparation procedures',
      ],
    },
    {
      type: 'h2',
      content: 'How to Make Sure Your Quote Is Accurate',
    },
    {
      type: 'p',
      content:
        'The only reliable way to get an accurate price is an on-site assessment. Be cautious of painters who quote over the phone without seeing your property — prices can blow out significantly when the actual prep work is discovered on the day.',
    },
    {
      type: 'p',
      content:
        "A good painting quote should be written, itemised, and fixed-price. It should specify the prep work included, the paint brand and grade, the number of coats, and any exclusions. If a quote doesn't include these details, ask for them — or get a second opinion.",
    },
    {
      type: 'h2',
      content: 'Is It Worth Getting Multiple Quotes?',
    },
    {
      type: 'p',
      content:
        'Yes — but compare like for like. A quote that is $2,000 cheaper than others may exclude proper preparation, use low-grade paint, or plan to apply a single thin coat. When evaluating quotes, ask each painter what prep work is included, what paint they are using, and how many coats are in the price.',
    },
    {
      type: 'p',
      content:
        'At Orbit Painting Melbourne, we provide free, detailed, itemised quotes for homes across South East Melbourne — returned within 24 hours of our site visit. Call us on (03) 9547 2863 or chat with Mick to get started.',
    },
  ],

  'weatherboard-painting-south-east-melbourne': [
    {
      type: 'p',
      content: `Weatherboard homes are a defining feature of South East Melbourne's architecture — from the Victorian terraces of St Kilda to the post-war fibrous cement homes of Oakleigh and Cheltenham. Painting them correctly takes different skills and preparation than brick or render, and getting it wrong leads to peeling within a couple of years. Here's what you need to know.`,
    },
    {
      type: 'h2',
      content: 'Why Weatherboard Preparation Is Everything',
    },
    {
      type: 'p',
      content:
        'The number one reason weatherboard paint jobs fail prematurely is inadequate preparation. Moisture, movement, and chalked old paint all prevent new coats from bonding properly. On a weatherboard home, you should expect your painter to:',
    },
    {
      type: 'ul',
      content: [
        'Pressure wash the entire surface to remove chalk, dirt, and mildew',
        'Hand-sand or machine-sand to de-gloss existing paint and create a key',
        'Fill all cracks, gaps, and nail holes with flexible exterior filler',
        'Prime bare timber sections and all filled areas before topcoating',
        'Use a flexible primer rated for timber expansion and contraction',
      ],
    },
    {
      type: 'p',
      content:
        'Skipping any of these steps — particularly the priming of bare timber — is the most common source of early failure. It looks fine when wet but lifts and peels within a season.',
    },
    {
      type: 'h2',
      content: "The Right Paint for Weatherboard in Melbourne's Climate",
    },
    {
      type: 'p',
      content: `SE Melbourne's weather is hard on exterior paint — UV exposure in summer, damp winters, and the daily temperature swings that cause timber to expand and contract. The paint you choose needs to be up to this:`,
    },
    {
      type: 'ul',
      content: [
        'Use a 100% acrylic exterior topcoat — not oil-based, which chalks and cracks over time',
        'Dulux Weathershield and Taubmans Endure Exterior are the benchmarks for the SE Melbourne climate',
        'Sheen level matters: low-sheen is the standard for weatherboard bodies; semi-gloss for trims',
        'Darker colours absorb more heat and can cause movement — use flexible exterior paints and avoid applying them in direct summer sun',
      ],
    },
    {
      type: 'h2',
      content: 'How Often Should You Repaint Weatherboard in SE Melbourne?',
    },
    {
      type: 'p',
      content:
        'A properly prepared and painted weatherboard home in SE Melbourne should look good for 8–12 years before a full repaint is needed. However, you should do a visual check every 2–3 years and address any early signs of failure — particularly around windows, joins, and south-facing walls which see less sun and more moisture.',
    },
    {
      type: 'p',
      content:
        'Warning signs that it is time to repaint: chalking (paint rubs off as a powder), bubbling, cracking across the grain, or areas where paint has lifted. Catch these early and you may only need spot preparation rather than a full sand-back.',
    },
    {
      type: 'h2',
      content: 'Fibrous Cement Weatherboard: A Note',
    },
    {
      type: 'p',
      content:
        'Many post-war SE Melbourne homes have fibrous cement (FC) weatherboard rather than timber. The prep and paint requirements are similar, but FC is more brittle and drilling or cutting it can release asbestos in homes built before 1987. If you are unsure of the composition of your home\'s cladding, have it tested before any cutting or sanding work begins. A licensed painter will be aware of these requirements.',
    },
    {
      type: 'h2',
      content: 'Getting a Quote for Your Weatherboard Home',
    },
    {
      type: 'p',
      content:
        "We've painted weatherboard homes across Caulfield, Carnegie, Bentleigh, Cheltenham, and throughout the SE Melbourne corridor for over 15 years. If you'd like a free, detailed quote for your weatherboard repaint, call us on (03) 9547 2863 or chat with Mick today.",
    },
  ],

  'choosing-paint-colours-melbourne-home': [
    {
      type: 'p',
      content:
        'Choosing paint colours sounds straightforward — until you are holding 30 sample chips under changing Melbourne light and second-guessing everything. This guide cuts through the paralysis with practical advice that applies to homes across South East Melbourne.',
    },
    {
      type: 'h2',
      content: 'Start With Your Fixed Elements',
    },
    {
      type: 'p',
      content:
        'Before you look at a single colour chip, identify the fixed elements in each room — flooring, benchtops, cabinetry, and any large furniture pieces you are keeping. Your paint palette should respond to these, not fight them. Pull undertones from the flooring in particular: warm honey timber floors work with warm whites and earthy tones; cooler grey tiles suit cooler whites and greyed-out neutrals.',
    },
    {
      type: 'h2',
      content: "Understand Undertones — They're What Trips People Up",
    },
    {
      type: 'p',
      content:
        'The single most common colour mistake is choosing a "white" that clashes with the undertone of adjoining surfaces. There is no neutral white — every white has an undertone, typically warm (yellow, pink, or cream) or cool (blue, green, or grey). A white with a pink undertone next to cool-toned marble benchtops will look dingy and off. Hold your shortlisted colours against your floors, benchtops, and cabinetry in natural daylight before committing.',
    },
    {
      type: 'h2',
      content: "How Melbourne's Light Affects Colour",
    },
    {
      type: 'p',
      content:
        "Melbourne's natural light skews slightly cooler than Sydney or Brisbane. North-facing rooms get warm afternoon light that can make cool colours feel crisper. South-facing rooms — common in Melbourne's terrace homes — have consistent cool, diffused light all day, which can make already-cool whites look flat or grey. In south-facing rooms, lean warmer than you think you need to.",
    },
    {
      type: 'ul',
      content: [
        'North-facing rooms: you have more latitude — warm or cool tones both work',
        'South-facing rooms: choose warmer whites and warmer neutrals to compensate',
        'East-facing rooms: bright morning light, dimmer afternoons — test at both times',
        'West-facing rooms: harsh afternoon sun — cooler tones help balance the warmth',
      ],
    },
    {
      type: 'h2',
      content: 'Popular Colour Palettes for SE Melbourne Homes',
    },
    {
      type: 'p',
      content:
        'Based on the homes we paint across Caulfield, Oakleigh, Cheltenham, and Frankston, these are the palettes we see most often right now:',
    },
    {
      type: 'ul',
      content: [
        'Warm limewash whites (Dulux Natural White, Taubmans Whisper White) — timeless and versatile',
        'Greyed neutrals with warm undertones (Dulux Vivid White, Haymes Pure White) — clean without being clinical',
        'Deep charcoal exteriors with crisp white trim — popular on weatherboard homes in Bentleigh and Carnegie',
        'Earthy terracotta and sage combinations for feature walls — strong in 2024–2025 interiors',
      ],
    },
    {
      type: 'h2',
      content: "Test Properly — Don't Rely on Chips Alone",
    },
    {
      type: 'p',
      content:
        'Paint a test patch of at least A3 size directly on the wall — never on a separate piece of card. Look at it in morning and afternoon natural light. Live with it for two days. The chip looks completely different at scale and in your specific lighting conditions. Most paint brands sell sample pots for under $10 — use them.',
    },
    {
      type: 'h2',
      content: 'Free Colour Consulting With Every Quote',
    },
    {
      type: 'p',
      content:
        'At Orbit Painting Melbourne, colour consulting is included with every quote at no extra cost. We work with the full Dulux, Taubmans, and Haymes ranges and help you get from shortlist to final palette. Call (03) 9547 2863 or chat with Mick to get started.',
    },
  ],

  'interior-vs-exterior-painting-which-first': [
    {
      type: 'p',
      content:
        "If you're planning to repaint both the interior and exterior of your SE Melbourne home — either as a full renovation or a staged refresh — the sequence matters more than most people expect. Get it wrong and you'll either cause damage to freshly completed work, or lock yourself into a more expensive second phase.",
    },
    {
      type: 'h2',
      content: 'The Short Answer: Exterior First',
    },
    {
      type: 'p',
      content:
        'In almost every case, you should paint the exterior before the interior. There are practical reasons for this that experienced painters learn quickly:',
    },
    {
      type: 'ul',
      content: [
        'Exterior preparation — sanding, pressure washing, and filling — generates dust and debris that gets tracked inside',
        'Scaffolding and ladders on the outside can rub against interior walls if windows are opened',
        'Any exterior water damage or leaks discovered during the external job need to be fixed before sealing the inside',
        'Wet weather delays are easier to manage if the interior work has not started',
      ],
    },
    {
      type: 'h2',
      content: 'When the Interior Should Go First',
    },
    {
      type: 'p',
      content: 'There are circumstances where interior-first makes sense:',
    },
    {
      type: 'ul',
      content: [
        'You are moving in or out and the interior needs to be completed by a fixed date',
        'You are doing a staged project and the exterior is not budgeted for this year',
        'The interior has significant plaster repairs that need to cure and settle before anything else',
        'The exterior was recently done and only the interior is due for refresh',
      ],
    },
    {
      type: 'h2',
      content: 'The Case for Doing Both Together',
    },
    {
      type: 'p',
      content:
        'If you can budget for both at the same time, there are real advantages. Your painter can schedule the teams efficiently — exterior in dry weather, interior when weather closes in. You only go through the disruption once. And combined jobs often attract better pricing because setup, travel, and quoting overhead is shared across both scopes.',
    },
    {
      type: 'h2',
      content: "Melbourne's Weather and Timing",
    },
    {
      type: 'p',
      content:
        "SE Melbourne's best painting weather is March through May and September through November. Summer is viable but extreme heat (above 35°C) requires careful scheduling — paint applied in direct heat can skin over before it levels, causing surface issues. Winter exterior work is possible but requires careful monitoring of overnight temperatures and dew point. An experienced local painter will build weather contingencies into their scheduling.",
    },
    {
      type: 'p',
      content:
        'Questions about sequencing your project? Chat with Mick or call (03) 9547 2863 for honest advice and a free quote.',
    },
  ],

  'how-to-prepare-home-for-painting': [
    {
      type: 'p',
      content:
        'The painters are booked, the colour is chosen, and the job starts next week. Here is exactly what to do — and what not to do — to make the process smooth and protect your belongings.',
    },
    {
      type: 'h2',
      content: 'What to Do Before the Job Starts',
    },
    {
      type: 'ul',
      content: [
        "Clear as much furniture as possible from rooms being painted — or move it to the centre if it's too large to remove. The less furniture in the room, the faster the job.",
        'Remove wall art, mirrors, switch plates, and any wall-mounted items you do not want worked around.',
        'Take down curtains and curtain rods if the walls behind them need painting.',
        'Remove pets and plan for them to be out of the house during active painting days — fumes are more concentrated than you realise, and pets walk through wet paint.',
        'Let your painter know about any surfaces you specifically do not want painted — cabinetry, feature tiles, or fittings.',
        'Confirm parking access so the team can unload equipment without blocking neighbours.',
      ],
    },
    {
      type: 'h2',
      content: 'What Your Painter Will Handle',
    },
    {
      type: 'p',
      content:
        'A professional painting job includes preparation that most homeowners do not need to do themselves. At Orbit Painting Melbourne, we handle:',
    },
    {
      type: 'ul',
      content: [
        'Moving and protecting all remaining furniture with drop sheets',
        'Masking floors, trims, architraves, and any surfaces not being painted',
        'Filling holes, cracks, and imperfections',
        'Sanding and priming as required for the surface and paint type',
        'Full clean-up on completion — all masking removed, drop sheets packed, and the space left tidy',
      ],
    },
    {
      type: 'h2',
      content: 'What NOT to Do',
    },
    {
      type: 'ul',
      content: [
        "Don't wash walls with strong cleaners the day before — some residues affect adhesion and the painter will clean surfaces as part of their prep.",
        "Don't apply touch-up paint or spackle yourself unless you're certain it's compatible — mismatched filler can show through the final coat.",
        "Don't try to strip wallpaper without consulting the painter first — it can damage plaster and changes the job scope significantly.",
        "Don't rearrange the drop sheet protection mid-job — it's positioned deliberately.",
      ],
    },
    {
      type: 'h2',
      content: 'During the Job',
    },
    {
      type: 'p',
      content:
        "You don't need to be home the whole time, but try to be available at the start and end of each day. At the start, the painter may have clarifying questions. At the end, a quick walkthrough lets you flag anything before the next coat goes on — it's much easier to address at that stage than after the job is complete.",
    },
    {
      type: 'p',
      content:
        'Keep ventilation open — fresh air helps paint cure faster and reduces fumes. If you or any family members have respiratory sensitivities, consider staying elsewhere for the first 24 hours after a full interior repaint.',
    },
    {
      type: 'h2',
      content: 'After the Job Is Finished',
    },
    {
      type: 'p',
      content:
        'Wait at least 4 hours before placing furniture back against freshly painted walls, and 24 hours before hanging anything. Water-based paints feel dry to the touch quickly but take 2–4 weeks to fully cure — avoid scrubbing painted surfaces during this period.',
    },
    {
      type: 'p',
      content:
        "If you're in SE Melbourne and want a quote for your next interior or exterior repaint, chat with Mick or call us on (03) 9547 2863.",
    },
  ],
}

export function getPost(slug: string): BlogPostFull | undefined {
  const post = posts.find((p) => p.slug === slug)
  if (!post) return undefined
  return { ...post, content: postContent[slug] ?? [] }
}

export function getRelatedPosts(slug: string, count = 2): BlogPost[] {
  return posts.filter((p) => p.slug !== slug).slice(0, count)
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
