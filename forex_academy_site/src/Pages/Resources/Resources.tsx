import React, { useState } from "react";
import { motion } from "framer-motion";
import FeaturedResource from "../../components/Resources/FeaturedResource";
import ResourceFilter from "../../components/Resources/ResourceFilter";
import ResourceGrid from "../../components/Resources/ResourceGrid";
import EXnessPromo from "../../components/Resources/EXnessPromo";



const ResourcesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const resources = [
    {
      id: 1,
      title: "Mastering Market Structure",
      category: "Market Structure",
      author: "Eugene Afriyie",
      date: "2025-10-18",
      description:
        "Understand how to read the market like a pro with practical examples and chart breakdowns.",
      fullText: `
### Understanding Market Structure

Market structure is the foundation of all trading decisions. It represents the way price moves between highs and lows, forming trends and ranges.

Professional traders identify **higher highs** and **higher lows** to determine bullish momentum — and the opposite for bearish setups.

#### Key Concepts:
- Break of structure (BOS)
- Change of character (CHOCH)
- Liquidity grabs
- Institutional order flow

By mastering market structure, you gain clarity on what the market is doing — instead of guessing.

![Example Chart](https://images.unsplash.com/photo-1581093588401-22a3f8f2435c?w=1400)
      `,
      image:
        "https://images.unsplash.com/photo-1581093588401-22a3f8f2435c?w=1200&h=700&fit=crop",
    },
    {
      id: 2,
      title: "Risk Management Webinar",
      category: "Videos",
      author: "RoadMoney Team",
      date: "2025-10-10",
      description:
        "Watch a complete breakdown of professional risk management strategies for consistent profits.",
      link: "https://youtube.com/watch?v=dQw4w9WgXcQ",
      video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      image:
        "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?w=1200&h=700&fit=crop",
    },
    {
      id: 3,
      title: "Trading Psychology E-Book",
      category: "Guides",
      author: "RoadMoney Mentor",
      date: "2025-09-30",
      description:
        "Build mental discipline, stay focused, and overcome emotional trading with this free e-book.",
      fullText: `
### Mastering Trading Psychology

Emotions are a trader’s greatest enemy. Fear, greed, and impatience destroy consistency.

This guide teaches:
- How to build emotional resilience
- Practical journaling methods
- How to detach your identity from results
- The role of routine in discipline

![Journal Example](https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1400)
      `,
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&h=700&fit=crop",
    },
    {
  id: 101, // unique number not used elsewhere
  title: "Accra In-Person Trading Academy Launch",
  category: "Academy News",
  description:
    "Our first in-person trading academy officially opened in Accra — bringing structure, mentorship, and real community-driven learning to the heart of Ghana.",
  fullText: `
## The Beginning of a New Chapter in Trading Education 🇬🇭

After months of planning and community anticipation, we’ve officially launched **RoadMoney’s first in-person trading academy in Accra**.

This marks the beginning of a new wave of structured, hands-on trading mentorship designed to help aspiring traders grow faster, smarter, and together.

### What Makes the Accra Academy Special

- **Live Sessions:** Interactive classes with real-time chart analysis and feedback from mentors.  
- **Community Learning:** Work and grow with traders at all stages of development.  
- **Practical Application:** Focused on execution and consistency — not just theory.  
- **Institutional Insights:** Learn how professionals approach liquidity, risk, and market structure.  

> “It’s more than just a trading school — it’s a culture of disciplined traders,”  
> — *RoadMoney Mentorship Team*

### Highlights from the Launch Event

Our launch session featured:
- A deep dive into market structure and order flow.
- Live Q&A and trade reviews.
- Networking among the Ghanaian trading community.

We’re beyond excited to build this foundation for growth, discipline, and mastery in the African trading ecosystem.

### Join Our Next Session

We’re opening limited slots for our next **post-hoc mentorship sessions** — open to all levels.  
Interested participants can register via our mentorship portal.

📍 **Location:** RoadMoney Academy, East Legon, Accra  
🗓 **Next Session:** Coming Soon  

---

Stay tuned for more post-hoc insights and video recaps from our first-ever in-person academy.
`,
  image:
    "https://res.cloudinary.com/djeorsh5d/image/upload/v1760408679/IMG_20251014_022039_477_ri1daj.jpg",
  video: "https://www.youtube.com/watch?v=8v8aO6cN-lc", // optional if you have one
  link: "/mentorship#in-person",
  author: "RoadMoney Mentorship Team",
  date: "2025-10-25",
},
 {
    id: 1,
    title: "The Psychology of a Consistent Trader",
    category: "Trading Psychology",
    description:
      "Learn how discipline, patience, and emotional control separate the consistent trader from the impulsive one.",
    author: "RoadMoney Team",
    date: "2025-09-12",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=1200&h=600&fit=crop",
    fullText: `
### The Psychology of a Consistent Trader

Trading is **90% mindset and 10% skill**. Most traders fail not because of their strategy, but because of their emotions. The real battle isn’t on the charts — it’s within your own mind.

![Trader Focus](https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=1200&h=600&fit=crop)

Consistency starts when you stop chasing setups and start following your trading rules. Fear, greed, and doubt are silent killers that destroy even the best analysis.

To grow as a trader, you must:
- Accept that losses are part of the business  
- Focus on process over profit  
- Learn to wait — patience pays profits  

![Calm Trading](https://images.unsplash.com/photo-1620662738106-86ad8df7c9ab?w=1000&h=600&fit=crop)

Once you master your emotions, everything else becomes mechanical.  
Remember, **discipline isn’t built when you win — it’s proven when you lose**.
`,
  },
  {
    id: 2,
    title: "Prop Firm Mastery: How to Pass & Manage Funded Accounts",
    category: "Guides",
    description:
      "Discover how to pass prop firm challenges, manage risk, and build consistent profitability with funded accounts.",
    author: "RoadMoney Academy",
    date: "2025-08-05",
    image: "https://images.unsplash.com/photo-1554224155-3a589db1a3f2?w=1200&h=600&fit=crop",
    fullText: `
### Prop Firm Mastery: How to Pass & Manage Funded Accounts

The prop firm era has opened doors for traders worldwide — offering access to **six-figure capital** without risking personal funds.

![Prop Firm Dashboard](https://images.unsplash.com/photo-1554224155-3a589db1a3f2?w=1200&h=600&fit=crop)

But most traders fail not because they lack skill, but because they lack structure.  
Passing a challenge requires more **discipline than prediction**.

#### Golden Rules for Passing:
- Risk **1–2% per trade**, never more  
- Treat the challenge like it’s live capital  
- Avoid revenge trading and overtrading  

![Trading Desk Setup](https://images.unsplash.com/photo-1611095564986-6829e5f7a03d?w=1000&h=600&fit=crop)

Once funded, your focus must shift to **capital protection**. Small, consistent profits build long-term trust and growth.
`,
  },
  {
    id: 3,
    title: "How Forex Is Creating a New Digital Middle Class in Africa",
    category: "Articles",
    description:
      "Discover how the forex industry is empowering Africa’s youth and reshaping financial independence across the continent.",
    author: "RoadMoney Team",
    date: "2025-07-15",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=600&fit=crop",
    fullText: `
### How Forex Is Creating a New Digital Middle Class in Africa

Across Africa, young people are discovering that **financial freedom** doesn’t require a passport — only a skill.

![African Traders](https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=600&fit=crop)

The forex market provides access to a **borderless global economy**.  
From the busy streets of Accra to the tech hubs of Lagos, youth are learning to trade currencies, earn in USD, and control their own time.

Education and mentorship have become the new gold mines — not shortcuts.  
With the right guidance, a laptop, and an internet connection, trading can replace job scarcity with real opportunity.

![Empowerment & Growth](https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=1200&h=600&fit=crop)

Forex is not a get-rich-quick scheme — it’s a **gateway to empowerment**.  
Africa is rising, and traders are leading the digital revolution.
`,
  },
  {
    id: 7,
    title: "Why Our Academy Is the Best Choice for Traders",
    category: "Academy",
    description:
      "Experience premium mentorship, real-world analysis, and community-driven growth with the RoadMoney Academy.",
    author: "RoadMoney",
    date: "2025-09-25",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=1200&h=600&fit=crop",
    fullText: `
### Why RoadMoney Academy Is the Best Choice for Traders

Our academy was built with **one mission** — to bridge the gap between learning and earning.  
We combine structured education, mentorship, and live analysis to help traders build true skill.

![Academy Session](https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=600&fit=crop)

#### What Makes Us Different:
- Real mentors with years of market experience  
- In-person and online mentorship sessions  
- Access to community Q&A and trade reviews  

Every student gets personal feedback and tailored growth plans.

![In-Person Training](https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1000&h=600&fit=crop)

We’re not just teaching trading — we’re **building a generation of confident, independent traders**.
`,
  },
  {
    id: 9,
    title: "Massive Giveaway for Exness Traders",
    category: "Announcements",
    description:
      "Join our exciting giveaway — win a $200k prop firm account and a $1000 cash bonus by trading with Exness!",
    author: "RoadMoney",
    date: "2025-10-15",
    image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?w=1200&h=600&fit=crop",
    fullText: `
### Massive Giveaway: Win a $200k Prop Account + $1000 Bonus

I’ll be doing more **massive giveaways** soon — and this time, it’s big!  
All you have to do is trade with **Exness Broker** using the official link below.

[Register Here](https://one.exnesslink.com/a/ttgurtgu)

![Exness Giveaway](https://images.unsplash.com/photo-1622260875324-ec0b4b8ff59d?w=1200&h=600&fit=crop)

#### How to Enter:
1. Use the link above to register  
2. Verify your account  
3. Trade at least one **standard lot**  

A **random lucky winner** will receive a **$200,000 prop account** and a **$1000 cash bonus**.

![Trading Success](https://images.unsplash.com/photo-1581092795360-fd1ca4f7ef36?w=1000&h=600&fit=crop)

🔥 Keep trading, keep learning — your big break could be one trade away.
`,
  },
  {
    id: 10,
    title: "The Power of Fundamental Analysis in Forex",
    category: "Education",
    description:
      "Learn why understanding economic fundamentals gives you a real edge in the forex markets.",
    author: "RoadMoney Academy",
    date: "2025-09-08",
    image: "https://images.unsplash.com/photo-1554224155-3a589db1a3f2?w=1200&h=600&fit=crop",
    fullText: `
### The Power of Fundamental Analysis in Forex

While technical analysis helps you spot entries, **fundamental analysis** tells you *why* the market moves.

![Economic Data](https://images.unsplash.com/photo-1581093588401-22a3f8f2435c?w=1200&h=600&fit=crop)

Knowing when central banks release data, understanding GDP reports, and following global sentiment are the keys to trading with confidence.

#### What to Focus On:
- Interest rate decisions  
- Inflation data (CPI, PPI)  
- Employment and manufacturing reports  

![Charts and Reports](https://images.unsplash.com/photo-1634149289858-30cde104dfc1?w=1000&h=600&fit=crop)

When combined with technicals, fundamentals turn your trades from guesses into calculated, data-driven decisions.
`,
  },




  {
  id: 2,
  title: "Prop Firm Mastery: How to Pass & Manage Funded Accounts",
  category: "Guides",
  description:
    "Passing a prop firm challenge is not luck — it’s structure, patience, and consistency. Here’s the roadmap to securing your funded seat.",
  author: "RoadMoney Academy",
  date: "2025-08-05",
  image: "https://images.unsplash.com/photo-1554224155-3a589db1a3f2?w=1200&h=600&fit=crop",
  fullText: `
### Prop Firm Mastery: How to Pass & Manage Funded Accounts

Prop firms have changed the game.  
Now, you don’t need to be rich to trade big — you just need to trade **right**.

![Prop Firm Dashboard](https://images.unsplash.com/photo-1554224155-3a589db1a3f2?w=1200&h=600&fit=crop)

But here’s the truth — 90% of traders fail prop challenges not because they lack skill, but because they lack **structure**.  
They chase targets, not setups.  
They overtrade instead of **planning**.

To pass your challenge:
1. Trade only your **A+ setups**.  
2. Keep risk per trade below **2%**.  
3. Remember: it’s a marathon, not a race.  

Once you’re funded, your mindset must shift from *profit-seeking* to *capital protection*.  

![Prop Firm Dashboard](https://images.unsplash.com/photo-1554224155-3a589db1a3f2?w=1200&h=600&fit=crop)

Funded trading isn’t about flexing — it’s about **proving consistency**.  
Every small, smart move compounds into financial freedom.  
The key? **Discipline beats desire every single time.**
`,
},

{
  id: 11,
  title: "Our First Live Trading Academy in Accra – The Movement Has Begun",
  category: "Announcements",
  description:
    "A dream turned into reality — we’ve officially opened our first in-person trading academy in Accra, Ghana. The future of mentorship just got real.",
  author: "RoadMoney",
  date: "2025-10-20",
  image: "https://images.unsplash.com/photo-1590608897129-79da98d1590c?w=1200&h=600&fit=crop",
  fullText: `
### Our First Live Trading Academy in Accra – The Movement Has Begun 🇬🇭🔥

What started as a dream has finally become reality.  
**RoadMoney Academy** has officially opened its first **in-person trading studio in Accra**, Ghana — and this is only the beginning.

![Accra Academy Opening](https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&h=600&fit=crop)

When we began mentoring traders online, we knew one thing — Africa had the talent, the hunger, and the fire to compete on a global level.  
All we needed was the right space — a **home for traders**, where discipline, skill, and ambition could grow together.

Now, that home exists.  
From our Accra academy, traders experience the real energy of the market — with live training sessions, prop challenges, and market breakdowns led by top mentors.

![Live Session](https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=600&fit=crop)

Every week, we see young traders walk in with doubt — and walk out with confidence.  
We’ve created more than a mentorship — this is a **movement**.  
A space where you don’t just learn how to trade…  
You learn how to **win**, how to stay disciplined, and how to build a future.

> This academy is not for the lazy. It’s for the hungry — the ones who believe their story is bigger than their circumstances.

![Accra Team](https://images.unsplash.com/photo-1626378725053-7cf8fbc68f3b?w=1200&h=600&fit=crop)

To everyone who has been part of this journey — this is **your win** too.  
We’re building history right here in Ghana, and soon we’ll be expanding across Africa.

Welcome to the next level of trading education.  
Welcome to **RoadMoney Academy, Accra** — where traders become legends.
`,
}






    // add more resources as needed
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19] text-white font-montserrat">
      {/* Hero */}
      <section className="relative py-24 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[#00c896] mb-4">
            Resources & Learning Hub
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
            Explore in-depth articles, trading guides, webinar replays and announcements crafted to elevate your trading journey.
          </p>
        </motion.div>

        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(0,200,150,0.05),transparent_70%)] -z-10" />
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <FeaturedResource />
        <EXnessPromo />

        <ResourceFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <ResourceGrid
          resources={resources}
          selectedCategory={selectedCategory}
        />
      </div>
    </main>
  );
};

export default ResourcesPage;
