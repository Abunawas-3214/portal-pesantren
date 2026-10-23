'use client';

import React, { useState, useEffect, useRef } from 'react';
import CardBerita from '@/components/berita/card-berita';
import { Berita } from '@/types/berita';

interface BeritaListProps {
  initialBerita: Berita[];
  pageSize?: number;
}

export default function BeritaList({ initialBerita, pageSize = 6 }: BeritaListProps) {
  const [visibleCount, setVisibleCount] = useState<number>(pageSize);
  const observerTarget = useRef<HTMLDivElement | null>(null);

  const displayedBerita = initialBerita.slice(0, visibleCount);
  const hasMore = visibleCount < initialBerita.length;

  useEffect(() => {
    const target = observerTarget.current;
    if (!target || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + pageSize, initialBerita.length));
        }
      },
      { threshold: 0.1, rootMargin: '200px' }
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [hasMore, initialBerita.length, pageSize]);

  return (
    <div className="space-y-8 md:space-y-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full h-fit">
        {displayedBerita.map((berita) => (
          <CardBerita key={berita.slug} berita={berita} />
        ))}
      </div>

      {/* Trigger element for Infinite Scroll */}
      {hasMore && (
        <div ref={observerTarget} className="flex justify-center items-center py-6">
          <div className="flex items-center space-x-2 text-stone-500">
            <div className="w-4 h-4 border-2 border-stone-400 border-t-transparent rounded-full animate-spin" />
            <span className="text-sm font-medium">Memuat berita lainnya...</span>
          </div>
        </div>
      )}
    </div>
  );
}
