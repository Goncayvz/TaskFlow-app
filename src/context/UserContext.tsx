/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from "react"
import type { PropsWithChildren } from "react"
import type { User } from "../data/types"

const defaultUser: User = {
  name: "Kullanıcı (User)", email: "user@example.com", phone: "+90 XXX XXXX",
  bio: "Ben bir görev yöneticisiyim (I am a task manager)", avatar: "🧑",
  birthDate: "2000-01-01", jobTitle: "Product Designer", location: "Istanbul, TR", website: "https://example.com"
}
type UserContextValue = { user: User; updateUser: (updatedData: Partial<User>) => void }
const UserContext = createContext<UserContextValue | null>(null)

export function UserProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User>(() => {
    const savedUser = localStorage.getItem("user")
    if (!savedUser) return defaultUser
    try { return { ...defaultUser, ...JSON.parse(savedUser) as Partial<User> } }
    catch { return defaultUser }
  })
  useEffect(() => { localStorage.setItem("user", JSON.stringify(user)) }, [user])
  function updateUser(updatedData: Partial<User>) { setUser((prev) => ({ ...prev, ...updatedData })) }
  return <UserContext.Provider value={{ user, updateUser }}>{children}</UserContext.Provider>
}
export function useUser() {
  const context = useContext(UserContext)
  if (!context) throw new Error("useUser must be used within UserProvider")
  return context
}
