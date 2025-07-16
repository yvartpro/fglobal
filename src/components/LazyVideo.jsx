import { useEffect, useRef, useState } from "react"

export const LazyVideo = ({ src, poster, title })=> {
  const videoRef = useRef()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.25 }
    )

    if (videoRef.current) observer.observe(videoRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={videoRef} className="w-full aspect-video bg-gray-100 dark:bg-gray-800 rounded-t-md overflow-hidden">
      {visible ? (
        <video
          controls
          poster={poster}
          className="w-full h-full object-cover"
          preload="metadata"
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm text-gray-500">
          Loading video...
        </div>
      )}
    </div>
  )
}
