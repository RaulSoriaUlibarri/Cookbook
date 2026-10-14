"use client";

import { useState } from "react";
import { Play } from "lucide-react";

type RecipeMediaProps = {
  title: string;
  thumbnail: string;
  youtubeUrl?: string | null;
};

export const getYoutubeId = (url?: string | null) => {
  if (!url) return null;
  try {
    return new URL(url).searchParams.get("v");
  } catch {
    return null;
  }
};

const RecipeMedia = ({ title, thumbnail, youtubeUrl }: RecipeMediaProps) => {
  const [playing, setPlaying] = useState(false);
  const videoId = getYoutubeId(youtubeUrl);

  return (
    <div
      className={`mx-auto my-10 grid items-center gap-6 ${
        videoId ? "max-w-5xl md:grid-cols-2" : "max-w-[600px]"
      }`}
    >
      <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/10">
        <img
          src={thumbnail}
          alt={title}
          className="aspect-[4/3] w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

      {videoId && (
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            ¿Prefieres cocinar con un video?
          </h3>
          <div className="relative aspect-video overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/10">
            {playing ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
                title={`${title} video`}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            ) : (
              <button
                onClick={() => setPlaying(true)}
                aria-label={`Play ${title} video`}
                className="group relative h-full w-full cursor-pointer"
              >
                <img
                  src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                  alt=""
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-black/30 transition group-hover:bg-black/40" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex size-16 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition group-hover:scale-110 dark:bg-orange-500">
                    <Play className="size-7 fill-current" />
                  </span>
                </span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeMedia;
