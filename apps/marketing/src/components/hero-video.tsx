"use client";

import { isProposal } from "@/lib/brand";
import { heroVideo } from "@/lib/videos";
import { Play, Video } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

/**
 * Snimak u herou početne strane, iznad dva dugmeta.
 *
 * Isto pravilo kao kod video utisaka: snimak se učitava tek na klik (fasada sa
 * naslovnom slikom), pa strana ne vuče YouTube plejer dok posetilac to sam ne
 * izabere. Zato i `youtube-nocookie.com`.
 *
 * Dok snimka nema, stoji prazno mesto TAČNIH dimenzija (16:9), da se raspored
 * ne pomeri kad stigne pravi fajl.
 */
export function HeroVideo() {
  const [playing, setPlaying] = useState(false);
  const hasVideo = Boolean(heroVideo.youtubeId || heroVideo.src);

  return (
    <div className="mt-8 w-full max-w-xl overflow-hidden rounded-2xl border border-background/15 bg-background/[0.06]">
      <div className="relative aspect-video w-full">
        {hasVideo && playing && heroVideo.youtubeId ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${heroVideo.youtubeId}?autoplay=1&rel=0`}
            title={heroVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 size-full"
          />
        ) : hasVideo && playing && heroVideo.src ? (
          // biome-ignore lint/a11y/useMediaCaption: snimak stiže bez titla
          <video
            src={heroVideo.src}
            poster={heroVideo.poster}
            controls
            autoPlay
            playsInline
            className="absolute inset-0 size-full object-cover"
          />
        ) : hasVideo ? (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 size-full"
            aria-label={`Pusti snimak: ${heroVideo.title}`}
          >
            {heroVideo.poster ? (
              <Image
                src={heroVideo.poster}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            ) : null}
            <span className="absolute inset-0 flex items-center justify-center bg-ink/25">
              <span className="flex size-16 items-center justify-center rounded-full bg-primary transition-transform group-hover:scale-105">
                <Play className="size-6 fill-ink text-ink" />
              </span>
            </span>
          </button>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 border border-background/20 border-dashed px-6 text-center">
            <span className="flex size-14 items-center justify-center rounded-full bg-primary">
              <Video className="size-6 text-ink" aria-hidden="true" />
            </span>
            <span className="font-medium text-background/70 text-sm">Mesto za video</span>
            {isProposal ? (
              <span className="text-background/40 text-xs leading-relaxed">
                vodoravan snimak 16:9
                <br />
                YouTube link ili <code className="font-sans">/video/hero.mp4</code>
              </span>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
