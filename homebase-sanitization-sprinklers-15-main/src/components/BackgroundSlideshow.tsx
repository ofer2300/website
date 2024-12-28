import { useEffect, useState, useCallback } from 'react';

interface Media {
  type: 'video' | 'image';
  src: string;
  isMainVideo?: boolean;
}

const BackgroundSlideshow = () => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [lastMainVideoTime, setLastMainVideoTime] = useState(Date.now());
  const [isLoading, setIsLoading] = useState(true);

  // יצירת מערך של כל המדיה
  const mediaFiles: Media[] = [
    // הסרטון הראשי
    {
      type: 'video',
      src: '/main/main-video.mp4',
      isMainVideo: true
    },
    // סרטוני רקע רגילים
    ...[...Array(34)].map((_, i) => ({
      type: 'video' as const,
      src: `/background-video${i + 1}.mp4.mp4`,
      isMainVideo: false
    })),
    // תמונות מתיקיית revit
    ...[...Array(20)].map((_, i) => ({
      type: 'image' as const,
      src: `/revit/${i + 1}.png`,
      isMainVideo: false
    }))
  ];

  const getNextIndex = useCallback(() => {
    const currentTime = Date.now();
    const mainVideoInterval = 60000; // דקה אחת במילישניות

    // אם עברה דקה מאז הפעם האחרונה שהראנו את הסרטון הראשי
    if (currentTime - lastMainVideoTime >= mainVideoInterval) {
      setLastMainVideoTime(currentTime);
      return 0; // אינדקס הסרטון הראשי
    }

    // אחרת, נמשיך לסבב הרגיל של שאר המדיה
    const nextIndex = (currentMediaIndex + 1) % mediaFiles.length;
    return nextIndex === 0 ? 1 : nextIndex; // נדלג על הסרטון הראשי בסבב הרגיל
  }, [currentMediaIndex, lastMainVideoTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMediaIndex(getNextIndex);
    }, 10000); // החלפה כל 10 שניות

    return () => clearInterval(interval);
  }, [getNextIndex]);

  const currentMedia = mediaFiles[currentMediaIndex];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-black/50" /> {/* שכבת הכהייה */}
      {currentMedia.type === 'video' ? (
        <video
          key={currentMedia.src}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          src={currentMedia.src}
          autoPlay
          muted
          loop={!currentMedia.isMainVideo} // לולאה רק לסרטונים הרגילים
          playsInline
          onLoadedData={() => setIsLoading(false)}
          onEnded={() => {
            if (currentMedia.isMainVideo) {
              setCurrentMediaIndex(getNextIndex);
            }
          }}
        />
      ) : (
        <img
          key={currentMedia.src}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          src={currentMedia.src}
          alt=""
          onLoad={() => setIsLoading(false)}
        />
      )}
    </div>
  );
};

export default BackgroundSlideshow; 