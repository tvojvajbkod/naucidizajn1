"use client";

import { isProposal } from "@/lib/brand";
import { type VideoTestimonial, publishedVideos, videoSlotCount } from "@/lib/videos";
import { Play, Video } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

/**
 * Snimak se učitava tek na klik (fasada sa naslovnom slikom).
 * Dva razloga: strana se ne usporava zbog tri plejera koje niko nije tražio,
 * i YouTube ne dobija posetioca dok posetilac to sam ne izabere — isti princip
 * kao consent gate za analitiku. Zato i `youtube-nocookie.com`.
 */
function VideoCard({ item }: { item: VideoTestimonial }) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className="mx-auto w-full max-w-[300px]">
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border bg-ink">
        {playing && item.youtubeId ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&rel=0`}
            title={`Utisak: ${item.name}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 size-full"
          />
        ) : playing && item.src ? (
          // biome-ignore lint/a11y/useMediaCaption: snimci polaznika stižu bez titla
          <video
            src={item.src}
            poster={item.poster}
            controls
            autoPlay
            playsInline
            className="absolute inset-0 size-full object-cover"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 size-full"
            aria-label={`Pusti snimak: ${item.name}`}
          >
            {item.poster ? (
              <Image
                src={item.poster}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            ) : null}
            <span className="absolute inset-0 flex items-center justify-center bg-ink/25">
              <span className="flex size-16 items-center justify-center rounded-full bg-primary transition-transform group-hover:scale-105">
                <Play className="size-6 fill-ink text-ink" />
              </span>
            </span>
          </button>
        )}
      </div>

      <figcaption className="mt-3.5">
        <span className="block font-semibold text-ink">{item.name}</span>
        {item.role ? (
          <span className="block text-muted-foreground text-sm">{item.role}</span>
        ) : null}
        {item.summary ? (
          <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{item.summary}</p>
        ) : null}
      </figcaption>
    </figure>
  );
}

/** Prazno mesto tačnih dimenzija — da se vidi gde snimak ide i koliki treba. */
function EmptySlot({ index }: { index: number }) {
  return (
    <figure className="mx-auto w-full max-w-[300px]">
      <div className="flex aspect-[9/16] w-full flex-col items-center justify-center gap-3 rounded-2xl border border-ink/20 border-dashed bg-cream/50 px-6 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-primary">
          <Video className="size-6 text-ink" />
        </span>
        <span className="font-medium text-ink">Mesto za video utisak {index}</span>
        <span className="text-ink/50 text-xs leading-relaxed">
          uspravan snimak 9:16, do 60 sekundi
          <br />
          YouTube link ili <code className="font-sans">/video/ime.mp4</code>
        </span>
      </div>
    </figure>
  );
}

/**
 * Traka video utisaka. Kad ima objavljenih snimaka — prikazuje njih.
 * Dok ih nema, prazna mesta se vide samo dok je sajt predlog; na zvaničnom
 * sajtu sekcija nestaje sama, jer je prazna galerija gora od nepostojeće.
 */
export function VideoWall() {
  const hasVideos = publishedVideos.length > 0;
  if (!hasVideos && !isProposal) return null;

  return (
    <div className="mt-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {hasVideos
          ? publishedVideos.map((item) => <VideoCard key={item.slug} item={item} />)
          : Array.from({ length: videoSlotCount }, (_, index) => (
              <EmptySlot key={`slot-${index + 1}`} index={index + 1} />
            ))}
      </div>

      {hasVideos ? null : (
        <p className="mt-5 text-muted-foreground text-sm leading-relaxed">
          Snimci se objavljuju uz pismenu saglasnost osobe sa snimka. Dok ne stignu, ovde stoje
          prazna mesta — radije prazno nego tuđe lice sa stocka.
        </p>
      )}
    </div>
  );
}
