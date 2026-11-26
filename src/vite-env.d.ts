declare module "*.css";
interface Window {
  YT?:  {
  Player: new (
    element: HTMLElement,
    options: {
      events: {
        onReady: (event: YouTubePlayerEvent) => void
        onError?: (event: YouTubePlayerEvent) => void
      }
    }
  ) => YouTubePlayer
}
}
