/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from "react"
import type { PropsWithChildren } from "react"
import type { Badge } from "../data/types"

type BadgeContextValue = { earnedBadges: number[]; addBadge: (badgeId: number) => boolean; checkAndAwardBadges: (completedCount: number, totalCount?: number) => Badge[]; getBadgeInfo: (badgeId: number) => Badge | undefined; getEarnedBadgesList: () => Badge[]; BADGES: Badge[] }
const BadgeContext = createContext<BadgeContextValue | null>(null)

export const BADGES: Badge[] = [
  {
    id: 1,
    name: "Ä°lk AdÄ±m (First Step)",
    description: "1 gÃ¶revi tamamla (Complete 1 task)",
    icon: "ğŸ¯",
    threshold: 1,
    category: "completions"
  },
  {
    id: 2,
    name: "Bronz BaÅŸarÄ± (Bronze Achievement)",
    description: "5 gÃ¶revi tamamla (Complete 5 tasks)",
    icon: "ğŸ¥‰",
    threshold: 5,
    category: "completions"
  },
  {
    id: 3,
    name: "GÃ¼mÃ¼ÅŸ BaÅŸarÄ± (Silver Achievement)",
    description: "10 gÃ¶revi tamamla (Complete 10 tasks)",
    icon: "ğŸ¥ˆ",
    threshold: 10,
    category: "completions"
  },
  {
    id: 4,
    name: "AltÄ±n BaÅŸarÄ± (Gold Achievement)",
    description: "20 gÃ¶revi tamamla (Complete 20 tasks)",
    icon: "ğŸ¥‡",
    threshold: 20,
    category: "completions"
  },
  {
    id: 5,
    name: "Elmas BaÅŸarÄ± (Diamond Achievement)",
    description: "50 gÃ¶revi tamamla (Complete 50 tasks)",
    icon: "ğŸ’",
    threshold: 50,
    category: "completions"
  },
  {
    id: 6,
    name: "HÄ±z UstasÄ± (Speed Master)",
    description: "2 gÃ¶revi tamamla (Complete 2 tasks)",
    icon: "âš¡",
    threshold: 2,
    category: "speed"
  },
  {
    id: 7,
    name: "HÄ±z Åampiyonu (Speed Champion)",
    description: "5 gÃ¶revi tamamla (Complete 5 tasks)",
    icon: "ğŸš€",
    threshold: 5,
    category: "speed"
  },
  {
    id: 8,
    name: "Temizlik UstasÄ± (Cleanup Master)",
    description: "TÃ¼m gÃ¶revleri tamamla (Complete all tasks)",
    icon: "âœ¨",
    threshold: 100,
    category: "cleanup"
  },
  {
    id: 9,
    name: "TasarÄ±mcÄ± (Designer)",
    description: "UI Design System gÃ¶revini tamamla (Complete the UI Design System task)",
    icon: "ğŸ¨",
    threshold: 1,
    category: "specific"
  },
  {
    id: 10,
    name: "GÃ¼venlik UzmanÄ± (Security Expert)",
    description: "Authentication gÃ¶revini tamamla (Complete the Authentication task)",
    icon: "ğŸ”",
    threshold: 1,
    category: "specific"
  },
  {
    id: 11,
    name: "Verimli GÃ¼n (Productive Day)",
    description: "3 gÃ¶revi aynÄ± gÃ¼nde tamamla (Complete 3 tasks in one day)",
    icon: "â˜€ï¸",
    threshold: 3,
    category: "daily"
  },
  {
    id: 12,
    name: "Ä°ÅŸ DiyarÄ± (Task Realm)",
    description: "10 gÃ¶rev ekle (Add 10 tasks)",
    icon: "ğŸ“‹",
    threshold: 10,
    category: "created"
  },
  {
    id: 13,
    name: "Ekibin KahramanÄ± (Team Hero)",
    description: "5 gÃ¼n Ã¼st Ã¼ste aktif ol (Be active for 5 days in a row)",
    icon: "ğŸ¦¸",
    threshold: 5,
    category: "streak"
  },
  {
    id: 14,
    name: "MÃ¼kemmeliyetÃ§i (Perfectionist)",
    description: "100% gÃ¶rev baÅŸarÄ± oranÄ± (100% task success rate)",
    icon: "ğŸ’¯",
    threshold: 100,
    category: "perfect"
  },
  {
    id: 15,
    name: "SÃ¼per VerimliliÄŸi (Super Productivity)",
    description: "30 gÃ¶rev tamamla (Complete 30 tasks)",
    icon: "ğŸŒŸ",
    threshold: 30,
    category: "completions"
  },
  {
    id: 16,
    name: "Lider (Leader)",
    description: "100 gÃ¶rev tamamla (Complete 100 tasks)",
    icon: "ğŸ‘‘",
    threshold: 100,
    category: "completions"
  },
  {
    id: 17,
    name: "Zaman YÃ¶neticisi (Time Manager)",
    description: "HiÃ§ gecikmiÅŸ gÃ¶rev yapma (Do not create overdue tasks)",
    icon: "â°",
    threshold: 1,
    category: "ontime"
  },
  {
    id: 18,
    name: "Dikkat MeraklÄ±sÄ± (Detail Seeker)",
    description: "Ã‡ok detaylÄ± gÃ¶rev aÃ§Ä±klamasÄ± ekle (Add a very detailed task description)",
    icon: "ğŸ”",
    threshold: 1,
    category: "detail"
  },
  {
    id: 19,
    name: "Sosyal Kelebek (Social Butterfly)",
    description: "Yeni profil bilgileri ekle (Add new profile information)",
    icon: "ğŸ¦‹",
    threshold: 1,
    category: "social"
  },
  {
    id: 20,
    name: "BaÅŸlangÄ±Ã§ UstasÄ± (Setup Master)",
    description: "Profil ve ayarlarÄ±nÄ± tamamla (Complete your profile and settings)",
    icon: "ğŸš€",
    threshold: 1,
    category: "setup"
  }
]

