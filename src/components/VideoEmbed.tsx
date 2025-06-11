
import { Film } from 'lucide-react';

interface VideoEmbedProps {
  title: string;
  description?: string;
  videoId?: string;
  platform?: 'youtube' | 'vimeo';
}

const VideoEmbed = ({ title, description, videoId, platform = 'vimeo' }: VideoEmbedProps) => {
  const getEmbedUrl = () => {
    if (!videoId) return '';
    
    if (platform === 'youtube') {
      return `https://www.youtube.com/embed/${videoId}`;
    } else {
      // Handle Vimeo URLs with privacy tokens
      if (videoId.includes('/')) {
        return `https://player.vimeo.com/video/${videoId}`;
      }
      return `https://player.vimeo.com/video/${videoId}`;
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-serif text-gray-900 mb-2 text-center font-light">{title}</h3>
      {description && (
        <p className="text-gray-600 text-center mb-6 font-light">{description}</p>
      )}
      
      <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg shadow-lg">
        {videoId ? (
          <iframe
            src={getEmbedUrl()}
            title={title}
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <Film className="w-8 h-8 text-gray-500" />
              </div>
              <p className="text-gray-500 font-light">Video coming soon</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoEmbed;
