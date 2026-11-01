declare module "*.css";
interface Window {
  YT?: { Player: new (element: HTMLElement, options: unknown) => any };
  onYouTubeIframeAPIReady?: () => void;
  webkitAudioContext?: typeof AudioContext;
}