export function getBadgeAwards(completedCount: number, totalCount = 0, earnedBadges: number[] = []): Badge[] {
  const earnedSet = new Set(earnedBadges)
  const awards = [
    ...BADGES.filter(
      (badge) => badge.category === "completions" && completedCount >= badge.threshold && !earnedSet.has(badge.id)
    ),
    ...BADGES.filter((badge) => badge.category === "speed" && completedCount >= badge.threshold && !earnedSet.has(badge.id))
  ]

  const perfectBadge = BADGES.find((badge) => badge.id === 14)
  if (totalCount > 0 && completedCount === totalCount && totalCount >= 5 && perfectBadge && !earnedSet.has(14)) {
    awards.push(perfectBadge)
  }

  const creatorBadge = BADGES.find((badge) => badge.id === 12)
  if (totalCount >= 10 && creatorBadge && !earnedSet.has(12)) {
    awards.push(creatorBadge)
  }

  return awards
}

export function BadgeProvider({ children }: PropsWithChildren) {
  const [earnedBadges, setEarnedBadges] = useState<number[]>(() => {
    const saved = localStorage.getItem("earnedBadges")
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem("earnedBadges", JSON.stringify(earnedBadges))
  }, [earnedBadges])

  function addBadge(badgeId: number) {
    if (!earnedBadges.includes(badgeId)) {
      setEarnedBadges((prev) => [...prev, badgeId])
      return true
    }
    return false
  }

  function checkAndAwardBadges(completedCount: number, totalCount = 0): Badge[] {
    const newBadges: Badge[] = []
    
    // Tamamlama sayÄ±sÄ±na gÃ¶re
    BADGES
      .filter((badge) => badge.category === "completions" && completedCount >= badge.threshold && !earnedBadges.includes(badge.id))
      .forEach((badge) => {
        addBadge(badge.id)
        newBadges.push(badge)
      })

    // HÄ±z rozetleri (tamamlama sayÄ±sÄ±na gÃ¶re)
    BADGES
      .filter((badge) => badge.category === "speed" && completedCount >= badge.threshold && !earnedBadges.includes(badge.id))
      .forEach((badge) => {
        addBadge(badge.id)
        newBadges.push(badge)
      })

    // MÃ¼kemmellik (100% tamamlama oranÄ±)
    if (totalCount > 0 && completedCount === totalCount && totalCount >= 5) {
      const perfectBadge = BADGES.find(b => b.id === 14)
      if (perfectBadge && !earnedBadges.includes(14)) {
        addBadge(14)
        newBadges.push(perfectBadge)
      }
    }

    // Ä°ÅŸ DiyarÄ± (10+ gÃ¶rev oluÅŸturulmuÅŸ)
    if (totalCount >= 10) {
      const creatorBadge = BADGES.find(b => b.id === 12)
      if (creatorBadge && !earnedBadges.includes(12)) {
        addBadge(12)
        newBadges.push(creatorBadge)
      }
    }

    return newBadges
  }

  function getBadgeInfo(badgeId: number) {
    return BADGES.find((b) => b.id === badgeId)
  }

  function getEarnedBadgesList() {
    return earnedBadges.map((id) => getBadgeInfo(id)).filter((badge): badge is Badge => badge !== undefined)
  }

  return (
    <BadgeContext.Provider
      value={{
        earnedBadges,
        addBadge,
        checkAndAwardBadges,
        getBadgeInfo,
        getEarnedBadgesList,
        BADGES
      }}
    >
      {children}
    </BadgeContext.Provider>
  )
}

export function useBadge() {
  const context = useContext(BadgeContext)
  if (!context) {
    throw new Error("useBadge must be used within BadgeProvider")
  }
  return context
}







