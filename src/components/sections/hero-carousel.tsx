'use client'
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import type { ImageItem } from '@/types/site-content';

export default function HeroCarousel({ images }: { images: ImageItem[] }) {
  return (
    <div className="container mx-auto px-4 mt-5 max-w-5xl">
       <Carousel
          opts={{
              loop: true,
          }}
          plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
          >
          <CarouselContent>
              {images.map((image, index) => (
                  <CarouselItem key={index}>
                       <div className="relative w-full h-[220px] sm:h-[320px] md:h-[380px] overflow-hidden rounded-2xl">
                          <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-cover"
                              priority={index === 0}
                              data-ai-hint={image.aiHint}
                          />
                       </div>
                  </CarouselItem>
              ))}
          </CarouselContent>
      </Carousel>
    </div>
  );
}
