
export const getYoutubeEmbedUrl = (url: string, origin?: string): string => {
  try {
    const parsed = new URL(url.trim())
    const hostname = parsed.hostname.toLowerCase().replace(/^www\./, "")

    const isYoutubeHost = [
      "youtube.com",
      "m.youtube.com",
      "music.youtube.com",
      "youtube-nocookie.com"
    ].includes(hostname)

    let videoId = ""

    const playlistId =
      isYoutubeHost || hostname === "youtu.be"
        ? parsed.searchParams.get("list") ?? ""
        : ""

    if (isYoutubeHost) {
      videoId =
        parsed.searchParams.get("v") ??
        parsed.pathname.match(/^\/(?:embed|shorts|live)\/([^/?]+)/)?.[1] ??
        ""
    } else if (hostname === "youtu.be") {
      videoId = parsed.pathname.split("/")[1] ?? ""
    }

    if (!videoId && !playlistId) return ""

    const embeddablePlaylistId = playlistId.startsWith("RD")
      ? ""
      : playlistId

    const params = new URLSearchParams({
      autoplay: "0",
      mute: "0",
      controls: "1",
      modestbranding: "1",
      enablejsapi: "1",
      playsinline: "1"
    })

    if (embeddablePlaylistId) {
      params.set("listType", "playlist")
      params.set("list", embeddablePlaylistId)
    } else if (videoId) {
      params.set("loop", "1")
      params.set("playlist", videoId)
    }

    if (origin) params.set("origin", origin)

    return `https://www.youtube.com/embed/${videoId || "videoseries"}?${params.toString()}`
  } catch {
    return ""
  }
}

export const getDirectAudioUrl = (url: string): string => {
  const trimmedUrl = url.trim()

  if (!trimmedUrl || getYoutubeEmbedUrl(trimmedUrl)) return ""

  try {
    const parsed = new URL(trimmedUrl)

    if (!["http:", "https:"].includes(parsed.protocol)) return ""

    return trimmedUrl
  } catch {
    return ""
  }
}

export const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60

  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
}
