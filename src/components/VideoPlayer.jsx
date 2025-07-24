import { useRef, useState, useEffect } from "react";

/**
 * VideoPlayer component
 * Props:
 * - src: string (video source)
 * - poster: string (optional, poster image)
 * - posterTime: number (optional, seconds to capture poster from video)
 */
export const VideoPlayer = ({ src, poster }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPoster, setShowPoster] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Pause other videos when this one starts
  useEffect(() => {
    const handleGlobalPlay = (e) => {
      if (videoRef.current && e.detail !== videoRef.current) {
        videoRef.current.pause();
      }
    };
    window.addEventListener("custom-video-play", handleGlobalPlay);
    return () => {
      window.removeEventListener("custom-video-play", handleGlobalPlay);
    };
  }, []);

  // Remove poster generation logic for simplicity

  const handlePlay = () => {
    setIsPlaying(true);
    setShowPoster(false);
    videoRef.current.play();
    // Notify other players to pause
    window.dispatchEvent(new CustomEvent("custom-video-play", { detail: videoRef.current }));
  };

  const handlePause = () => {
    setIsPlaying(false);
    videoRef.current.pause();
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleSliderChange = (e) => {
    const time = parseFloat(e.target.value);
    videoRef.current.currentTime = time;
    setCurrentTime(time);
  };

  // Helper to format time as mm:ss or hh:mm:ss
  const formatTime = (secs) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = Math.floor(secs % 60);
    if (h > 0) {
      return `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    } else {
      return `${m}:${s.toString().padStart(2, "0")}`;
    }
  };

  // Fullscreen state
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Listen for fullscreen changes
  useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(!!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleChange);
    document.addEventListener('webkitfullscreenchange', handleChange);
    document.addEventListener('mozfullscreenchange', handleChange);
    document.addEventListener('MSFullscreenChange', handleChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleChange);
      document.removeEventListener('webkitfullscreenchange', handleChange);
      document.removeEventListener('mozfullscreenchange', handleChange);
      document.removeEventListener('MSFullscreenChange', handleChange);
    };
  }, []);

  // Fullscreen trigger
  const handleFullscreen = () => {
    const container = videoRef.current.parentElement;
    if (!isFullscreen) {
      // Pause other videos
      window.dispatchEvent(new CustomEvent("custom-video-play", { detail: videoRef.current }));
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
      } else if (container.mozRequestFullScreen) {
        container.mozRequestFullScreen();
      } else if (container.msRequestFullscreen) {
        container.msRequestFullscreen();
      }
      // Play this video
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  // Custom colors
  const accent = "#fb8500"; // orange
  const bg = "#000";
  const iconColor = "#fff";

 return (
  <div className="relative w-full max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden shadow-lg bg-black">
    {showPoster && poster && (
      <div className="absolute inset-0 w-full h-full flex items-center justify-center z-10 cursor-pointer" onClick={handlePlay}>
        <img
          src={poster}
          alt="Video poster"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="drop-shadow-lg">
            <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.5)" />
            <polygon points="26,20 48,32 26,44" fill="#fff" />
          </svg>
        </div>
      </div>
    )}
    <video
      ref={videoRef}
      src={src}
      className={`w-full h-full ${showPoster ? "invisible" : "visible"} rounded-lg"`}
      controls={false}
      onLoadedMetadata={(e) => {
        setDuration(e.target.duration);
      }}
      onPlay={handlePlay}
      onPause={handlePause}
      onTimeUpdate={handleTimeUpdate}
      poster={poster}
      style={{ zIndex: showPoster ? 1 : 20, background: bg }}
    />
    {/* Custom Controls */}
    {!showPoster && (
      <div className="absolute bottom-0 left-0 w-full px-2 pb-2 flex items-center gap-2 z-30">
        <button
          className="p-1 rounded-full"
          style={{ background: 'transparent' }}
          onClick={isPlaying ? handlePause : handlePlay}
        >
          {isPlaying ? (
            <svg width="18" height="18" fill="none" stroke={accent} strokeWidth="1.5" viewBox="0 0 24 24"><rect x="6" y="6" width="4" height="12"/><rect x="14" y="6" width="4" height="12"/></svg>
          ) : (
            <svg width="18" height="18" fill="none" stroke={accent} strokeWidth="1.5" viewBox="0 0 24 24"><polygon points="6,4 20,12 6,20"/></svg>
          )}
        </button>
        <input
          type="range"
          min={0}
          max={duration}
          step={0.1}
          value={currentTime}
          onChange={handleSliderChange}
          style={{ accentColor: accent, height: '4px' }}
          className="w-full h-1 rounded-lg"
        />
        <span className="text-xs text-primary-light dark:text-primary-dark w-14 text-right">{formatTime(currentTime)}</span>
        <span className="text-xs text-primary-light dark:text-primary-dark w-14 text-right">-{formatTime(duration - currentTime)}</span>
        <button
          className="p-1 rounded-full"
          style={{ background: 'transparent' }}
          onClick={handleFullscreen}
          title="Fullscreen"
        >
          {isFullscreen ? (
            <svg width="20" height="20" fill="none" stroke={accent} strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 9L4 4M15 9l5-5M9 15l-5 5M15 15l5 5"/></svg>
          ) : (
            <svg width="20" height="20" fill="none" stroke={accent} strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 4h6V2H2v8h2V4zm16 0h-6V2h8v8h-2V4zm0 16h-6v2h8v-8h-2v6zm-16 0h6v2H2v-8h2v6z"/></svg>
          )}
        </button>
      </div>
    )}
  </div>
);
}