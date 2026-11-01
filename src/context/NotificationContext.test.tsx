import { describe, expect, it } from "vitest"
import type { Notification } from "../data/types"
import { clearNotificationsList, createNotification, removeNotificationById } from "./NotificationContext"

describe("notification helpers", () => {
  it("creates a notification with defaults", () => {
    expect(createNotification("Kaydedildi", undefined, 123)).toEqual({
      id: 123,
      message: "Kaydedildi",
      type: "info"
    })
  })

  it("removes a notification by id without mutating the original list", () => {
    const notifications: Notification[] = [
      { id: 1, message: "A", type: "info" },
      { id: 2, message: "B", type: "success" }
    ]

    expect(removeNotificationById(notifications, 1)).toEqual([{ id: 2, message: "B", type: "success" }])
    expect(notifications).toHaveLength(2)
  })

  it("clears notifications and keeps an empty list stable", () => {
    const empty: Notification[] = []

    expect(clearNotificationsList([{ id: 1, message: "A", type: "info" }])).toEqual([])
    expect(clearNotificationsList(empty)).toBe(empty)
  })
})


