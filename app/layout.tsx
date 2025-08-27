import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Smart Contract Auditor AI',
  description: '[
  {
    "title": "Smart Contract Fitness Coach",
    "one_liner": "Get your smart contracts in shape with AI that mimics fitness coaching for security audits.",
    "why_now": "With the rapid increase of DeFi projects, the need for better security practices is paramount.",
    "novel_mechanism": "AI uses gamification to engage developers in secure coding practices through a fitness model.",
    "ai_stack": [
      "Claude/GPT",
      "Agents",
      "Embeddings"
    ],
    "edge_use_cases": [
      "Real-time feedback on contract changes",
      "Secure coding competitions",
      "Community-driven security challenges"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Create a coaching interface",
        "Implement basic audit feedback system",
        "Design gamification elements"
      ],
      "tools": [
        "Next.js",
        "Firebase",
        "Twilio",
        "n8n"
      ],
      "data_bootstrap": [
        "derive templates from industry standards",
        "public dataset of known vulnerabilities"
      ],
      "risk": [
        "low adoption due to niche market",
        "complexity of gamification integration"
      ],
      "mitigation": [
        "target specific blockchain communities for early adopters",
        "build out gamification in clear, user-friendly steps"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Gamify your audits",
        "Transform your security approach"
      ],
      "channels": [
        "ProductHunt",
        "Reddit",
        "Discord channels focused on blockchain"
      ],
      "pricing": {
        "free": "Basic fitness assessment for contracts",
        "pro": "$29/month for detailed coaching",
        "business": "$99/month for team-based assessments and analytics"
      }
    },
    "moat": [
      "community-built templates",
      "user-generated gamification content",
      "integrated with popular development environments"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 9,
      "revenue_potential": 7,
      "defensibility": 6
    },
    "total_score": 30,
    "reasoning": "Combining security audits with the dynamics of fitness coaching creates a unique niche that promotes engagement over traditional boring security processes."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}